import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/DataSourcesOverview.js';
import FireNet from './components/FireNet.js';
import BinaryClassifier from './components/BinaryClassifier.js';
import FireDataUS from './components/FireDataUS.js';
import Header from './Header';
import ImageReceiver from './components/ImageReceiver';
import LiveDemo from './components/LiveDemo.js';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/firenet">FireNet</Link>
                            </li>
                            <li>
                                <Link to="/BinaryClassifier">BinaryClassifier</Link>
                            </li>
                            <li>
                                <Link to="/forestdata">FireDataUS</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/live-demo">Live Demo</Link>
                            </li>
                        </ul>
                    </nav>
                </Header>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/firenet" element={<FireNet />} />
                    <Route path="/BinaryClassifier" element={<BinaryClassifier />} />
                    <Route path="/forestdata" element={<FireDataUS />} />
                    <Route path="/live-demo" element={<LiveDemo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;