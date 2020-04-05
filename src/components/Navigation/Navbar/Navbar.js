import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import "./Navbar.css";
import Logo from "../../Logo/Logo";

const Navbar = props => (
  <header className="Navbar">
    <nav className="Navigation">
      <div className="Logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
