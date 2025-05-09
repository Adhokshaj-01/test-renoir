
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { _DATA } from '../data/data.ts';
const HeroSection: React.FC = () => {

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/images/6A.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-maroon-dark bg-opacity-40" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-offwhite text-4xl md:text-5xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in">
            {_DATA.hero.title}<span className="text-gold">.</span> <br />
            <span className="opacity-0 animate-fade-in-delay-1">Creating Experiences.</span>
          </h1>
          <p className="text-offwhite text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
           {_DATA.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-2">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-maroon-dark rounded-none"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-offwhite text-maroon hover:bg-offwhite hover:text-maroon rounded-none"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div 
          className="w-8 h-12 border-2 border-offwhite rounded-full flex justify-center"
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="w-1 h-3 bg-offwhite rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
