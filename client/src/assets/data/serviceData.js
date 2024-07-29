import weddingcar from "../all-images/service-image/wedding-car.jpeg";
import cartrip from "../all-images/service-image/car-trip.jpg";
import citytransfer from "../all-images/service-image/taxi.jpg";
import airporttransfer from "../all-images/service-image/airport-transfer.jpg";
import unlimiteddrive from "../all-images/service-image/unlimited-drive.avif";
import pickup from "../all-images/service-image/pick-up.jpeg";

const serviceData = [
  {
    id: 1,
    title: "Self Drive Car Rental",
    image: unlimiteddrive,
    desc: "Experience the freedom of exploring at your own pace with our self-drive car rental services. Enjoy unlimited miles and no hidden charges as you take the wheel and discover new destinations.",
  },
  {
    id: 2,
    title: "Airport Pickup and Drop",
    image: airporttransfer,
    desc: "Ensure a seamless journey with our airport pickup and drop services. We offer timely and comfortable transportation to and from the airport, so you can focus on your travel plans without the hassle.",
  },
  {
    id: 3,
    title: "Taxi Services",
    image: citytransfer,
    desc: "Our reliable taxi services are available around the clock to get you to your destination safely and efficiently. Whether it’s a business meeting or a night out, we’ve got you covered.",
  },
  {
    id: 4,
    title: "Wedding Cars and Super Bikes",
    image: weddingcar,
    desc: "Make a grand entrance on your special day with our luxurious wedding cars and super bikes. Choose from our premium fleet to match your style and ensure a memorable ride.",
  },
  {
    id: 5,
    title: "Whole City Tour",
    image: cartrip,
    desc: "Explore the city’s iconic landmarks and hidden gems with our whole city tour. Our expert guides will provide insights and stories, making your tour both informative and enjoyable.",
  },
  {
    id: 6,
    title: "Many Pickup Locations",
    image: pickup,
    desc: "For your convenience, we offer numerous pickup locations across the city. Whether you’re at home, work, or a popular spot, find a nearby location to easily start your journey.",
  },
];

export default serviceData;
