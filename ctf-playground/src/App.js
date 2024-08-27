import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaygroundPage from './pages/PlaygroundPage';
import ChallengePage from './pages/ChallengePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/playground" element={<PlaygroundPage />} />
                    <Route path="/challenge/:category/:id" element={<ChallengePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
