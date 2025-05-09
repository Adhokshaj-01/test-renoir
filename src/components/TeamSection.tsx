
import React, { useEffect } from "react";
import { User, Mail, Layout, Home } from "lucide-react";
import { _DATA } from "@/data/data";
const TeamSection: React.FC = () => {
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

  const teamMembers = [
    {
      name: "Ramesh",
      role: "Creative Director",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: <Home className="h-5 w-5" />,
      specialtyText: "Residential Design",
    },
    {
      name: "Suresh",
      role: "Lead Designer",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: <Layout className="h-5 w-5" />,
      specialtyText: "Commercial Spaces",
    },
    {
      name: "Naresh",
      role: "Project Manager",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: <Home className="h-5 w-5" />,
      specialtyText: "Residential Design",
    },
    {
      name: "Paresh",
      role: "Interior Stylist",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: <Layout className="h-5 w-5" />,
      specialtyText: "Commercial Spaces",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="section-title inline-block pb-2 after:bottom-0">Our Team</h2>
          <p className="text-maroon-light max-w-2xl mx-auto mt-4">
            Meet our talented team of designers and creators who bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {_DATA.team.map((member, index) => {
             const Icon = member.specialty;
            return(
            <div 
              key={index} 
              className="text-center reveal-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative rounded-full overflow-hidden h-48 w-48 mx-auto mb-4 group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold">{member.name}</h3>
              <p className="text-maroon-light mb-2">{member.role}</p>
              <div className="flex items-center justify-center text-gold">
                <Icon className="h-4 w-4 text-gold"/>
                <span className="ml-1">{member.specialtyText}</span>
              </div>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-maroon hover:text-gold transition-colors">
                  <User className="h-5 w-5" />
                </a>
                <a href="#" className="text-maroon hover:text-gold transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
