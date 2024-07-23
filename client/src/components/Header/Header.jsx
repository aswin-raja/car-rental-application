import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import Logo from "../../assets/all-images/logo.jpg";
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
  const [showNumberButton, setShowNumberButton] = useState(true);
  const [showCallNowButton, setShowCallNowButton] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowNumberButton(false);
        setShowCallNowButton(true);
      } else {
        setShowNumberButton(true);
        setShowCallNowButton(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div>
              <img src={Logo} alt="logo" className="logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <a href={item.path} key={index}>
                    {item.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="nav__right">
              {/* Button with number */}
              {showNumberButton && (
                <button className="header__btn btn">
                  <a href="tel:+916374004539">
                    <i className="ri-phone-line"></i> +916374004539
                  </a>
                </button>
              )}

              {/* "Call Now" button */}
              {showCallNowButton && (
                <button className="header__btn_mobile btn">
                  <a href="tel:+916374004539">
                    <i className="ri-phone-line"></i> Call Now
                  </a>
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
