import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-yellow-300">📖</span> BookNest
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-yellow-300" : "hover:text-yellow-300 transition-colors duration-300"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className={({ isActive }) => isActive ? "font-semibold text-yellow-300" : "hover:text-yellow-300 transition-colors duration-300"}>
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold text-yellow-300" : "hover:text-yellow-300 transition-colors duration-300"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
