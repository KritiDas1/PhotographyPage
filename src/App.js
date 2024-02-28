import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Lazy loaded components
const Home = React.lazy(() => import('./components/home/Home'));
const About = React.lazy(() => import('./components/about/About')); 
const Service = React.lazy(() => import('./components/photoService/Service')); 
const Conact = React.lazy(() => import('./components/contact/Contact')); 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Conact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
