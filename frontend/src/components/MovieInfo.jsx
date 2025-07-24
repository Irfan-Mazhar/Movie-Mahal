import "../css/MovieInfo.css";

function MovieInfo({ movie, onClose }) {
  return (
    <div className="modal_backdrop" onClick={onClose}>
      <div className="modal_overlay" onClick={(e) => e.stopPropagation()}>
        <button className="close_btn " onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <div className="modal_info">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p className="release_date">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
