import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex space-x-4 border-gray-300">
      <li className="nav-item">
        <Link
          to="/"
          className={`px-3 py-2 text-spaceCadet ${
            currentPage === '/' ? 'font-bold text-xl underline' : 'hover:text-verdegris text-sm transition'
          }`}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={`px-3 py-2 text-spaceCadet ${
            currentPage === '/Portfolio' ? 'font-bold text-xl underline' : 'hover:text-verdegris text-sm transition'
          }`}
        >
          Portfolio
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/Contact"
          className={`px-3 py-2 text-spaceCadet ${
            currentPage === '/Contact' ? 'font-bold text-xl underline' : 'hover:text-verdegris text-sm transition'
          }`}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={`px-3 py-2 text-spaceCadet ${
            currentPage === '/Resume' ? 'font-bold text-xl underline' : 'hover:text-verdegris text-sm transition'
          }`}
        >
          Resume
        </Link>
      </li>

      
    </ul>
  );
}

export default Navigation;
