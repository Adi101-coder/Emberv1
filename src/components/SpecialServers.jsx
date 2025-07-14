import React from "react";
import "../stylesheets/SpecialServers.css";

const servers = [
  {
    icon: "1️⃣",
    name: "1shows",
    url: "https://www.1shows.ru/",
    desc: "Best for movies and series. Fast, reliable, and always up-to-date."
  },
  {
    icon: "🍿",
    name: "Popcorn Movies",
    url: "https://popcornmovies.org/",
    desc: "Renders all movies, series, and cartoons in HD. Huge library and easy to use."
  },
  {
    icon: "🎬",
    name: "FMovies.cat",
    url: "https://www.fmovies.cat/home",
    desc: "Excellent for trending and classic content. Clean interface and great streaming quality."
  }
];

export default function SpecialServers() {
  return (
    <section className="special-servers-section">
      <h2 className="section-title">My Favourite Servers</h2>
      <ul className="special-servers-list">
        {servers.map((server, idx) => (
          <li className="special-server-item" key={server.name}>
            <span className="special-server-icon">{server.icon}</span>
            <a
              className="special-server-link"
              href={server.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {server.name}
            </a>
            <span className="special-server-desc">{server.desc}</span>
            <span className="special-server-glow" />
          </li>
        ))}
      </ul>
    </section>
  );
} 