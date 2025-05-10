import React from "react";

const BuildingAnimation1 = ({ className = "" }) => (
  <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" className={className} style={{minHeight: 600}}>
    <g>
      <rect x="400" y="500" width="120" height="220" rx="16" fill="#21E6C1" opacity="0.12">
        <animate attributeName="y" values="500;480;500" dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="600" y="420" width="180" height="300" rx="20" fill="#21E6C1" opacity="0.18">
        <animate attributeName="y" values="420;400;420" dur="7s" repeatCount="indefinite" />
      </rect>
      <rect x="900" y="540" width="100" height="180" rx="12" fill="#21E6C1" opacity="0.10">
        <animate attributeName="y" values="540;520;540" dur="5s" repeatCount="indefinite" />
      </rect>
      <rect x="1100" y="480" width="80" height="240" rx="10" fill="#21E6C1" opacity="0.15">
        <animate attributeName="y" values="480;460;480" dur="8s" repeatCount="indefinite" />
      </rect>
      <rect x="200" y="600" width="60" height="120" rx="8" fill="#21E6C1" opacity="0.09">
        <animate attributeName="y" values="600;580;600" dur="6.5s" repeatCount="indefinite" />
      </rect>
    </g>
    <g stroke="#21E6C1" strokeWidth="0.5" opacity="0.08">
      {/* Vertical lines */}
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={i} x1={i*48} y1="0" x2={i*48} y2="800" />
      ))}
      {/* Diagonal lines */}
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={i+100} x1={i*48-400} y1="0" x2={i*48+400} y2="800" />
      ))}
    </g>
    {/* Glow effect */}
    <ellipse cx="720" cy="700" rx="500" ry="60" fill="#21E6C1" opacity="0.07">
      <animate attributeName="rx" values="500;520;500" dur="8s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export default BuildingAnimation1; 