import React from 'react';
import { FaComments } from 'react-icons/fa';

const FloatingChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow group"
      style={{
        background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
      aria-label="Open chat"
    >
      {/* Avatar/Icon */}
      <div className="relative">
        <FaComments className="text-2xl" style={{ color: 'var(--bg-primary)' }} />
      </div>
      
      {/* Tooltip */}
      <div 
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)',
        }}
      >
        Chat with my clone! 💬
      </div>
    </button>
  );
};

export default FloatingChatButton;
