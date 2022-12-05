import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>
        <NavLink exact to="/home">
          <FontAwesomeIcon icon="house" />
        </NavLink>
        <NavLink to="/cart">
          <FontAwesomeIcon icon="shopping-cart" />
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Shop</NavLink>
      </h2>
    </div>
  );
}

export default Navbar;
