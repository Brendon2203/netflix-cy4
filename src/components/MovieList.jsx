import { useRef } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList({ filmes, onSelectMovie }) {
  const listaRef = useRef(null);

  // Repete a lista 3 vezes e gera um ID único para cada item repetido
  const filmesVisiveis = [...filmes, ...filmes, ...filmes].map((filme, index) => ({
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
          {filmesVisiveis.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              onSelectMovie={onSelectMovie}
            />
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