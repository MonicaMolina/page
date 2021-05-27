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
            <Footer />
        </div>
        );
    }

export default Home;