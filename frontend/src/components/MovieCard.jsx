import { useMovieContext } from "../contexts/MovieContext";
// import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { addToFav, removeFav, isFav } = useMovieContext();
  const favorite = isFav(movie.id);

  function onFavClick(e) {
    e.preventDefault();
    if (favorite) removeFav(movie.id);
    else addToFav(movie);
  }

  return (
    <div className="movie_empty">
      <div className="movie_card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie_overlay">
          <button
            className={`fav-btn ${favorite ? "active" : ""}`}
            onClick={onFavClick}
          >
            FAV
          </button>
        </div>
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
