import { Link } from "react-router-dom";
import "../css/NavBar.css"
import { useMovieContext } from "../contexts/MovieContext";

function NavBar() {
  const { loadPopularMovies, movie, addToFav } = useMovieContext();

  function handleGoHome() {
    loadPopularMovies();
  }
  function handleFav() {
    if (movie) addToFav(movie);
  }
  return (
    <div className="navbar">
      <Link to="/" onClick={handleGoHome}>
        <p>MOVIE MAHAL</p>
      </Link>
      <div className="navbar_links">
        <Link to="/" className="nav_link" onClick={handleGoHome}>
          Home
        </Link>
        <Link to="/Favorites" className="nav_link" onClick={handleFav}>
          Favorites
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
