import React from "react";
import "../stylesheets/FavoriteServers.css";

const servers = [
  {
    name: "VidCloud",
    badge: "🔥 Fastest",
    description: "Reliable, high-speed streaming with minimal buffering. Great for HD content and binge-watching."
  },
  {
    name: "UpCloud",
    badge: "⭐ Most Reliable",
    description: "Consistent uptime and smooth playback. Perfect for long sessions and popular shows."
  },
  {
    name: "StreamTape",
    badge: "🎬 Best for Movies",
    description: "Excellent for movie lovers. Large library and good quality streams."
  },
  {
    name: "DoodStream",
    badge: "💡 User-Friendly",
    description: "Simple interface and quick loading. Great for casual viewing."
  },
  {
    name: "Filemoon",
    badge: "🌙 Night Mode",
    description: "Smooth streaming, especially at night. Good for late-night binge sessions."
  }
];

export default function FavoriteServers() {
  return (
    <section className="favorite-servers-section">
      <h2 className="section-title">My Favorite Servers</h2>
      <div className="favorite-servers-grid">
        {servers.map(server => (
          <div className="server-card" key={server.name}>
            <div className="server-badge">{server.badge}</div>
            <div className="server-name">{server.name}</div>
            <div className="server-desc">{server.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 