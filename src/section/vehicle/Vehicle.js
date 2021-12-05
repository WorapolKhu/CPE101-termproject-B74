import React from "react";
import Car from "../../Components/car/Car";
import "./Vehicle.css";
import privateCar from "../../img/picture/private-car.png";
import taxi from "../../img/picture/taxi.png";
import suv from "../../img/picture/suv.png";
import van from "../../img/picture/van.png";
import people from "../../img/icon/people.svg";
import secure from "../../img/icon/secure.svg";
import globe from "../../img/icon/globe.svg";
import luggage from "../../img/icon/luggage.svg";
const carData = [
  {
    name: "Private car",
    img: privateCar,
    icon1: people,
    icon2: secure,
    icon3: luggage,
    prop1: "รองรับผู้โดยสารสูงสุด 4 คน",
    prop2:
      "รถส่วนตัวขนาดเล็ก ให้ความสะดวกสบายและมีความเป็นส่วนตัวมากกว่ารถชนิดอื่น",
    prop3: "บรรทุกของได้เล็กน้อย",
  },
  {
    name: "Taxi",
    img: taxi,
    icon1: people,
    icon2: globe,
    icon3: luggage,
    prop1: "รองรับผู้โดยสารสูงสุด 4 คน",
    prop2: "เป็นรถโดยสารสาธารณะ คุณสามารถเลือกเส้นทางเองได้ตามต้องการ",
    prop3: "บรรทุกของได้เล็กน้อย",
  },
  {
    name: "SUV",
    img: suv,
    icon1: people,
    icon2: secure,
    icon3: luggage,
    prop1: "รองรับผู้โดยสารสูงสุด 7 คน",
    prop2:
      "ห้องโดยสารกว้าง นั่งสบาย เหมาะสำหรับครอบครัวใหญ่ ลุยได้ทุกการเดินทาง",
    prop3: "บรรทุกของได้เยอะ",
  },
  {
    name: "Van",
    img: van,
    icon1: people,
    icon2: secure,
    icon3: luggage,
    prop1: "รองรับผู้โดยสารสูงสุด 13 คน",
    prop2: "รถส่วนตัวขนาดใหญ่เหมาะสำหรับการเดินทางเป็นหมู่คณะ",
    prop3: "บรรทุกของได้เยอะ",
  },
];

const Vehicle = () => {
  return (
    <section className="vehicle">
      <div className="text">
        <h1 id="vehicle-header">Vehicle</h1>
        <h2>พาหนะ</h2>
      </div>
      <ul className="container">
        {carData.map((car) => (
          <Car
            key={car.name}
            name={car.name}
            img={car.img}
            icon1={car.icon1}
            property1={car.prop1}
            icon2={car.icon2}
            property2={car.prop2}
            icon3={car.icon3}
            property3={car.prop3}
          />
        ))}
      </ul>
    </section>
  );
};

export default Vehicle;
