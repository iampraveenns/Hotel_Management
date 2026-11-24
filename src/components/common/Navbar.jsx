import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Namla<span>Stay</span>
      </Link>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/hotels">Hotels</NavLink>
        <NavLink to="/add-hotel">Add Hotels</NavLink>
      </div>

      <Link to="login" className="navbar-login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
