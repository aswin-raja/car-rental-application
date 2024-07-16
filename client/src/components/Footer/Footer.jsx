import React from "react";
// import Contact from "../../pages/Contact";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5" md="4" sm="12">
            <div className=" footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-1">
                  <i className="ri-car-line"></i>
                  <span>VDrive</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Renting a car offers a flexible solution for travel needs. Whether
              for business or leisure, car rental services provide a range of
              vehicles to suit different preferences. Customers can choose from
              compact cars, sedans, SUVs, and more, ensuring the right fit for
              their journey. Options like insurance coverage and GPS navigation
              enhance the experience, making car rentals a popular choice for
              many travelers
            </p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <a href={item.path}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4" md="5" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Address</h5>
              <p className="office__info">Rajalakshmi Nagar</p>
              <p className="office__info">Parvathipuram, Nagercoil</p>
              <p className="office__info">
                Phone: <a href="tel:+916374004539">+916374004539</a>
              </p>
              <p className="office__info">
                Email: <a href="mailto:info@vdrive.in">info@vdrive.in</a>
              </p>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
          <div className="mb-4">
            <h5 className="footer__link-title">Newsletter</h5>
            <p className="section__description">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </div>
        </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed
                by
                <a href="https://hazotech.com/" target="blank">
                  Hazo Tech Academy
                </a>{" "}
                . All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
