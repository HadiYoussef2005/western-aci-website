import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Events from './Events';
import Executives from './Executives'
import Navbar from './Navbar';
import Footer from './Footer';

const coolBackground = {
  backgroundImage: 'url(https://cdn.dribbble.com/users/2156796/screenshots/19992280/media/7d2ee3a4d15d1f335419059066067694.gif)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100%',
  margin: 0,
}

const FullHome = () => {
  return <div style={coolBackground}>
    <Navbar />
    <Home />
    <Footer />
  </div>
}
const FullAbout = () => {
  return <>
    <Navbar />
    <About />
    <Footer />
  </>
}
const FullEvents = () => {
  return <>
    <Navbar />
    <Events />
    <Footer />
  </>
}
const FullExecutives = () => {
  return <>
    <Navbar />
    <Executives />
    <Footer />
  </>
}

const App = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<FullHome />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<FullAbout />} />
        </Routes>
        <Routes>
          <Route path="/executives" element={<FullExecutives />} />
        </Routes>
        <Routes>
          <Route path="/events" element={<FullEvents />} />
        </Routes>
      </Router>
  );
};

export default App;
