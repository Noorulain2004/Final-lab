import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register({ setAuth }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(''); // Error message state
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://4.213.157.248:5000/api/register', formData);
      setAuth(res.data.token);
    } catch (err) {
      // Backend se error message pakdo (e.g. "User already exists")
      setError(err.response?.data?.msg || 'Error registering user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Join SuperTodo 🚀 for testing</h2>
          <h2>noor</h2>
          <p>Start organizing your life today.</p>
        </div>

        {/* Error Alert Box */}
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          
          {/* Name Field */}
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              required 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              required 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Create a strong password" 
              required 
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
          </div>

          <button type="submit" className="btn btn-primary auth-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up Free'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;