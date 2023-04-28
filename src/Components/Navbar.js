import React, { useState } from "react";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {isAuthenticated ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><a onClick={handleLogIn} href="/login">Login</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
