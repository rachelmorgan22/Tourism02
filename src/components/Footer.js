import React from 'react';
import '../styles/Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <div className="footer-container">
            <div className="contact-info">
            <h4>Contact Us</h4>
                    <p>Phone: +1 (234) 567-8901</p>
                    <p>Email: info@tourcompany.com</p>
                    <p>Address: 123 Adventure Lane, Travel City</p>
            </div>
            <div className="quick-links">
            <h4>Quick Links</h4>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Tours">Tours</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                    </ul>
            </div>
            <div className="legal-info">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
            <div className="newsletter-signup">
                <h4>Subscribe to Our Newsletter</h4>
                <form>
                    <input type="email" placeholder="Your Email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            </div>
            <p>&copy; 2024 Tour Company. All rights reserved.</p>
    </footer>
    );
  };
  
  export default Footer;