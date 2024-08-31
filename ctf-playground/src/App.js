import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaygroundPage from './pages/PlaygroundPage';
import ChallengePage from './pages/ChallengePage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from 'firebase/auth';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar user={user} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route 
                            path="/playground" 
                            element={user ? <PlaygroundPage /> : <Navigate to="/login" />} 
                        />
                        <Route 
                            path="/challenge/:category/:id" 
                            element={user ? <ChallengePage /> : <Navigate to="/login" />} 
                        />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;