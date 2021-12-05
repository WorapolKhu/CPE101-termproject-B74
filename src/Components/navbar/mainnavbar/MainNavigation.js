import { Link } from "react-router-dom";
import "./MainNavigation.css";

const Navbar = () => {
  return (
    <header className="mainnav">
      <div className="logo">
        <Link to="/">B74</Link>
      </div>
      <nav className="primary-nav">
        <ul>
          <li>
            <Link to="/" className="eng-nav">
              Home
              <br />
              <span className="thai-nav">หน้าหลัก</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="eng-nav">
              Vehicle
              <br />
              <span className="thai-nav">พาหนะ</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="eng-nav">
              Driver
              <br />
              <span className="thai-nav">คนขับ</span>
            </Link>
          </li>
          <li>
            <Link to="/reservation" className="eng-nav">
              Reservation
              <br />
              <span className="thai-nav">ประวัติการจอง</span>
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="register-nav">
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
