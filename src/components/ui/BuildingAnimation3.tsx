import React from "react";

const BuildingAnimation3 = ({ className = "" }) => (
  <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" className={className} style={{minHeight: 600}}>
    <g>
      <rect x="350" y="540" width="90" height="180" rx="12" fill="#6C63FF" opacity="0.15">
        <animate attributeName="y" values="540;520;540" dur="5.5s" repeatCount="indefinite" />
      </rect>
      <rect x="700" y="430" width="160" height="290" rx="18" fill="#21E6C1" opacity="0.12">
        <animate attributeName="y" values="430;410;430" dur="7.5s" repeatCount="indefinite" />
      </rect>
      <rect x="950" y="600" width="70" height="120" rx="10" fill="#3A86FF" opacity="0.13">
        <animate attributeName="y" values="600;580;600" dur="6.2s" repeatCount="indefinite" />
      </rect>
      <rect x="1150" y="490" width="60" height="210" rx="9" fill="#21E6C1" opacity="0.17">
        <animate attributeName="y" values="490;470;490" dur="8.5s" repeatCount="indefinite" />
      </rect>
      <rect x="180" y="670" width="40" height="80" rx="7" fill="#6C63FF" opacity="0.10">
        <animate attributeName="y" values="670;650;670" dur="7.2s" repeatCount="indefinite" />
      </rect>
    </g>
    <g stroke="#3A86FF" strokeWidth="0.5" opacity="0.10">
      {/* Vertical lines */}
      {Array.from({ length: 25 }).map((_, i) => (
        <line key={i} x1={i*58} y1="0" x2={i*58} y2="800" />
      ))}
      {/* Diagonal lines */}
      {Array.from({ length: 25 }).map((_, i) => (
        <line key={i+100} x1={i*58-350} y1="0" x2={i*58+350} y2="800" />
      ))}
    </g>
    {/* Glow effect */}
    <ellipse cx="600" cy="760" rx="350" ry="40" fill="#6C63FF" opacity="0.07">
      <animate attributeName="rx" values="350;370;350" dur="9s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export default BuildingAnimation3; 