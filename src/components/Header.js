import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <Link to="/" onClick={handleLinkClick} className="logo">Boundless Horizons</Link>
            <nav className={`nav ${isOpen ? `open` : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/Tours" onClick={handleLinkClick}>Tours</Link></li>
                    <li><Link to="/FAQ" onClick={handleLinkClick}>FAQ</Link></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;