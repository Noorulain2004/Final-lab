import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, logout }) {
  return (
    <nav className="navbar">
      {/* 1. Logo Section */}
      <div className="logo-section">
        <h2 style={{ margin: 0 }}>🚀 SuperTodo</h2>
      </div>

      {/* 2. Middle Links (Jo hamesha dikhenge) */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>  {/* Link Update kiya */}
  <Link to="/about">About Us</Link>
      </div>

      {/* 3. Auth Buttons (Right Side) */}
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span style={{ marginRight: '15px', fontWeight: 'bold' }}>Hello, User! 👋</span>
            <Link to="/dashboard">
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>Dashboard</button>
            </Link>
            <button onClick={logout} className="btn btn-danger">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
            <Link to="/register">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;