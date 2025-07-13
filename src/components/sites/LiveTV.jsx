import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/LiveSports.css";

const LiveTV = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const liveTVSites = [
    {
      id: "tvgarden",
      name: "TV Garden",
      logo: "🌱",
      description: "Live TV / Streaming / Multiple Channels",
      category: "premium",
      features: ["Live TV", "Streaming", "Multiple Channels"],
      status: "active",
      rating: 4.8,
      instances: 1,
      url: "https://tv.garden/"
    },
    {
      id: "easywebtv",
      name: "Easy Web TV",
      logo: "📺",
      description: "M3U8 / Live TV / Country Routes",
      category: "premium",
      features: ["M3U8", "Live TV", "Country Routes"],
      status: "active",
      rating: 4.7,
      instances: 1,
      url: "https://zhangboheng.github.io/Easy-Web-TV-M3u8/routes/countries.html"
    },
    {
      id: "rgshows",
      name: "RgShows",
      logo: "📺",
      description: "Live TV / Streaming / Entertainment",
      category: "premium",
      features: ["Live TV", "Streaming", "Entertainment"],
      status: "active",
      rating: 4.6,
      instances: 1,
      url: "https://www.rgshows.me/livetv/"
    },
    {
      id: "cxtvlive",
      name: "CXT Live",
      logo: "📡",
      description: "Live TV / Broadcasting / Channels",
      category: "premium",
      features: ["Live TV", "Broadcasting", "Channels"],
      status: "active",
      rating: 4.5,
      instances: 1,
      url: "https://www.cxtvlive.com/"
    },
    {
      id: "thestreamhub",
      name: "The Stream Hub",
      logo: "🌊",
      description: "Live TV / Streaming Hub / Multiple Sources",
      category: "premium",
      features: ["Live TV", "Streaming Hub", "Multiple Sources"],
      status: "active",
      rating: 4.4,
      instances: 1,
      url: "https://thestreamhub.xyz/live_tv"
    },
    {
      id: "globalfreetv",
      name: "Global Free TV",
      logo: "🌍",
      description: "Free TV / Global Channels / Live Streaming",
      category: "standard",
      features: ["Free TV", "Global Channels", "Live Streaming"],
      status: "active",
      rating: 4.3,
      instances: 1,
      url: "https://www.globalfreetv.com/"
    },
    {
      id: "vipotv",
      name: "VipoTV",
      logo: "📺",
      description: "Live TV / Streaming / Entertainment",
      category: "standard",
      features: ["Live TV", "Streaming", "Entertainment"],
      status: "active",
      rating: 4.2,
      instances: 1,
      url: "https://vipotv.com/"
    },
    {
      id: "distrotv",
      name: "Distro TV",
      logo: "📡",
      description: "Live TV / Broadcasting / Channels",
      category: "standard",
      features: ["Live TV", "Broadcasting", "Channels"],
      status: "active",
      rating: 4.1,
      instances: 1,
      url: "https://distro.tv/"
    }
  ];

  const categories = [
    { id: "all", name: "All Sites", icon: "📺" },
    { id: "premium", name: "Premium", icon: "⭐" },
    { id: "standard", name: "Standard", icon: "📡" }
  ];

  const filteredSites = liveTVSites.filter(site => {
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="live-sports-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="live-sports-header">
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
          <h2 className="live-sports-title">Live TV</h2>
          <p className="live-sports-subtitle">
            Live television channels and broadcasts from around the world
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="live-sports-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search live TV sites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
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

      {/* Live TV Grid */}
      <div className="live-sports-grid">
        <AnimatePresence>
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              className="live-sports-card"
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
                   site.category === 'standard' ? '📡 Standard' : site.category}
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
          <p>No live TV sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LiveTV; 