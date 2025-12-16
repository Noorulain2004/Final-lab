import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Components & Pages Import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';      // <-- Braces hata dein
import Features from './pages/Features';
import About from './pages/About';



function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Authentication Logic
  const setAuth = (newToken) => {
    if(newToken) {
        localStorage.setItem('token', newToken);
    } else {
        localStorage.removeItem('token');
    }
    setToken(newToken);
  };

  const logout = () => {
    setAuth(null);
  }

  return (
    <BrowserRouter>
      {/* Navbar ko token state pass kiya taake buttons change hon */}
      <Navbar isLoggedIn={!!token} logout={logout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        
        <Route 
          path="/login" 
          element={!token ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />} 
        />
        
        <Route 
          path="/register" 
          element={!token ? <Register setAuth={setAuth} /> : <Navigate to="/dashboard" />} 
        />
        
        {/* Protected Route */}
        <Route 
          path="/dashboard" 
          element={token ? <Dashboard token={token} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;