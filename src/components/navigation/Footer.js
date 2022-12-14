import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" style={{ bottom: "o" }}>
      <NavLink exact to="/">
        <FontAwesomeIcon icon="house" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <a href="https://www.linkedin.com/in/madelyn-huntley-b4b17923a/">
        Linkedin
      </a>
    </div>
  );
}
