import { Route, Routes } from "react-router";
import React from "react";
import { initializeApp } from "firebase/app";
import Home from "./pages/home/Home";
import Res1 from "./pages/reservation/reservation_1/Res1";
import Res2 from "./pages/reservation/reservation_2/Res2";
import Res3 from "./pages/reservation/reservation_3/Res3";
import MainNavigation from "./Components/navbar/navbar";
import History from "./pages/History/historypage";
import Ticket from "./pages/History/pagereserve";

function App() {
  var config = {
    apiKey: "AIzaSyBPVYr3Bdxjid2oM2HjtR9qyE1sEZ1Jwx0",
    authDomain: "b74-reversation-car.firebaseapp.com",
    projectId: "b74-reversation-car",
    storageBucket: "b74-reversation-car.appspot.com",
    messagingSenderId: "1078563143609",
    appId: "1:1078563143609:web:dbd910bf0f2d4620838068",
    measurementId: "${config.measurementId}",
    databaseURL:
      "https://b74-reversation-car-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "bucket.appspot.com",
  };
  initializeApp(config);
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Res1 />} />
        <Route path="/reservation-info" element={<Res2 />} />
        <Route path="/reservation-confirm" element={<Res3 />} />
        <Route path="/history" element={<History />} />
        <Route path="/myticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}
export default App;
