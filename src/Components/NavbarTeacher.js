import React, { useState } from "react";
import "../Styles/Navbar.css";

function NavbarTeacher({ handleLogout, isPersonal }) {
  return (
    <ul className="navbar-nav" id="menu">
      <li className="nav-item">
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
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Notifications
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Swap Requests
        </a>
      </li>
      {isPersonal ? (
        <></>
      ) : (
        <li className="nav-item">
          <a href="#" className="nav-link">
            Update TimeTable
          </a>
        </li>
      )}
      <li className="nav-item right">
        <button onClick={handleLogout} className="nav-button">
          Logout
        </button>
      </li>
    </ul>
  );
}

export default NavbarTeacher;
