import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  return (
    <div className="body App">
      <Navbar />
      <Home />
      <Footer />
</div>
  );
}

export default App;
