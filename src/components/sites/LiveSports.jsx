import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../stylesheets/sites/LiveSports.css";

const LiveSports = ({ onBack, onSelectSite }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const liveSportsSites = [
    {
      id: "watchsports",
      name: "WatchSports",
      description: "Stream Aggregator - Comprehensive sports streaming platform with MLB focus",
      logo: "⚽",
      category: "baseball",
      status: "active",
      rating: 4.5,
      instances: 1,
      features: ["Live Events", "Multiple Sports", "HD Quality", "MLB Focus"],
      url: "https://watchsports.to"
    },
    {
      id: "sportyhunter",
      name: "SportyHunter",
      description: "Community Aggregator - Latest football scores, results, fixtures and more",
      logo: "🏆",
      category: "football",
      status: "active",
      rating: 4.3,
      instances: 4,
      features: ["Community Driven", "Live Events", "Multiple Sports", "User Reviews"],
      url: "https://sportyhunter.com"
    },
    {
      id: "rbtvplus",
      name: "RBTV+",
      description: "Live sports for free - Premier League, La Liga, Bundesliga, NBA, UFC and more",
      logo: "📡",
      category: "football",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Live Streaming", "Multiple Sports", "HD Quality", "User Friendly"],
      url: "https://koa.xte8titlen3edeast.shop"
    },
    {
      id: "streameast",
      name: "StreamEast",
      description: "Live sports streaming with MLB, NBA, NHL, NFL, CFB, F1, Boxing, UFC",
      logo: "🌅",
      category: "football",
      status: "active",
      rating: 4.6,
      instances: 1,
      features: ["Mirrors", "Live Events", "HD Quality", "Reliable"],
      url: "https://www.streameast.sk/en"
    },
    {
      id: "timstreams",
      name: "TimStreams",
      description: "Live Events - Status tracking for sports streams with event replays",
      logo: "⏰",
      category: "football",
      status: "active",
      rating: 4.2,
      instances: 2,
      features: ["Live Events", "Status Tracking", "Multiple Sports", "Real-time"],
      url: "https://timstreams.site"
    },
    {
      id: "wearechecking",
      name: "WeAreChecking",
      description: "Live Events - Sports stream verification platform for motorsports and football",
      logo: "✅",
      category: "racing",
      status: "active",
      rating: 4.1,
      instances: 1,
      features: ["Live Events", "Stream Verification", "Status Updates", "Reliable"],
      url: "https://wearechecking.online"
    },
    {
      id: "totalsportek",
      name: "TotalSportek",
      description: "Stream Aggregator - Your Go-To Source for Live Sports Streaming",
      logo: "🏟️",
      category: "football",
      status: "active",
      rating: 4.5,
      instances: 3,
      features: ["Stream Aggregator", "Multiple Instances", "Live Events", "HD Quality"],
      url: "https://www.totalsportek.to"
    },
    {
      id: "mrgamingstreams",
      name: "MrGamingStreams",
      description: "Gaming and sports streaming platform",
      logo: "🎮",
      category: "other",
      status: "active",
      rating: 4.2,
      instances: 2,
      features: ["Gaming", "Sports", "Live Events", "Community"],
      url: "http://mrgamingstreams.org"
    },
    {
      id: "sportplus",
      name: "SportPlus",
      description: "Premium sports streaming platform with live events",
      logo: "➕",
      category: "football",
      status: "active",
      rating: 4.3,
      instances: 1,
      features: ["Premium Content", "Live Events", "HD Quality", "Exclusive"],
      url: "https://en12.sportplus.live"
    },
    {
      id: "totalsportek2",
      name: "TotalSportek.es",
      description: "Spanish version - Stream Aggregator for live sports",
      logo: "🏟️",
      category: "football",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Stream Aggregator", "Spanish Content", "Live Events", "HD Quality"],
      url: "https://totalsportek.es"
    },
    {
      id: "crackstreams",
      name: "CrackStreams",
      description: "Sports streaming platform with reliable links",
      logo: "💥",
      category: "football",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Live Events", "Multiple Sports", "HD Quality", "Reliable"],
      url: "https://crackstreams.blog"
    },
    {
      id: "720pstream",
      name: "720pStream",
      description: "HD sports streaming platform with high definition quality",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.2,
      instances: 1,
      features: ["HD Quality", "Live Events", "Multiple Sports", "High Definition"],
      url: "https://720pstream.nu"
    },
    {
      id: "cricketdrew",
      name: "Watch Cricket Live",
      description: "Best source for live cricket streaming (IND vs ENG Test Match and more)",
      logo: "🏏",
      category: "cricket",
      status: "active",
      rating: 4.7,
      instances: 1,
      features: ["Cricket", "Live Events", "HD Quality", "Test Match"],
      url: "https://drew.ihwqfinalq6k1tree.shop/"
    },
    {
      id: "soccerdoge",
      name: "Soccerdoge",
      description: "Football - Soccer streaming platform with live events",
      logo: "⚽",
      category: "football",
      status: "active",
      rating: 4.3,
      instances: 1,
      features: ["Football Focus", "Soccer", "Live Events", "HD Quality"],
      url: "https://soccerdoge.com"
    },
    {
      id: "sportsurge",
      name: "Sportsurge",
      description: "Stream Aggregator - Comprehensive sports streaming",
      logo: "🌊",
      category: "football",
      status: "active",
      rating: 4.7,
      instances: 1,
      features: ["Stream Aggregator", "Multiple Sports", "HD Quality", "Community"],
      url: "https://sportsurge.net"
    },
    {
      id: "ppvto",
      name: "PPV.TO",
      description: "Live Events - Pay-per-view sports events",
      logo: "💰",
      category: "boxing",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Pay-per-view", "Live Events", "Mirrors", "Premium Content"],
      url: "https://ppv.to"
    },
    {
      id: "sport7",
      name: "Sport7",
      description: "Player Note - Sports streaming with player information",
      logo: "🎮",
      category: "football",
      status: "active",
      rating: 4.1,
      instances: 1,
      features: ["Player Stats", "Live Events", "HD Quality", "Mobile App"],
      url: "https://sport7.com"
    },
    {
      id: "livetv",
      name: "LiveTV",
      description: "Live TV sports streaming platform",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.3,
      instances: 1,
      features: ["Live TV", "Sports Channels", "HD Quality", "24/7"],
      url: "https://livetv.com"
    },
    {
      id: "vipboxsports",
      name: "VIP Box Sports",
      description: "Premium sports streaming with mirrors",
      logo: "👑",
      category: "football",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Premium Content", "Mirrors", "HD Quality", "VIP Access"],
      url: "https://vipboxsports.com"
    },
    {
      id: "streamed",
      name: "Streamed",
      description: "Live sports streaming with multiple instances",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.2,
      instances: 2,
      features: ["Live Streaming", "Multiple Instances", "HD Quality", "Real-time"],
      url: "https://streamed.com"
    },
    {
      id: "sportslive",
      name: "SportsLive",
      description: "Live sports streaming platform",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.0,
      instances: 1,
      features: ["Live Streaming", "Multiple Sports", "HD Quality", "User Friendly"],
      url: "https://sportslive.com"
    },
    {
      id: "strumyk",
      name: "Strumyk",
      description: "Sports streaming platform",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.0,
      instances: 1,
      features: ["Live Streaming", "Multiple Sports", "HD Quality", "User Friendly"],
      url: "https://strumyk.com"
    },
    {
      id: "sportontv",
      name: "SportOnTV",
      description: "Sports on TV streaming platform",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.1,
      instances: 2,
      features: ["TV Quality", "Live Events", "Multiple Sports", "HD Quality"],
      url: "https://sportontv.com"
    },
    {
      id: "buffstream",
      name: "BuffStream",
      description: "Sports streaming platform",
      logo: "🛡️",
      category: "football",
      status: "active",
      rating: 4.3,
      instances: 1,
      features: ["Live Events", "Multiple Sports", "HD Quality", "Reliable"],
      url: "https://buffstream.com"
    },
    {
      id: "topsport",
      name: "TopSport",
      description: "Top sports streaming platform",
      logo: "🏆",
      category: "football",
      status: "active",
      rating: 4.1,
      instances: 2,
      features: ["Top Quality", "Live Events", "Multiple Sports", "HD Quality"],
      url: "https://topsport.com"
    },
    {
      id: "livematches",
      name: "LiveMatches",
      description: "Live Events - Sports match streaming",
      logo: "⚽",
      category: "football",
      status: "active",
      rating: 4.2,
      instances: 1,
      features: ["Live Events", "Match Streaming", "Multiple Sports", "Real-time"],
      url: "https://livematches.com"
    },
    {
      id: "starlive",
      name: "StarLive",
      description: "Live MMA Events - Combat sports streaming",
      logo: "⭐",
      category: "mma",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["MMA Events", "Combat Sports", "Live Events", "HD Quality"],
      url: "https://starlive.com"
    },
    {
      id: "tflix",
      name: "TFLIX",
      description: "Sports Channels - Multiple sports channels",
      logo: "📺",
      category: "football",
      status: "active",
      rating: 4.1,
      instances: 1,
      features: ["Sports Channels", "Multiple Sports", "Live Events", "HD Quality"],
      url: "https://tflix.com"
    },
    {
      id: "nbamonster",
      name: "NBAMonster",
      description: "Basketball / Aggregator - NBA focused streaming",
      logo: "🏀",
      category: "basketball",
      status: "active",
      rating: 4.5,
      instances: 1,
      features: ["NBA Focus", "Basketball", "Live Events", "Aggregator"],
      url: "https://nbamonster.com"
    },
    {
      id: "boxing100",
      name: "Boxing-100",
      description: "Boxing / Aggregator - Boxing events streaming",
      logo: "🥊",
      category: "boxing",
      status: "active",
      rating: 4.4,
      instances: 1,
      features: ["Boxing Focus", "Live Events", "Aggregator", "HD Quality"],
      url: "https://boxing-100.com"
    }
  ];

  const categories = [
    { id: "all", name: "All Sports", icon: "⚽" },
    { id: "football", name: "Football", icon: "⚽" },
    { id: "basketball", name: "Basketball", icon: "🏀" },
    { id: "baseball", name: "Baseball", icon: "⚾" },
    { id: "hockey", name: "Hockey", icon: "🏒" },
    { id: "tennis", name: "Tennis", icon: "🎾" },
    { id: "cricket", name: "Cricket", icon: "🏏" },
    { id: "rugby", name: "Rugby", icon: "🏉" },
    { id: "golf", name: "Golf", icon: "⛳" },
    { id: "boxing", name: "Boxing", icon: "🥊" },
    { id: "mma", name: "MMA", icon: "🥋" },
    { id: "racing", name: "Racing", icon: "🏎️" },
    { id: "olympics", name: "Olympics", icon: "🏅" },
    { id: "other", name: "Other Sports", icon: "🏆" }
  ];

  const filteredSites = liveSportsSites.filter(site => {
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
          <h2 className="live-sports-title">Live Sports</h2>
          <p className="live-sports-subtitle">
            Live sports events and competitions from around the world
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="live-sports-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search live sports sites..."
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

      {/* Live Sports Grid */}
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
          <p>No live sports sites found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LiveSports; 