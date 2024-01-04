import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <nav className="Footer">
        <ul className="footer-list">
          <li className="footer-item">
            <Link to="/" className="footer-link">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
