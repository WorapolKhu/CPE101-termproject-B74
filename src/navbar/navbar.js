import React,{useEffect} from "react";
import "./navbar.scss";

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
  const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
  return (
    <header className={navbarClasses.join(" ")}>
        <div className="logo">
            <li><a href="#">B74&ensp;&emsp;&thinsp;</a></li>
        </div>
        <nav className="navigation">
            <li><p>&thinsp;<a href="#">Home</a>&thinsp;</p></li>
            <li><p>&thinsp;<a href="#">Vehicle</a>&thinsp;</p></li>
            <li><p>&thinsp;<a href="#">Driver</a>&thinsp;</p></li>
            <li><p>&thinsp;<a href="#">Reservation</a>&thinsp;</p></li>
        </nav>
        <nav className="Subnavigation">
            <li><p>&thinsp;<a href="#">หน้าหลัก</a>&emsp;</p></li>
            <li><p><a href="#">พาหนะ</a>&emsp;&emsp;&thinsp;</p></li>
            <li><p><a href="#">คนขับ</a>&emsp;&thinsp;&thinsp;&thinsp;</p></li>
            <li><p><a href="#">ประวัติการจอง</a>&emsp;&emsp;</p></li>
        </nav>
        <div className="register">
            <li><a id="signup" href="#">sign up</a><a href="#">login</a></li>
        </div>
    </header>
  );
}
export default Navbar;
