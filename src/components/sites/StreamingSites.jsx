import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/StreamingSites.css";

const StreamingSites = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const streamingSites = [
    {
      id: "cineby",
      name: "Cineby",
      logo: "🎬",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.8,
      instances: 2,
      url: "https://www.cineby.app/"
    },
    {
      id: "fmovies",
      name: "Fmovies+",
      logo: "🎬",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.7,
      instances: 2,
      url: "https://www.fmovies.cat/"
    },
    {
      id: "xprime",
      name: "XPrime",
      logo: "⚡",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.6,
      instances: 2,
      url: "https://xprime.tv/"
    },
    {
      id: "velora",
      name: "VeloraTV",
      logo: "📺",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.5,
      instances: 2,
      url: "https://veloratv.ru/"
    },
    {
      id: "456movie",
      name: "456movie",
      logo: "🎥",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.4,
      instances: 2,
      url: "https://456movie.net/"
    },
    {
      id: "spenflix",
      name: "SpenFlix",
      logo: "🎭",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://watch.spencerdevs.xyz/"
    },
    {
      id: "1shows",
      name: "1Shows",
      logo: "📺",
      description: "Movies / TV / Anime / Auto Next / Guide",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto Next", "Guide"],
      status: "active",
      rating: 4.0,
      instances: 1,
      url: "https://www.1shows.ru/"
    },
    {
      id: "rgshows",
      name: "RgShows",
      logo: "📺",
      description: "Movies / TV / Anime / Auto Next / Guide",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto Next", "Guide"],
      status: "active",
      rating: 4.0,
      instances: 1,
      url: "https://www.rgshows.me/?p=2"
    },
    {
      id: "netplay",
      name: "Netplay",
      logo: "🎮",
      description: "Movies / TV / Anime / Auto-Next",
      category: "standard",
      features: ["Movies", "TV", "Anime", "Auto-Next"],
      status: "active",
      rating: 3.9,
      instances: 1,
      url: "https://netplayz.live/"
    },
    {
      id: "vidjoy",
      name: "Vidjoy",
      logo: "🎬",
      description: "Movies / TV / Anime / Auto-Next",
      category: "standard",
      features: ["Movies", "TV", "Anime", "Auto-Next"],
      status: "active",
      rating: 3.8,
      instances: 1,
      url: "https://vidjoy.pro/"
    },
    {
      id: "catflix",
      name: "Catflix",
      logo: "🐱",
      description: "Movies / TV",
      category: "basic",
      features: ["Movies", "TV"],
      status: "active",
      rating: 3.7,
      instances: 1,
      url: "https://catflix.su/"
    },
    {
      id: "cinego",
      name: "CineGo",
      logo: "🎬",
      description: "Movies / TV",
      category: "basic",
      features: ["Movies", "TV"],
      status: "active",
      rating: 3.5,
      instances: 1,
      url: "https://cinego.co/home/"
    }
  ];

  const categories = [
    { id: "all", name: "All Sites", icon: "🎬" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" },
    { id: "basic", name: "Basic", icon: "🎥" }
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
      <div className="streaming-sites-grid">
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