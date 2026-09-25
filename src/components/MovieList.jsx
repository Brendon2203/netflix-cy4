import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList() {

  const filmes = [
    {
      id: 1,
      titulo: "Interestelar",
      ano: 2014,
      imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
      id: 2,
      titulo: "Homem-Aranha",
      ano: 2018,
      imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },

    {
      id: 3,
      titulo: "O Batman",
      ano: 2022,
      imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },

    {
      id: 4,
      titulo: "Duna",
      ano: 2021,
      imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    }
  ];

  return (
    <div className="movie-list">

      <h2>Em Alta</h2>

      <div className="movies">

        {filmes.map((filme) => (
          <MovieCard
            key={filme.id}
            filme={filme}
          />
        ))}

      </div>

    </div>
  );
}

export default MovieList;