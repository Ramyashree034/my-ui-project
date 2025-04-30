import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to Our App</h1>
      <p>Your journey begins here.</p>
      <Link to="/login" className="btn">Get Started</Link>
    </div>
  );
}

export default Hero;