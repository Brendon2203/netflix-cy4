
import Navbar from "./components/navbar";
import MovieList from "./components/MovieList";
import Login from "./pages/login";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieList />
      <Login />
    </>
  );
}

export default App;
