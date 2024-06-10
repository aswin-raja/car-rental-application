import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortOption, setSortOption] = useState("");
  const [carData, setCarData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/cars', {
          method: 'GET'
        });
        const data = await response.json();
        console.log(data,"api data");
        setCarData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };


  const sortedCarData = [...carData].sort((a, b) => {
    if (sortOption === "low") {
      return a.price - b.price;
    } else if (sortOption === "high") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Helmet title="Cars">
      {/* <CommonSection title="Car Listing" /> */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange} value={sortOption}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
