import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">AI Recipe Generator</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/generator">Create Recipe</Link></li>
            <li><Link to="/saved">Saved Recipes</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
