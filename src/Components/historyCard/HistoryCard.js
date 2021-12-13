import React from "react";
import "./HistoryCard.css";
import { Link } from "react-router-dom";
import review from "../../img/icon/review.svg";
const HistoryCard = (props) => {
  return (
    <div className="historycard">
      <ul className="box">
        <li className="driverImage">
          <img
            src="https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1133765664?k=20&m=1133765664&s=612x612&w=0&h=IOSO-4b6XY7zxsCh217kHQe4z_irnwuBa_-caEZ4DNI="
            alt="driverImg"
          />
        </li>
        <li>
          <ul className="col">
            <li className="detail">
              <h3>วันที่จอง</h3>
              <p>{props.bookedDate}</p>
            </li>
            <li className="detail">
              <h3>จาก</h3>
              <p>{props.from}</p>
            </li>
            <li className="detail">
              <h3>คนขับ</h3>
              <p>{props.driver}</p>
            </li>
            <li className="detail">
              <h3>ราคา</h3>
              <p>{props.price}</p>
            </li>
          </ul>
        </li>
        <li>
          <ul className="col">
            <li className="detail">
              <h3>วันที่เดินทาง</h3>
              <p>{props.travelDate}</p>
            </li>
            <li className="detail">
              <h3>ถึง</h3>
              <p>{props.to}</p>
            </li>
          </ul>
        </li>
        <li className="review-cta">
          <Link to="/">
            <img src={review} alt="review icon" />
            เขียนรีวิว
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HistoryCard;
