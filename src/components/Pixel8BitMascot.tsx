import React from 'react';

interface Pixel8BitMascotProps {
  className?: string;
  size?: number;
  showStar?: boolean;
  animated?: boolean;
}

export const Pixel8BitMascot: React.FC<Pixel8BitMascotProps> = ({
  className = 'w-5 h-5',
  size = 20,
  showStar = true,
  animated = true
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={`inline-block shrink-0 pixel-art transition-transform duration-200 select-none ${
        animated ? 'hover:scale-110 hover:-translate-y-0.5' : ''
      } ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="8-bit mascot"
    >
      {/* Floating 8-bit Twinkle Star */}
      {showStar && (
        <g className={animated ? 'animate-pulse' : ''}>
          <rect x="27" y="0" width="1" height="1" fill="#facc15" />
          <rect x="26" y="1" width="3" height="1" fill="#facc15" />
          <rect x="25" y="2" width="2" height="1" fill="#facc15" />
          <rect x="27" y="2" width="1" height="1" fill="#ffffff" />
          <rect x="28" y="2" width="2" height="1" fill="#facc15" />
          <rect x="26" y="3" width="3" height="1" fill="#facc15" />
          <rect x="27" y="4" width="1" height="1" fill="#facc15" />
        </g>
      )}

      {/* Shadow Base */}
      <rect x="5" y="30" width="22" height="1" fill="#090d16" fillOpacity="0.4" />

      {/* Outline (Dark Slate #090d16) */}
      {/* Ears Outline */}
      <rect x="6" y="4" width="3" height="1" fill="#090d16" />
      <rect x="23" y="4" width="3" height="1" fill="#090d16" />
      <rect x="5" y="5" width="1" height="3" fill="#090d16" />
      <rect x="9" y="5" width="1" height="3" fill="#090d16" />
      <rect x="22" y="5" width="1" height="3" fill="#090d16" />
      <rect x="26" y="5" width="1" height="3" fill="#090d16" />

      {/* Head Outline */}
      <rect x="9" y="7" width="14" height="1" fill="#090d16" />
      <rect x="4" y="8" width="1" height="1" fill="#090d16" />
      <rect x="27" y="8" width="1" height="1" fill="#090d16" />
      <rect x="3" y="9" width="1" height="2" fill="#090d16" />
      <rect x="28" y="9" width="1" height="2" fill="#090d16" />
      <rect x="2" y="11" width="1" height="7" fill="#090d16" />
      <rect x="29" y="11" width="1" height="7" fill="#090d16" />
      <rect x="3" y="18" width="1" height="1" fill="#090d16" />
      <rect x="28" y="18" width="1" height="1" fill="#090d16" />
      <rect x="4" y="19" width="1" height="1" fill="#090d16" />
      <rect x="27" y="19" width="1" height="1" fill="#090d16" />

      {/* Body & Paws Outer Outline */}
      <rect x="3" y="20" width="1" height="5" fill="#090d16" />
      <rect x="28" y="20" width="1" height="5" fill="#090d16" />
      <rect x="4" y="25" width="1" height="1" fill="#090d16" />
      <rect x="27" y="25" width="1" height="1" fill="#090d16" />

      {/* Feet / Tentacles Outline */}
      <rect x="3" y="26" width="1" height="3" fill="#090d16" />
      <rect x="28" y="26" width="1" height="3" fill="#090d16" />
      <rect x="4" y="29" width="3" height="1" fill="#090d16" />
      <rect x="25" y="29" width="3" height="1" fill="#090d16" />
      <rect x="7" y="26" width="1" height="3" fill="#090d16" />
      <rect x="24" y="26" width="1" height="3" fill="#090d16" />
      <rect x="10" y="27" width="1" height="2" fill="#090d16" />
      <rect x="13" y="27" width="1" height="2" fill="#090d16" />
      <rect x="18" y="27" width="1" height="2" fill="#090d16" />
      <rect x="21" y="27" width="1" height="2" fill="#090d16" />
      <rect x="10" y="29" width="4" height="1" fill="#090d16" />
      <rect x="18" y="29" width="4" height="1" fill="#090d16" />
      <rect x="14" y="28" width="4" height="1" fill="#090d16" />

      {/* Main Body Fur Fill (Modern Indigo #6366f1) */}
      <rect x="6" y="5" width="3" height="3" fill="#6366f1" />
      <rect x="23" y="5" width="3" height="3" fill="#6366f1" />
      <rect x="5" y="8" width="22" height="1" fill="#6366f1" />
      <rect x="4" y="9" width="24" height="2" fill="#6366f1" />
      <rect x="3" y="11" width="26" height="7" fill="#6366f1" />
      <rect x="4" y="18" width="24" height="2" fill="#6366f1" />
      <rect x="4" y="20" width="24" height="5" fill="#6366f1" />
      <rect x="4" y="26" width="3" height="3" fill="#6366f1" />
      <rect x="25" y="26" width="3" height="3" fill="#6366f1" />
      <rect x="11" y="26" width="2" height="3" fill="#6366f1" />
      <rect x="19" y="26" width="2" height="3" fill="#6366f1" />

      {/* Inner Ear Pink Highlights (#fb7185) */}
      <rect x="7" y="6" width="1" height="2" fill="#fb7185" />
      <rect x="24" y="6" width="1" height="2" fill="#fb7185" />

      {/* Head Highlight Brow (#a5b4fc) */}
      <rect x="6" y="9" width="4" height="1" fill="#a5b4fc" />
      <rect x="22" y="9" width="4" height="1" fill="#a5b4fc" />
      <rect x="13" y="9" width="6" height="1" fill="#a5b4fc" />

      {/* Face Mask / Muzzle (Warm Soft Cream #fef3c7) */}
      <rect x="5" y="12" width="22" height="5" fill="#fef3c7" />
      <rect x="6" y="17" width="20" height="1" fill="#fef3c7" />
      <rect x="9" y="18" width="14" height="1" fill="#fef3c7" />

      {/* Big Expressive 8-bit Eyes (Obsidian #09090b + White Catchlight) */}
      {/* Left Eye */}
      <rect x="8" y="13" width="3" height="3" fill="#09090b" />
      <rect x="8" y="13" width="1" height="1" fill="#ffffff" />
      {/* Right Eye */}
      <rect x="21" y="13" width="3" height="3" fill="#09090b" />
      <rect x="21" y="13" width="1" height="1" fill="#ffffff" />

      {/* Rosy Cheeks (#fb7185) */}
      <rect x="5" y="15" width="2" height="1" fill="#fb7185" />
      <rect x="25" y="15" width="2" height="1" fill="#fb7185" />

      {/* Cat Smile / Mouth (#09090b) */}
      <rect x="14" y="16" width="1" height="1" fill="#09090b" />
      <rect x="17" y="16" width="1" height="1" fill="#09090b" />
      <rect x="15" y="17" width="2" height="1" fill="#09090b" />

      {/* Cozy Paws (#fb7185 & #fef3c7) */}
      <rect x="6" y="21" width="2" height="2" fill="#fb7185" />
      <rect x="24" y="21" width="2" height="2" fill="#fb7185" />

      {/* Open 8-bit Book / Reader in Paws */}
      {/* Book Cover (Cyan & Teal #0284c7 & #0ea5e9) */}
      <rect x="8" y="20" width="16" height="5" fill="#0369a1" />
      {/* Book Pages (Bright White #ffffff & Soft Sky #e0f2fe) */}
      <rect x="9" y="21" width="6" height="3" fill="#ffffff" />
      <rect x="17" y="21" width="6" height="3" fill="#ffffff" />
      {/* Subtle Pixel Lines in Book */}
      <rect x="10" y="22" width="4" height="1" fill="#94a3b8" />
      <rect x="18" y="22" width="4" height="1" fill="#94a3b8" />
      {/* Golden Bookmark Ribbon & Spine (#f59e0b / #facc15) */}
      <rect x="15" y="20" width="2" height="5" fill="#f59e0b" />
      <rect x="15" y="25" width="2" height="2" fill="#facc15" />
    </svg>
  );
};
