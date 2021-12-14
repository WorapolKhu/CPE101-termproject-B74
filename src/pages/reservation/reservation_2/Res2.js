import React, { useState} from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref , set   } from "firebase/database";
import { uuid } from "uuidv4";
import "./Res2.css";
import underline from "../../../img/icon/underline.svg";
import MainNavigation from "../../../Components/navbar/navbar";

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
    <>
    <MainNavigation />
    <main action="/reversation" className="res2">
    <img className="statusIcon" src="/res2.svg" alt="res2-icon" />
      <div className="container">
        <h1>Personal Info</h1>
        <img src={underline} alt="underline" />
        <form>
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
           <label>
              <p>จำนวนผู้โดยสาร</p>
                <input
                  className="numberpass"
                  type="number"
                  name="numpassenger"
                  value={input.numpassenger || ""}
                  onChange={handleChange}
                  placeholder=""
            />
              <p className="subtext">คน</p>
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
          <button type="button" className="back-cta btn" onClick={handleSubmit}>
          <Link
            className="n"
            to="/reservation"
          >
            <p>ย้อนกลับ</p>
          </Link>
          </button>
          <button type="button" className="confirm-cta btn" onClick={handleSubmit}>
          <Link
            className="n"
            to="/reservation-confirm"
          >
            <p>ตรวจสอบข้อมูล</p>
          </Link>
          </button>
          </div>
        </form>
      </div>
    </main>
    </>
  );
};
export default Res2;
