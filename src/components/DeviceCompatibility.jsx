import React from "react";
import "../stylesheets/DeviceCompatibility.css";

export default function DeviceCompatibility() {
  return (
    <section className="device-compatibility-section">
      <h2 className="section-title">Device Compatibility</h2>
      <div className="device-illustration-container">
        <svg
          className="device-illustration-svg"
          viewBox="0 0 600 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Desktop */}
          <g className="device-svg-desktop">
            <rect x="50" y="70" width="140" height="110" rx="18" fill="transparent" pointerEvents="all"/>
            <rect x="60" y="80" width="120" height="80" rx="12" fill="#1e293b" stroke="#00d4ff" strokeWidth="3"/>
            <rect x="100" y="170" width="40" height="12" rx="4" fill="#00d4ff" opacity="0.7"/>
          </g>
          {/* Laptop */}
          <g className="device-svg-laptop">
            <rect x="200" y="100" width="120" height="90" rx="16" fill="transparent" pointerEvents="all"/>
            <rect x="210" y="110" width="100" height="60" rx="10" fill="#23272f" stroke="#4ecdc4" strokeWidth="3"/>
            <rect x="230" y="170" width="60" height="10" rx="3" fill="#4ecdc4" opacity="0.7"/>
          </g>
          {/* Tablet */}
          <g className="device-svg-tablet">
            <rect x="330" y="80" width="74" height="110" rx="16" fill="transparent" pointerEvents="all"/>
            <rect x="340" y="90" width="54" height="80" rx="10" fill="#22223b" stroke="#ff9f43" strokeWidth="3"/>
          </g>
          {/* Phone */}
          <g className="device-svg-phone">
            <rect x="410" y="100" width="52" height="90" rx="14" fill="transparent" pointerEvents="all"/>
            <rect x="420" y="110" width="32" height="60" rx="8" fill="#22223b" stroke="#ff6b6b" strokeWidth="3"/>
          </g>
          {/* TV */}
          <g className="device-svg-tv">
            <rect x="470" y="60" width="110" height="120" rx="20" fill="transparent" pointerEvents="all"/>
            <rect x="480" y="70" width="90" height="90" rx="14" fill="#1e293b" stroke="#00d4ff" strokeWidth="3"/>
            <rect x="510" y="160" width="30" height="10" rx="3" fill="#00d4ff" opacity="0.7"/>
          </g>
          {/* Glowing base ellipse */}
          <ellipse cx="300" cy="210" rx="210" ry="22" fill="#00d4ff" opacity="0.13"/>
          <ellipse cx="300" cy="210" rx="140" ry="14" fill="#4ecdc4" opacity="0.10"/>
        </svg>
      </div>
      <div className="device-illustration-caption">Seamless streaming on desktop, laptop, tablet, phone, and TV</div>
    </section>
  );
} 