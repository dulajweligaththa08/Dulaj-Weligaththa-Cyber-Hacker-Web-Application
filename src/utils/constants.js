import {
  Code, Smartphone, Layout, Server, ShieldCheck, Wrench,
  Terminal, Database, Cpu, Lock, Cloud, Layers
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Dulaj Weligaththa",
  tagline: "Building Secure Digital Solutions",
  subtitle: "Full-stack developer crafting high-performance websites, mobile applications and secure systems with a hacker mindset and elegant code.",
  roles: [
    "Software Engineer",
    "Flutter Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Cyber Security Researcher"
  ],
  stats: [
    { label: "Projects Completed", value: "20+", count: 20 },
    { label: "Core Tech Stack", value: "5+", count: 5 },
    { label: "Client Satisfaction", value: "100%", count: 100 },
    { label: "Years Experience", value: "5+", count: 5 }
  ],
  contact: {
    email: "dulajweligaththa.in@gmail.com",
    phone: "+94 77 815 21 65",
    location: "Remote / Colombo, Sri Lanka",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/94778152165"
  }
};

export const SERVICES = [
  {
    id: "web-dev",
    title: "Website Development",
    subtitle: "Responsive Websites & Modern Web Apps",
    description: "High-speed, SEO-optimized web applications built with React, Next.js, and modern CSS architectures designed for maximum scalability.",
    icon: "Code",
    tags: ["React.js", "Vite", "Tailwind CSS", "Next.js", "SEO"]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "Cross-Platform Flutter Apps",
    description: "Native-performing iOS and Android mobile applications crafted using Flutter & Dart with smooth UI transitions and offline capabilities.",
    icon: "Smartphone",
    tags: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs"]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    subtitle: "Modern & Intuitive Interfaces",
    description: "Stunning user experience architecture, wireframing, interactive prototypes, and luxury dark/light mode UI designs created with Figma.",
    icon: "Layout",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"]
  },
  {
    id: "backend-dev",
    title: "Backend & API Development",
    subtitle: "Node.js & Database Architectures",
    description: "Robust RESTful APIs, GraphQL microservices, and database architecture using Node.js, Express, MongoDB, PostgreSQL, and Supabase.",
    icon: "Server",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    subtitle: "Penetration Testing & System Hardening",
    description: "Vulnerability assessments, web security audits, code reviews, penetration testing, and secure data encryption standards.",
    icon: "ShieldCheck",
    tags: ["Security Audit", "Pen Testing", "OWASP", "Encryption"]
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    subtitle: "Bug Fixing & Speed Optimization",
    description: "Reliable system upkeep, bug fixes, server maintenance, performance tuning, and 24/7 security monitoring.",
    icon: "Wrench",
    tags: ["Bug Fixes", "Performance Tuning", "Uptime Monitoring"]
  }
];

export const TECH_STACK = [
  { name: "Flutter", category: "Mobile", level: "Expert", icon: "Smartphone" },
  { name: "React.js", category: "Frontend", level: "Expert", icon: "Code" },
  { name: "Node.js", category: "Backend", level: "Expert", icon: "Server" },
  { name: "Express.js", category: "Backend", level: "Expert", icon: "Server" },
  { name: "Firebase", category: "Cloud & Database", level: "Advanced", icon: "Cloud" },
  { name: "Supabase", category: "Cloud & Database", level: "Advanced", icon: "Database" },
  { name: "MongoDB", category: "Database", level: "Expert", icon: "Database" },
  { name: "PostgreSQL", category: "Database", level: "Expert", icon: "Database" },
  { name: "Git & GitHub", category: "Tools", level: "Expert", icon: "Terminal" },
  { name: "Docker", category: "DevOps", level: "Advanced", icon: "Cpu" },
  { name: "Figma", category: "Design", level: "Expert", icon: "Layout" },
  { name: "Photoshop", category: "Design", level: "Advanced", icon: "Layout" },
  { name: "Python", category: "Languages & Security", level: "Advanced", icon: "Code" },
  { name: "Linux", category: "OS & Security", level: "Expert", icon: "Terminal" }
];

