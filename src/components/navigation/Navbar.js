import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-htwo">
      <NavLink exact to="/">
        <FontAwesomeIcon icon="house" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/products">Shop</NavLink>
      <NavLink to="/cart">
        <FontAwesomeIcon icon="shopping-cart" />
      </NavLink>
    </div>
  );
}

export default Navbar;
