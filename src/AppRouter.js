import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Corrected import
import Home from './components/Home';
import About from './components/About';
import FireNet from './components/FireNet.js';
import BinaryClassifier from './components/BinaryClassifier.js';
import ForestData from './components/ForestData.js';
import Header from './Header';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/ec464-website">Home</Link>
                            </li>
                            <li>
                                <Link to="/firenet">FireNet</Link>
                            </li>
                            <li>
                                <Link to="/BinaryClassifier">BinaryClassifier</Link>
                            </li>
                            <li>
                                <Link to="/forestdata">ForestData</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </Header>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/ec464-website" element={<Home />} />
                    <Route path="/firenet" element={<FireNet />} />
                    <Route path="/BinaryClassifier" element={<BinaryClassifier />} />
                    <Route path="/forestdata" element={<ForestData />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;