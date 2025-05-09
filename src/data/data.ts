// data.ts
import { Home, Layout, Book, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}
export interface Team {
  name: string;
  role: string;
  image: string;
  specialty: LucideIcon;
  specialtyText: string;
}

export interface AppData {
  hero: {
    title: string;
    desc: string;
  };
  services: Service[];
  about: Record<string, any>;
  contact: Record<string, any>;
  team: Team[];
}

export const _DATA: AppData = {
  hero: {
    title: "Crafting Spaces",
    desc: "Transform your space into a masterpiece with our award-winning interior design studio. We blend form and function to create spaces that inspire.",
  },
  services: [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your living spaces into perfectly harmonized environments that reflect your personality and meet your lifestyle needs.",
    },
    {
      icon: Layout,
      title: "Commercial Spaces",
      description: "Create impressive workspaces that boost productivity, engage clients and represent your brand's unique identity and values.",
    },
    {
      icon: Book,
      title: "Design Consultation",
      description: "Get expert advice on color schemes, furniture selection, layout planning, and material choices for your space.",
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Full-service project management from concept to completion, ensuring your design is executed flawlessly on time and on budget.",
    },
  ],
  about: {
    line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit a metus facilisis, nec tincidunt justo vestibulum.",
    line2: "Nulla facilisi. Integer vitae augue ut leo convallis commodo. Morbi ac diam non eros malesuada ultricies sed vitae elit.",
    stat: {
      projects: 20,
      yoe: 2,
      clientExp: 99,
    }
  },
  team: [
    {
      name: "Ramesh",
      role: "Creative Director",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: Home,
      specialtyText: "Residential Design",
    },
    {
      name: "Suresh",
      role: "Lead Designer",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: Layout,
      specialtyText: "Commercial Spaces",
    },
    {
      name: "Naresh",
      role: "Project Manager",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: Home,
      specialtyText: "Residential Design",
    },
    {
      name: "Paresh",
      role: "Interior Stylist",
      image: "https://img.freepik.com/premium-vector/man-boy-husband-line-art-drawing-vector-design_1036007-3048.jpg?w=826",
      specialty: Layout,
      specialtyText: "Commercial Spaces",
    },
  ],
  contact: {
    address: {
      landmark: "221B, Nagpur District",
      location: "MH , India"
    },
    email: {
      a: "hello@renoirstudio.com",
      b: "info@renoirstudio.com"
    },
    phone: {
      a: "+91 xxxxxxxxxx",
      b: "+91 xxxxxxxxxx"
    },
    socials: {
      instagram: "www.instagram.com",
      linkedin: "www.linkedin.com",
      facebook: "www.facebook.com"

    }
  },

};
