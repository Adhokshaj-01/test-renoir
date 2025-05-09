import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { _DATA } from "@/data/data";
const AboutSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-on-scroll");

      reveals.forEach((reveal) => {
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
    <section id="about" className="py-20 px-4 bg-maroon text-offwhite">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="reveal-on-scroll">
              <h2 className="section-title text-offwhite after:bg-gold">
                About Us
              </h2>

              <p className="mb-6">
               {_DATA.about.line1}
              </p>

              <p className="mb-6">
               {_DATA.about.line2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-gold text-4xl font-bold">{_DATA.about.stat.projects}+</h3>
                  <p>Projects Completed</p>
                </div>
                {/* <div>
                  <h3 className="text-gold text-4xl font-bold">{_DATA.about.stat.}+</h3>
                  <p>Industry Awards</p>
                </div> */}
                <div>
                  <h3 className="text-gold text-4xl font-bold">{_DATA.about.stat.yoe}</h3>
                  <p>Years Experience</p>
                </div>
                <div>
                  <h3 className="text-gold text-4xl font-bold">{_DATA.about.stat.clientExp}%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>

              <Button
                className="bg-gold hover:bg-gold/90 text-maroon rounded-none"
                onClick={() =>
                  document
                    .getElementById("team")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Meet Our Team
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4 reveal-on-scroll">
              <div className="space-y-4">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src="/images/1n.jpg"
                    alt="Interior design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 md:h-52 overflow-hidden">
                  <img
                    src="/images/1.jpg"
                    alt="Interior design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-40 md:h-52 overflow-hidden">
                  <img
                    src="/images/7.jpg"
                    alt="Interior design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src="/images/F1.jpg"
                    alt="Interior design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
