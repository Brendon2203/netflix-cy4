import { useRef } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList() {
  const listaRef = useRef(null);

  const filmesBase = [
    {
      id: 1,
      titulo: "Interestelar",
      ano: 2014,
      genero: "Ficção científica",
      imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 2,
      titulo: "Homem-Aranha: Através do Aranhaverso",
      ano: 2023,
      genero: "Animação / Ação",
      imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },
    {
      id: 3,
      titulo: "The Batman",
      ano: 2022,
      genero: "Drama",
      imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      id: 4,
      titulo: "Duna",
      ano: 2021,
      genero: "Ficção científica",
      imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },
    {
      id: 5,
      titulo: "Psicopata Americano",
      ano: 2000,
      genero: "Terror psicológico",
      imagem: "https://image.tmdb.org/t/p/w500/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg"
    }
  ];

  // Repete a lista 3 vezes e gera um ID único para cada item repetido
  const filmes = [...filmesBase, ...filmesBase, ...filmesBase].map((filme, index) => ({
    ...filme,
    id: `${filme.id}-${index}` // Garante que cada item no React tenha uma `key` única
  }));

  function moverLista(direcao) {
    const lista = listaRef.current;

    if (lista) {
      const larguraItem = 180 + 16;
      lista.scrollBy({
        left: direcao * larguraItem,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="movie-list">
      <h2>Em Alta</h2>

      <div className="movie-carousel">
        <button
          className="seta seta-esquerda"
          onClick={() => moverLista(-1)}
          aria-label="Filmes anteriores"
        >
          &#10094;
        </button>

        <div className="movies" ref={listaRef}>
          {filmes.map((filme) => (
            <MovieCard key={filme.id} filme={filme} />
          ))}
        </div>

        <button
          className="seta seta-direita"
          onClick={() => moverLista(1)}
          aria-label="Próximos filmes"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default MovieList;