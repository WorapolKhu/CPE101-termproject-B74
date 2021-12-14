import React, { useState} from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, push , set   } from "firebase/database";
import { uuid } from "uuidv4";
import "./Res2.css";

const Res2 = () => {
  var UserId = localStorage.getItem("UserId");
  if (UserId === null) {
    localStorage.setItem("UserId", uuid());
    UserId = localStorage.getItem("UserId");
  }
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
    event.preventDefault();
    console.log("submit value", input);
    set(ref(getDatabase(), 'users/' + UserId + '/data/2/'), { //push data to firebase
      name: input.name,
      lastname: input.lastname,
      phone: input.phone,
      numpassenger: input.numpassenger,
      texttodriver: input.texttodriver,
  })
  .then(() => {
      console.log("data saved success");
  });
  };

  return (
    <main action="/reversation" className="res2">
      <div className="box">
        <div>
          <p className="Headtext-warpper">Information</p>
        </div>
        <div className="box-content"></div>
        <form>
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
          <button type="button" className="button" onClick={handleSubmit}>
          <Link
            
            className="btn btn-primary"
            to="/reservation-confirm"
          >
            <p>ยืนยัน</p>
          </Link>
          </button>
          <button type="button" className="button2" onClick={handleSubmit}>
          <Link
            
            className="btn btn-primary"
            to="/reservation"
          >
            <p>ย้อนกลับ</p>
          </Link>
          </button>
        </form>
      </div>
    </main>
  );
};
export default Res2;
