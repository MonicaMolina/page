import Card from '../components/Card';
import Carrucel from '../components/Carrucel';
import Hero from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    return(
        <div className= "Body-Home">
            <Navbar />
            <Hero />
            <Aboutme />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-6">
                <Card />
                </div>
            </div>
            <Carrucel />
            <Footer />
        </div>
        );
    }

export default Home;