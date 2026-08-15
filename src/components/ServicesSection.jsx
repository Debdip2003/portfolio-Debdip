import React from "react";
import { PenTool, Layout, BarChart3, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: PenTool,
      title: "Visual Identity & UI/UX",
      description:
        "Comprehensive design solutions including design systems, user flows, interactive prototypes, and high-fidelity iOS & web interfaces.",
      tags: ["Figma", "Design Systems", "Prototyping"],
    },
    {
      icon: Layout,
      title: "Websites & Web Apps",
      description:
        "High-performance frontend applications, e-commerce portals, and modern interactive web experiences built with React, Next.js, and Tailwind CSS.",
      tags: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: BarChart3,
      title: "Performance & SEO",
      description:
        "Optimization for search engines, lighthouse performance scores, accessible web standards, and lightning-fast load times.",
      tags: ["Core Web Vitals", "SEO", "Speed"],
    },
  ];

  return (
    <section
      id="services"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#81D8D0]" />
            <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            What I Do
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Specialized engineering and design services tailored to elevate your digital presence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
