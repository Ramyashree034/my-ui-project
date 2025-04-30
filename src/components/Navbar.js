import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">YourLogo</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;