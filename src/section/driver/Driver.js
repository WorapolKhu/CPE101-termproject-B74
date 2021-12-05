import React from "react";
import Person from "../../Components/person/Person";
import "./Driver.css";

const Dummy_Data = [
  {
    id: "0",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "1",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์ 2",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "2",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์ 3",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "3",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์ 4",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "4",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์ 5",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
  {
    id: "5",
    name: "ศรัณย์ญรัชต์  วงศ์สาสนธิ์ 5",
    img: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    car: "รถแท็กซี่",
    score: "4.2",
    reviewCount: "125",
  },
];

const Driver = () => {
  return (
    <section className="driver">
      <div className="front-bg">
        <div className="text">
          <h1 id="driver-header">Driver</h1>
          <h2>คนขับ</h2>
        </div>
        <ul className="container">
          {Dummy_Data.map((person) => (
            <Person
              className="person"
              key={person.id}
              name={person.name}
              img={person.img}
              car={person.car}
              score={person.score}
              review={person.reviewCount}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Driver;
