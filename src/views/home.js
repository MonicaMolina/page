import Card from '../components/card';
import Carousel from '../components/Carousel';
import Hero from '../components/hero';

function Home() {
    return(
        <div className= "container-fluid Body-Home">
            <div id="hero" className="row d-blok w-100">
            <Hero />
            </div>
            <div id="gallery" className="row col-12">
            <Carousel />
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

export default Home;