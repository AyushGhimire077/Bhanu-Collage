import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <hr className="hr"/>
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h4 className="caret-black">Bhanu Collage -Biratnagar</h4>
            <ul>
              <li><Link to='/about-us'>About Us</Link></li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>Support</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
               <i className="fa fa-linkedin"></i>
               <i className="fa fa-twitter"></i>
               <i className="fa fa-instagram"></i>
               <i className="fa fa-facebook-f"></i>
            </div>
          </div>
          <div className="footer-col">
            <h4>Subscribe</h4>
            <form className="subscribe-form">
              <input type="email" placeholder="Your Email" required />
              <Link to='/contact'>  <button type="submit">Subscribe</button> </Link>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
