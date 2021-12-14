import React from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue , query} from "firebase/database";
import { uuid } from "uuidv4";
import "./Res3.css";

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
    data.date = Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data1.date);
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
  console.log(data);
  return (
    <div className="res3">
      <div className="Confirmation">
        <h1>Confirmation</h1>
        <div className="image">test</div>
        <div className="first">
          <li>จุดเริ่มต้น</li>
          <Text text={data.start} />
        </div>
        <div className="second">
          <li>จุดหมายปลายทาง</li>
          <Text text={data.end} />
        </div>
        <div className="third">
          <li>วันที่</li>
          <li>
          <Text text={data.date} />
          </li>
        </div>
        <div className="fouth">
          <li>พาหนะ</li>
          <li>
          <Text text={data.car} />
          </li>
        </div>
        <div className="fifth">
          <li>คนขับ</li>
          <li>
          <Text text={data.driver} />
          </li>
        </div>
        <div className="contect">
          <p>- ช่องทางการติดต่อคนขับ -</p>
          <div className="drivercontect">
            <li>081-xxx-xxxx</li>
            <li>line id</li>
          </div>
        </div>
        <div className="Info">
          <p>- ข้อมูลส่วนตัว -</p>
          <div className="Name">
            <li>ชื่อ</li>
            <Text text={data.name} />
          </div>
          <div className="Lastname">
            <li>นามสกุล</li>
            <Text text={data.lastname} />
          </div>
          <div className="Number">
            <li>เบอร์โทรศัพท์</li>
            <Text text={data.phone} />
          </div>
          <div className="Passenger">
            <li>จำนวนผู้โดยสาร</li>
            <Text text={data.passenger} />
          </div>
        </div>
        <div className="button">
          <div className="edit">
            <button type="button" className="button"><Link className="btn" to="/">แก้ไข</Link></button>
          </div>
          <div className="okay">
          <button type="button" className="button"><Link className="btn" to="/">ยืนยัน</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Res3;
