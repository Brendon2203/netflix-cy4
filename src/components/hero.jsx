
import { useState } from "react";
import { Play, Info } from "lucide-react";
import "./hero.css";

function Hero({ filme }) {
  const [failedVideoId, setFailedVideoId] = useState(null);
  const videoDisponivel = filme.video && failedVideoId !== filme.id;

  return (
    <section className="hero">
      {videoDisponivel ? (
        <video
          key={`${filme.id}-${filme.video}`}
          className="hero-backdrop"
          src={filme.video}
          poster={filme.imagem}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailedVideoId(filme.id)}
          aria-hidden="true"
        />
      ) : (
        <img
          className="hero-backdrop"
          src={filme.imagem}
          alt=""
          aria-hidden="true"
        />
      )}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="netflix-series">
          <span className="netflix-n">N</span>
          <span className="netflix-s">FILME</span>
        </div>

        <h1 id="movie-title" className="hero-title">
          {filme.titulo}
          <span className="play-triangle">▶</span>
        </h1>

        <div className="hero-metadata">
          <span id="movie-match" className="match">97% Match</span>
          <span id="movie-year">{filme.ano}</span>
          <span className="tvma">{filme.classificacao}</span>
          <span id="movie-duration">{filme.duração}</span>
          <span id="movie-genre">{filme.genero}</span>
          <span className="hd">HD</span>
          <span className="hd">5.1</span>
        </div>

        <h2 id="movie-subtitle" className="hero-subtitle">{filme.destaque}</h2>

        <p id="movie-description" className="hero-description">
          {filme.descrição}
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
