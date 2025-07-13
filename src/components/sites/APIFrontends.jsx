import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/APIFrontends.css";

const APIFrontends = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const apiFrontends = [
    {
      id: "hexa",
      name: "Hexa",
      logo: "⚡",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.8,
      instances: 1,
      url: "https://hexa.watch/movies"
    },
    {
      id: "beech",
      name: "BEECH",
      logo: "🌳",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.7,
      instances: 1,
      url: "https://www.beech.watch/"
    },
    {
      id: "cinemaos",
      name: "Cinemaos",
      logo: "🎥",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.4,
      instances: 2,
      url: "https://cinemaos.live/"
    },
    {
      id: "vidbox",
      name: "Vidbox",
      logo: "📦",
      description: "Movies / TV / Anime / Auto-Next",
      category: "standard",
      features: ["Movies", "TV", "Anime", "Auto-Next"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://vidbox.to/home"
    },
    {
      id: "hydrahd",
      name: "HydraHD",
      logo: "🐉",
      description: "Movies / TV / Anime / Status",
      category: "standard",
      features: ["Movies", "TV", "Anime", "Status"],
      status: "active",
      rating: 4.0,
      instances: 1,
      url: "https://hydrahd.sh/"
    },
    {
      id: "popcornmovies",
      name: "PopcornMovies",
      logo: "🍿",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.8,
      instances: 1,
      url: "https://popcornmovies.org/"
    },
    {
      id: "maxflix",
      name: "Maxflix",
      logo: "📺",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.7,
      instances: 1,
      url: "https://maxflix.top/"
    },
    {
      id: "alienflix",
      name: "AlienFlix",
      logo: "👽",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.5,
      instances: 2,
      url: "https://alienflix.net/"
    },
    {
      id: "wooflix",
      name: "Wooflix",
      logo: "🐕",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.2,
      instances: 1,
      url: "https://www.wooflixtv.co/"
    },
    {
      id: "arabflix",
      name: "Arabflix",
      logo: "🌙",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.1,
      instances: 1,
      url: "https://www.arabiflix.com/"
    },
    {
      id: "yampi",
      name: "Yampi",
      logo: "🎯",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 2.9,
      instances: 1,
      url: "https://yampi.live/"
    }
  ];

  const categories = [
    { id: "all", name: "All Frontends", icon: "🎬" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" },
    { id: "basic", name: "Basic", icon: "🎥" }
  ];

  const filteredSites = apiFrontends.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="api-frontends-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="api-frontends-header">
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
          <h2 className="api-frontends-title">API Frontends</h2>
          <p className="api-frontends-subtitle">
            Advanced interfaces for API-based streaming with custom players
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="api-frontends-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search API frontends..."
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

      {/* API Frontends Grid */}
      <div className="api-frontends-grid">
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="api-frontend-card"
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
                   site.category === 'basic' ? '🎥 Basic' : site.category}
                </span>
              </div>
              
              <div className="site-access-button">
                <motion.button
                  className="access-site-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (site.url) {
                      window.open(site.url, '_blank');
                    } else {
                      onSelectSite(site);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="btn-icon">🚀</span>
                  <span className="btn-text">Access Frontend</span>
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
          <p>No API frontends found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default APIFrontends; 