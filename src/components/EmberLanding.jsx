import React from "react";
import "../stylesheets/EmberLanding.css";

// Use logo33.png for the main logo
import logo33 from "../assets/logo33.png";

const EmberIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polygon points="8,56 32,8 56,56" fill="#00d4ff" opacity="0.85" />
    <polygon points="20,44 32,20 44,44" fill="#00b4d8" opacity="0.95" />
    <polygon points="28,56 32,48 36,56" fill="#00d4ff" opacity="1" />
  </svg>
);

// Animated bubbles background
const Bubbles = () => (
  <div className="ember-bubbles-bg" aria-hidden="true">
    {[...Array(12)].map((_, i) => (
      <span key={i} className={`ember-bubble ember-bubble-${i+1}`}></span>
    ))}
  </div>
);

export default function EmberLanding() {
  return (
    <div className="ember-landing-bg">
      <Bubbles />
      {/* Header */}
      <header className="ember-header">
        <div className="ember-nav ember-nav-left">SOFTWARE</div>
        <div className="ember-nav ember-nav-center">LOGO</div>
        <div className="ember-nav ember-nav-right">STREAMING</div>
      </header>

      {/* Main Content */}
      <main className="ember-main">
        <div className="ember-logo-heading-row">
          <img src={logo33} alt="Ember Logo" className="ember-img-logo ember-img-logo-blend" />
          <h1 className="ember-logo-heading">Ember</h1>
        </div>
        <p className="ember-tagline">
          The 'E' is designed with connected shapes that form dynamic angles, symbolizing entertainment, engagement, and endless streaming possibilities our platform provides. This shape also signifies our dedication to building strong, connected experiences for our users' entertainment.
        </p>
      </main>

      {/* Footer */}
      <footer className="ember-footer">
        <div className="ember-footer-left">CUSTOM STREAMING PLATFORM</div>
        <div className="ember-footer-center">
          <EmberIcon className="ember-svg-icon ember-svg-footer" />
        </div>
        <div className="ember-footer-right">TECHNOLOGY & EXPERTISE</div>
      </footer>
    </div>
  );
} 