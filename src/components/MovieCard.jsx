function MovieCard({ filme }) {
  return (
    <div className="movie-card">

      <img
        src={filme.imagem}
        alt={filme.titulo}
      />

      <div className="movie-info">
        <h3>{filme.titulo}</h3>
        <p>{filme.ano}</p>
      </div>

    </div>
  );
}

export default MovieCard;