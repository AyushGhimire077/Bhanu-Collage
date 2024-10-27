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
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fa fa-facebook-f"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
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
