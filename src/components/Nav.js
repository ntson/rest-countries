import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-6 shadow-md mb-6 bg-white md:px-6">
      <Link to="/" className="font-extrabold text-xl">
        Where in the world
      </Link>
    </nav>
  );
};

export default Nav;
