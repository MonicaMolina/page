import Card from './card';
import Navbar from './Navbar';
import './App.css';
import Carousel from './Carousel';
import Hero from './hero';
import Footer from './footer';


function App() {
  return (
    <div className="body App">
      <Navbar />
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
<Footer />
</div>
  );
}

export default App;
