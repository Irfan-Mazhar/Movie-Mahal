import MovieCard from "../components/MovieCard";
import MovieInfo from "../components/MovieInfo";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";

function Favorites() {
  const { favorites, isModalOpen, setIsModalOpen, selectedMovie, showInfo } =
    useMovieContext();

  if (favorites.length!=0) {
    return (
      <div className="favorites-container">
        <h2>FAVORITE MOVIES</h2>
        <div className="fav_movie_grid">
          {favorites.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={() => showInfo(movie)}
            />
          ))}
          {isModalOpen && (
            <MovieInfo
              movie={selectedMovie}
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          )}
        </div>
      </div>
    );
  } else{
    return (
      <div className="favorites-container">
        <h2>NO FAVORITE MOVIES</h2>
        <p>Click the heart icon to start adding your favorite movies!</p>

      </div>
    );
  }
}
export default Favorites;
