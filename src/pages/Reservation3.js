import React  from "react";
import { Link } from "react-router-dom";
import "./Res3.css"

const Reservation3 = () => {
  return  <div className="Confirmation">
          <h1>Confirmation</h1>
          <div className="image">
            test
          </div>
            <div className="first">
              <li>จุดเริ่มต้น</li>
              <c>test</c>
            </div>
            <div className="second">
              <li>จุดหมายปลายทาง</li>
              <c>test</c>
            </div>
            <div className="third">
              <li>วันที่</li>
              <li><c>test</c></li>
            </div>
            <div className="fouth">
              <li>พาหนะ</li>
              <li><c>test</c></li>
            </div>
            <div className="fifth">
              <li>คนขับ</li>
              <li><c>test</c></li>
            </div>
            <div className="contect">
              <c>- ช่องทางการติดต่อคนขับ -</c>
              <div className="drivercontect">
                <li>081-xxx-xxxx</li>
                <li>line id</li>
              </div>
              </div>
            <div className="Info">
              <c>- ข้อมูลส่วนตัว -</c>
              <div className="Name">
                <li>ชื่อ</li>
                <c>test</c>
              </div>
              <div className="Lastname">
                <li>นามสกุล</li>
                <c>test</c>
              </div>
              <div className="Number">
                <li>เบอร์โทรศัพท์</li>
                <c>test</c>
              </div>
              <div className="Passenger">
                <li>จำนวนผู้โดยสาร</li>
                <c>test</c>
              </div>
            </div>
            <div className="button">
            <div className="edit">
              <button>แก้ไข</button>
            </div>
            <div className="okay">
              <button>ยืนยัน</button>
            </div>
            </div>
              
          </div>;
};

export default Reservation3;

