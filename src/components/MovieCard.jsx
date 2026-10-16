function MovieCard({ filme }) {
  return (
    <div className="movie-card">
      <img
        src={filme.imagem}
        alt={filme.titulo}
      />
    </div>
  );
}

export default MovieCard;