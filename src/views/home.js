import Card from '../components/Card';
import Educacion from '../components/Educacion';
import Investigacion from '../components/Investigacion';
import Carrucel from '../components/Carrucel';
import Hero from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import iconIMG from "../img/logog.png";
import './Home.css';

function Home() {
    return(
        <div className= "Body-Home">
            <Navbar />
            <Hero />
            <Aboutme />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-6">
                <p id="trayectoria">Trayectoria Laboral</p>
                <Card />
                <p id="trayectoriaI">Trabajos de Investigación</p>
                <Investigacion />
                <p id="trayectoriaA">Trayectoria Académica</p>
                <Educacion />
                </div>
            </div>
            <p id="Component"><img id="Icon" src= {iconIMG} alt=""/> Molina Consultores</p>
            <Carrucel />
            <div id="Contact" className="row w-100">
            <div className="col-2"></div>
            <div className="col-8">
            <p>¿Te interesa colaborar conmigo o tienes alguna propuesta laboral?</p>
            <p>Contáctame por cualquiera de los medios que aparecen abajo. </p>
            </div>
            <div className="col-2"></div>
            </div>
            <Footer />
        </div>
        );
    }

export default Home;