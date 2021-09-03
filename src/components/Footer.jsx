import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/about">About Us</Link>
            <Link to="/about">Our Know How</Link>
            <Link to="/about">Professional Area</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Contact Us</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>People</h2>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Follow Us</h2>
            <a href="https://www.instagram.com/wonder__vacations/" target="_blank" aria-label="Instagram" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/Wonder-Vacations-119312793089596/" target="_blank" aria-label="Facebook" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Wonder Vacations <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Wonder Vacations &copy; 2021</small>
          <div className="social-icons">
            {/* <Link to="/" className="social-icon-link facebook" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="social-icon-link instagram" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="social-icon-link youtube" target="_blank" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="/" className="social-icon-link twitter" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="social-icon-link linkedin" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </Link> */}

            <a
              href="https://www.facebook.com/Wonder-Vacations-119312793089596/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/wonder__vacations/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;