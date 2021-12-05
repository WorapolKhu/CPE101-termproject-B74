import React from "react";
import "./Car.css";

const Car = (props) => {
  return (
    <section className="car">
      <h3 className="car-name">{props.name}</h3>
      <img className="car-img" src={props.img} alt={props.name} />
      <ul className="car-prop">
        <li>
          <img className="icon" src={props.icon1} alt={props.name} />
        </li>
        <li>
          <p>{props.property1}</p>
        </li>
      </ul>
      <div className="car-prop">
        <img className="icon" src={props.icon2} alt={props.name} />
        <p>{props.property2}</p>
      </div>
      <div className="car-prop">
        <img className="icon" src={props.icon3} alt={props.name} />
        <p>{props.property3}</p>
      </div>
    </section>
  );
};

export default Car;
