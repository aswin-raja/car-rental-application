import React, { useRef } from "react";
import { Container, } from "reactstrap";
import Logo from "../../assets/all-images/logo.png"
import "../../styles/header.css";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#cars",
    display: "Cars",
  },
  {
    path: "#about",
    display: "About",
  },

  {
    path: "#service",
    display: "Service",
  },

];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +91 80984 36516
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
            </Col>
          </Row>
        </Container>
      </div> */}



      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            {/* <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span> */}
            <div >
              <img src={Logo} alt="logo" className="logo"/>
            </div>  

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
             
              <div className="menu">
                {navLinks.map((item, index) => (
                  <>
                  <a
                    href={item.path}
                    
                    key={index}
                  >
                    {item.display}
                  </a>
                
                  </>
                ))}
              </div>
              
            </div>

            <div className="nav__right">

             <button className="header__btn btn">
                <a href="tel:+916374004539">
                  <i className="ri-phone-line"></i> +916374004539
                </a>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
