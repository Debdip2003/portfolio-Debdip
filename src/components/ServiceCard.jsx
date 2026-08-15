import React from "react";

const ServiceCard = ({ icon: Icon, title, description, tags }) => {
  return (
    <div className="ios-glass p-8 rounded-[32px] hover:bg-theme-card-hover transition-all duration-300 group flex flex-col justify-between hover:border-theme-border-hover">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-theme-pill flex items-center justify-center text-theme-muted group-hover:text-theme-accent group-hover:scale-110 group-hover:bg-theme-accent-subtle transition-all duration-300 mb-6">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-medium text-theme-text tracking-tight mb-3 group-hover:text-theme-accent transition-colors">
          {title}
        </h3>
        <p className="text-theme-muted text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-theme-border">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-theme-pill text-theme-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
