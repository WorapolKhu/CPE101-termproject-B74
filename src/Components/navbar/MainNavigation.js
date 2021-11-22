import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  //----------------------------------------   JSX code    -------------------------------//

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="logo">
        <Link to="/">B74</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">
              Home
              <br />
              <span className="Subnavigation">หน้าหลัก</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              Vehicle
              <br />
              <span className="Subnavigation">พาหนะ</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              Driver
              <br />
              <span className="Subnavigation">คนขับ</span>
            </Link>
          </li>
          <li>
            <Link to="/reservation">
              Reservation
              <br />
              <span className="Subnavigation">ประวัติการจอง</span>
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="register">
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
