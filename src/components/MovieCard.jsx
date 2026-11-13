function MovieCard({ filme, onSelectMovie }) {
  return (
    <button
      type="button"
      className="movie-card"
      onClick={() => onSelectMovie(filme)}
      aria-label={`Selecionar filme ${filme.titulo}`}
    >
      <img
        src={filme.imagem}
        alt={filme.titulo}
      />
    </button>
  );
}

export default MovieCard;