import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/executives">Executives</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;