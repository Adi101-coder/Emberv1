import React from "react";
import "../stylesheets/GenreCategories.css";

export default function GenreCategories() {
  const genres = [
    { name: "Movies", icon: "🎬", desc: "Blockbusters, classics, and new releases." },
    { name: "Series", icon: "📺", desc: "Binge-worthy TV shows and originals." },
    { name: "Live TV", icon: "🛰️", desc: "Watch live channels and broadcasts." },
    { name: "Anime", icon: "🌸", desc: "Japanese animation and anime series." },
    { name: "Cartoons", icon: "🎨", desc: "Animated content for all ages." },
    { name: "Live Sports", icon: "⚽", desc: "Stream live sports and events." },
    { name: "Documentary", icon: "🎥", desc: "Explore real stories and documentaries." },
    { name: "Kids", icon: "🧸", desc: "Safe and fun content for children." },
    { name: "Trending", icon: "🔥", desc: "Most popular and trending now." },
  ];

  return (
    <section className="genre-categories-section">
      <h2 className="section-title">Browse by Genre</h2>
      <div className="genre-grid">
        {genres.map((genre) => (
          <div className="genre-card" key={genre.name}>
            <div className="genre-icon">{genre.icon}</div>
            <div className="genre-name">{genre.name}</div>
            <div className="genre-desc">{genre.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 