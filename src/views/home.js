import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Iframe from 'react-iframe';

function Home() {
    return(
        <div className= "container-fluid Body-Home">
            <Hero />
            <Aboutme />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-6">
                <Card />
                <div className="row">
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="450px"
                    position="relative"/>
                </div>
                </div>
            </div>
            <Carousel />
        </div>
        );
    }

export default Home;