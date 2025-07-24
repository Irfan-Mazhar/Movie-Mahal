import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieInfo from "../components/MovieInfo";
import "../css/Home.css";

import { useMovieContext } from "../contexts/MovieContext";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    isModalOpen,
    setIsModalOpen,
    selectedMovie,
    showInfo,
  } = useMovieContext();

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        // setResetMovies(popularMovies)
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, [searchQuery === ""]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      console.log(searchResults);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Home_Page">
      <form onSubmit={handleSearch} className="Search_area">
        <input
          type="text"
          className="Search_bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search_btn">
          Search
        </button>
      </form>
      {error && <div className="error_msg">{error}</div>}
      {loading ? (
        <div className="loading">
          <h2>loading...</h2>{" "}
        </div>
      ) : (
        <div className="movie_grid">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={() => showInfo(movie)}
            />
          ))}
          {isModalOpen && (
            <MovieInfo
              movie={selectedMovie}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
