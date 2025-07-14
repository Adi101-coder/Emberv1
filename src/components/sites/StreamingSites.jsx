import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/StreamingSites.css";

const StreamingSites = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const streamingSites = [
    {
      id: "cineby",
      name: "CineBy",
      logo: "🎬",
      description: "Movie streaming platform with extensive library",
      category: "premium",
      features: ["Movies", "TV Shows", "HD Quality", "Multiple Genres"],
      status: "active",
      rating: 4.5,
      instances: 1,
      url: "https://www.cineby.app/"
    },
    {
      id: "fmovies",
      name: "FMovies",
      logo: "🎭",
      description: "Popular movie and TV show streaming site",
      category: "premium",
      features: ["Movies", "TV Shows", "HD Quality", "Subtitles"],
      status: "active",
      rating: 4.6,
      instances: 1,
      url: "https://www.fmovies.cat/"
    },
    {
      id: "xprime",
      name: "XPrime",
      logo: "⭐",
      description: "Premium streaming platform with exclusive content",
      category: "premium",
      features: ["Premium Content", "Exclusive Shows", "HD Quality", "Original Series"],
      status: "active",
      rating: 4.4,
      instances: 1,
      url: "https://xprime.tv/"
    },
    {
      id: "veloratv",
      name: "Velora TV",
      logo: "📺",
      description: "Russian streaming platform with international content",
      category: "standard",
      features: ["International Content", "Russian Shows", "HD Quality", "Multiple Languages"],
      status: "active",
      rating: 4.2,
      instances: 1,
      url: "https://veloratv.ru/"
    },
    {
      id: "spencerdevs",
      name: "SpencerDevs",
      logo: "🎥",
      description: "Developer-focused streaming platform",
      category: "standard",
      features: ["Developer Content", "Tech Shows", "HD Quality", "Educational"],
      status: "active",
      rating: 4.0,
      instances: 1,
      url: "https://watch.spencerdevs.xyz/"
    },
    {
      id: "1shows",
      name: "1Shows",
      logo: "📺",
      description: "Russian streaming platform with shows and movies",
      category: "standard",
      features: ["Russian Content", "Shows", "Movies", "HD Quality"],
      status: "active",
      rating: 4.1,
      instances: 1,
      url: "https://www.1shows.ru/"
    },
    {
      id: "netplayz",
      name: "NetPlayz",
      logo: "🎮",
      description: "Live streaming platform with gaming content",
      category: "standard",
      features: ["Gaming Content", "Live Streaming", "HD Quality", "Community"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://netplayz.live/"
    },
    {
      id: "vidjoy",
      name: "VidJoy",
      logo: "😊",
      description: "Joyful streaming platform with entertainment content",
      category: "standard",
      features: ["Entertainment", "Joyful Content", "HD Quality", "Family Friendly"],
      status: "active",
      rating: 4.2,
      instances: 1,
      url: "https://vidjoy.pro/"
    },
    {
      id: "catflix",
      name: "CatFlix",
      logo: "🐱",
      description: "Cat-themed streaming platform with diverse content",
      category: "standard",
      features: ["Diverse Content", "Cat Theme", "HD Quality", "Entertainment"],
      status: "active",
      rating: 4.1,
      instances: 1,
      url: "https://catflix.su/"
    },
    {
      id: "cinego",
      name: "CineGo",
      logo: "🎬",
      description: "Go-to streaming platform for movies and shows",
      category: "premium",
      features: ["Movies", "TV Shows", "HD Quality", "Go Platform"],
      status: "active",
      rating: 4.4,
      instances: 1,
      url: "https://cinego.co/home/"
    }
  ];

  const categories = [
    { id: "all", name: "All Sites", icon: "🎬" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" }
  ];

  const filteredSites = streamingSites.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="streaming-sites-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="streaming-sites-header">
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
          <h2 className="streaming-sites-title">Streaming Sites</h2>
          <p className="streaming-sites-subtitle">
            Access popular streaming platforms and services
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="streaming-sites-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search streaming sites..."
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

      {/* Streaming Sites Grid */}
      <div className="streaming-sites-grid" style={{ maxHeight: '520px', overflowY: 'auto' }}>
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="streaming-site-card"
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
                   site.category === 'third-party' ? '🔗 3rd Party' :
                   site.category === 'downloads' ? '⬇️ Downloads' : site.category}
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
          <p>No streaming sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StreamingSites; 