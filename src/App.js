import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/footer';
import { Router } from '@reach/router';
import Home from './views/home';




function App() {
  return (
    <div className="body App">
      <Navbar />
      <Router>
      <Home path="/" 
      />
      </Router>
      <Footer />
</div>
  );
}

export default App;
