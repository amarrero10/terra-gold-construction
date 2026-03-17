'use client';
import React, { useRef, useState, MouseEvent, ReactNode } from 'react';

interface HoverButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  glowColor = '#ffffff',
  backgroundColor = '#d4af37',
  textColor = '#0a0a0a',
  hoverTextColor = '#0a0a0a',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setGlowPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer overflow-hidden transition-colors duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{
        backgroundColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      {/* Radial glow that follows the cursor */}
      <div
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-300"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          width: isHovered ? '220px' : '0px',
          height: isHovered ? '220px' : '0px',
          opacity: isHovered ? 0.45 : 0,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export { HoverButton };
