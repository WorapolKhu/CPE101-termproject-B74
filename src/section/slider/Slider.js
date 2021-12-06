import React from "react";
import './slider.scss';

const Slider = (props) => {
    return (
        <div className="driver2">
            <h1>Driver</h1>
            <h3>คนขับ</h3>
        <div className="cards">
            <div className="slideImage">
                <img className="image" src="1.jpg" alt="driver1"/>
            </div>
            <div className="insideCard">
                <div className="sliderText">
                    <a href="#">ศรัณย์ญรัชต์  วงศ์สาสนธิ์</a>
                    <img className="starIcon" src="yellowStar.svg" alt="starIcon" />
                    <span> 4.2/5 จาก 125 รีวิว</span>
                </div>
                <img className="carType" src="purplePrivatecar" alt="privatecarIcon"/>
            </div>
        </div>
        </div>
    );
}

export default Slider;
