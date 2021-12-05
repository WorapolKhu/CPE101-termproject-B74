import React from "react";
import "./Person.css";
import car from "../../img/icon/car.svg";
import star from "../../img/icon/star.svg";

const Person = (props) => {
  return (
    <div className="person">
      <img className="face" src={props.img} alt={props.name} />

      <h3>{props.name}</h3>
      <div className="car-type">
        <img src={car} alt="car" />
        <p>{props.car}</p>
      </div>
      <div className="score">
        <img src={star} alt="star" />
        <p>
          {props.score}/5 จาก{props.review} รีวิว
        </p>
      </div>
    </div>
  );
};

export default Person;
