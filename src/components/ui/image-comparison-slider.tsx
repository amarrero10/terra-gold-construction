"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(newPosition);
  }, []);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Imperative touch listeners so we can call preventDefault()
  // and stop the page from scrolling while the user drags
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = () => { isDraggingRef.current = true; };
    const onTouchEnd = () => { isDraggingRef.current = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault(); // blocks page scroll
      updatePosition(e.touches[0].clientX);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [updatePosition, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden"
      style={{
        // 4:3 on mobile (better for portrait images), 16:9 on wider screens
        aspectRatio: "4/3",
        cursor: "ew-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {/* Before image — bottom layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* After image — clipped top layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={altAfter}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div
        className="pointer-events-none absolute bottom-3 left-3"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.9)",
          background: "rgba(0,0,0,0.45)",
          padding: "4px 10px",
        }}
      >
        Before
      </div>
      <div
        className="pointer-events-none absolute bottom-3 right-3"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.9)",
          background: "rgba(0,0,0,0.45)",
          padding: "4px 10px",
        }}
      >
        After
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ left: `${sliderPosition}%`, background: "rgba(193,154,53,0.9)" }}
      />

      {/* Drag handle — 48px to meet touch target guidelines */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{
          left: `${sliderPosition}%`,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--gold, #C19A35)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          touchAction: "none",
        }}
        onMouseDown={handleMouseDown}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 4 2 10 6 16" />
          <polyline points="14 4 18 10 14 16" />
        </svg>
      </div>
    </div>
  );
};
