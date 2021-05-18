import Carousel from 'react-bootstrap/Carousel';
import video from "../img/video.mp4";
import plataforma from "../img/plataforma.mov";
import banner from "../img/665C2A21-59E6-437F-8B8D-405215BBB996_1_105_c.jpeg";
import './Carousel.css';

function Carrucel() {
    return (
        <Carousel>
    <Carousel.Item interval={8000}>
      <video
        className="d-block w-100"
        src={video}
        alt="First slide"
        autoPlay loop
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={16000}>
    <video
        className="d-block w-100"
        src={plataforma}
        alt="Second slide"
        autoPlay loop
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Carrucel;