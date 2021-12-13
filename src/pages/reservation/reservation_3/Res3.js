import React from "react";
import { Link } from "react-router-dom";
import "./Res3.css";
import underline from "../../../img/icon/underline.svg";
import phone from "../../../img/icon/phone-gray.svg";
import line from "../../../img/icon/line-gray.svg";
import userImage from "../../../img/icon/people.svg";

const Res3 = () => {
  return (
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
              <li className="reciept-data">test</li>
            </ul>
            <ul>
              <li>จุดหมายปลายทาง</li>
              <li className="reciept-data">test</li>
            </ul>
            <ul>
              <li>วันที่</li>
              <li className="reciept-data">test</li>
            </ul>
            <ul>
              <li>พาหนะ</li>
              <li className="reciept-data">test</li>
            </ul>
            <ul>
              <li>คนขับ</li>
              <li className="reciept-data">test</li>
            </ul>
          </ul>
          <ul className="customer-info list">
            <h3>- ข้อมูลส่วนตัว -</h3>
            <ul className="name">
              <li>ชื่อ</li>
              <li className="reciept-data">test</li>
            </ul>
            <ul className="name">
              <li>นามสกุล</li>
              <li className="reciept-data">test</li>
            </ul>

            <ul>
              <li>เบอร์โทรศัพท์</li>
              <li className="reciept-data">test</li>
            </ul>
            <ul>
              <li>จำนวนผู้โดยสาร</li>
              <li className="reciept-data">test</li>
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
        </div>

        <div className="btn-container">
          <Link to="/reservation-info" className="back-cta btn">
            แก้ไข
          </Link>
          <Link to="/" className="confirm-cta btn">
            ยืนยัน
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Res3;
