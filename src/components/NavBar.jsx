import { Link } from "react-router-dom";

const NavBar = ({ favoriteCount }) => {
  return (
    <nav className="bg-green-950 text-white p-4 flex justify-between items-center shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity"
      >
        🎬 Movie Search App
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-green-400 transition-colors">
          Home
        </Link>

        <Link
          to="/favorites"
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
        >
          <span>Favorites</span>
          {favoriteCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {favoriteCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
