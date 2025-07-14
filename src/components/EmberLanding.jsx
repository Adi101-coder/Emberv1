import React, { useState, useEffect, useRef, Suspense } from "react";
import "../stylesheets/EmberLanding.css";
import { motion, AnimatePresence } from "framer-motion";
// import SpecialServers, DeviceCompatibility, FAQSection as lazy
const SpecialServers = React.lazy(() => import("./SpecialServers"));
const DeviceCompatibility = React.lazy(() => import("./DeviceCompatibility"));
const FAQSection = React.lazy(() => import("./FAQSection"));
import GenreCategories from "./GenreCategories";
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

const StreamingModal = ({ isOpen, onClose, onSelect, initialView }) => {
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

  useEffect(() => {
    if (initialView) {
      setCurrentView(initialView);
    }
  }, [initialView]);

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
            initial={{ scale: 0.96, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="ember-modal-header">
              <div className="ember-modal-title-section">
                <motion.div
                  className="ember-modal-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  🎬
                </motion.div>
                <h3 className="ember-modal-title">Choose Your Streaming Experience</h3>
                <p className="ember-modal-subtitle">Select the perfect streaming option for your entertainment needs</p>
              </div>
              <motion.button 
                className="ember-modal-close" 
                onClick={onClose}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.13 }}
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
                    transition={{ duration: 0.18 }}
                  >
                    {streamingOptions.map((option, index) => (
                      <motion.div
                        key={index}
                        className="ember-streaming-option"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.18 }}
                        whileHover={{ 
                          scale: 1.01, 
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
                          transition={{ duration: 0.13 }}
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
  const [modalInitialView, setModalInitialView] = useState(null);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const genreRef = useRef(null);
  const faqRef = useRef(null);

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

  useEffect(() => {
    // Show warning if on mobile (screen width <= 600px)
    if (window.innerWidth <= 600) {
      setShowMobileWarning(true);
    }
  }, []);

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

  const handleLearnMore = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGenreTileClick = (genre) => {
    // Map genre to modal view key
    const genreToView = {
      'Movies': 'streaming-sites',
      'Series': 'streaming-sites',
      'Live TV': 'live-tv',
      'Anime': 'anime-streaming',
      'Cartoons': 'cartoon-streaming',
      'Live Sports': 'live-sports',
      'Documentary': 'streaming-sites',
      'Kids': 'cartoon-streaming',
      'Trending': 'streaming-sites',
    };
    setModalInitialView(genreToView[genre] || 'main');
    setIsModalOpen(true);
  };

  return (
    <div className="ember-landing-bg">
      {/* Mobile Warning Banner */}
      {showMobileWarning && (
        <div
          style={{
            background: 'linear-gradient(90deg, #ff6b6b 0%, #ffb86c 100%)',
            color: '#fff',
            padding: '0.9rem 1.2rem',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 15.5,
            letterSpacing: 0.02,
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 2px 12px #ff6b6b33',
            zIndex: 100,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}
        >
          <span role="img" aria-label="warning" style={{ fontSize: 20, marginRight: 6 }}>⚠️</span>
          <span>
            This site is best experienced on a large screen. Streaming on phones is not recommended.<br />
            <span style={{ fontWeight: 400, fontSize: 14, opacity: 0.85 }}>
              (C'mon man, you wanna stream on a phone?)
            </span>
          </span>
          <button
            onClick={() => setShowMobileWarning(false)}
            style={{
              marginLeft: 18,
              background: 'rgba(255,255,255,0.13)',
              border: 'none',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 6,
              padding: '2px 10px',
              cursor: 'pointer',
              boxShadow: '0 1px 4px #ff6b6b22',
              transition: 'background 0.2s',
            }}
            aria-label="Dismiss warning"
          >
            ×
          </button>
        </div>
      )}
      {/* Scroll-based dark overlay */}
      <div 
        className="ember-scroll-overlay"
        style={{ 
          opacity: scrollOpacity, 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
          background: 'linear-gradient(to bottom, rgba(10,18,30,0.7) 0%, rgba(10,18,30,1) 100%)'
        }}
      ></div>

      {/* Animated Bubbles Background */}
      <AnimatedBubbles />

      {/* Header */}
      <header className="ember-header">
        <div className="ember-nav ember-nav-left">HOME</div>
        <div className="ember-nav ember-nav-center">EMBER</div>
        <div className="ember-nav ember-nav-right">BROWSE</div>
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
            onClick={handleLearnMore}
          >
            <span className="ember-btn-text">Learn More</span>
            <div className="ember-btn-border"></div>
          </motion.button>
        </motion.div>
      </main>

      {/* Content Sections - Positioned Lower */}
      <div className="ember-content-sections">
        <div ref={genreRef}>
          <GenreCategories onGenreClick={handleGenreTileClick} />
        </div>
        <Suspense fallback={<div style={{height: 120, textAlign: 'center', color: '#00d4ff'}}>Loading servers...</div>}>
          <SpecialServers />
        </Suspense>
        {/* Cricket Live Section replaces DeviceCompatibility */}
        <motion.div
          className="cricket-live-card-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          style={{
            background: 'linear-gradient(135deg, rgba(16,26,44,0.92) 0%, rgba(26,42,60,0.85) 100%)',
            border: '1px solid rgba(0,212,255,0.13)',
            borderRadius: 18,
            boxShadow: '0 4px 32px 0 #00d4ff11',
            padding: '2rem 1.5rem',
            maxWidth: 420,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <span style={{ fontSize: 38, marginBottom: 6, filter: 'drop-shadow(0 0 8px #00d4ff66)' }}>🏏</span>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 21, color: '#fff', marginBottom: 4, letterSpacing: 0.2 }}>Watch Cricket Live!</div>
            <div style={{ fontSize: 15.5, color: '#e0eaf3', marginBottom: 18, fontWeight: 500 }}>
              IND vs ENG Test Match streaming now. Click below to watch live.
            </div>
            <a
              href="https://drew.ihwqfinalq6k1tree.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="ember-btn ember-btn-primary"
              style={{
                display: 'inline-block',
                minWidth: 160,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 8,
                marginTop: 2,
                textDecoration: 'none',
                letterSpacing: 0.03,
                boxShadow: '0 2px 12px #00d4ff33',
                textAlign: 'center',
              }}
            >
              <span className="ember-btn-text">Watch Now</span>
              <div className="ember-btn-border"></div>
            </a>
          </div>
        </motion.div>
        <Suspense fallback={<div style={{height: 120, textAlign: 'center', color: '#00d4ff'}}>Loading FAQ...</div>}>
          <div ref={faqRef}>
            <FAQSection />
          </div>
        </Suspense>
      </div>

      {/* Footer */}
      <footer className="ember-footer">
        <div className="ember-footer-left">FREE MOVIES & TV</div>
        <div className="ember-footer-center">
          <EmberIcon className="ember-svg-icon ember-svg-footer" />
        </div>
        <div className="ember-footer-right">NO SIGNUP NEEDED</div>
      </footer>

      {/* Streaming Options Modal */}
      <StreamingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleStreamingSelect}
        initialView={modalInitialView}
      />
    </div>
  );
} 