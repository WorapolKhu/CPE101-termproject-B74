import React from "react";
import "./pagereserve.scss";
import bg from "./bg2x.png";
import { Link } from "react-router-dom";

const Information=()=> {
    return (
        <div id="reversation__1">
        <img id="bgr" src={bg} alt="bg"/>
        <div id="border">
        <svg className="Rectangle_52">
            <rect id="Rectangle_52" rx="30" ry="30" width="439" height="223" />
        </svg>
        <svg className="Rectangle_51">
            <rect id="Rectangle_51" rx="30" ry="30" width="439" height="223" />
        </svg>
        <svg className="Rectangle_23">
            <rect id="Rectangle_23" rx="50" ry="50" width="1158" height="737"  />
        </svg>
        <div id="Group_7">
            <svg className="Line_3" viewBox="0 0 191 4">
                <path id="Line_3" d="M 0 0 L 191 0">
                </path>
            </svg>
        </div>
        <div id="Group_8">
            <svg className="Line_3_y" viewBox="0 0 191 4">
                <path id="Line_3_y" d="M 0 0 L 191 0">
                </path>
            </svg>
        </div>
        <div id="headtext">
            <li className="col11">
                <span>วันที่จอง</span>
                <span>วันที่เดินทาง</span>
                <span>จาก</span>
                <span>ถึง</span>
                <span>พาหนะ</span>
                <span>คนขับ</span>
                <span>เบอร์โทรศัพท์</span>
                <span>ราคา</span>
            </li>
        </div>
        <div id="information">
        <li className="col22">
            <span>27/02/2564</span>
            <span>28/02/2564</span>
            <span>กรุงเทพฯ</span>
            <span>ธนบุรี</span>
            <span>Taxi</span>
            <span>นายสมมติ เดอะไดร์ฟเวอร์</span>
            <span>081-111-1111</span>
            <span>20 บาท</span>
        </li>
        </div>
        <svg className="Ellipse_10">
            <ellipse id="Ellipse_10" rx="140" ry="140" cx="140" cy="140">
            </ellipse>
        </svg>
        <div id="Group_39">
            <svg className="Rectangle_25_bb">
                <linearGradient id="Rectangle_25_bb" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">
                    <stop offset="0" stopColor="#dd9fdf" stopOpacity="1"></stop>
                    <stop offset="0.0781" stopColor="#d382f5" stopOpacity="1"></stop>
                    <stop offset="1" stopColor="#a485cd" stopOpacity="1"></stop>
                </linearGradient>
                <rect id="Rectangle_25_bb" rx="24" ry="24" x="0" y="0" width="187" height="48">
                </rect>
            </svg>
            <div id="Text">
                <span>ยกเลิกการจอง</span>
            </div>
        </div>
        <div id="RESERVATION">
            <span>RESERVATION</span>
        </div>
        <svg className="Line_12" viewBox="0 0 316 1">
            <path id="Line_12" d="M 0 0 L 316 0" />
        </svg>
        <div id="HISTORY">
        <Link to="/history">
            <span>HISTORY</span>
        </Link>
        </div>
        <div id="Group_43">
            <svg className="Ellipse_8">
                <ellipse id="Ellipse_8" rx="36" ry="37" cx="36" cy="37">
                </ellipse>
            </svg>
            <div id="n3">
                <span>3</span>
            </div>
            <div id="n3t">
                <span>รอวันเดินทาง</span>
            </div>
        </div>
        <div id="Group_42">
            <div id="n2t">
                <span>รอการยืนยัน</span>
            </div>
            <svg className="Ellipse_11">
                <ellipse id="Ellipse_11" rx="36" ry="37" cx="36" cy="37">
                </ellipse>
            </svg>
            <div id="n2">
                <span>2</span>
            </div>
        </div>
        <div id="Group_41">
            <div id="Group_10">
                <svg className="Ellipse_7">
                    <ellipse id="Ellipse_7" rx="37" ry="37" cx="37" cy="37">
                    </ellipse>
                </svg>
            </div>
            <div id="n1t">
                <span>ทำการจอง </span>
            </div>
            <div id="n1">
                <span>1</span>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Information;