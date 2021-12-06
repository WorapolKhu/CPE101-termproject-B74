import React from "react";
import "./Hero.css";
import PriceChecker from "../../Components/priceChecker/PriceChecker";
//import Navbar from "../../Components/navbar/navbar/navbar";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>จองรถล่วงหน้าสำหรับทริปของคุณ</h1>
        <h5>ราคาถูกสดวกปลอดภัย</h5>
        <PriceChecker className="price-checker" />
      </div>
    </section>
  );
};

export default Hero;
