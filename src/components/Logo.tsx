import React from "react";

const Logo = ({ size = "medium" }: { size?: "small" | "medium" | "large" }) => {
  const dimensions = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16"
  };

  return (
    <div className="flex items-center gap-2">
      <svg
        className={`block ${dimensions[size]}`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="16" width="32" height="24" rx="4" fill="#1A2238" stroke="#21E6C1" strokeWidth="2.5"/>
        <rect x="18" y="24" width="6" height="10" fill="#21E6C1"/>
        <rect x="28" y="24" width="6" height="10" fill="#21E6C1"/>
        <rect x="22" y="18" width="4" height="4" fill="#FFD700"/>
        <rect x="14" y="36" width="20" height="3" fill="#21E6C1"/>
        <g>
          <circle cx="24" cy="10" r="3" fill="#21E6C1" stroke="#FFD700" strokeWidth="1.2"/>
          <rect x="23.2" y="13" width="1.6" height="3" fill="#21E6C1"/>
        </g>
      </svg>
      <span className={`font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200 ${
        size === "small" ? "text-lg" : size === "medium" ? "text-2xl" : "text-4xl"
      }`}>Obvian</span>
    </div>
  );
};

export default Logo;
