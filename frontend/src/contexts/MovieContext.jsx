import { createContext, useContext, useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
});


  useEffect(() => {
    const storedFav = localStorage.getItem("favorites");
    if (storedFav) setFavorites(JSON.parse(storedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFav = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFav = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showInfo = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  const value = {
    favorites,
    addToFav,
    removeFav,
    isFav,
    loadPopularMovies,
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    selectedMovie,
    setSelectedMovie,
    isModalOpen,
    setIsModalOpen,
    showInfo,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
