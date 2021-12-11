import React from "react";
import { Link } from "react-router-dom";
import "./PriceChecker.css";
const PriceChecker = () => {
  return (
    <div className="price-checker">
      <div className="container">
        <form className="cta">
          <div className="main-cta">
            <label>
              <p>จาก:</p>
              <input className="text-input" type="text" name="" id="" />
            </label>
            <label>
              <p>ถึง:</p>

              <input className="text-input" type="text" name="" id="" />
            </label>
            <label>
              <p>พาหนะ:</p>

              <input className="text-input" type="text" name="" id="" />
            </label>
          </div>
          <div className="confirm-cta">
            <Link className="btn-primary" to="/reservation">
              จอง
            </Link>
            <Link className="btn-secondary" to="/reservation">
              เช็คราคา
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceChecker;
