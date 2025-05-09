
import React, { useEffect } from "react";
import { Home, Layout, Book, Settings, Icon } from "lucide-react";
import {_DATA} from "../data/data.ts"
const ServicesSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-on-scroll");
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 150) {
          reveal.classList.add("revealed");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="section-title inline-block pb-2 after:bottom-0">Our Services</h2>
          <p className="text-maroon-light max-w-2xl mx-auto mt-4">
            Comprehensive design solutions tailored to transform your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {_DATA.services.map((service, index) => {
  const Icon = service.icon; // singular & capitalized

  return (
    <div
      key={index}
      className="service-card reveal-on-scroll"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Icon className="h-12 w-12 text-gold" /> 
        </div>
        <h3 className="font-playfair text-xl font-semibold mb-3">
          {service.title}
        </h3>
        <p className="text-maroon-light">{service.description}</p>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
