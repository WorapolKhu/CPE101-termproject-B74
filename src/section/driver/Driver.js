// import React, { Component } from "react";
//import Person from "../../Components/person/Person";
import "./Driver.scss";
import Drivercard from "../driverCard/DriverCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dummy_Data = [
  {
    id: "0",
    name: "ศรัณย์ญรัชต์",
    img: "1.jpg",
    car: "privateCar",
    score: "4.7",
    reviewCount: "185",
  },
  {
    id: "1",
    name: "นฤมล",
    img: "2.jpg",
    car: "taxi",
    score: "4.0",
    reviewCount: "453",
  },
  {
    id: "2",
    name: "ชยุต",
    img: "3.jpeg",
    car: "van",
    score: "4.2",
    reviewCount: "77",
  },
  {
    id: "3",
    name: "วรโชติ",
    img: "4.jpg",
    car: "taxi",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "4",
    name: "รณกร",
    img: "5.jpg",
    car: "SUV",
    score: "4.2",
    reviewCount: "1609",
  },
  {
    id: "5",
    name: "พัสกร",
    img: "6.jpg",
    car: "taxi",
    score: "5",
    reviewCount: "46",
  },
  {
    id: "6",
    name: "วนัญญา",
    img: "7.jpg",
    car: "van",
    score: "3.5",
    reviewCount: "250",
  },
  {
    id: "7",
    name: "พัสกร",
    img: "8.jpg",
    car: "SUV",
    score: "4.3",
    reviewCount: "125",
  },
  {
    id: "8",
    name: "สมจิตร",
    img: "9.jpg",
    car: "taxi",
    score: "4.9",
    reviewCount: "349",
  },
  {
    id: "9",
    name: "รณกร",
    img: "10.jpg",
    car: "privateCar",
    score: "2.8",
    reviewCount: "80",
  },
  {
    id: "10",
    name: "อดิกันต์",
    img: "11.jpg",
    car: "taxi",
    score: "1.9",
    reviewCount: "26",
  },
  {
    id: "11",
    name: "นฤมล",
    img: "12.jpg",
    car: "van",
    score: "4.6",
    reviewCount: "36",
  },
];

var settings = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Driver = () => {
  return (
    <section className="driver">
      <div className="front-bg">
        <div className="text">
          <h1 id="driver-header">Driver</h1>
          <h2>คนขับ</h2>
        </div>
        <ul className="container">
          <Slider {...settings}>
            {Dummy_Data.map((driver) => (
              <Drivercard
                className="drivercard"
                key={driver.id}
                name={driver.name}
                img={driver.img}
                carType={driver.car}
                score={driver.score}
                review={driver.reviewCount}
              />
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Driver;
