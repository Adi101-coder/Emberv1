import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/AnimeStreaming.css";

const AnimeStreaming = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const animeSites = [
    {
      id: "miruro",
      name: "Miruro",
      logo: "🎭",
      description: "Hard Subs / Dub / Auto-Next",
      category: "premium",
      features: ["Hard Subs", "Dub", "Auto-Next"],
      status: "active",
      rating: 4.8,
      instances: 1,
      url: "https://www.miruro.com/"
    },
    {
      id: "animekai",
      name: "AnimeKai",
      logo: "🌸",
      description: "Hard Subs / Dub / Auto-Next / Status",
      category: "premium",
      features: ["Hard Subs", "Dub", "Auto-Next", "Status"],
      status: "active",
      rating: 4.9,
      instances: 4,
      url: "https://animekai.to/"
    },
    {
      id: "allmanga",
      name: "All Manga",
      logo: "📖",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 4.5,
      instances: 1,
      url: "https://allmanga.to/"
    },
    {
      id: "kaa",
      name: "KAA",
      logo: "🎬",
      description: "Sub / Dub / Auto-Next",
      category: "premium",
      features: ["Sub", "Dub", "Auto-Next"],
      status: "active",
      rating: 4.4,
      instances: 1,
      url: "https://kaa.to/"
    },
    {
      id: "kuroiru",
      name: "Kuroiru",
      logo: "⚫",
      description: "Sub / Dub / Auto-Next",
      category: "premium",
      features: ["Sub", "Dub", "Auto-Next"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://kuroiru.co/"
    },
    {
      id: "anify",
      name: "Anify",
      logo: "🎯",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 4.1,
      instances: 1,
      url: "https://anify.to/"
    },
    {
      id: "123anime",
      name: "123anime",
      logo: "📺",
      description: "Sub / Dub / Auto-Next",
      category: "standard",
      features: ["Sub", "Dub", "Auto-Next"],
      status: "active",
      rating: 4.0,
      instances: 1,
      url: "https://w1.123animes.ru/"
    },
    {
      id: "animetsu",
      name: "Animetsu",
      logo: "🎭",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.9,
      instances: 1,
      url: "https://animetsu.to/"
    },
    {
      id: "animeyy",
      name: "AnimeYY",
      logo: "🎬",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.8,
      instances: 1,
      url: "https://animeyy.com/"
    },
    {
      id: "animeowl",
      name: "AnimeOwl",
      logo: "🦉",
      description: "Sub / Dub / Auto-Next",
      category: "standard",
      features: ["Sub", "Dub", "Auto-Next"],
      status: "active",
      rating: 3.6,
      instances: 1,
      url: "https://animeowl.me/"
    },
    {
      id: "animenosub",
      name: "AnimeNoSub",
      logo: "🚫",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.5,
      instances: 1,
      url: "https://animenosub.to/"
    },
    {
      id: "animenexus",
      name: "Anime Nexus",
      logo: "🔗",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.4,
      instances: 1,
      url: "https://anime.nexus/"
    },
    {
      id: "animerealms",
      name: "AnimeRealms",
      logo: "🏰",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.3,
      instances: 1,
      url: "https://www.animerealms.org/"
    },
    {
      id: "anixl",
      name: "Anixl",
      logo: "🎭",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.2,
      instances: 1,
      url: "https://anixl.to/"
    },
    {
      id: "animehub",
      name: "AnimeHub",
      logo: "📺",
      description: "Sub / Dub / Auto-Next",
      category: "standard",
      features: ["Sub", "Dub", "Auto-Next"],
      status: "active",
      rating: 3.1,
      instances: 1,
      url: "https://animehub.ac/"
    },
    {
      id: "aninow",
      name: "Aninow",
      logo: "⏰",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 3.0,
      instances: 1,
      url: "https://aninow.tv/"
    },
    {
      id: "aniplay",
      name: "Aniplay",
      logo: "🎮",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 2.8,
      instances: 3,
      url: "https://aniplay.lol/"
    },
    {
      id: "anihq",
      name: "AniHQ",
      logo: "🏢",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 2.6,
      instances: 1,
      url: "https://anihq.to/"
    },
    {
      id: "animeparadise",
      name: "AnimeParadise",
      logo: "🏝️",
      description: "Sub / Dub",
      category: "standard",
      features: ["Sub", "Dub"],
      status: "active",
      rating: 2.5,
      instances: 1,
      url: "https://www.animeparadise.moe/"
    },
    {
      id: "animeonsen",
      name: "AnimeOnsen",
      logo: "♨️",
      description: "Sub / 720p",
      category: "standard",
      features: ["Sub", "720p"],
      status: "active",
      rating: 2.3,
      instances: 1,
      url: "https://www.animeonsen.xyz/"
    },
    {
      id: "animexin",
      name: "AnimeXin",
      logo: "🇨🇳",
      description: "Donghua / Sub",
      category: "donghua",
      features: ["Donghua", "Sub"],
      status: "active",
      rating: 2.1,
      instances: 1,
      url: "https://animexin.dev/"
    },
    {
      id: "lmanime",
      name: "LMANIME",
      logo: "📚",
      description: "Donghua / Sub",
      category: "donghua",
      features: ["Donghua", "Sub"],
      status: "active",
      rating: 1.9,
      instances: 1,
      url: "https://lmanime.com/"
    },
    {
      id: "cksub",
      name: "CKSub",
      logo: "🇨🇳",
      description: "Donghua / Sub",
      category: "donghua",
      features: ["Donghua", "Sub"],
      status: "active",
      rating: 1.8,
      instances: 1,
      url: "https://cksub.org/"
    },
    {
      id: "myanime",
      name: "MyAnime",
      logo: "🎬",
      description: "Donghua / Sub",
      category: "donghua",
      features: ["Donghua", "Sub"],
      status: "active",
      rating: 1.7,
      instances: 1,
      url: "https://myanime.live/"
    }
  ];

  const categories = [
    { id: "all", name: "All Anime", icon: "🌸" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" },
    { id: "basic", name: "Basic", icon: "🎥" },
    { id: "donghua", name: "Donghua", icon: "🇨🇳" }
  ];

  const filteredSites = animeSites.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="anime-streaming-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="anime-streaming-header">
        <motion.button
          className="back-button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          ← Back
        </motion.button>
        <div className="header-content">
          <h2 className="anime-streaming-title">Anime Streaming</h2>
          <p className="anime-streaming-subtitle">
            Dedicated anime and Japanese animation streaming sites
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="anime-streaming-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search anime streaming sites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="category-filters">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Anime Streaming Grid */}
      <div className="anime-streaming-grid">
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="anime-streaming-card"
              data-site-id={site.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                duration: 0.3,
                delay: Math.min(index * 0.05, 0.5)
              }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 8px 25px rgba(0, 212, 255, 0.15)"
              }}
              onClick={() => onSelectSite(site)}
            >
              <div className="site-header">
                <div className="site-logo-container">
                  <div className="site-logo">{site.logo}</div>
                  {site.instances > 1 && (
                    <div className="instances-badge">{site.instances}</div>
                  )}
                </div>
                <div className="site-status">
                  <span className={`status-indicator ${site.status}`}></span>
                </div>
              </div>
              
              <div className="site-content">
                <h3 className="site-name">{site.name}</h3>
                <p className="site-description">{site.description}</p>
                
                <div className="site-features">
                  {site.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="site-feature">{feature}</span>
                  ))}
                  {site.features.length > 3 && (
                    <span className="site-feature more">+{site.features.length - 3} more</span>
                  )}
                </div>
                
                <div className="site-rating">
                  <span className="rating-stars">
                    {'★'.repeat(Math.floor(site.rating))}
                    {'☆'.repeat(5 - Math.floor(site.rating))}
                  </span>
                  <span className="rating-value">{site.rating}</span>
                </div>
              </div>
              
              <div className="site-category">
                <span className={`category-badge ${site.category}`}>
                  {site.category === 'premium' ? '⭐ Premium' :
                   site.category === 'standard' ? '📺 Standard' :
                   site.category === 'basic' ? '🎥 Basic' :
                   site.category === 'donghua' ? '🇨🇳 Donghua' : site.category}
                </span>
              </div>
              
              <div className="site-access-button">
                <motion.button
                  className="access-site-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (site.url) {
                      window.open(site.url, '_blank', 'noopener,noreferrer');
                    } else {
                      onSelectSite(site);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="btn-icon">🚀</span>
                  <span className="btn-text">Access Site</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredSites.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="no-results-icon">🔍</span>
          <p>No anime streaming sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimeStreaming; 