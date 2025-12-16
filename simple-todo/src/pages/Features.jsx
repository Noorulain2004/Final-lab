import React from 'react';

function Features() {
  return (
    <div className="page-container">
      <div className="header-section">
        <h1>Powerful Features</h1>
        <p>Everything you need to manage your tasks effectively.</p>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <h3>⚡ Instant Sync</h3>
          <p>Your tasks are saved in real-time. Switch between your phone and laptop without missing a beat.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <h3>🔒 Bank-Grade Security</h3>
          <p>We use BCrypt encryption and JWT tokens to ensure your data stays private and secure.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <h3>📱 Responsive Design</h3>
          <p>Whether you use a large monitor or a small mobile screen, SuperTodo adapts perfectly.</p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <h3>🎨 Clean Interface</h3>
          <p>No clutter, no ads. Just a clean purple-themed interface designed for focus.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;