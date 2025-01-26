import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, serverTimestamp } from '../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create a user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: username,
        createdAt: serverTimestamp(),
        score: 0,
        completedQuestions: []
      });

      navigate('/playground')

      // Redirect to home page or dashboard
    } catch (error) {
      setError(error.message);
      navigate('/homepage')
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignUp} className="w-full max-w-sm bg-black opacity-70 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-3 mb-4 border rounded bg-gray-800  border-gray-600  text-white"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border rounded  bg-gray-800 border-gray-600 text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 mb-4 bg-gray-800 border border-gray-600 rounded text-white"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-800"
        >
          Sign Up
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
