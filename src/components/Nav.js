import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-6 md:px-6">
      <Link to="/" className="font-extrabold text-xl">
        Where in the world
      </Link>
      <button>Dark mode</button>
    </nav>
  );
};

export default Nav;
