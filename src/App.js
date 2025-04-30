import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage'; // Combined Login/Register page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage with Hero, Features, and Footer */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Footer />
            </>
          }
        />
        
        {/* Login/Register Page */}
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
