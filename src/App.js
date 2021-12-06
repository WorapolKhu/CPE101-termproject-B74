import { Route, Routes } from "react-router";
import React from "react";

import Home from "./pages/home/Home";
import Res1 from "./pages/reservation/reservation_1/Res1";
import Res2 from "./pages/reservation/reservation_2/Res2";
import Res3 from "./pages/reservation/reservation_3/Res3";
import Navbar from "./Components/navbar/navbar/navbar";
import Login from "./Components/modals/login/Login"
import Signup from "./Components/modals/signup/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Res1 />} />
        <Route path="/reservation-info" element={<Res2 />} />
        <Route path="/reservation-confirm" element={<Res3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;
