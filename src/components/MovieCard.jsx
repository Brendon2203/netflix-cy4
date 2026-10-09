import React from "react";

function MovieCard({ filme, isSelected, onClick }) {
  return (
    <div 
      className={`movie-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={filme.imagem} alt={filme.titulo} />
      {isSelected && filme.badge && (
        <span className="badge">{filme.badge}</span>
      )}
    </div>
  );
}

export default MovieCard;