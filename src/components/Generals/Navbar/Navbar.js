import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import "./style.css";

function Navbar() {
  const activatedNav = "nav-li nav-li-active";
  const normalNav = "nav-li";
  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <div className="logo-container">
          <h1>Cozy House</h1>
          <p id="logo-text">Shelter for pets in Boston</p>
        </div>
        <nav>
          <ul className="nav-ul">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activatedNav : normalNav
              }
            >
              About the shelter
            </NavLink>
            <NavLink className="nav-li">Our pets</NavLink>
            <Link
              to="skills-id"
              spy={true}
              smooth={true}
              duration={600}
              className="nav-li"
            >
              Help the shelter
            </Link>
            <Link
              to="skills-id"
              spy={true}
              smooth={true}
              duration={600}
              className="nav-li"
            >
              Contacts
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
