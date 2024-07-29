import React, {useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CarItem from '../components/UI/CarItem';
// import carData from '../assets/data/carData';

const CarListing = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vdrive.in/index.php/cars', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer mysecuretoken',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data, 'API data');
        setCarData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <Helmet title="Cars">
      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
