import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/footer';
import { Router } from '@reach/router';
import Home from './views/home';
import Bio from './views/Bio';
import Contact from './views/Contact';



function App() {
  return (
    <div className="body App">
      <Navbar />
      <Router>
      <Home path="/page" 
      />
      <Bio path="/Biography"
      />
      <Contact path="/Contact"
      />
      </Router>
      <Footer />
</div>
  );
}

export default App;
