import React from 'react';
import Hero from '../../components/Hero/Hero';
import Logos from '../../components/Logos/Logos';
import About from '../../components/About/About';
import Services from '../../Components/Services/Services';
import Stats from '../../Components/Stats/Stats';
import VideoSection from '../../Components/VideoSection/VideoSection.jsx';
import Testimonials from '../../Components/Testimonials/Testimonials.jsx';
import Footer from '../../Components/Footer/Footer.jsx';


const Home = () => {
  return (
    <main>
      <Hero />
      <Logos />
      <About />
      <Services/>
      <Stats/>
  
<VideoSection />
<Testimonials/>
<Footer/>
    </main>
  );
};

export default Home;