import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Ingredients into Delicious Meals</h1>
          <p>Use AI to generate personalized recipes based on ingredients you have and dietary preferences.</p>
          <Link to="/generator" className="cta-button">Get Started</Link>
        </div>
        <div className="hero-image">
          {/* This would be an image in a real implementation */}
          <div className="placeholder-image">Recipe Image</div>
        </div>
      </section>
      
      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Input Ingredients</h3>
            <p>Enter the ingredients you have available in your kitchen.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Set Preferences</h3>
            <p>Specify dietary restrictions and preferences.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>AI Generation</h3>
            <p>Our AI analyzes your inputs to create custom recipes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍳</div>
            <h3>Start Cooking</h3>
            <p>Follow the recipe and enjoy your personalized meal.</p>
          </div>
        </div>
      </section>
      
      <section className="benefits-section">
        <h2>Benefits</h2>
        <div className="benefits-container">
          <div className="benefit">
            <h3>Reduce Food Waste</h3>
            <p>Use up ingredients before they expire.</p>
          </div>
          <div className="benefit">
            <h3>Save Money</h3>
            <p>Plan meals around what you already have.</p>
          </div>
          <div className="benefit">
            <h3>Eat Healthier</h3>
            <p>Recipes tailored to your dietary needs.</p>
          </div>
          <div className="benefit">
            <h3>Discover New Recipes</h3>
            <p>Expand your culinary horizons.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"I never know what to cook with the random ingredients in my fridge. This app has been a game-changer!"</p>
            <div className="testimonial-author">- Sarah J.</div>
          </div>
          <div className="testimonial">
            <p>"As a nutritionist, I recommend this to all my clients. It makes healthy eating so much easier."</p>
            <div className="testimonial-author">- Dr. Michael T.</div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to Transform Your Cooking Experience?</h2>
        <Link to="/generator" className="cta-button">Create Your First Recipe</Link>
      </section>
    </div>
  );
};

export default HomePage;
