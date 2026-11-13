
import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Navbar from "./components/navbar";
import MovieList from "./components/MovieList";
import Login from "./pages/login";
import Register from "./pages/register";
import Hero from "./components/hero";

function HomePage() {

  const filmes= [
    {
      id: 1,
      titulo: "Interestelar",
      ano: 2014,
      genero: "Ficção científica",
      duração:"2h 49min",
      classificacao: "10+",
      destaque:"O fim da Terra não será o fim da humanidade.",
      descrição:"Em um futuro em que a Terra está se tornando inabitável, um grupo de exploradores parte em uma missão espacial para encontrar um novo lar para a humanidade.",
      imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      video: "/videos/interestelar.mp4"

    },
    {
      id: 2,
      titulo: "Homem-Aranha: Através do Aranhaverso",
      ano: 2023,
      genero: "Animação / Ação",
      duração:"2h 20min",
      classificacao: "10+",
      destaque:"Um universo de possibilidades.",
      descrição:"Miles Morales embarca em uma aventura pelo multiverso e encontra diferentes versões do Homem-Aranha.",
      imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      video: "/videos/aranhaverso.mp4"
    },
    {
      id: 3,
      titulo: "The Batman",
      ano: 2022,
      genero: "Drama",
      duração:"2h 56min",
      classificacao: "14+",
      destaque:"A vingança começa à noite",
      descrição:"Batman investiga uma série de crimes em Gotham City e descobre uma conspiração que ameaça toda a cidade.",
      imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      video: "/videos/the-batman.mp4"
    },
    {
      id: 4,
      titulo: "Duna",
      ano: 2021,
      genero: "Ficção científica",
      duração:"2h 35min",
      classificacao: "14+",
      destaque:"O destino nas areias.",
      descrição:"Paul Atreides precisa enfrentar desafios em um planeta desértico que guarda o recurso mais valioso do universo.",
      imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      video: "/videos/duna.mp4"
    },
    {
      id: 5,
      titulo: "Psicopata Americano",
      ano: 2000,
      genero: "Terror psicológico",
      duração:"1h 42min",
      classificacao: "18+",
      destaque:"Por trás da perfeição existe um segredo",
      descrição:"Patrick Bateman é um executivo bem-sucedido de Nova York que esconde uma personalidade violenta por trás de sua aparência impecável.",
      imagem: "https://image.tmdb.org/t/p/w500/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
      video: "/videos/psicopata-americano.mp4"
    }
  ];

  //Guarda o filme atualmente selecionado 

  const [filmesSelecionado, setFilmeSelecionado] = useState(filmes[0]);

  return (
    <>
      <Navbar />
      <Hero filme={filmesSelecionado} />
      <MovieList filmes={filmes} onSelectMovie={setFilmeSelecionado} />
    </>
  );
}

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
