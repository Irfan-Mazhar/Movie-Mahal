import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    
      <MovieProvider>
       <div>
      <NavBar />
    </div>

      <main className="app_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
    
    
   
  );
}
export default App;
