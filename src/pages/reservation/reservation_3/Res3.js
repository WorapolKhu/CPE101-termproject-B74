import React from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue , query , set , push} from "firebase/database";
import { uuid } from "uuidv4";
import "./Res3.css";
import underline from "../../../img/icon/underline.svg";
import phone from "../../../img/icon/phone-gray.svg";
import line from "../../../img/icon/line-gray.svg";
import userImage from "../../../img/icon/people.svg";
import MainNavigation from "../../../Components/navbar/navbar";

function Text(props) {
  return <p id="plain">{props.text}</p>;
}
var data = [{
  name: "",
  lastname: "",
  phone: "",
  passenger: "",
  driver: "",
  start: "",
  end: "",
  date: "",
  drivertext: "",
  car: ""
}];
const Res3 = () => {
  var UserId = localStorage.getItem("UserId");
  if (UserId === null) {
    localStorage.setItem("UserId", uuid());
    UserId = localStorage.getItem("UserId");
  }
  onValue(query(ref(getDatabase(), 'users/' + UserId + '/data/1/')), (snapshot) => {
    const data1 = snapshot.val();
    data.start = data1.start;
    data.end = data1.end;
    data.date = Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data1.date);
    data.driver = data1.driver;
    data.car = data1.car;
  });
  onValue(query(ref(getDatabase(), 'users/' + UserId + '/data/2/')), (snapshot) => {
    const data2 = snapshot.val();
    data.name = data2.name;
    data.lastname = data2.lastname;
    data.phone = data2.phone;
    data.passenger = data2.numpassenger;
    data.drivertext = data2.texttodriver;
  });
  const handleConfirm = () => {
    console.log("data", data);
    set(push(ref(getDatabase(), 'users/' + UserId + '/transactions/')), { //push data to firebase
      timebooked: Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date()),
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      passenger: data.passenger,
      driver: data.driver,
      start: data.start,
      end: data.end,
      date: data.date,
      drivertext: data.drivertext,
      car: data.car
    })
    .then(() => {
        console.log("data saved success");
    });
  };
  return (
    <>
    <MainNavigation />
    <div className="res3">
       <img className="statusIcon" src="/res3.svg" alt="res3-icon" />
      <div className="container">
        <h1>Confirmation</h1>
        <img src={underline} alt="underline" />
        
        <div className="grid-container">
          <ul className="trip-info list">
          <li>
              <h3>- ข้อมูลทริป -</h3>
            </li>
            <ul>
              <li className="text">จุดเริ่มต้น</li>
              <li className="reciept-data"><Text text={data.start} /></li>
            </ul>
            <ul>
              <li>จุดหมายปลายทาง</li>
              <li className="reciept-data"><Text text={data.end} /></li>
            </ul>
            <ul>
              <li>วันที่</li>
              <li className="reciept-data"><Text text={data.date} /></li>
            </ul>
            <ul>
              <li>พาหนะ</li>
              <li className="reciept-data"><Text text={data.car} /></li>
            </ul>
            <ul>
              <li>คนขับ</li>
              <li className="reciept-data"><Text text={data.driver} /></li>
            </ul>
          </ul>
          <ul className="customer-info list">
            <h3>- ข้อมูลส่วนตัว -</h3>
            <ul className="name">
              <li>ชื่อ</li>
              <li className="reciept-data"><Text text={data.name} /></li>
            </ul>
            <ul className="name">
              <li>นามสกุล</li>
              <li className="reciept-data"><Text text={data.lastname} /></li>
            </ul>

            <ul>
              <li>เบอร์โทรศัพท์</li>
              <li className="reciept-data"><Text text={data.phone} /></li>
            </ul>
            <ul>
              <li>จำนวนผู้โดยสาร</li>
              <li className="reciept-data"><Text text={data.passenger} /></li>
            </ul>
          </ul>

          <div className="driver-info">
            <div className="img-container">
              <img className="userImage" src={userImage} alt="UserImage" />
            </div>
            <p>- ช่องทางการติดต่อคนขับ -</p>
            <ul className="driver-contact-container">
              <li>
                <img src={phone} alt="phone" />
                <p>081-xxx-xxxx</p>
              </li>
              <li className="line-id">
                <img src={line} alt="line" />
                <p>line id</p>
              </li>
            </ul>
          </div>
          <div className="btn-container">
          <Link to="/reservation-info" className="back-cta btn">
            แก้ไข
          </Link>
          <button type="button" id="button" onClick={handleConfirm}>
          <Link to="/" className="confirm-cta btn">
            ยืนยัน
          </Link>
          </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Res3;
