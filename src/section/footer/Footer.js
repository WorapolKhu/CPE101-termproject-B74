import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import line from "../../img/icon/line-white.svg";
import fb from "../../img/icon/facebook-white.svg";
import mail from "../../img/icon/mail-white.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="container">
        <li className="logo">B74</li>
        <li>
          <h3 className="headline">logo</h3>
          <ul className="contactus">
            <li>
              <img src={line} alt="line" />
              <img src={fb} alt="facebook" />
              <img src={mail} alt="mail" />
            </li>
          </ul>
        </li>
        <li>
          <h3 className="headline">เกี่ยวกับเรา</h3>
          <ul className="aboutus">
            <li>ข้อมูลบริษัทเรา</li>
            <li>ทีมงานของเรา</li>
            <li>รถของเรา</li>
          </ul>
        </li>
        <li>
          <h3 className="headline">ศึกษาข้อมูลเพิ่มเติม</h3>
          <ul className="moreinfo">
            <li>วิธีการจอง</li>
          </ul>
        </li>
        <li>
          <h3 className="headline">การจอง</h3>
          <ul className="reservation">
            <a href="/">เริ่มต้นการจอง</a>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
