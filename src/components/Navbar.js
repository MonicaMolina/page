import * as ReactBootStrap from "react-bootstrap";
import iconIMG from "../img/logog.png";
import iconIMGd from "../img/Logo.png";
import './Navbar.css';

function Navbar() {
    return (
      <ReactBootStrap.Navbar bg="" expand="lg" sticky="top">
      <ReactBootStrap.Navbar.Brand href="/page">
        <img id="Icon" src={iconIMG} className="img-bottom" alt="Card End"/>
        <img id="Icond" src= {iconIMGd} className="img-top" alt="Card Front" />
        Mónica Molina</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
      <ReactBootStrap.Navbar.Collapse id="navbarScroll">
        <ReactBootStrap.Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        >
          <ReactBootStrap.Nav.Link href="/Biography">Acerca de mí</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Molina Consultores</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Link" id="navbarScrollingDropdown">
            <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
          <ReactBootStrap.Nav.Link href="/Contact">
            Contacto
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        {/* <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">Búsqueda</ReactBootStrap.Button>
        </ReactBootStrap.Form> */}
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        );
        }

export default Navbar;