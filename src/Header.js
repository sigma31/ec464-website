// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/firenet">FireNet</Link></li>
          <li><Link to="/binaryclass">BinaryClass</Link></li>
          <li><Link to="/forests">ForestData</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
