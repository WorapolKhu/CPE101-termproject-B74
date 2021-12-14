import React, { useEffect, useState } from "react";
import { getDatabase, ref, push , set } from "firebase/database";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    //generate a unique id for the user
    var UserId = localStorage.getItem("UserId");
    if (UserId === null) {
        localStorage.setItem("UserId", uuid());
        UserId = localStorage.getItem("UserId");
    }
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
    const toggleLogin = () => { setLoginPopup(!LoginPopup); 
    } // sign up
    
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

    const [signup, setsignup] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin((values) => ({ ...values, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //database sent
        set(push(ref(getDatabase(), 'users/' + UserId)), {
            login
        })
        .then(() => {
            console.log("data saved success");
        });
        setLoginPopup(!LoginPopup);
      }
      
      const handleChangeSignup = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setsignup((values) => ({ ...values, [name]: value }));
    };

    const handleSubmitSignup = (event) => {
        event.preventDefault();
        console.log(signup);
        //database sent
        set(push(ref(getDatabase(), 'users/' + UserId + '/signup/')), {
            name: signup.name,
            email: signup.email,
            password: signup.password,
            phone: signup.phone,
            id: UserId
        })
        .then(() => {
            console.log("data saved success");
        });
        setSignupPopup(!SignupPopup);
      }
    return (
        <>
            <div className={navbarClasses.join(" ")}>
                <div className="logo">
                    <li><Link id="logo" to="/">B74</Link></li>
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
                                        <input type="name" name="name" value={signup.name} onChange={handleChangeSignup} placeholder="type your name" className="borderless2" required/>
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="emailInput">
                                    <div className="topic">
                                        <p>Email</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/blueEmail.svg" alt="email-icon" />
                                        <input type="email" name="email" value={signup.email} onChange={handleChangeSignup} placeholder="type your email" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="passwordInput">
                                    <div className="topic">
                                        <p>Password</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/bluePassword.svg" alt="password-icon" />
                                        <input type="password" name="password" value={signup.password} onChange={handleChangeSignup} placeholder="type your password" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>

                                <div className="contactInput">
                                    <div className="topic">
                                        <p>Contact</p>
                                    </div>
                                    <div className="inputBox">
                                        <img className="Icon" src="/blueContact.svg" alt="contact-icon" />
                                        <input type="phonenumber" name="phone" value={signup.phone} onChange={handleChangeSignup} placeholder="type your Phone number" className="borderless2" />
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                            <div className="button">
                                <button type="button "onClick={handleSubmitSignup} className="signupButton">
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
                                    <button type="button" onClick={handleSubmit} className="loginButton">
                                        login
                                    </button>
                                    <button type="button" onClick={SignupOpen} className="signupButton">
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
