import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { getDatabase, ref, push , set } from "firebase/database";
import { uuid } from "uuidv4";
import "./Res1.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Button from "@restart/ui/esm/Button";

const Res1 = () => {
  var UserId = localStorage.getItem("UserId");
  if (UserId === null) {
    localStorage.setItem("UserId", uuid());
    UserId = localStorage.getItem("UserId");
  }
  const [startDate, setStartDate] = useState(new Date());
  const [payload1, setPayload1] = useState({
    start: "",
    end: "",
    car: "",
    driver: "",
  });
  
  const optionChange = name => value => {
      setPayload1((values) => ({ ...values, [name]: value }));
  };
  const optionSubmit = (e) => {
    e.preventDefault();
      if (payload1.start.value === undefined || payload1.end.value === undefined || payload1.car.value === undefined || payload1.driver.value === undefined) {
      alert("Please fill all the fields");
      }
      else {
      set(ref(getDatabase(), 'users/' + UserId+ '/data/1/'), {
        start: payload1.start.value,
        end: payload1.end.value,
        date: Date.parse(startDate),
       car : payload1.car.value,
       driver : payload1.driver.value,
     })
      .then(() => {console.log("data saved success");});

   }
 }
    const option = [
        {value: 'กรุงเทพฯ', label: 'กรุงเทพฯ'},
        {value: 'กระบี่', label: 'กระบี่'},
        {value: 'กาญจนบุรี', label: 'กาญจนบุรี'},
        {value: 'กาฬสินธุ์', label: 'กาฬสินธุ์'},
        {value: 'กำแพงเพชร', label: 'กำแพงเพชร'},
        {value: 'ขอนแก่น', label: 'ขอนแก่น'},
        {value: 'จันทบุรี', label: 'จันทบุรี'},
        {value: 'ฉะเชิงเทรา', label: 'ฉะเชิงเทรา'},
        {value: 'ชลบุรี', label: 'ชลบุรี'},
        {value: 'ชัยนาท', label: 'ชัยนาท'},
        {value: 'ชัยภูมิ', label: 'ชัยภูมิ'},
        {value: 'ชุมพร', label: 'ชุมพร'},
        {value: 'เชียงราย', label: 'เชียงราย'},
        {value: 'เชียงใหม่', label: 'เชียงใหม่'},
        {value: 'ตรัง', label: 'ตรัง'},
        {value: 'ตราด', label: 'ตราด'},
        {value: 'ตาก', label :'ตาก'},
        {value: 'นครนายก', label: 'นครนายก'},
        {value: 'นครปฐม', label: 'นครปฐม'},
        {value: 'นครพนม', label: 'นครพนม'},
        {value: 'นครราชสีมา', label: 'นครราชสีมา'},
        {value: 'นครศรีธรรมราช', label: 'นครศรีธรรมราช'},
        {value: 'นครสวรรค์', label: 'นครสวรรค์'},
        {value: 'นนทบุรี', label: 'นนทบุรี'},
        {value: 'นราธิวาส', label: 'นราธิวาส'},
        {value: 'น่าน', label: 'น่าน'},
        {value: 'บึงกาฬ', label: 'บึงกาฬ'},
        {value: 'บุรีรัมย์', label: 'บุรีรัมย์'},
        {value: 'ปทุมธานี', label: 'ปทุมธานี'},
        {value: 'ประจวบคีรีขันธ์', label: 'ประจวบคีรีขันธ์'},
        {value: 'ปราจีนบุรี', label: 'ปราจีนบุรี'},
        {value: 'ปัตตานี', label: 'ปัตตานี'},
        {value: 'พระนครศรีอยุธยา', label: 'พระนครศรีอยุธยา'},
        {value: 'พังงา', label: 'พังงา'},
        {value: 'พัทลุง', label: 'พัทลุง'},
        {value: 'พิจิตร', label: 'พิจิตร'},
        {value: 'พิษณุโลก', label: 'พิษณุโลก'},
        {value: 'เพชรบุรี', label: 'เพชรบุรี'},
        {value: 'เพชรบูรณ์', label: 'เพชรบูรณ์'},
        {value: 'แพร่', label: 'แพร่'},
        {value: 'พะเยา', label: 'พะเยา'},
        {value: 'ภูเก็ต', label: 'ภูเก็ต'},
        {value: 'มหาสารคาม', label: 'มหาสารคาม'},
        {value: 'มุกดาหาร', label: 'มุกดาหาร'},
        {value: 'แม่ฮ่องสอน', label: 'แม่ฮ่องสอน'},
        {value: 'ยะลา', label: 'ยะลา'},
        {value: 'ยโสธร', label: 'ยโสธร'},
        {value: 'ร้อยเอ็ด', label: 'ร้อยเอ็ด'},
        {value: 'ระนอง', label: 'ระนอง'},
        {value: 'ระยอง', label: 'ระยอง'},
        {value: 'ราชบุรี', label: 'ราชบุรี'},
        {value: 'ลพบุรี', label: 'ลพบุรี'},
        {value: 'ลำปาง', label: 'ลำปาง'},
        {value: 'ลำพูน', label: 'ลำพูน'},
        {value: 'เลย', label: 'เลย'},
        {value: 'ศรีสะเกษ', label: 'ศรีสะเกษ'},
        {value: 'สกลนคร', label: 'สกลนคร'},
        {value: 'สงขลา', label: 'สงขลา'},
        {value: 'สตูล', label: 'สตูล'},
        {value: 'สมุทรปราการ', label: 'สมุทรปราการ'},
        {value: 'สมุทรสงคราม', label: 'สมุทรสงคราม'},
        {value: 'สมุทรสาคร', label: 'สมุทรสาคร'},
        {value: 'สระแก้ว', label: 'สระแก้ว'},
        {value: 'สระบุรี', label: 'สระบุรี'},
        {value: 'สิงห์บุรี', label: 'สิงห์บุรี'},
        {value: 'สุโขทัย', label: 'สุโขทัย'},
        {value: 'สุพรรณบุรี', label: 'สุพรรณบุรี'},
        {value: 'สุราษฎร์ธานี', label: 'สุราษฎร์ธานี'},
        {value: 'สุรินทร์', label: 'สุรินทร์'},
        {value: 'หนองคาย', label: 'หนองคาย'},
        {value: 'หนองบัวลำภู', label :'หนองบัวลำภู'},
        {value: 'อ่างทอง', label: 'อ่างทอง'},
        {value: 'อุดรธานี', label: 'อุดรธานี'},
        {value: 'อุทัยธานี', label: 'อุทัยธานี'},
        {value: 'อุตรดิตถ์', label: 'อุตรดิตถ์'},
        {value: 'อุบลราชธานี', label: 'อุบลราชธานี'},
        {value: 'อำนาจเจริญ', label: 'อำนาจเจริญ'}
      ];
    const cars = [
      {value: 'Any', label: 'Any'},
      {value: 'Private Car', label: 'Private Car'},
      {value: 'Taxi', label: 'Taxi'},
      {value: 'SUV', label: 'SUV'},
      {value: 'Van', label: 'Van'}
    ];
    const drivers = [
      {value: 'Any', label: 'Any'},
      {value: 'เฟิร์ส', label: 'เฟิร์ส'},
      {value: 'จิ๊บ', label: 'จิ๊บ'},
      {value: 'อู๋', label: 'อู๋'}
    ];
  return (
    <div className="res1">
      <div className="Information">
        <h1>Detail</h1>
        <div className="Destination">
          <li>จุดเริ่มต้น</li>
          <Select id="select" value={payload1.start} onChange={optionChange('start')} placeholder="เลือกจุดเริ่มต้น.." options={option} isSearchable maxMenuHeight={300}/>
        </div>
          <div className="Destination2">
          <li>จุดหมายปลายทาง</li>
          <Select id="select" value={payload1.end} onChange={optionChange('end')} placeholder="เลือกจุดปลายทาง.." options={option} isSearchable maxMenuHeight={300} />
          </div>
        <div className="Date">
          <li>วันที่</li>
          <calendar>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </calendar>
        </div>
        <div className="Car">
          <li>รถโดยสาร</li>
          <Select id="select" value={payload1.car} onChange={optionChange('car')} placeholder="เลือกรถโดยสาร.." options={cars} />
        </div>
        <div className="Driver">
          <li>คนขับ</li>
          <Select id="select" value={payload1.driver} onChange={optionChange('driver')} placeholder="เลือกคนขับ.." options={drivers} />
        </div>
        <div className="Next">
          <button type="button" id="button" onClick={optionSubmit}><Link to="/reservation-info" className="btn">ถัดไป</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Res1;
