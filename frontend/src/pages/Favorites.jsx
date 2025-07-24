import MovieCard from "../components/MovieCard";
import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import {useEffect} from "react";
function Favorites() {
  const { favorites ,setFavorites,addToFav,movie} = useMovieContext();
  // useEffect(() => {
  //     if(movie) addToFav(movie)
  //   }, []);
  if (favorites) {
    return (
      <div className="favorites-container">
        <h2>FAVORITE MOVIES</h2>
        <div className="fav_movie_grid">
          {favorites.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No Favorite Movies...</h3>
      </div>
    );
  }
}
export default Favorites;
