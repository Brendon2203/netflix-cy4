import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList() {

  const filmes = [
    {
      id: 1,
      titulo: "Interestelar",
      ano: 2014,
      sinopse:"Em um futuro onde a Terra está se tornando inabitável devido a pragas nas plantações e tempestades de poeira, o ex-piloto da NASA Joseph Cooper lidera uma missão espacial através de um buraco de minhoca em busca de um novo lar para a humanidade.",
      genero:"ficção científica",
      imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
      id: 2,
      titulo: "Homem-Aranha: Através do Aranhaverso",
      ano: 2018,
      genero:"Ação",
      sinopse:"acompanha Miles Morales (Shameik Moore), o jovem amigão da vizinhança do Brooklyn, em uma nova missão heroica pelo multiverso",
      imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },

    {
      id: 3,
      titulo: "O Batman",
      ano: 2022,
      genero:"Drama",
      sinopse:"Bruce Wayne (Pattinson) precisa usar suas habilidades de detetive quando o assassino em série conhecido como Charada (Paul Dano) começa a ter como alvo a elite corrupta de Gotham com maquinações sádicas e pistas",
      imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },

    {
      id: 4,
      titulo: "Duna",
      ano: 2021,
      genero:"ficção científica",
      sinopse:"acompanha a jornada de Paul Atreides, um jovem brilhante e herdeiro da Casa Atreides, destinado a um futuro além de sua própria compreensão",
      imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },

    {
      id: 5,
      titulo: "Psicopata Americano",
      ano: 2000,
      genero:"Terror Psicológico",
      sinopse:"Patrick Bateman é um jovem executivo de Wall Street nos anos 80 que esconde uma vida dupla como um serial killer brutal, impulsionado pelo consumismo e pela obsessão com o status social",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT681uPHMNy-vVcSs-yY8fDekzZJ3FJ2KVexnYH7ncViQ&s=10"
      
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