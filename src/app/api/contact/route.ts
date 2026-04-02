import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, message } = body;

  // 1. Forward to Web3Forms for email notification
  const web3Res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      name,
      email,
      phone,
      service,
      message,
    }),
  });
  const web3Data = await web3Res.json();

  if (!web3Data.success) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  // 2. Send SMS via Twilio
  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const smsBody = [
      `New contact form submission:`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    await client.messages.create({
      body: smsBody,
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.OWNER_PHONE_NUMBER!,
    });
  } catch (err) {
    // SMS failure should not block the form submission success
    console.error("Twilio SMS error:", err);
  }

  return NextResponse.json({ success: true });
}
