import React from "react";
import { Link } from "react-router-dom";
import "./historypage.scss";
import bg from "./bg2x.png";
import review from "./review.png";

const History=()=> {
    return (
        <div id="History">
            <img id="bg" src={bg} alt="bg"/>
                <div id="border">
                <svg className="Rectanglehis">
                <rect id="Rectanglehis" rx="30" ry="30" width="439" height="223" />
                 </svg>
                <svg className="Rectanglerev">
                <rect id="Rectanglerev" rx="30" ry="30" width="439" height="223" />
                </svg>
                <svg className="Rectanglebg">
                <rect id="Rectanglebg" rx="30" ry="30" width="1158" height="737"  />
                </svg>
                <div id="RESERVATION_">
                <Link to="/myticket">
                    <span>RESERVATION</span>
                </Link>
                </div>
                <div id="HISTORY_">
                    <span>HISTORY</span>
                    <path id="Linemain" d="M 0 0 L 316 0" />
                </div>
                <div className="space">
                <div className="card">
                    <div className="card-body">
                    <svg className="Ellipsehead">
                    <ellipse id="Ellipsehead" rx="55" ry="55" cx="117" cy="77">
                    </ellipse>
                    </svg>
                        <div className="card-text">
                            <div id="col1">
                                <div id="name">
                                    <li className="flexlist-n">
                                    <span>วันที่จอง</span>
                                    <span>จาก</span>
                                    <span>คนขับ</span>
                                    <span>ราคา</span>
                                    </li>
                                </div>
                                <div id="value">
                                <li className="flexlist-v">
                                    <span>27/02/2564</span>
                                    <span>กรุงเทพ</span>
                                    <span>นายสมมติ เดอะไดร์ฟเวอร์</span>
                                    <span>20 บาท</span>
                                </li>
                                </div>
                            </div>
                            <div id="col2">
                            <div id="name">
                                    <li className="flexlist-n2">
                                    <span>วันเดินทาง</span>
                                    <span>ถึง</span>
                                    <div id="Rect">
                                        <img src={review} alt="review"/>
                                        <span>เขียนรีวิว</span>
                                    </div>
                                    </li>
                                </div>
                                <div id="value">
                                    <li className="flexlist-v2">
                                        <span>28/02/2564</span>
                                        <span>ธนบุรี</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        
        </div>

    )
}
export default History;