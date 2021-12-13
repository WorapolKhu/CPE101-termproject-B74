import React from "react";
import { Link } from "react-router-dom";
import "./historypage.css";
import HistoryCard from "../../../Components/historyCard/HistoryCard";
const History = () => {
  return (
    <div id="history">
      <div className="container">
        <div className="head-cta">
          <div className="reservation-cta">
            <Link to="/myticket">RESERVATION</Link>
          </div>
          <div className="history-cta">
            <p>HISTORY</p>
          </div>
        </div>
        <HistoryCard
          className="history-card"
          bookedDate="27/02/2564"
          from="กรุงเทพฯ"
          driver="นายสมมุติ เดอะไดร์ฟเวอร์"
          price="20 บาท"
          travelDate="28/02/2564"
          to="ธนบุรี"
        />
      </div>
    </div>
  );
};
export default History;
