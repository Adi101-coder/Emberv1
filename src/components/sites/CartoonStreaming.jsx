import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/CartoonStreaming.css";

const CartoonStreaming = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cartoonSites = [
    {
      id: "hicartoon",
      name: "HiCartoon",
      logo: "🌟",
      description: "TV / Movies / Ultra HD Quality",
      category: "premium",
      features: ["TV", "Movies", "Ultra HD", "Download"],
      status: "active",
      rating: 4.9,
      instances: 1,
      url: "https://hicartoon.to/"
    },
    {
      id: "kisscartoon",
      name: "KissCartoon",
      logo: "💋",
      description: "TV / Movies / Anime",
      category: "premium",
      features: ["TV", "Movies", "Anime"],
      status: "active",
      rating: 4.7,
      instances: 1,
      url: "https://kisscartoon.nz/"
    },
    {
      id: "funnier moments",
      name: "FunnierMoments",
      logo: "😄",
      description: "TV / Classic Cartoons",
      category: "classic",
      features: ["TV", "Classic", "Series"],
      status: "active",
      rating: 4.5,
      instances: 1,
      url: "https://www.funniermoments.net/"
    },
    {
      id: "supercartoons",
      name: "SuperCartoons",
      logo: "🦸",
      description: "Classic / 1500+ Cartoons",
      category: "classic",
      features: ["Classic", "1500+ Cartoons", "Mickey Mouse", "Tom and Jerry"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://www.supercartoons.net/"
    }
  ];

  const categories = [
    { id: "all", name: "All Cartoons", icon: "🎨" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📺" },
    { id: "classic", name: "Classic", icon: "🕰️" },
    { id: "special", name: "Special", icon: "🌟" }
  ];

  const filteredSites = cartoonSites.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="cartoon-streaming-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="cartoon-streaming-header">
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
          <h2 className="cartoon-streaming-title">Cartoon Streaming</h2>
          <p className="cartoon-streaming-subtitle">
            Animated content and cartoon series streaming sites
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="cartoon-streaming-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search cartoon streaming sites..."
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

      {/* Cartoon Streaming Grid */}
      <div className="cartoon-streaming-grid">
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="cartoon-streaming-card"
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
                   site.category === 'classic' ? '🕰️ Classic' :
                   site.category === 'special' ? '🌟 Special' : site.category}
                </span>
              </div>
              
              <div className="site-access-button">
                <motion.button
                  className="access-site-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSite(site);
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
          <p>No cartoon streaming sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CartoonStreaming; 