// import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconIMG from "../img/logog.png";
import './Navbar.css';

function Navb() {
  return (
<Navbar bg="" expand="lg" sticky="top">
  <Navbar.Brand href="/page"> <img id="Icon" src= {iconIMG} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="mr-auto my-2 my-lg-0">
      <Nav.Link href="/page#Aboutme">Acerca de mí</Nav.Link>
      <Nav.Link href="/page#Carrucel">Molina Consultores</Nav.Link>
      <NavDropdown title="Currículum" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/page#Card">Trayectoria Laboral</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Trabajos de investigación</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Formación Académica</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Link href="/page#Footer">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
        }

export default Navb;