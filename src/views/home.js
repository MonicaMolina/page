import Card from '../components/Card';
import Carrucel from '../components/Carousel';
import Hero from '../components/Hero';
import Aboutme from '../components/Aboutme';

function Home() {
    return(
        <div className= "container-fluid Body-Home">
            <Hero />
            <Aboutme />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-6">
                <Card />
                </div>
            </div>
            <Carrucel />
        </div>
        );
    }

export default Home;