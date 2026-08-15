import React from "react";

const ServiceCard = ({ icon: Icon, title, description, tags }) => {
  return (
    <div className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between hover:border-white/15">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#81D8D0] group-hover:scale-110 group-hover:bg-[#81D8D0]/10 transition-all duration-300 mb-6">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-medium text-white tracking-tight mb-3 group-hover:text-[#81D8D0] transition-colors">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/50"
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
