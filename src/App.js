import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home.';
import Services from './pages/Services';
import Pricing from './pages/Pricing.';
import Blog from './pages/Blogs.';
import Contact from './pages/Contacts.';
import Footer from './components/Footer';
import Portifolio from './pages/Portifolio.';
import Gallery from './pages/Gallery';


function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About /> } />
        <Route path='/Services' element={<Services />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Portifolio' element={<Portifolio />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
