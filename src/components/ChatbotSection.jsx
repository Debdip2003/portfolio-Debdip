import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaTimes } from "react-icons/fa";

const KNOWLEDGE = {
  name: "Debdip Bhattacharya",
  role: "Frontend Developer & UI/UX Enthusiast",
  experience: "1+ years",
  education: "B.Tech in Computer Science and Engineering (2022–2026) at Meghnad Saha Institute of Technology, Kolkata",
  bio: "Frontend Developer with 1+ years of experience building production-level web applications using React.js, Redux, and Firebase. Skilled in responsive UI design, scalable architecture, and cross-functional collaboration. Delivered features for 700+ users and optimized admin tools reducing processing time by up to 50%. Additionally, worked as a freelance developer building SEO-optimized landing pages for small businesses, improving their online visibility and deploying fully production-ready websites.",
skills: {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  frontend: ["React.js", "Angular", "Next.js"],
  frameworks: ["Tailwind CSS", "Bootstrap", "Ionic", "Capacitor"],
  libraries: ["Redux", "Material UI", "shadcn/ui"],
  backend: ["Firebase", "Firestore"],
  tools: ["Git", "GitHub", "Postman", "Vercel", "Figma", "VS Code"],
},
  workExperience: [
    { company: "StockEdge (Kredent Infoedge PVT LTD)", role: "Management Trainee Intern - Frontend", duration: "Oct 2025 - Present" },
    { company: "South Eastern Railways", role: "Software Engineer Intern", duration: "Jul 2025" },
    { company: "Farmershop Tech India PVT LTD", role: "Frontend Developer Intern", duration: "Mar 2025 – Apr 2025", highlights: "Built admin/store panels supporting 200+ daily users, integrated Google Maps API, enabled real-time CRUD via APIs" },
    { company: "Hyby Connect PVT LTD", role: "Frontend Developer Intern", duration: "Feb 2025 – Mar 2025", highlights: "Built influencer search tool used by 500+ testers, improved search relevance by 40%, cut task completion time by 30%" },
  ],
  projects: [
    { name: "E-Commerce Website (Forever)", tech: "React, Tailwind, Firebase", desc: "Responsive e-commerce with product listings, shopping cart, and filtering" },
    { name: "Upaay Admin Panel", tech: "React, Tailwind, Chart JS", desc: "Fully responsive admin dashboard with clean UI and reusable components" },
    { name: "Mindcare - Mental Health Platform", tech: "Next.js, Tailwind, SQL, AI", desc: "College student mental health platform with AI chatbot and guided meditation" },
    { name: "Sahaj - Artisan E-Commerce", tech: "React, Firebase, AI, Python", desc: "Multi-vendor marketplace with AI chat support and Aadhaar OCR onboarding" },
    { name: "Next Level MMA Website", tech: "React, Tailwind, Firebase, CMS", desc: "Sports/MMA website with CMS, improved retention by 45%" },
    { name: "Tech Fest Sites (Paridhi/Megatronix)", tech: "React, Firebase", desc: "Registration platforms serving 700+ users with automated ID generation" },
    { name: "Spotify Clone", tech: "React, Tailwind, Spotify API", desc: "Fully functional Spotify clone with real streaming" },
  ],
  achievements: [
    "2nd place (30+ teams) in Web Dev Competition at Future Institute of Engineering",
    "Core Organizer of Megatronix (recognized by Edungraph, Times of India)",
    "Delivered systems supporting 700+ users during college tech fests",
  ],
  hobbies: ["Music", "Coding", "Learning", "Badminton", "Gaming", "Chess", "Travel", "Photography", "Movies", "Cycling", "Cooking", "Robotics", "Investing"],
  contact: {
    github: "github.com/Debdip2003",
    email: "debdip987@gmail.com",
  },
};

// Predefined suggestions to guide users on what to ask
const SUGGESTIONS = [
  "Who are you?",
  "What are your skills?",
  "Tell me about your work.",
  "What projects have you built?",
  "What's your education?",
  "Any achievements?",
  "What are your hobbies?",
  "How can I contact you?",
];

