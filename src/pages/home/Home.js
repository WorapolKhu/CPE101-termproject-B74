import React from "react";
import Hero from "../../section/hero/Hero";
import CompanyInfo from "../../section/companyInfo/CompanyInfo";
import Vehicle from "../../section/vehicle/Vehicle";
import Driver from "../../section/driver/Driver";
import Footer from "../../section/footer/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyInfo />
      <Driver />
      <Vehicle />
      <Footer />
    </div>
  );
};

export default Home;
