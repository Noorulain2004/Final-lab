import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login({ setAuth }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Localhost ko badal kar Azure Public IP set kiya
      const res = await axios.post('http://4.213.157.248:5000/api/login', formData);
      setAuth(res.data.token);
    } catch (err) {
      // 2. Browser console mein error check karne ke liye
      console.error("Login Error:", err);
      setError(err.response?.data?.msg || 'Invalid Email or Password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back! 👋</h2>
          <p>Login to access your tasks.</p>
        </div>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              required 
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
          </div>

          <button type="submit" className="btn btn-primary auth-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;