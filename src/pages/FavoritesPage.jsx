import MovieCard from "../components/MovieCard";

const FavoritesPage = ({ favorites, toggleFavorite }) => {
  return (
    <div className="p-6 bg-blue-200 min-h-screen">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
        My Favorite Movies ❤️
      </h2>

      {favorites.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-xl text-gray-700 font-semibold">
            Your favorites list is empty!
          </p>
          <p className="text-gray-500 mt-2">
            Go back to Home and add some movies.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((m) => (
            <MovieCard
              key={m.imdbID}
              movie={m}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