export const PROJECTS = [

  // ──────────── MOBILE (10) ────────────
  {
    id: "vehicle-service-app",
    title: "Vehicle Service App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive mobile app for auto repair scheduling, real-time tracking, and automated service reminders built with Flutter & Firebase.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "fitness-tracker-mobile",
    title: "FitCore – Fitness Tracker",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    description: "AI-powered fitness tracking app with custom workout plans, calorie counter, heart rate monitor integration, and weekly progress analytics.",
    technologies: ["Flutter", "Dart", "Firebase", "Health Kit API"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "grocery-delivery-app",
    title: "QuickCart – Grocery Delivery",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    description: "Real-time grocery delivery mobile app with live driver tracking, smart category filters, and PayHere payment gateway integration.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "chat-app-mobile",
    title: "CipherChat – Encrypted Messenger",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    description: "End-to-end encrypted real-time chat application with group channels, voice notes, and military-grade AES-256 message encryption.",
    technologies: ["Flutter", "Firebase Firestore", "Dart", "AES Encryption"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "news-reader-app",
    title: "HackerFeed – Tech News Reader",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    description: "Curated cybersecurity and tech news aggregator with offline reading, bookmarks, push notifications, and dynamic light/dark mode.",
    technologies: ["Flutter", "REST API", "Hive", "Firebase FCM"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "hospital-appointment-app",
    title: "MediBook – Hospital Appointment App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Smart doctor booking and hospital management app with video consultations, prescription viewer, and medical record storage.",
    technologies: ["Flutter", "Firebase", "Supabase", "WebRTC"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "recipe-app-mobile",
    title: "ChefAI – Smart Recipe App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
    description: "AI ingredient-based recipe generator with step-by-step cooking animations, nutritional info, and offline recipe saving.",
    technologies: ["Flutter", "OpenAI API", "Hive", "Firebase"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "parking-app-mobile",
    title: "ParkSmart – Smart Parking App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    description: "Real-time parking slot reservation system with IoT sensor integration, QR code check-in, and automated billing via mobile.",
    technologies: ["Flutter", "Node.js API", "Google Maps", "Firebase"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "elearning-app-mobile",
    title: "LearnX – eLearning Platform",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    description: "Full-featured eLearning mobile app with video lessons, quizzes, progress certificates, and offline content download.",
    technologies: ["Flutter", "Firebase", "YouTube API", "Supabase"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "travel-app-mobile",
    title: "WanderAI – Smart Travel Planner",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "AI-powered travel planning app with itinerary builder, hotel/flight booking, live currency conversion, and offline map support.",
    technologies: ["Flutter", "OpenAI API", "Google Places", "Firebase"],
    demoUrl: "#", githubUrl: "#"
  },

  // ──────────── WEB (10) ────────────
  {
    id: "finance-tracker",
    title: "Cyber Finance Tracker",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "High-security financial analytics platform featuring encrypted transaction logs, budget projections, and real-time interactive charts.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "apartment-booking",
    title: "Apartment Booking Portal",
    category: "Web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description: "Luxury property rental platform with virtual 360-degree tours, Stripe payment processing, and host management backend.",
    technologies: ["Next.js", "Stripe", "Supabase", "Tailwind"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Cyber Store",
    category: "Web",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    description: "Fast multi-vendor e-commerce platform with inventory sync, automated invoices, and secure payment integrations.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "portfolio-web",
    title: "DevFolio – Hacker Portfolio Builder",
    category: "Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    description: "Drag-and-drop portfolio website builder with hacker terminal UI themes, animated sections, and one-click Vercel deployment.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "blog-cms-web",
    title: "CyberBlog – Headless CMS Blog",
    category: "Web",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    description: "Headless CMS-powered tech blog platform with Markdown editor, dark theme, code syntax highlighting, and newsletter subscriptions.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind", "Vercel"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "saas-dashboard-web",
    title: "AnalytiX – SaaS Analytics Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Enterprise-level SaaS analytics dashboard with real-time KPI widgets, data export, role-based access control, and dark hacker UI.",
    technologies: ["React", "Chart.js", "Supabase", "Tailwind CSS"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "social-media-web",
    title: "NexusNet – Social Network Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    description: "Developer-focused social network with posts, code snippet sharing, follow/unfollow, live notifications, and dark mode UI.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "job-board-web",
    title: "HireHive – Tech Job Board",
    category: "Web",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    description: "Remote tech job aggregator with skills filtering, salary range sliders, employer dashboard, and one-click application submissions.",
    technologies: ["Next.js", "PostgreSQL", "Supabase", "Tailwind"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "event-management-web",
    title: "TicketX – Event Management Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    description: "Full event management and ticketing web application with QR code tickets, seat mapping, Stripe payments, and organizer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "crypto-tracker-web",
    title: "CryptoWatch – Live Crypto Tracker",
    category: "Web",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
    description: "Real-time cryptocurrency portfolio tracker with live price alerts, candlestick charts, wallet simulation, and hacker dark theme.",
    technologies: ["React", "CoinGecko API", "Chart.js", "Tailwind"],
    demoUrl: "#", githubUrl: "#"
  },

  // ──────────── FULL STACK (10) ────────────
  {
    id: "restaurant-system",
    title: "Restaurant Management & Order System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    description: "All-in-one kitchen display system, QR digital menu, table reservation engine, and instant waiter order routing.",
    technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "hrm-system",
    title: "HRMatrix – HR Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    description: "Complete human resources management platform with payroll automation, leave tracking, employee profiles, and performance reviews.",
    technologies: ["React", "Node.js", "PostgreSQL", "JWT Auth"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "lms-fullstack",
    title: "EduVault – Learning Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: "University-grade LMS with course creation, student enrollment, grading system, live class streaming, and certificate generation.",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "hospital-fullstack",
    title: "MediFlow – Hospital Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    description: "End-to-end hospital operations platform with patient records, doctor scheduling, lab results, billing, and pharmacy management.",
    technologies: ["React", "Express.js", "PostgreSQL", "Supabase"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "logistics-fullstack",
    title: "LogiTrack – Logistics & Fleet Management",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Full-stack fleet management platform with real-time GPS tracking, driver assignment, route optimization, and fuel cost analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "ecommerce-admin-fullstack",
    title: "ShopAdmin – E-Commerce Admin Panel",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive admin dashboard for managing products, orders, customers, coupons, revenue analytics, and delivery status.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "rental-fullstack",
    title: "RentHub – Equipment Rental Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "Equipment rental marketplace with booking calendar, damage reporting, vendor dashboard, and automated invoice generation.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Stripe"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "auction-fullstack",
    title: "BidWar – Live Auction Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    description: "Real-time live auction web app with countdown timers, instant bid updates via WebSocket, automated winner notifications, and payment processing.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "crm-fullstack",
    title: "NexusCRM – Customer Relationship Manager",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
    description: "Powerful CRM system with lead pipeline, email campaigns, task management, sales forecasting, and customer interaction logs.",
    technologies: ["React", "Express.js", "PostgreSQL", "Nodemailer"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "booking-fullstack",
    title: "BookEase – Appointment Booking System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    description: "Multi-service appointment booking platform for salons, clinics, and consultants with calendar sync, SMS reminders, and staff management.",
    technologies: ["React", "Node.js", "Supabase", "Twilio API"],
    demoUrl: "#", githubUrl: "#"
  },

  // ──────────── BACKEND (10) ────────────
  {
    id: "pos-inventory-system",
    title: "POS & Inventory Suite",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    description: "Enterprise point of sale and stock warehouse management software with barcode scanning and low-stock SMS alerts.",
    technologies: ["Flutter Desktop", "Node.js", "PostgreSQL"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "rest-api-backend",
    title: "SecureAPI – Enterprise REST API Gateway",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    description: "Production-grade RESTful API gateway with JWT authentication, rate limiting, request logging, Redis caching, and API key management.",
    technologies: ["Node.js", "Express.js", "Redis", "MongoDB"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "microservices-backend",
    title: "CloudCore – Microservices Architecture",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description: "Docker-based microservices system with separate auth, payment, notification, and product services communicating via message queues.",
    technologies: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "auth-system-backend",
    title: "AuthForge – Auth & Identity Service",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    description: "Enterprise identity and access management service with OAuth 2.0, 2FA, role-based permissions, session management, and audit logs.",
    technologies: ["Node.js", "Express.js", "JWT", "Redis", "PostgreSQL"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "notification-backend",
    title: "PushCore – Notification Service Engine",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?auto=format&fit=crop&w=800&q=80",
    description: "Scalable push notification backend supporting Web Push, FCM (Android/iOS), email, and SMS via a unified webhook-driven architecture.",
    technologies: ["Node.js", "Firebase Admin", "Twilio", "RabbitMQ"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "payment-gateway-backend",
    title: "PayEdge – Payment Gateway Integration",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    description: "Unified payment processing backend integrating Stripe, PayPal, and PayHere with webhook handling, refund management, and transaction logs.",
    technologies: ["Node.js", "Stripe SDK", "PostgreSQL", "Express.js"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "webscraper-backend",
    title: "DataMiner – Web Scraping Engine",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    description: "Automated web scraping and data pipeline system with scheduled jobs, proxy rotation, anti-detection, and MongoDB data storage.",
    technologies: ["Node.js", "Puppeteer", "MongoDB", "Cron Jobs"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "fileupload-backend",
    title: "VaultStore – Secure File Upload Service",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&w=800&q=80",
    description: "Secure multi-file upload API with AWS S3 integration, virus scanning, encrypted storage, file expiry links, and usage analytics.",
    technologies: ["Node.js", "AWS S3", "Multer", "Express.js"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "chatbot-backend",
    title: "CyberBot – AI Chatbot API Backend",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    description: "OpenAI-powered chatbot REST API with persistent conversation history, custom system prompts, token usage tracking, and rate limiting.",
    technologies: ["Node.js", "OpenAI API", "MongoDB", "Express.js"],
    demoUrl: "#", githubUrl: "#"
  },
  {
    id: "realtime-analytics-backend",
    title: "StreamIQ – Real-Time Analytics Engine",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "High-performance real-time analytics backend with event stream ingestion, aggregation pipelines, WebSocket data push, and dashboard API.",
    technologies: ["Node.js", "Redis Streams", "PostgreSQL", "Socket.io"],
    demoUrl: "#", githubUrl: "#"
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Requirement Gathering", desc: "Analyzing project specs, security requirements, architecture goals, and user stories." },
  { step: "02", title: "Design & Prototype", desc: "Crafting wireframes, UI components, database schemas, and interactive Figma mockups." },
  { step: "03", title: "Development", desc: "Writing clean, modular, and performant code for frontend, mobile, and backend microservices." },
  { step: "04", title: "Testing & Security Audit", desc: "Rigorous unit testing, penetration testing, cross-browser validation, and optimization." },
  { step: "05", title: "Deployment", desc: "Configuring CI/CD pipelines, Railway backend, Vercel frontend, and Supabase DB production instances." },
  { step: "06", title: "Maintenance", desc: "24/7 continuous monitoring, automated backups, security patching, and feature updates." }
];

export const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content: "Dulaj delivered a secure, scalable, and beautiful application that exceeded all expectations. His attention to detail in code and UI is top notch!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Samantha Reed",
    role: "Product Manager, SecureNet",
    content: "The hacker aesthetic matched with flawless backend performance made our product launch a huge success. Highly recommended developer!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Founder, Cloudify Solutions",
    content: "Dulaj's Flutter mobile app development skills are outstanding. Fast loading speeds, clean UI, and 100% bug-free delivery.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "LKR 149,900",
    description: "Ideal for personal portfolios, landing pages, and small business websites.",
    features: [
      "Custom Responsive Website",
      "5 Core Pages Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Maintenance",
      "SSL & Security Basic Audit"
    ],
    highlighted: false,
    cta: "Select Starter"
  },
  {
    name: "Professional",
    price: "LKR 389,900",
    description: "Perfect for growing companies needing web apps, mobile apps, or custom backends.",
    features: [
      "Full Stack Web App or Flutter App",
      "Custom Node.js / Supabase Backend",
      "Database Architecture & API Integration",
      "Interactive Animations & Dark Hacker UI",
      "Cybersecurity Code Audit",
      "3 Months Support & Maintenance"
    ],
    highlighted: true,
    cta: "Select Professional"
  },
  {
    name: "Enterprise",
    price: "LKR 899,900",
    description: "Comprehensive solution for large-scale platforms, custom security & cloud architectures.",
    features: [
      "Cross-Platform Web & Mobile Ecosystem",
      "Custom Backend + Microservices Setup",
      "Penetration Testing & Hardening",
      "CI/CD Pipeline Setup (Vercel/Railway)",
      "Dedicated 24/7 Priority Support",
      "Source Code & Architectural Documentation"
    ],
    highlighted: false,
    cta: "Select Enterprise"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building High-Performance Flutter Apps with Clean Architecture",
    date: "July 20, 2026",
    category: "Mobile",
    readTime: "5 min read",
    snippet: "Learn how to structure your Flutter projects using BLoC / Provider state management and modular clean architecture."
  },
  {
    id: 2,
    title: "Top 10 Web Application Security Best Practices in 2026",
    date: "July 15, 2026",
    category: "Cyber Security",
    readTime: "8 min read",
    snippet: "A deep dive into OWASP Top 10 vulnerabilities, JWT security, rate-limiting, and preventing SQL/NoSQL injection."
  },
  {
    id: 3,
    title: "Optimizing React & Vite for Sub-Second Page Loads",
    date: "July 02, 2026",
    category: "Frontend",
    readTime: "6 min read",
    snippet: "Practical techniques for code-splitting, tree-shaking, image optimization, and canvas animation performance."
  }
];
