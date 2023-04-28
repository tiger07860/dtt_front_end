import React, { useState } from "react";
import NavbarTeacher from "./NavbarTeacher";
import NavbarStudent from "./NavbarStudent";
import "../Styles/Navbar.css";

function NavbarLoggedIn({ handleLogout, isTeacher }) {
  const [isPersonal, setIsPersonal] = useState(true);
  return (
    <nav className="navbar">
      {isTeacher ? (
        <NavbarTeacher handleLogout="handleLogout" isPersonal="isPersonal" />
      ) : (
        <NavbarStudent handleLogout="handleLogout" />
      )}
    </nav>
  );
}

export default NavbarLoggedIn;
