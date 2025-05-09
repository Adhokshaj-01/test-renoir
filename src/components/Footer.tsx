
import React from "react";
import { Home, Mail, Phone, ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";
import { _DATA } from "@/data/data";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-maroon-dark text-offwhite py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="imperial-text text-5xl italic font-thin mb-4">
              Renoir Studio
            </h3>
            <p className="text-offwhite/70 mb-6 text-xs">
              Crafting Inspired Spaces – Stay Tuned !
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full border border-offwhite/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-offwhite/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-offwhite/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-offwhite/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-offwhite/70 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-offwhite/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-offwhite/70 hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#team" className="text-offwhite/70 hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-offwhite/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-offwhite/70 hover:text-gold transition-colors">Residential Design</a></li>
              <li><a href="#" className="text-offwhite/70 hover:text-gold transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="text-offwhite/70 hover:text-gold transition-colors">Design Consultation</a></li>
              <li><a href="#" className="text-offwhite/70 hover:text-gold transition-colors">Project Management</a></li>
              <li><a href="#" className="text-offwhite/70 hover:text-gold transition-colors">3D Visualization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home className="h-5 w-5 text-gold mr-2 mt-1" />
                <span className="text-offwhite/70">{_DATA.contact.address.landmark} , {_DATA.contact.address.location}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-2 mt-1" />
                <span className="text-offwhite/70">{_DATA.contact.email.a}</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-2 mt-1" />
                <span className="text-offwhite/70">{_DATA.contact.phone.a}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-offwhite/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-offwhite/70 text-center md:text-left">
            © {new Date().getFullYear()} Renoir Studio. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 h-10 w-10 rounded-full border border-offwhite/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
