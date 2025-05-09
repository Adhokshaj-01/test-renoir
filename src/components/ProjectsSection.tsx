
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState("all");

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

  const categories = [
    { id: "all", name: "All" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "hospitality", name: "Hospitality" },
  ];
      {/* f1 ,7 ,1,1n, 6A */}

  const projects = [
    {
      id: 1,
      title: "A",
      category: "residential",
      image: "/images/2A.jpg"
    },
    {
      id: 2,
      title: "B",
      category: "commercial",
     image: "/images/4.jpg"
    },
    {
      id: 3,
      title: "C",
      category: "hospitality",
     image: "/images/4A.jpg"
    },
    {
      id: 4,
      title: "D",
      category: "residential",
     image: "/images/5.jpg"
    },
    {
      id: 5,
      title: "E",
      category: "commercial",
    image: "/images/7.jpg"
    },
    {
      id: 6,
      title: "F",
      category: "hospitality",
      image: "/images/F1.jpg"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-offwhite">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="section-title inline-block pb-2 after:bottom-0">Our Projects</h2>
          <p className="text-maroon-light max-w-2xl mx-auto mt-4">
            Explore our portfolio of stunning designs that transform spaces into exceptional experiences.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 reveal-on-scroll">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={
                  filter === category.id
                    ? "bg-maroon text-offwhite border-maroon hover:bg-maroon-light"
                    : "text-maroon border-maroon hover:bg-maroon hover:text-offwhite"
                }
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-item aspect-square reveal-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-offwhite font-playfair text-2xl mb-2">{project.title}</h3>
                <span className="text-gold capitalize">{project.category}</span>
                <Button 
                  variant="outline" 
                  className="mt-4 border-offwhite text-maroon hover:bg-offwhite hover:text-maroon"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filter !== "all" && filteredProjects.length === 0 && (
          <div className="text-center my-16">
            <p className="text-maroon-light text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
