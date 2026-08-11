import React from 'react';

interface MoonComicIconProps {
  className?: string;
  size?: number;
}

export const MoonComicIcon: React.FC<MoonComicIconProps> = ({
  className = 'w-5 h-5',
  size = 20
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer subtle glow */}
      <circle cx="32" cy="32" r="28" fill="#93c5fd" fillOpacity="0.15" />

      {/* Comic Crescent Moon Body */}
      <path
        d="M40 8C26 12 16 24 16 38C16 52 27 60 41 58C29 55 24 43 24 33C24 20 33 12 40 8Z"
        fill="#fde047"
        stroke="#0f172a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Moon highlight shine */}
      <path
        d="M22 28C22 20 27 15 31 12"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Comic Craters */}
      <circle cx="23" cy="40" r="3" fill="#facc15" stroke="#0f172a" strokeWidth="2" />
      <circle cx="30" cy="48" r="2" fill="#facc15" stroke="#0f172a" strokeWidth="1.6" />
      <circle cx="26" cy="24" r="1.8" fill="#facc15" stroke="#0f172a" strokeWidth="1.6" />

      {/* Comic happy/sleepy eye & blush */}
      <path
        d="M26 33C27.5 35 29.5 35 31 33"
        stroke="#0f172a"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="35" r="1.5" fill="#f87171" />

      {/* Twinkle stars */}
      <path
        d="M48 18L49 21L52 22L49 23L48 26L47 23L44 22L47 21L48 18Z"
        fill="#93c5fd"
        stroke="#0f172a"
        strokeWidth="1.2"
      />
      <path
        d="M44 42L45 44L47 45L45 46L44 48L43 46L41 45L43 44L44 42Z"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1"
      />
    </svg>
  );
};
