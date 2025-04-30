import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <img src="https://via.placeholder.com/100" alt="Feature 1" />
        <h3>Feature One</h3>
        <p>Short description of feature.</p>
      </div>
      <div className="feature-card">
        <img src="https://via.placeholder.com/100" alt="Feature 2" />
        <h3>Feature Two</h3>
        <p>Short description of feature.</p>
      </div>
    </section>
  );
}

export default Features;