import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home.';
import Services from './pages/Services';
import Pricing from './pages/Pricing.';
import Blog from './pages/Blogs.';
import Pages from './pages/Pages';
import Contact from './pages/Contacts.';
import Footer from './components/Footer';


function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About /> } />
        <Route path='/:Services' element={<Services />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Portifolio' element={<Blog />} />
        <Route path='/Blog' element={<Pages />} />
        <Route path='/Pages' element={<pages />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
