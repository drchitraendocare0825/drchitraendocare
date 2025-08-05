import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './ContactPage/ContactPage'; // if you have other pages
import FAQ from './homepage/FAQ';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import ScrollTop from './components/ScrollTop';
import Whatsapp from './components/Whatsapp';
import Backend from './Backend/Backend';



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollTop/>
      <Whatsapp/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
         <Route path="/backend" element={<Backend />} />
         
      </Routes>
      <FAQ/>
      <Footer />
    </BrowserRouter>
  );
}
