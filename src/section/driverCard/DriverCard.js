import React from "react";
import './DriverCard.scss';

const Drivercard = (props) => {
    const imageByCarType = {
        'van': '/blackVan.svg',
        'taxi': '/blackTaxi.svg',
        'privateCar': '/blackPrivateCar.svg',
        'SUV': '/blackSUV.png'
    }

    return (
        <>
            <div className="cards">
                <div className="slideImage">
                    <img className="image" src={props.img} alt={props.name} />
                    <div className="overlay">
                        <a href="/#" className="readallButton">REVIEW</a>
                    </div>
                </div>
                <div className="insideCard">
                    <div className="sliderText">
                        <a href="/#">{props.name}</a>
                        <li className="review">
                            <img className="starIcon" src="yellowStar.svg" alt="starIcon" />
                            <span className="score">{props.score}/5 ( {props.review} รีวิว )</span>
                        </li>
                    </div>
                    <img className="carType" src={imageByCarType[props.carType]} alt={props.carType} />
                </div>
            </div>
        </>
    );
}

export default Drivercard;
