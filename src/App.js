import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/footer';
import Home from './views/home';

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
