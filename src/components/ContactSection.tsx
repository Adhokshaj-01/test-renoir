
import React, { useEffect } from "react";
import { Mail, Phone, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { _DATA } from "@/data/data";
const ContactSection: React.FC = () => {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-maroon text-offwhite">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="section-title text-offwhite inline-block pb-2 after:bg-gold after:bottom-0">
            Get in Touch
          </h2>
          <p className="text-offwhite/80 max-w-2xl mx-auto mt-4">
            Ready to transform your space? Contact us to start your journey with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-on-scroll">
            <h3 className="font-playfair text-2xl mb-6 text-gold">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Home className="h-6 w-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Visit Our Studio</h4>
                  <p className="text-offwhite/80">{_DATA.contact.address.landmark}</p>
                  <p className="text-offwhite/80">{_DATA.contact.address.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-offwhite/80">{_DATA.contact.email.a}</p>
                  <p className="text-offwhite/80">{_DATA.contact.email.b}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-offwhite/80">{_DATA.contact.phone.a}</p>
                  <p className="text-offwhite/80">{_DATA.contact.phone.b}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-3">Working Hours</h4>
              <p className="text-offwhite/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-offwhite/80">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-offwhite/80">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="reveal-on-scroll">
            <h3 className="font-playfair text-2xl mb-6 text-gold">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-maroon-light text-offwhite border-offwhite/20 placeholder:text-offwhite/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-maroon-light text-offwhite border-offwhite/20 placeholder:text-offwhite/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="bg-maroon-light text-offwhite border-offwhite/20 placeholder:text-offwhite/50"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-maroon-light text-offwhite border-offwhite/20 placeholder:text-offwhite/50 min-h-32"
                  placeholder="Your message"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-maroon w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
