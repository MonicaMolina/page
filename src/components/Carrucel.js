import Carousel from 'react-bootstrap/Carousel';
import video from "../img/video.mp4";
import plataforma from "../img/plataforma.mov";
import banner from "../img/mapa.png";
import './Carousel.css';

function Carucel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <video
          className="d-block w-100"
          src={video}
          alt="First slide"
          autoPlay loop
        />
        <Carousel.Caption>
        <h3 id="title-video">Datos Geográficos</h3>
        <p id="title-video">Herramientas para la toma de decisiones con datos de movilidad y censales de INEGI.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <video
          className="d-block w-100"
          src={plataforma}
          alt="Second slide"
          autoPlay loop
        />
        <Carousel.Caption>
        <h3 id="title-video">Plataforma Electoral en contrucción</h3>
        <p id="title-video">Actualmente estoy trabajando en el desarrollo de una herramienta electoral que permita visualizar todas las elecciones locales y federales desde el 2000 hasta el nivel seccional.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="mapa"
          className="d-block"
          src={banner}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 id="title-map">Ingeniería Electoral</h3>
        <p id="text-map">Estrategia electoral basada en datos muestrales, censales y proyección electoral.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Carucel;
  