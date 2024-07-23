import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import Header from '../components/Header/Header';
import { Container, Row, Col } from 'reactstrap';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import CarListing from './CarListing';
import Contact from './Contact';

const Home = () => {
  return (
    <Helmet title="Home" id="home">
      <Header />
      
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      {/* =========== car offer section ============= */}
      <section id="cars">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">What We Offer</h2>
            </Col>
            <CarListing />
          </Row>
        </Container>
      </section>

      {/* =========== about section ================ */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ========== services section ============ */}
      <section id="service">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See Our</h6>
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
              <h6 className="section__subtitle">Our Clients Say</h6>
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

      {/* =============== blog section ============ */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore Our Blogs</h6>
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
