import { Route, Routes } from "react-router";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import MainNavigation from "./Components/navbar/MainNavigation";
import SignUp from "./pages/SignUp";
import Navbar from "./Components/navbar/navbar";

function App() {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
