import React from "react";

const BuildingAnimation2 = ({ className = "" }) => (
  <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" className={className} style={{minHeight: 600}}>
    <g>
      <rect x="300" y="520" width="100" height="200" rx="18" fill="#1A2238" opacity="0.18">
        <animate attributeName="y" values="520;500;520" dur="7s" repeatCount="indefinite" />
      </rect>
      <rect x="500" y="400" width="140" height="320" rx="22" fill="#21E6C1" opacity="0.13">
        <animate attributeName="y" values="400;420;400" dur="8s" repeatCount="indefinite" />
      </rect>
      <rect x="800" y="560" width="90" height="160" rx="14" fill="#FFD700" opacity="0.10">
        <animate attributeName="y" values="560;540;560" dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="1050" y="470" width="70" height="250" rx="12" fill="#21E6C1" opacity="0.16">
        <animate attributeName="y" values="470;490;470" dur="9s" repeatCount="indefinite" />
      </rect>
      <rect x="180" y="650" width="50" height="100" rx="10" fill="#FFD700" opacity="0.08">
        <animate attributeName="y" values="650;630;650" dur="7.5s" repeatCount="indefinite" />
      </rect>
    </g>
    <g stroke="#FFD700" strokeWidth="0.5" opacity="0.09">
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1={i*72} y1="0" x2={i*72} y2="800" />
      ))}
      {/* Diagonal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i+100} x1={i*72-300} y1="0" x2={i*72+300} y2="800" />
      ))}
    </g>
    {/* Glow effect */}
    <ellipse cx="900" cy="750" rx="400" ry="50" fill="#FFD700" opacity="0.06">
      <animate attributeName="rx" values="400;420;400" dur="10s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export default BuildingAnimation2; 