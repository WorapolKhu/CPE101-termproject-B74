import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    let navbarClasses = ["navbar"];
    if (scrolled) {
        navbarClasses.push("scrolled");
    }

    const [LoginPopup, setLoginPopup] = useState(false);
    const toggleLogin = () => { setLoginPopup(!LoginPopup); } // sign up
    if (LoginPopup) {
        document.body.classList.add('active-LoginPopup')
    } else {
        document.body.classList.remove('active-LoginPopup')
    }

    const [SignupPopup, setSignupPopup] = useState(false);
    const toggleSignup = () => { setSignupPopup(!SignupPopup); } // sign up
    if (SignupPopup) {
        document.body.classList.add('active-SignupPopup')
    } else {
        document.body.classList.remove('active-SignupPopup')
    }

    const SignupOpen = () => { // sign in
        toggleSignup();
        toggleLogin();
    }

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        //put input in array state
        const name = event.target.name;
        const value = event.target.value;
        setLogin((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        //submit array state to database
        event.preventDefault();
        console.log("submit value", login); //line connect database
    };

    return (
        <>
            <div className={navbarClasses.join(" ")}>
                <div className="logo">
                    <li><Link to="/">B74</Link></li>
                </div>
                <nav className="navigation">
                    <li><p>&thinsp;<Link to="/">Home</Link>&thinsp;</p></li>
                    <li><p><Link to="/">Vehicle</Link>&thinsp;&thinsp;</p></li>
                    <li><p><Link to="/">Driver</Link>&thinsp;</p></li>
                    <li><p><Link to="/myticket">Reservation</Link></p></li>
                </nav>
                <nav className="Subnavigation">
                    <li><p><Link to="/">หน้าหลัก</Link>&emsp;&thinsp;</p></li>
                    <li><p><Link to="/">พาหนะ</Link>&emsp;&emsp;&thinsp;</p></li>
                    <li><p><Link to="/">คนขับ</Link>&emsp;&thinsp;&thinsp;&thinsp;</p></li>
                    <li><p><Link to="/myticket">ประวัติการจอง</Link>&emsp;&emsp;</p></li>
                </nav>
                <div className="register">
                    <li>
                        <span onClick={toggleSignup} className="Signup">
                            Sign up
                        </span>
                        <span onClick={toggleLogin} className="Login">
                            Login
                        </span>
                    </li>
                </div>
            </div>

            {SignupPopup && (
                <>
                    <div onClick={toggleSignup} className="blurBackground2"></div>
                    <div className="signup">
                        <div className="box2">
                            <span className="close" onClick={toggleSignup}>x</span>
                            <div className="bseven" align="center">
                                B74
                            </div>
                            <div className="afterBseven">

                                <div className="nameInput">
                                    <div className="topic">
                                        <p>Name</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/blueName.svg" alt="name-icon" />
                                        <input type="name" placeholder="type your name" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="emailInput">
                                    <div className="topic">
                                        <p>Email</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/blueEmail.svg" alt="email-icon" />
                                        <input type="email" placeholder="type your email" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="passwordInput">
                                    <div className="topic">
                                        <p>Password</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/bluePassword.svg" alt="password-icon" />
                                        <input type="password" placeholder="type your password" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="contactInput">
                                    <div className="topic">
                                        <p>Contact</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/blueContact.svg" alt="contact-icon" />
                                        <input type="phonenumber" placeholder="type your Phone number" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                            <div className="button">
                                <button onClick={toggleSignup} className="signupButton">
                                    sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {LoginPopup && (
                <>
                    <div onClick={toggleLogin} className="blurBackground"></div>
                    <div className="containerr">
                        <div>
                            <img className="image" src="/image2.jpg" />
                        </div>
                        <div className="login">
                            <span className="close" onClick={toggleLogin} align="right">x</span>
                            <div className="B74" align="center">
                                B74
                            </div>
                            <div className="afterB74">
                                <div className="emailInput">
                                    <div className="topic">
                                        <p>Email</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="emailIcon" src="/greyEmail.svg" alt="email-icon" />
                                        <input
                                            type="email"
                                            placeholder="type your email"
                                            className="borderless"
                                            value={login.email}
                                            onChange={handleChange}
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="passwordInput">
                                    <div className="topic">
                                        <p>Password</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="passwordIcon" src="/greyPassword.svg" alt="password-icon" />
                                        <input
                                            type="password"
                                            placeholder="type your password"
                                            className="borderless"
                                            value={login.password}
                                            onChange={handleChange}
                                            name="password"
                                            required
                                        />
                                    </div>
                                    <div className="line"></div>
                                </div>
                                <div className="buttonLevel">
                                    <button onClick={toggleLogin} className="loginButton">
                                        login
                                    </button>
                                    <button onClick={SignupOpen} className="signupButton">
                                        sign up{' >'}
                                    </button>
                                </div>
                                <div className="forgetPassword">
                                    <p>Forget password?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
