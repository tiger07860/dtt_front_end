import React from "react";
import "../Styles/Navbar.css";

function NavbarLogin() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a
            href="#"
            className="nav-link"
            style={{
              backgroundColor: "#ddd",
              borderBottom: "4px solid rgb(0, 4, 255)",
              color: "rgb(0, 0, 0)",
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarLogin;
