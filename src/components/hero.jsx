
import { Play, Info } from "lucide-react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="netflix-series">
          <span className="netflix-n">N</span>
          <span className="netflix-s">S E R I E S</span>
        </div>

        <h1 className="hero-title">
          13 REASONS WHY
          <span className="play-triangle">▶</span>
        </h1>

        <div className="hero-metadata">
          <span className="match">97% Match</span>
          <span>2018</span>
          <span className="tvma">TV-MA</span>
          <span>2 Seasons</span>
          <span className="hd">HD</span>
          <span className="hd">5.1</span>
        </div>

        <h2 className="hero-subtitle">
          Season 3 Coming Friday
        </h2>

        <p className="hero-description">
          Months after the Spring Fling, Liberty High is hit
          with a new shock when Bryce Walker is murdered
          the night of homecoming... and everyone is a suspect.
        </p>

        <div className="hero-actions">
          <button className="play-button">
            <Play size={19} fill="currentColor" />
            Reproduzir
          </button>

          <button className="more-button">
            <Info size={20} />
            Mais informações
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
