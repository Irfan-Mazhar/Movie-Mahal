import MovieCard from "../components/MovieCard";
import Home from "./Home";
import { useMovieContext } from "../contexts/MovieContext";
function Favorites () {
    const {favorites} = useMovieContext();

    if(favorites) { return( <div className="movie_grid">
          {favorites.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
    );
    }
    return(
        <div className="Fav_container">
            <h2>FAVORITES</h2>
            
        </div>
    );
}
export default Favorites;