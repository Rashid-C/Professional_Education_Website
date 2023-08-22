import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Plants from '../components/pages/Plants/Plants';  
import Courses from '../components/pages/Courses/Courses';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import ContactUs from '../components/pages/ContactUs/ContactUs';
import Support from '../components/pages/Supports/Support';

function LayoutRoutes() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} /> 
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default LayoutRoutes;
