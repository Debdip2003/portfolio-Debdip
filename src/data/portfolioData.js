import paridhi from "../assets/projects/paridhi.png";
import forever from "../assets/projects/forever.jpeg";
import upaayAdminPanel from "../assets/projects/upaayAdminPanel.png";
import mindcare from "../assets/projects/mindcare.jpg";
import mindcareAdmin from "../assets/projects/mindcareAdmin.jpg";

export const portfolioData = {
  profile: {
    name: "Debdip Bhattacharya",
    shortName: "DEBDIP",
    title: "Frontend Engineer & UI/UX Specialist",
    tagline: "Crafting fluid interfaces with precision and motion.",
    location: "Kolkata, India",
    email: "dbhattacharya1912@gmail.com",
    github: "https://github.com/Debdip2003",
    linkedin: "https://www.linkedin.com/in/debdipb/",
    education: "B.Tech in Computer Science & Engineering",
    availability: "Available for High-Impact Frontend Roles",
  },

  marqueeSkills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WebAssembly",
    "ONNX Runtime Web",
    "UI/UX Design",
    "Figma",
    "Capacitor",
    "Canvas API",
    "Framer Motion",
    "Firebase",
    "State Management",
    "Core Web Vitals",
    "Performance Optimization",
  ],

  projects: [
    {
      id: "01",
      title: "Megatronix Web 2.0",
      code: "TECH FEST / 2025",
      category: "COLLEGE",
      type: "Official Web Portal • High Traffic",
      valuation: "Production Live",
      location: "Megatronix Fest Portal",
      completionYear: "Nov 2025",
      role: "Lead Frontend Engineer",
      heroImage: paridhi,
      liveLink: "https://megatronix-web-2k25.vercel.app/",
      githubLink: "https://github.com/codemencer-Rahul/Megatronix_Web_2k25",
      tags: ["React", "Firebase", "Context API", "Tailwind CSS"],
      description:
        "Built the official web platform for Megatronix 2K25 — a dynamic tech fest portal showcasing events, schedules, and registration info for participants. Implemented responsive layouts, event detail pages, and seamless navigation to help users explore competitions, workshops, and fest highlights with ease.",
      specs: [
        { label: "Architecture", value: "React + Tailwind CSS + Context API" },
        { label: "Backend Integration", value: "Firebase Authentication & Firestore" },
        { label: "Event Management", value: "Real-time registration & schedule routing" },
        { label: "User Experience", value: "Sub-second page navigation & fluid transitions" },
      ],
      highlights: [
        "Constructed high-traffic event showcases with responsive filtering by technical category and competition track.",
        "Integrated dynamic schedule synchronization and participant registration workflows.",
        "Optimized asset loading and mobile touch interactions for over 2,000+ festival attendees.",
      ],
    },
    {
      id: "02",
      title: "Forever E-Commerce",
      code: "COMMERCE / 2024",
      category: "PERSONAL",
      type: "Full-Stack Store • Scalable UX",
      valuation: "Deployed",
      location: "Global Digital Commerce",
      completionYear: "Sept 2024 – Nov 2024",
      role: "Frontend & Firebase Developer",
      heroImage: forever,
      liveLink: "https://e-commerce-pi-teal.vercel.app/",
      githubLink: "https://github.com/Debdip2003/e-commerce",
      tags: ["React", "Tailwind CSS", "Context API", "Firebase"],
      description:
        "Engineered a responsive e-commerce web application featuring comprehensive product catalogues, multi-criteria filtering, shopping cart persistence, and complete customer checkout journeys. Integrated Firebase for user authentication, cloud database operations, and secure hosting.",
      specs: [
        { label: "Tech Stack", value: "React, Tailwind CSS, Context API" },
        { label: "Database / Auth", value: "Firebase Firestore & Auth" },
        { label: "State Management", value: "Context API + LocalStorage Cart Sync" },
        { label: "Performance", value: "Lazy-loaded product imagery & cached assets" },
      ],
      highlights: [
        "Built real-time search, multi-attribute category filtering, and instant cart state updates.",
        "Implemented seamless authentication workflows with email and Google OAuth providers.",
        "Crafted a mobile-first responsive shopping experience with fluid micro-interactions.",
      ],
    },
    {
      id: "03",
      title: "Upaay Admin Dashboard",
      code: "SAAS / 2025",
      category: "FREELANCE",
      type: "Enterprise Portal • Real-time Data",
      valuation: "Client Production",
      location: "Remote / Freelance",
      completionYear: "May 2025 - Oct 2025",
      role: "Frontend Architect",
      heroImage: upaayAdminPanel,
      liveLink: "https://upaay-six.vercel.app/dashboard",
      githubLink: "https://github.com/Debdip2003/Upaay.git",
      tags: ["React", "Tailwind CSS", "Context API", "Chart.js"],
      description:
        "Developed a fully responsive and modern enterprise administrative dashboard for the Upaay platform, focused on clean UI, seamless navigation, and efficient business data visualization. Engineered reusable UI components and optimized state handling to support real-time operations.",
      specs: [
        { label: "Framework", value: "React + Tailwind CSS" },
        { label: "Data Visualization", value: "Chart.js Custom Analytics Widgets" },
        { label: "Role Management", value: "Role-Based Access Control (RBAC)" },
        { label: "Data Handling", value: "CRUD API integration with error boundaries" },
      ],
      highlights: [
        "Engineered modular data tables with instant search, sorting, and pagination across thousands of records.",
        "Designed and implemented interactive metric cards and visual analytics charts.",
        "Built custom modal dialogs and notification toasts for administrative actions.",
      ],
    },
    {
      id: "04",
      title: "MindCare Support Platform",
      code: "HEALTH TECH / 2025",
      category: "PERSONAL",
      type: "Student Wellness • AI Powered",
      valuation: "Deployed",
      location: "University Wellness Initiative",
      completionYear: "Aug 2025 - Sept 2025",
      role: "Full-Stack Next.js Developer",
      heroImage: mindcare,
      liveLink: "https://v0-mental-health-support-brown.vercel.app/",
      githubLink: "https://github.com/Debdip2003/v0-mental-health-support.git",
      tags: ["Next.js", "Tailwind CSS", "SQL", "AI Integration"],
      description:
        "Built a responsive mental-health support platform for college students using Next.js and Tailwind CSS. Features include guided mindfulness routines, an AI-powered conversational support bot, community resources, and interactive self-help mental health assessments.",
      specs: [
        { label: "Core Framework", value: "Next.js (App Router) + Tailwind CSS" },
        { label: "AI Integration", value: "Conversational Wellness AI Assistant" },
        { label: "Storage", value: "Relational SQL database for assessments" },
        { label: "UX Approach", value: "Calming typography, soft palettes & privacy-first" },
      ],
      highlights: [
        "Integrated AI conversational assistance providing empathetic, contextual support guidance.",
        "Engineered automated self-assessment questionnaires with real-time scoring and recommendation pathways.",
        "Designed accessible, distraction-free interfaces adhering to WCAG standards.",
      ],
    },
    {
      id: "05",
      title: "MindCare Admin & Counselor",
      code: "ENTERPRISE / 2025",
      category: "PERSONAL",
      type: "Counselor Management • Analytics",
      valuation: "Repository Active",
      location: "Healthcare SaaS",
      completionYear: "Aug 2025 - Sept 2025",
      role: "Frontend Engineer",
      heroImage: mindcareAdmin,
      liveLink: "https://github.com/Savi-07/MindCare_Admin.git",
      githubLink: "https://github.com/Savi-07/MindCare_Admin.git",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Dashboard UI"],
      description:
        "Developed an administrative and counselor portal for the MindCare mental-health platform with segregated access levels for Administrators, Certified Counselors, and College Representatives. Enabled confidential report generation and real-time student wellness trend monitoring.",
      specs: [
        { label: "Stack", value: "Next.js + Tailwind CSS" },
        { label: "Access Security", value: "Multi-tenant role segregation" },
        { label: "Data Reporting", value: "Automated aggregate wellness report export" },
      ],
      highlights: [
        "Built confidential session scheduling and counselor appointment assignment interfaces.",
        "Designed multi-tier administrative permission views preserving student anonymity.",
        "Integrated real-time notification alerts for urgent counselor attention flags.",
      ],
    },
  ],

  experiences: [
    {
      id: "exp-1",
      company: "PrediQt - A RezolveAI Company",
      role: "Junior Frontend Developer",
      duration: "Aug 2026 - Present",
      location: "Hybrid / Tech Division",
      type: "Full-Time",
      description: [
        "Building cutting-edge frontend web applications integrating generative AI interfaces and modern enterprise user experiences.",
        "Collaborating across cross-functional teams to engineer high-velocity, scalable React and TypeScript applications.",
        "Adhering to strict code quality, component modularity, and automated testing pipelines.",
      ],
      tags: ["React", "TypeScript", "AI UX", "Tailwind CSS", "Enterprise"],
    },
    {
      id: "exp-2",
      company: "StockEdge (Kredent Infoedge PVT LTD)",
      role: "Management Trainee Intern - Tech Development (Frontend)",
      duration: "Oct 2025 - Aug 2026",
      location: "Kolkata, India",
      type: "Internship",
      description: [
        "Implemented automatic time-based theming across web and mobile applications, improving UI consistency and reducing manual configuration.",
        "Led Capacitor migration from v7 to v8, stabilizing Android and iOS builds and enhancing deployment reliability.",
        "Optimized cross-platform frontend architecture, improving build performance and ensuring seamless production releases.",
      ],
      tags: ["Capacitor v8", "Mobile Build CI/CD", "Theme Architecture", "React", "Cross-Platform"],
    },
    {
      id: "exp-3",
      company: "FARMERSHOP TECH INDIA PVT LTD",
      role: "Frontend Developer Intern",
      duration: "Mar 2025 – Apr 2025",
      location: "Kolkata, India",
      type: "Internship",
      description: [
        "Built admin and store management panels with role-based routing; supported 200+ daily active store operators.",
        "Integrated Google Maps API with dynamic drag-and-drop delivery zone markers; significantly improved dispatch accuracy.",
        "Enabled real-time CRUD via REST APIs; reduced operational manual input errors by 50%.",
      ],
      tags: ["Google Maps API", "Admin Panels", "REST APIs", "CRUD Operations", "Role-Based Auth"],
    },
  ],

  openSource: {
    title: "DoxDock",
    role: "Open Source Contributor",
    period: "Jul – Aug 2026",
    github: "https://github.com/mithun-srinivas/DoxDock",
    live: "https://doxdock.vercel.app/",
    tech: ["React.js", "WebAssembly", "ONNX Runtime Web", "U²NetP", "Canvas API", "ESLint"],
    highlights: [
      {
        title: "In-Browser AI Background Removal",
        tag: "ONNX & WASM",
        desc: "Shipped an AI-powered background removal tool using U²NetP, ONNX Runtime Web, and WebAssembly. Performs client-side image segmentation entirely in the browser with zero external server data transfer.",
        details: [
          "Implemented local ONNX model loading, session caching, preprocessing, mask generation, and alpha-channel composition.",
          "Engineered offline-first pipeline by bundling model & WASM locally, eliminating network latency during inference.",
        ],
      },
      {
        title: "Image Color Inversion Processing Tool",
        tag: "Canvas API",
        desc: "Engineered and merged an Image Color Inversion processing tool using React.js and Canvas API with high performance support for PNG and JPEG formats.",
        details: [
          "Client-side pixel manipulation with direct canvas buffer processing.",
          "Seamless export pipeline preserving original image resolution and aspect ratio.",
        ],
      },
      {
        title: "Global Drag-and-Drop Architecture",
        tag: "Event System",
        desc: "Built a reusable global drag-and-drop system that routes files dropped anywhere in the application to the active tool.",
        details: [
          "Interactive visual feedback overlays on drag enter/leave.",
          "Duplicate-event prevention and lifecycle-safe event listener cleanup.",
        ],
      },
      {
        title: "Tooling & Code Quality Standardization",
        tag: "Code Quality",
        desc: "Established project-wide ESLint and Prettier rules with React Hooks & Refresh configurations, automated lint scripts, and contributor documentation.",
        details: [
          "Collaborated closely with project maintainers across issues, PRs, and code reviews.",
          "Multiple core features successfully merged into the production release.",
        ],
      },
    ],
  },

  capabilities: [
    {
      id: "cap-1",
      title: "Frontend Architecture",
      icon: "Cpu",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-900/20",
      description:
        "Building scalable, high-performance web applications with React, Next.js App Router, TypeScript, and atomic component architecture.",
      metric: "Next.js / React",
      subtext: "Enterprise Web Apps",
      tags: ["React", "Next.js", "TypeScript", "Context API", "Redux"],
    },
    {
      id: "cap-2",
      title: "UI/UX & Motion Design",
      icon: "Layers",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-900/20",
      description:
        "Crafting design systems, high-fidelity Figma prototypes, and micro-interactions with Framer Motion, GSAP, and Tailwind CSS.",
      metric: "Figma to Code",
      subtext: "Pixel-Perfect UX",
      tags: ["Figma", "Tailwind CSS", "Framer Motion", "Micro-Interactions"],
    },
    {
      id: "cap-3",
      title: "Client-Side AI & WASM",
      icon: "Sprout",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-900/20",
      description:
        "Deploying local AI inference in the browser with ONNX Runtime Web, WebAssembly, and Canvas API for zero-server data processing.",
      metric: "WASM / ONNX",
      subtext: "In-Browser Inference",
      tags: ["ONNX Runtime", "WebAssembly", "Canvas API", "Image Processing"],
    },
    {
      id: "cap-4",
      title: "Cross-Platform & Hybrid",
      icon: "Globe2",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-900/20",
      description:
        "Deploying unified codebases to iOS and Android utilizing Capacitor v8, native plugins, and automatic theme adaptation.",
      metric: "Capacitor v8",
      subtext: "iOS & Android",
      tags: ["Capacitor", "Android Builds", "iOS Deployment", "PWA"],
    },
    {
      id: "cap-5",
      title: "Cloud & API Integrations",
      icon: "BarChart3",
      iconColor: "text-rose-500",
      iconBg: "bg-rose-900/20",
      description:
        "Connecting dynamic frontend applications with Firebase Firestore, Google Maps APIs, RESTful services, and real-time state sync.",
      metric: "Cloud & APIs",
      subtext: "Real-Time Sync",
      tags: ["Firebase", "Google Maps API", "REST APIs", "Chart.js"],
    },
    {
      id: "cap-6",
      title: "Performance & Core Vitals",
      icon: "HeartHandshake",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-900/20",
      description:
        "Optimizing bundle sizes, lighthouse scores, lazy loading, and accessibility to deliver instant page loads and seamless retention.",
      metric: "100 Lighthouse",
      subtext: "Speed & Accessibility",
      tags: ["Core Web Vitals", "Lighthouse", "SEO", "WCAG"],
    },
  ],

  stats: {
    projectsShipped: "25+",
    yearsActive: "3+",
    prMerged: "15+",
    githubCommits: "500+",
    clientSatisfaction: "100%",
  },

  insightArticle: {
    title: "Client-Side AI Inference: Running ONNX Models with WebAssembly in the Browser",
    category: "Engineering Whitepaper",
    date: "August 2024",
    readTime: "5 Min Read",
    author: "Debdip Bhattacharya • Frontend & WASM Specialist",
    summary:
      "A technical deep dive into running U²NetP deep learning models locally inside the browser using ONNX Runtime Web and WebAssembly, achieving real-time image background removal with zero server computing costs and absolute user privacy.",
    sections: [
      {
        heading: "1. The Shift to Edge & In-Browser Intelligence",
        text: "Traditional web applications rely heavily on backend GPUs to perform neural network inference. By leveraging WebAssembly (WASM) and ONNX Runtime Web, we can execute deep learning segmentation models directly on the client's CPU/GPU via WebGL and WebGPU. This provides instant feedback with 0ms network latency.",
      },
      {
        heading: "2. Memory & Session Management in React",
        text: "Loading large multi-megabyte neural models requires thoughtful caching and lifecycle management. In DoxDock, we implemented singleton inference sessions, Web Worker background threading to prevent UI stutter, and direct HTML5 Canvas buffer manipulation for pixel-level alpha transparency composition.",
      },
      {
        heading: "3. Absolute Privacy & Cost Elimination",
        text: "Because all tensor operations and pixel processing occur entirely within the browser sandbox, user imagery never leaves the device. This delivers 100% data privacy compliance while entirely removing cloud GPU hosting expenses for the platform maintainers.",
      },
    ],
  },
};
