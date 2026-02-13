import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/omdbService";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!movie) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 flex gap-6">
      <img src={movie.Poster} className="w-64" />

      <div>
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        <p>
          {movie.Year} • {movie.Genre}
        </p>

        <p className="mt-2">{movie.Plot}</p>

        <p className="mt-2">
          <strong>Cast:</strong> {movie.Actors}
        </p>

        <p>
          <strong>Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
