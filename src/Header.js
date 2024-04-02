// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><img src={require('./images/BUlogo.png')}/></li>
          <li><Link to="/ec464-website">Home</Link></li>
          <li><Link to="/firenet">FireNet</Link></li>
          <li><Link to="/BinaryClassifier">BinaryClassifier</Link></li>
          <li><Link to="/forestdata">ForestData</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><img src={require('./images/dryad.webp')}/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
