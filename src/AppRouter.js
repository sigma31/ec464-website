// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FireNet from './components/FireNet.js';
import BinaryClass from './components/BinaryClass.js';
import ForestData from './components/ForestData.js';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/firenet">FireNet</Link>
                            </li>
                            <li>
                                <Link to="/binaryclass">BinaryClass</Link>
                            </li>
                            <li>
                                <Link to="/forests">ForestData</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/firenet" element={<FireNet />} />
                    <Route path="/binaryclass" element={<BinaryClass />} />
                    <Route path="/forestdata" element={<ForestData />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;

 