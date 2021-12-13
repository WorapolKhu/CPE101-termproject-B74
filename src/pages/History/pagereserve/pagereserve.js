import React from "react";
import "./pagereserve.css";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div id="reversation">
      <div className="wrapper">
        <div className="container">
          {/* Seletion Bar----------------------------------------- */}
          <div className="head-cta">
            <div className="reservation-cta">
              <span>RESERVATION</span>
            </div>
            <div className="history-cta active">
              <Link to="/history">
                <span>HISTORY</span>
              </Link>
            </div>
          </div>
          {/* Process ----------------------------------------- */}
          <div className="processes">
            <div className="process">
              <h3>1</h3>
              <p>ทำการจอง</p>
            </div>
            <div className="line">
              <div className="THICC-line">
                <div className="normal-line"></div>
              </div>
            </div>
            <div className="process current-status">
              <h3>2</h3>
              <p>รอการยืนยัน</p>
            </div>
            <div className="line">
              <div className="THICC-line">
                <div className="normal-line"></div>
              </div>
            </div>
            <div className="process">
              <h3>3</h3>
              <p>รอวันเดินทาง</p>
            </div>
          </div>
          <div className="another-normal-line-container">
            <div className="another-normal-line"></div>
          </div>
          {/* Detail ----------------------------------------- */}
          <div className="detail">
            <ul className="trip-info">
              <li>
                <h4>วันที่จอง</h4>
                <p>27/02/2564</p>
              </li>
              <li>
                <h4>วันที่เดินทาง</h4>
                <p>28/02/2564</p>
              </li>
              <li>
                <h4>จาก</h4>
                <p>กรุงเทพฯ</p>
              </li>
              <li>
                <h4>ถึง</h4>
                <p>ธนบุรี</p>
              </li>
              <li>
                <h4>พาหนะ</h4>
                <p>Taxi</p>
              </li>
              <li>
                <h4>คนขับ</h4>
                <p>นายสมมติ เดอะไดร์ฟเวอร์</p>
              </li>
              <li>
                <h4>เบอร์โทรศัพท์</h4>
                <p>081-111-1111</p>
              </li>
              <li>
                <h4>ราคา</h4>
                <p>20 บาท</p>
              </li>
            </ul>
            <div className="img-container">
              <img
                src="https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1133765664?k=20&m=1133765664&s=612x612&w=0&h=IOSO-4b6XY7zxsCh217kHQe4z_irnwuBa_-caEZ4DNI="
                alt="driverImg"
              />
            </div>
            <div className="cancle-cta">
              <Link to="/">ยกเลิกการจอง</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
