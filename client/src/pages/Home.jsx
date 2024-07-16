import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import Header from "../components/Header/Header";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarListing from "./CarListing";
import Contact from "./Contact";


const Home = () => {
  return (
    <Helmet title="Home" id="home">
       <Header />
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
       
        {/* <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>

            {/* =========== car offer section ============= */}
            <section id="cars">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {/* {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
            <CarListing />
          </Row>
        </Container>
      </section>
      {/* =========== about section ================ */}
      <section  id="about">
      <AboutSection />
      </section>

      {/* ========== services section ============ */}
      <section id="service">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

  

      {/* =========== testimonial section =========== */}
      {/* <section id="testimonials">
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section> */}

      <section id="contact">
        <Container>
        <Contact />
        </Container>
      </section>

      {/* =============== blog section ===========
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