//get response based on user input using regex matching and the KNOWLEDGE object
function getResponse(input) {
  const q = input.toLowerCase().trim();

  if (q.match(/\b(who|about|yourself|introduce|tell me about you|name)\b/)) {
    return `Ah, the legendary "Tell me about yourself."

I'm ${KNOWLEDGE.name} — ${KNOWLEDGE.role}.

${KNOWLEDGE.bio}

I build scalable systems, optimize APIs, and occasionally win competitions when I'm not debugging.`;
  }

  if (q.match(/\b(skill|skills|tech|stack|technologies|what do you know|what can you do)\b/)) {
    const s = KNOWLEDGE.skills;

    return `You want the stack? Respect.

Languages: ${s.languages.join(", ")}

Frontend: ${s.frontend.join(", ")}

Frameworks & Styling: ${s.frameworks.join(", ")}

Libraries: ${s.libraries.join(", ")}

Backend & DB: ${s.backend.join(", ")}

Tools: ${s.tools.join(", ")}

Translation: I turn caffeine into scalable UI systems.`;
  }

  if (q.match(/\b(experience|work|job|intern|company|where.*work)\b/)) {
    const lines = KNOWLEDGE.workExperience.map(
      (w) =>
        `${w.role} at ${w.company} (${w.duration})${
          w.highlights ? "\n  → " + w.highlights : ""
        }`
    );

    return `Yes, I’ve been trusted with real production systems.

${lines.join("\n\n")}

Impact > attendance. Always.`;
  }

  if (q.match(/\b(project|built|made|portfolio|what.*build)\b/)) {
    const lines = KNOWLEDGE.projects.map(
      (p) => `${p.name}
  Tech: ${p.tech}
  ${p.desc}`
    );

    return `Things I’ve actually built (not just talked about):

${lines.join("\n\n")}

All shipped. No tutorial copy-paste energy here.`;
  }

  if (q.match(/\b(education|study|college|university|degree|btech|b\.tech)\b/)) {
    return `Yes, I pursued formal education.

${KNOWLEDGE.education}

And gained most real wisdom from debugging at 2 AM.`;
  }

  if (q.match(/\b(achieve|achievement|award|win|competition|recognition)\b/)) {
    return `Ah yes, measurable excellence.

${KNOWLEDGE.achievements.map(a => `• ${a}`).join("\n")}

Not obsessed with winning. Just consistently near the top.`;
  }

  if (q.match(/\b(hobby|hobbies|interests|fun|free time|spare time)\b/)) {
    return `Yes, I do step away from VS Code sometimes.

${KNOWLEDGE.hobbies.join(", ")}

Balance is important. Even for frontend engineers.`;
  }

  if (q.match(/\b(contact|email|github|reach|hire|connect)\b/)) {
    return `Ah, you want to collaborate? Excellent decision.

GitHub: ${KNOWLEDGE.contact.github}
Email: You can fill up the form below and definitely not send me an email directly at ${KNOWLEDGE.contact.email} (just kidding, please do).

I respond faster than poorly optimized REST APIs.`;
  }

  if (q.match(/\b(hi|hello|hey|sup|yo|greet)\b/)) {
    return `Hey 👋

I'm Debdip’s AI clone — slightly more diplomatic, equally productive.

Ask me about skills, projects, freelancing work, experience, or achievements.`;
  }

  return `Hmm. That one escaped my dataset.

Try asking about skills, projects, experience, freelancing, education, or achievements — I promise the answer will be impressive and mildly sarcastic.`;
}

const ChatbotSection = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey! I'm Debdip's AI clone. Ask me anything about his skills, projects, work experience, or education. Or pick a question below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  // Clean up body styles on mount to prevent scroll issues on reload
  useEffect(() => {
    // Reset any lingering styles from previous session
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock scroll on both body and html
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleSend = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(msg);
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:bottom-6 md:right-6 md:w-[450px] md:h-[600px] z-50 animate-slide-up">
        <div
          className="card w-full h-full flex flex-col overflow-hidden relative"
          style={{ 
            background: 'var(--bg-card)',
            border: '2px solid var(--border)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'var(--accent-subtle)',
                  color: 'var(--accent)',
                }}
              >
                <FaRobot size={18} />
              </div>
              <div>
                <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  Debdip's Clone
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-opacity-80 transition-all"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Close chat"
            >
              <FaTimes size={20} />
            </button>
          </div>
          {/* Messages area */}
          <div 
            ref={messagesContainerRef} 
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 ${
                  msg.from === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background:
                      msg.from === "bot"
                        ? "var(--accent-subtle)"
                        : "rgba(255,255,255,0.08)",
                    color:
                      msg.from === "bot"
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                  }}
                >
                  {msg.from === "bot" ? (
                    <FaRobot size={13} />
                  ) : (
                    <FaUser size={11} />
                  )}
                </div>
                {/* Bubble */}
                <div
                  className="max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm whitespace-pre-line leading-relaxed"
                  style={{
                    background:
                      msg.from === "bot"
                        ? "var(--bg-card-hover)"
                        : "var(--accent-subtle)",
                    color:
                      msg.from === "bot"
                        ? "var(--text-primary)"
                        : "var(--text-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background: "var(--accent-subtle)",
                    color: "var(--accent)",
                  }}
                >
                  <FaRobot size={13} />
                </div>
                <div
                  className="rounded-xl px-4 py-3 flex gap-1.5"
                  style={{
                    background: "var(--bg-card-hover)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      background: "var(--text-muted)",
                      animationDelay: "0ms",
                    }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      background: "var(--text-muted)",
                      animationDelay: "150ms",
                    }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      background: "var(--text-muted)",
                      animationDelay: "300ms",
                    }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion chips - hidden on mobile */}
          <div className="hidden sm:flex px-4 pb-2 flex-wrap gap-2">
            {SUGGESTIONS.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSend(s)}
                className="tag cursor-pointer transition-all hover:scale-105"
                style={{ fontSize: "0.7rem" }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input area */}
          <div
            className="p-3 flex gap-2 items-center"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Debdip..."
              className="form-input flex-1 px-4 py-2.5 text-sm"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="btn-accent p-2.5 rounded-xl flex items-center justify-center transition-opacity disabled:opacity-40"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotSection;
