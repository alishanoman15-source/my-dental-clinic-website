import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Services Pages Imports
import AllServices from './pages/Services/AllServices';
import GeneralDentistry from './pages/Services/GeneralDentistry';
import CosmeticDentistry from './pages/Services/CosmeticDentistry';
import Orthodontics from './pages/Services/Orthodontics';
import PediatricDentistry from './pages/Services/PediatricDentistry';
import PreventiveDentistry from './pages/Services/PreventiveDentistry';
import RestorativeDentistry from './pages/Services/RestorativeDentistry';

// Pages Folder Mapping Imports
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import Contact from './pages/Contact/Contact';
import Dentists from './pages/Dentists/Dentists';
import FAQ from './pages/FAQ/FAQ';
import Gallery from './pages/Gallery/Gallery';
import Testimonials from './pages/Testimonials/Testimonials';

// 🛠️ 1. Naye Appointment Page Ka Import Add Kiya
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <>
      {/* ScrollToTop aur Navbar ko bina Router tag ke yahan rakhein kyunke main.jsx handle kar raha hai */}
      <ScrollToTop />
      
      <div className="w-full min-h-screen relative">
        <Navbar />
        
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Services Dropdown Routes */}
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/pediatric-dentistry" element={<PediatricDentistry />} />
          <Route path="/services/preventive-dentistry" element={<PreventiveDentistry />} />
          <Route path="/services/restorative-dentistry" element={<RestorativeDentistry />} />

          {/* Main Sub-pages Routes */}
          <Route path="/dentists" element={<Dentists />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🛠️ 2. Naye Appointment Page Ki Active Routing Entry Add Kar Di */}
          <Route path="/appointment" element={<Appointment />} />

          {/* Pages Dropdown List Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </>
  );
}

export default App;