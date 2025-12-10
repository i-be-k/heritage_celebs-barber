import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import WhyChoose from './sections/WhyChoose';
import Pricing from './sections/Pricing';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-purple-700 min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;