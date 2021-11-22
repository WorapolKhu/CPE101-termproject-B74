import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

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
  return (
    <header className={navbarClasses.join(" ")}>
      <div className="logo">
        <li>
          <Link to="/">B74</Link>
        </li>
      </div>
      <nav className="navigation">
        <li>
          <p>
            &thinsp;<Link to="/">Home</Link>&thinsp;
          </p>
        </li>
        <li>
          <p>
            &thinsp;<Link to="/">Vehicle</Link>&thinsp;
          </p>
        </li>
        <li>
          <p>
            <Link to="/">Driver</Link>&thinsp;
          </p>
        </li>
        <li>
          <p>
            <Link to="/reservation">Reservation</Link>
          </p>
        </li>
      </nav>
      <nav className="Subnavigation">
        <li>
          <p>
            &thinsp;<Link to="/">หน้าหลัก</Link>&emsp;
          </p>
        </li>
        <li>
          <p>
            <Link to="/">พาหนะ</Link>&emsp;&emsp;&thinsp;
          </p>
        </li>
        <li>
          <p>
            <Link to="/">คนขับ</Link>&emsp;&thinsp;&thinsp;&thinsp;
          </p>
        </li>
        <li>
          <p>
            <Link to="/reservation">ประวัติการจอง</Link>&emsp;&emsp;
          </p>
        </li>
      </nav>
      <div className="register">
        <li>
          <Link to="/signup" id="signup">
            Signup
          </Link>
          <Link to="/login">Login</Link>
        </li>
      </div>
    </header>
  );
};
export default Navbar;
