import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Res2.css";

const Res2 = () => {
  const [input, setInput] = useState({
    //state that use in input form
    name: "",
    lastname: "",
    phone: "",
    numpassenger: "",
    texttodriver: "",
  });
  const handleChange = (event) => {
    //put input in array state
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    //submit array state to database
    event.preventDefault();
    console.log("submit value", input); //line connect database
  };

  return (
    <main action="/reversation" className="res2">
      <div className="box">
        <div>
          <p className="Headtext-warpper">Information</p>
        </div>
        <div className="box-content"></div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>ชื่อ&emsp;</p>
            <input
              type="text"
              name="name"
              value={input.name || ""}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </label>
          <label>
            <p>นามสกุล&emsp;</p>
            <input
              type="text"
              name="lastname"
              value={input.lastname || ""}
              onChange={handleChange}
              placeholder="Enter lastname"
              required
            />
          </label>
          <label>
            <p>เบอร์โทรศัพท์&emsp;</p>
            <input
              type="number"
              name="phone"
              value={input.phone || ""}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </label>
          <label>
            <p>จำนวนผู้โดยสาร&emsp;</p>
            <input
              className="numberpass"
              type="number"
              name="numpassenger"
              value={input.numpassenger || ""}
              onChange={handleChange}
              placeholder=""
              required
            />
            <p className="subtext">คน</p>
          </label>
          <label className="text">
            <p>ข้อความถึงคนขับ&emsp;</p>
            <textarea
              rows={10}
              cols={30}
              type="text"
              name="texttodriver"
              value={input.texttodriver || ""}
              placeholder="message ..."
              onChange={handleChange}
              required
            />
          </label>
          <Link
            type="submit"
            className="btn btn-primary"
            to="/reservation-confirm"
          >
            Submit
          </Link>
        </form>
      </div>
    </main>
  );
};
export default Res2;
