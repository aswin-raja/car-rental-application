import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
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
  {
    path: "#testimonials",
    display: "Testimonials",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +91 80984 36516
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
            </Col>
          </Row>
        </Container>
      </div>



      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <a
                    href={item.path}
                    
                    key={index}
                  >
                    {item.display}
                  </a>
                ))}
              </div>
              
            </div>

            <div className="nav__right">

             <button className="header__btn btn">
                <a href="tel:+918098436516">
                  <i class="ri-phone-line"></i> Enquire Now
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
