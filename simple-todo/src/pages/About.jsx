import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <div className="header-section">
        <h1>About SuperTodo</h1>
        <p>Built with ❤️ using the MERN Stack.</p>
      </div>

      <div className="content-section">
        <h2>Our Mission</h2>
        <p>
          We believe that productivity shouldn't be complicated. Our mission is to provide 
          a simple, fast, and secure way for people to organize their daily lives.
        </p>

        <br />

        <h2>The Tech Stack</h2>
        <p>SuperTodo is a full-stack application built for a DevOps Capstone Project. It utilizes:</p>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
          <li><strong>MongoDB</strong> - For flexible data storage</li>
          <li><strong>Express.js</strong> - For robust backend APIs</li>
          <li><strong>React</strong> - For a dynamic user interface</li>
          <li><strong>Node.js</strong> - For scalable server-side logic</li>
        </ul>

        <br />
        
        <Link to="/register">
          <button className="btn btn-primary">Join Our Journey</button>
        </Link>
      </div>
    </div>
  );
}

export default About;