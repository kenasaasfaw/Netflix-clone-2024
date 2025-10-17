import React from 'react';
import './footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        
        {/* Social Media Icons */}
        <div className="footer_icons">
          <FaSquareFacebook  />
          <FaYoutube  />
          <FaInstagram  />
        </div>

        {/* Footer Links */}
        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Service Code */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright */}
        <div className="copy_right">
          <p>© 2025 Netflix Clone by Kenasa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
