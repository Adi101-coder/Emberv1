import React, { useState, useEffect } from "react";
import "../stylesheets/EmberLanding.css";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedCarousel from "./FeaturedCarousel";
import HowItWorks from "./HowItWorks";
import GenreCategories from "./GenreCategories";
import DeviceCompatibility from "./DeviceCompatibility";
import FAQSection from "./FAQSection";
import AnimatedBubbles from "./AnimatedBubbles";
import StreamingSites from "./sites/StreamingSites";
import APIFrontends from "./sites/APIFrontends";
import SingleServer from "./sites/SingleServer";
import AnimeStreaming from "./sites/AnimeStreaming";
import CartoonStreaming from "./sites/CartoonStreaming";
import DramaStreaming from "./sites/DramaStreaming";
import LiveSports from "./sites/LiveSports";
import LiveTV from "./sites/LiveTV";

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

const StreamingModal = ({ isOpen, onClose, onSelect }) => {
  const [currentView, setCurrentView] = useState("main");
  const [selectedSite, setSelectedSite] = useState(null);
  const streamingOptions = [
    {
      title: "Streaming Sites",
      description: "Access popular streaming platforms and services",
      icon: "🎬",
      color: "#00d4ff"
    },
    {
      title: "API Frontends", 
      description: "Advanced interfaces for API-based streaming",
      icon: "⚡",
      color: "#ff6b6b"
    },
    {
      title: "Single Server",
      description: "Dedicated server solutions for optimal performance",
      icon: "🖥️",
      color: "#4ecdc4"
    },



    {
      title: "Anime Streaming",
      description: "Dedicated anime and Japanese animation",
      icon: "🌸",
      color: "#ff9ff3"
    },
    {
      title: "Cartoon Streaming",
      description: "Animated content and cartoon series",
      icon: "🎨",
      color: "#54a0ff"
    },
    {
      title: "Drama Streaming",
      description: "Drama series and theatrical content",
      icon: "🎭",
      color: "#ff6348"
    },
    {
      title: "Live TV",
      description: "Live television channels and broadcasts",
      icon: "📺",
      color: "#ff9f43"
    },
    {
      title: "Live Sports",
      description: "Live sports events and competitions",
      icon: "⚽",
      color: "#26de81"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="ember-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="ember-modal"
            initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: -15 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="ember-modal-header">
              <div className="ember-modal-title-section">
                <motion.div
                  className="ember-modal-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  🎬
                </motion.div>
                <h3 className="ember-modal-title">Choose Your Streaming Experience</h3>
                <p className="ember-modal-subtitle">Select the perfect streaming option for your entertainment needs</p>
              </div>
              <motion.button 
                className="ember-modal-close" 
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
            </div>
            
            <div className="ember-modal-content">
              <AnimatePresence mode="wait">
                {currentView === "main" && (
                  <motion.div 
                    key="main"
                    className="ember-streaming-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {streamingOptions.map((option, index) => (
                      <motion.div
                        key={index}
                        className="ember-streaming-option"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ 
                      delay: 0.4 + (index * 0.05), 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: `0 8px 25px ${option.color}30`
                    }}
                    whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (option.title === "Streaming Sites") {
                            setCurrentView("streaming-sites");
                          } else if (option.title === "API Frontends") {
                            setCurrentView("api-frontends");
                          } else if (option.title === "Single Server") {
                            setCurrentView("single-server");
                          } else if (option.title === "Anime Streaming") {
                            setCurrentView("anime-streaming");
                          } else if (option.title === "Cartoon Streaming") {
                            setCurrentView("cartoon-streaming");
                          } else if (option.title === "Drama Streaming") {
                            setCurrentView("drama-streaming");
                          } else if (option.title === "Live TV") {
                            setCurrentView("live-tv");
                          } else if (option.title === "Live Sports") {
                            setCurrentView("live-sports");
                          } else {
                            onSelect(option.title);
                          }
                        }}
                      >
                        <div className="ember-option-icon" style={{ color: option.color }}>
                          {option.icon}
                        </div>
                        <div className="ember-option-content">
                          <h4 className="ember-option-title">{option.title}</h4>
                          <p className="ember-option-description">{option.description}</p>
                        </div>
                        <motion.div 
                          className="ember-option-arrow"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                
                {currentView === "streaming-sites" && (
                  <motion.div
                    key="streaming-sites"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StreamingSites 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Streaming Sites - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "api-frontends" && (
                  <motion.div
                    key="api-frontends"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <APIFrontends 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`API Frontends - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "single-server" && (
                  <motion.div
                    key="single-server"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SingleServer 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Single Server - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "anime-streaming" && (
                  <motion.div
                    key="anime-streaming"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimeStreaming 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Anime Streaming - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "cartoon-streaming" && (
                  <motion.div
                    key="cartoon-streaming"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CartoonStreaming 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Cartoon Streaming - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "drama-streaming" && (
                  <motion.div
                    key="drama-streaming"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DramaStreaming 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Drama Streaming - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "live-tv" && (
                  <motion.div
                    key="live-tv"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LiveTV 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Live TV - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                
                {currentView === "live-sports" && (
                  <motion.div
                    key="live-sports"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LiveSports 
                      onBack={() => setCurrentView("main")}
                      onSelectSite={(site) => {
                        setSelectedSite(site);
                        onSelect(`Live Sports - ${site.name}`);
                      }}
                    />
                  </motion.div>
                )}
                

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function EmberLanding() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate opacity based on scroll position (0 to 0.95)
      const opacity = Math.min((scrollY / maxScroll) * 0.95, 0.95);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  const handleStreamingSelect = (option) => {
    console.log(`Selected: ${option}`);
    // Here you can add navigation logic based on the selected option
    if (option.startsWith("Streaming Sites - ")) {
      const siteName = option.replace("Streaming Sites - ", "");
      console.log(`Selected streaming site: ${siteName}`);
      // Here you can add logic to navigate to the specific streaming site
    } else if (option.startsWith("API Frontends - ")) {
      const siteName = option.replace("API Frontends - ", "");
      console.log(`Selected API frontend: ${siteName}`);
      // Here you can add logic to navigate to the specific API frontend
    }
    setIsModalOpen(false);
  };

  return (
    <div className="ember-landing-bg">
      {/* Scroll-based dark overlay */}
      <div 
        className="ember-scroll-overlay"
        style={{ opacity: scrollOpacity }}
      ></div>

      {/* Animated Bubbles Background */}
      <AnimatedBubbles />

      {/* Header */}
      <header className="ember-header">
        <div className="ember-nav ember-nav-left">SOFTWARE</div>
        <div className="ember-nav ember-nav-center">LOGO</div>
        <div className="ember-nav ember-nav-right">STREAMING</div>
      </header>

      {/* Hero Section */}
      <main className="ember-main">
        <motion.div
          className="ember-logo-heading-row"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img 
            src={logo33} 
            alt="Ember Logo" 
            className="ember-img-logo ember-img-logo-blend"
            animate={{ 
              rotate: [0, -2, 2, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h1 
            className="ember-logo-heading"
            animate={{ 
              textShadow: [
                "0 2px 24px #00d4ff33",
                "0 4px 32px #00d4ff55",
                "0 2px 24px #00d4ff33"
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ember
          </motion.h1>
        </motion.div>
        <motion.p
          className="ember-tagline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Discover unlimited entertainment with Ember - your gateway to free movies and series streaming. Experience seamless viewing across all your devices with our cutting-edge platform designed for movie enthusiasts who demand quality without compromise.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="ember-buttons-container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="ember-btn ember-btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(true)}
          >
            <span className="ember-btn-text">Start Streaming</span>
            <div className="ember-btn-border"></div>
          </motion.button>

          <motion.button
            className="ember-btn ember-btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="ember-btn-text">Learn More</span>
            <div className="ember-btn-border"></div>
          </motion.button>
        </motion.div>
      </main>

      {/* Content Sections - Positioned Lower */}
      <div className="ember-content-sections">
        <FeaturedCarousel />
        <HowItWorks />
        <GenreCategories />
        <DeviceCompatibility />
        <FAQSection />
      </div>

      {/* Footer */}
      <footer className="ember-footer">
        <div className="ember-footer-left">CUSTOM STREAMING PLATFORM</div>
        <div className="ember-footer-center">
          <EmberIcon className="ember-svg-icon ember-svg-footer" />
        </div>
        <div className="ember-footer-right">TECHNOLOGY & EXPERTISE</div>
      </footer>

      {/* Streaming Options Modal */}
      <StreamingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleStreamingSelect}
      />
    </div>
  );
} 