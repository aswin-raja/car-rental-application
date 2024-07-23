import React from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CarItem from '../components/UI/CarItem';
import carData from '../assets/data/carData';

const CarListing = () => {
  // const [carData, setCarData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://3.108.61.37:5000/cars');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log(data, 'API data');
  //       setCarData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
