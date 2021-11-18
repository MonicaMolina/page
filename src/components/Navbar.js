// import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconIMG from "../img/logog.png";
import './Navbar.css';

function Navb() {
  return (
<Navbar bg="" expand="lg" sticky="top">
  <Navbar.Brand href="/page"> <img id="Icon" src= {iconIMG} alt=""/> Mónica Esther Molina Jasso</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="mr-auto my-2 my-lg-0">
      <Nav.Link href="#Aboutme">Acerca de mí</Nav.Link>
      <Nav.Link href="#Component">Molina Consultores</Nav.Link>
      <NavDropdown title="Currículum" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#trayectoria">Trayectoria Laboral</NavDropdown.Item>
        <NavDropdown.Item href="#trayectoriaI">Trabajos de investigación</NavDropdown.Item>
        <NavDropdown.Item href="#trayectoriaA">Formación Académica</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/">English</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
        }

export default Navb;