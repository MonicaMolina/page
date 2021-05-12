import Card from './card';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import iconIMG from "./img/logog.png";
import iconIMGd from "./img/Logo.png";
import Carousel from 'react-bootstrap/Carousel';
import video from "./img/video.mp4";
import plataforma from "./img/plataforma.mov";
import banner from "./img/665C2A21-59E6-437F-8B8D-405215BBB996_1_105_c.jpeg";

function App() {
  return (
    <div className="body App">
    <ReactBootStrap.Navbar bg="" expand="lg" sticky="top">
    <ReactBootStrap.Navbar.Brand href="#">
      <img id="Icon" src={iconIMG} className="img-bottom" alt="Card End"/>
      <img id="Icond" src= {iconIMGd} className="img-top" alt="Card Front" />
      Mónica Molina</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
    <ReactBootStrap.Navbar.Collapse id="navbarScroll">
      <ReactBootStrap.Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
      >
        <ReactBootStrap.Nav.Link href="#action1">Acerca de mí</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#action2">Molina Consultores</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Link" id="navbarScrollingDropdown">
          <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.Nav.Link href="#">
          Contacto
        </ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Form className="d-flex">
        <ReactBootStrap.FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <ReactBootStrap.Button variant="outline-success">Búsqueda</ReactBootStrap.Button>
      </ReactBootStrap.Form>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        <div id="gallery" className="row col-12">
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
</div>
<div className="container d-flex justify-content-center align-items-center">
      <div className="col-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      </div>
    </div>
  );
}

export default App;
