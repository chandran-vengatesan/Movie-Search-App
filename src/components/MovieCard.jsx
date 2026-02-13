import { Link } from "react-router-dom";

const MovieCard = ({ movie, toggleFavorite, isFavorite }) => {
  return (
    <div className="relative group cursor-pointer bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:z-50 hover:shadow-2xl hover:scale-125">
      <Link
        to={`/movie/${movie.imdbID}`}
        className="block relative aspect-2/3"
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-sm font-extrabold leading-tight drop-shadow-md mb-2">
            {movie.Title}
          </h3>

          <div className="flex justify-between items-center mb-3">
            <span className="text-green-400 text-xs font-bold">
              {movie.Year}
            </span>
            <span className="text-gray-200 text-[10px] font-semibold uppercase border border-gray-400 px-1.5 py-0.5 rounded">
              {movie.Type}
            </span>
          </div>

          <button className="w-full bg-white text-black text-xs font-bold py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
            <span>▶</span> Watch Now
          </button>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(movie);
        }}
        className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
      >
        <span className="text-xs">{isFavorite ? "❤️" : "🤍"}</span>
      </button>
    </div>
  );
};

export default MovieCard;
