import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      
      {/* --- NEW HERO SECTION --- */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="badge">SuperTodo - Automated V3.0 Noor </span>
          <h1>Organize Your Work <br /> <span className="highlight">Dominate Your Life</span></h1>
          <p>
            Stop drowning in chaos. SuperTodo helps you capture ideas, 
            plan your day, and track progress with zero friction.
          </p>
          
          <div className="hero-buttons">
            <Link to="/register">
              <button className="btn btn-primary large-btn">Start for Free</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline large-btn">Log In</button>
            </Link>
          </div>

          <div className="hero-stats">
            <span>✅ 100% Free</span>
            <span>🔒 Secure Data</span>
            <span>⚡ DevOps Ready</span>
          </div>
        </div>

        {/* CSS Only Illustration (Right Side) */}
        <div className="hero-visual">
          <div className="mockup-window">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="mockup-body">
              <div className="mock-line title-line"></div>
              <div className="mock-item">
                <div className="checkbox"></div>
                <div className="line"></div>
              </div>
              <div className="mock-item">
                <div className="checkbox checked"></div>
                <div className="line done"></div>
              </div>
              <div className="mock-item">
                <div className="checkbox"></div>
                <div className="line"></div>
              </div>
              <div className="mock-btn"></div>
            </div>
          </div>
        </div>
      </header>

      {/* --- CARDS SECTION (Same as before) --- */}
      <section className="features">
        <h2>Why Choose SuperTodo?</h2>
        <div className="cards-wrapper">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Fast & Simple</h3>
            <p>Add tasks in seconds. No complicated menus, just focus on getting things done.</p>
          </div>
          <div className="card">
            <div className="icon">🔒</div>
            <h3>Secure Cloud</h3>
            <p>Your data is encrypted and saved in the cloud. Access it from any device, anywhere.</p>
          </div>
          <div className="card">
            <div className="icon">🎯</div>
            <h3>Stay Focused</h3>
            <p>Prioritize your daily goals and track your progress to boost productivity.</p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>© 2025 SuperTodo App. Built for DevOps Practice.</p>
      </footer>
    </div>
  );
}

export default Home;