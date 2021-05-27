import Carousel from 'react-bootstrap/Carousel';
import video from "../img/video.mp4";
import plataforma from "../img/plataforma.mov";
import banner from "../img/mapa.png";
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
        <h3>Datos Geográficos</h3>
        <p>Herramientas para la toma de decisiones con datos de movilidad y censales de INEGI.</p>
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
        <h3>Plataforma Electoral en contrucción</h3>
        <p>Actualmente estoy trabajando en el desarrollo de una herramienta electoral que permita visualizar todas las elecciones locales y federales desde el 2000 hasta el nivel seccional.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Ingeniería Electoral</h3>
        <p>Estrategia electoral basada en datos muestrales, censales y proyección electoral.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Carrucel;