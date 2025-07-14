import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/SingleServer.css";

const SingleServer = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const singleServerSites = [
    {
      id: "flixer",
      name: "Flixer",
      logo: "🎬",
      description: "Movies / TV / Anime / Auto-Next / Watch Parties",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next", "Watch Parties"],
      status: "active",
      rating: 4.9,
      instances: 1,
      url: "https://flixer.su/"
    },
    {
      id: "nepu",
      name: "NEPU",
      logo: "🌟",
      description: "Movies / TV / Anime / Auto-Next",
      category: "premium",
      features: ["Movies", "TV", "Anime", "Auto-Next"],
      status: "active",
      rating: 4.5,
      instances: 1,
      url: "https://nepu.to/"
    },
    {
      id: "movies7",
      name: "Movies7",
      logo: "🎥",
      description: "Movies / TV / Auto-Next",
      category: "standard",
      features: ["Movies", "TV", "Auto-Next"],
      status: "active",
      rating: 4.4,
      instances: 1,
      url: "https://movies7.im/"
    },
    {
      id: "onionplay",
      name: "OnionPlay",
      logo: "🧅",
      description: "Movies / TV",
      category: "standard",
      features: ["Movies", "TV"],
      status: "active",
      rating: 3.9,
      instances: 1,
      url: "https://onionplay.ch/"
    },
    {
      id: "showbox",
      name: "ShowBox",
      logo: "📱",
      description: "Movies / TV / Anime / Use Throwaway Gmail / 4K Guide",
      category: "premium",
      features: ["Movies", "TV", "Anime", "4K Guide", "Gmail Required"],
      status: "active",
      rating: 3.7,
      instances: 2,
      url: "https://www.showbox.media/"
    },
    {
      id: "movies4f",
      name: "Movies4F",
      logo: "🎥",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 3.2,
      instances: 1,
      url: "https://movies4f.com/home"
    },
    {
      id: "soapy",
      name: "SoaPy",
      logo: "🧼",
      description: "Movies / TV / Anime",
      category: "standard",
      features: ["Movies", "TV", "Anime"],
      status: "active",
      rating: 2.9,
      instances: 1,
      url: "https://soapy.to/home"
    }
  ];

  const categories = [
    { id: "all", name: "All Servers", icon: "🎬" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" }
  ];

  const filteredSites = singleServerSites.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="single-server-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="single-server-header">
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
          <h2 className="single-server-title">Single Server Sites</h2>
          <p className="single-server-subtitle">
            High-quality single-server streaming sites with consistent speed and reliability
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="single-server-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search single server sites..."
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

      {/* Single Server Grid */}
      <div className="single-server-grid">
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="single-server-card"
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
          <p>No single server sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SingleServer; 