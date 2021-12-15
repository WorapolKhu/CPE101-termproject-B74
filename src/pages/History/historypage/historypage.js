import React from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { uuid } from "uuidv4";
import "./historypage.css";
import HistoryCard from "../../../Components/historyCard/HistoryCard";
const History = () => {
  var data = [];
  var UserId = localStorage.getItem("UserId");
  if (UserId === null) {
    localStorage.setItem("UserId", uuid());
    UserId = localStorage.getItem("UserId");
  }
  onValue(ref(getDatabase(), 'users/' + UserId + '/transactions/'), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      data.push({
      key:childSnapshot.key,
      start:childSnapshot.val().start,
      end:childSnapshot.val().end,
      date:childSnapshot.val().date,
      driver:childSnapshot.val().driver,
      car:childSnapshot.val().car,
      name:childSnapshot.val().name,
      lastname:childSnapshot.val().lastname,
      phone:childSnapshot.val().phone,
      passenger:childSnapshot.val().passenger,
      drivertext:childSnapshot.val().drivertext,
    });
  }, {
    onlyOnce: false
  });
  });
  console.log("data", data);
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
        {data.map((route) => (
              <HistoryCard
                className="history-card"
                bookedDate={route.date}
                from={route.start}
                driver={route.driver}
                price={route.price}
                travelDate={route.date}
                to={route.end}
              />
            ))}
      </div>
    </div>
  );
};
export default History;
