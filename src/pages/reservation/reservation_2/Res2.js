import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Res2.css";
import underline from "../../../img/icon/underline.svg";
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
      <div className="container">
        <h1>Personal Info</h1>
        <img src={underline} alt="underline" />
        <form onSubmit={handleSubmit}>
          <div className="name-input">
            <label>
              ชื่อ
              <input
                type="text"
                name="name"
                value={input.name || ""}
                onChange={handleChange}
                placeholder="ex. สุชาติ"
                required
              />
            </label>
            <label>
              นามสกุล
              <input
                type="text"
                name="lastname"
                value={input.lastname || ""}
                onChange={handleChange}
                placeholder="ex. ชอบยิ้ม"
                required
              />
            </label>
          </div>

          <label>
            เบอร์โทรศัพท์
            <input
              type="number"
              name="phone"
              value={input.phone || ""}
              onChange={handleChange}
              placeholder="ex. 000 000 0000"
              required
            />
          </label>
          <label className="text">
            ข้อความถึงคนขับ
            <textarea
              rows={10}
              cols={30}
              type="text"
              name="texttodriver"
              value={input.texttodriver || ""}
              placeholder="ex. ตอนมารับลงสะพานเสร็จให้ชิดซ้ายทันที บ้านอยู่ในซอยติดกับสะพานเลย"
              onChange={handleChange}
              required
            />
          </label>
          <div className="btn-container">
            <Link className="confirm-cta btn" to="/reservation">
              กลับ
            </Link>
            <Link className="back-cta btn" to="/reservation-confirm">
              ตรวจสอบข้อมูล
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Res2;

// <label>
//   <p>จำนวนผู้โดยสาร</p>
//   <input
//     className="numberpass"
//     type="number"
//     name="numpassenger"
//     value={input.numpassenger || ""}
//     onChange={handleChange}
//     placeholder=""
//     required
//   />
//   <p className="subtext">คน</p>
// </label>;
