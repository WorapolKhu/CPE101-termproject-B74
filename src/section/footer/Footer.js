import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="container">
        <li className="logo">B74</li>
        <li>
          <ul className="contactus">
            <li className="headline">logo</li>
          </ul>
        </li>
        <li>
          <ul className="aboutus">
            <li className="headline">เกี่ยวกับเรา</li>
            <li>รถของเรา</li>
          </ul>
        </li>
        <li>
          <ul className="moreinfo">
            <li className="headline">เกี่ยวกับเรา</li>
            <Link to="/">Home</Link>
          </ul>
        </li>
        <li>
          <ul className="reservation">
            <li className="headline">เกี่ยวกับเรา</li>
            <a href="/">driver</a>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
