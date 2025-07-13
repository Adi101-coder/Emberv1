import React from "react";
import "../stylesheets/EmberLanding.css";
import { motion } from "framer-motion";
import FeaturedCarousel from "./FeaturedCarousel";
import HowItWorks from "./HowItWorks";
import GenreCategories from "./GenreCategories";
import DeviceCompatibility from "./DeviceCompatibility";
import FAQSection from "./FAQSection";

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

export default function EmberLanding() {
  return (
    <div className="ember-landing-bg">
      {/* Header */}
      <header className="ember-header">
        <div className="ember-nav ember-nav-left">SOFTWARE</div>
        <div className="ember-nav ember-nav-center">LOGO</div>
        <div className="ember-nav ember-nav-right">STREAMING</div>
      </header>

      {/* Main Content */}
      <main className="ember-main">
        <motion.div
          className="ember-logo-heading-row"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo33} alt="Ember Logo" className="ember-img-logo ember-img-logo-blend" />
          <h1 className="ember-logo-heading">Ember</h1>
        </motion.div>
        <motion.p
          className="ember-tagline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Discover unlimited entertainment with Ember - your gateway to free movies and series streaming. Experience seamless viewing across all your devices with our cutting-edge platform designed for movie enthusiasts who demand quality without compromise.
        </motion.p>

        {/* New Sections */}
        <FeaturedCarousel />
        <HowItWorks />
        <GenreCategories />
        <DeviceCompatibility />
        <FAQSection />
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