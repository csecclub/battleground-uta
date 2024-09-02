import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/playground');
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="h-screen bg-blue-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Login
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
