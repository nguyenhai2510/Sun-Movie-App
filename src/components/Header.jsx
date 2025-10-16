import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "@context/AuthProvider";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white lg:h-20">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/netflix.png" className="w-16 sm:w-28" />
        </Link>
        <Link to="/search?mediaType=movie" className="lg:text-xl">
          Movie
        </Link>
        <Link to="/search?mediaType=tv" className="lg:text-xl">
          TV Show
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={logout} className="rounded bg-red-600 px-4 py-2">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="rounded bg-red-600 px-4 py-2">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
