import './App.css';
import NavBar from './components/navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
