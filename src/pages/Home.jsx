import { useEffect, useState } from "react";
import { searchMovies } from "../api/omdbService";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";

const Home = ({ favorites, toggleFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError("");
        const data = await searchMovies(query, page, type);
        setMovies(data.Search || []);
        setTotal(data.totalResults ? Number(data.totalResults) : 0);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        setMovies([]);
        setError(err.message);
      }
    };

    fetchMovies();
  }, [query, page, type]);

  return (
    <div className="p-4 bg-[#0f172a] min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2">
        <SearchBar
          onSearch={(q) => {
            setQuery(q);
            setPage(1);
          }}
        />
        <FilterDropdown
          type={type}
          setType={(t) => {
            setType(t);
            setPage(1);
          }}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {!error && movies.length === 0 && (
        <p className="text-white text-center">No results found</p>
      )}

      <div className="max-w-400 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies.map((m) => (
          <MovieCard
            key={m.imdbID}
            movie={m}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.imdbID === m.imdbID)}
          />
        ))}
      </div>

      {total > 10 && <Pagination page={page} setPage={setPage} total={total} />}
    </div>
  );
};

export default Home;
