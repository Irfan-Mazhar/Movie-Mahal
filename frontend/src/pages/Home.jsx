import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
// import "../css/Home.css"
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    loadPopularMovies();
  }, []);

  //     {id: 1, title:"John Wick" , release_date: 2020},
  //     {id: 2, title:"Superman" , release_date: 2025},
  //     {id: 3 , title:"Batman" , release_date: 2023},
  // ];

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
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
