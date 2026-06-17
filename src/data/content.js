// -----------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit text/links here — components render from this data.
// `icon` fields are string keys resolved by the icon map in components/Skills.jsx.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Praveen Dedigama",
  firstName: "Praveen",
  lastName: "Dedigama",
  title: "Software Engineer",
  // Rotated in the hero
  roles: [
    "Full-Stack Engineer",
    "AI Application Developer",
    "Next.js & NestJS Developer",
    "Cloud & Microservices",
  ],
  location: "Kiribathgoda, Sri Lanka",
  available: true,
  availabilityText: "Open to Associate Software Engineer roles",
  tagline:
    "I build scalable, AI-integrated platforms - from monorepo architectures to cloud deployments - with clean code and a focus on great user experience.",
  summary:
    "Fourth-year BSc (Hons) Software Engineering student at the University of Kelaniya with a strong command of modern ecosystems including React, Next.js, NestJS, TypeScript and Node.js. I have recent hands-on industry experience building AI-integrated platforms, cloud deployments, and monorepo & microservice architectures - and I love turning complex problems into clean, maintainable systems.",
  cv: "/cv.pdf",
  photo: "/profile.jpg",
};

export const stats = [
  { value: "3.26", label: "GPA / 4.0" },
  { value: "4th", label: "Year · BSc SE" },
  { value: "15+", label: "Technologies" },
  { value: "5+", label: "Projects shipped" },
];

export const socials = {
  github: "https://github.com/Praveendedigama",
  linkedin: "https://www.linkedin.com/in/praveen-dedigama-479b96161/",
  email: "mailtopraveenhansa@gmail.com",
  phone: "+94 76 864 4263",
  phoneHref: "tel:+94768644263",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

// Skill groups — `icon` is a key into the iconMap in Skills.jsx
export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "C", icon: "c" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "AI & Engineering",
    icon: "ai",
    items: [
      { name: "Vertex AI", icon: "vertexai" },
      { name: "Prompt Engineering", icon: "prompt" },
      { name: "Vector Embeddings", icon: "embeddings" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "tool",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Turborepo", icon: "turborepo" },
      { name: "Jira", icon: "jira" },
      { name: "Trello", icon: "trello" },
      { name: "Postman", icon: "postman" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
];

// Shown as a marquee / chip row
export const methodologies = [
  "REST APIs",
  "GraphQL",
  "Microservices",
  "RBAC",
  "OOP",
  "JWT Authentication",
  "Agile / Scrum",
];

export const experience = [
  {
    company: "Future Life Investment Limited",
    logo: "/flilogo.png",
    role: "Junior Software Engineer",
    period: "Jan 2026 – Jul 2026",
    location: "Sri Lanka",
    summary:
      "Developed and architected critical features for the Snap super-app ecosystem, focusing on e-commerce and an AI-native jobs marketplace.",
    products: [
      {
        name: "SnapJobs",
        live: "https://www.snapjobs.lk",
        kind: "AI-Native Jobs Marketplace",
        blurb:
          "Architected and built a full-stack AI jobs marketplace as a Turborepo monorepo with three Next.js frontends (seeker, recruiter, admin) and a NestJS API.",
        highlights: [
          "Engineered an AI-powered CV-to-job matching engine using vector embeddings (text-embedding-005) and domain-aware scoring profiles, validated by a golden-test framework.",
          "Implemented secure cookie-based authentication with OTP email verification, dual-role accounts, RBAC, and a credits system.",
          "Built an automated CV extraction pipeline (PDF parsing with OCR fallback) and deployed it to Google Cloud Run via Docker.",
        ],
        tags: ["Next.js", "NestJS", "Turborepo", "Vertex AI", "Vector Embeddings", "GCP Cloud Run", "Docker", "RBAC"],
      },
      {
        name: "Snap",
        live: "https://www.snap.lk",
        kind: "Multi-Vendor E-commerce",
        blurb:
          "Built a full-stack product review system end-to-end via a custom Vendure/GraphQL plugin supporting verified purchases and variant-level ratings with S3 image uploads.",
        highlights: [
          "Optimized review performance by caching aggregated stats in product fields and applying DataLoader batching, eliminating N+1 queries.",
          "Developed a weight-based shipping engine with database-driven rates exposed over GraphQL for real-time delivery-cost estimates.",
          "Implemented merchandising collections with category filtering and a bank-transfer checkout flow with WhatsApp integration.",
          "Hardened a server-side image-upload proxy to strictly allowlist trusted cloud-storage origins, preventing SSRF.",
        ],
        tags: ["Vendure", "GraphQL", "DataLoader", "AWS S3", "Node.js", "TypeScript"],
      },
    ],
  },
];

// `live` / `repo` / `repoBackend` are optional; cards only render buttons that exist.
// TODO(praveen): replace placeholder repo URLs with the exact repositories.
export const projects = [
  {
    title: "SnapJobs",
    type: "Professional",
    period: "Jan 2026 – Jul 2026",
    image: "/snapjobsimg.png",
    description:
      "An AI-native jobs marketplace built as a Turborepo monorepo with three Next.js frontends (seeker, recruiter, admin) and a NestJS API. Features AI-powered CV-to-job matching via vector embeddings, RBAC, OTP authentication, and an automated CV extraction pipeline deployed on Google Cloud Run.",
    tags: ["Next.js", "NestJS", "Turborepo", "Vertex AI", "Docker", "GCP"],
    live: "https://www.snapjobs.lk",
  },
  {
    title: "Snap",
    type: "Professional",
    period: "Jan 2026 – Jul 2026",
    image: "/snaplkimg.png",
    description:
      "A multi-vendor e-commerce super-app with a custom Vendure/GraphQL product review plugin, DataLoader-optimised queries, a weight-based shipping engine, merchandising collections, and a bank-transfer checkout flow with WhatsApp integration.",
    tags: ["Vendure", "GraphQL", "Node.js", "TypeScript", "AWS S3"],
    live: "https://www.snap.lk",
  },
  {
    title: "CBC E-commerce Platform",
    type: "Individual",
    period: "Jul 2025 – Oct 2025",
    image: "/cbclogo.png",
    description:
      "A complete full-stack e-commerce platform with responsive UI, shopping cart, user authentication, and an admin dashboard for product and order management. Secure login and product APIs built with Node.js/Express enable real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://cbc-beauty-frontend.vercel.app/",
    repo: "https://github.com/Praveendedigama",
    repoBackend: "https://github.com/Praveendedigama",
  },
  {
    title: "Fuel Management System",
    type: "Group",
    period: "Jan 2025 – Feb 2025",
    image: "/fuellogo.png",
    description:
      "A fuel management web app with stock tracking, transaction reports, and JWT-based secure authentication for role-based access. RESTful Spring Boot APIs manage inventory, transactions, and reporting; built collaboratively with Git & Jira in an Agile flow.",
    tags: ["React", "Spring Boot", "Tailwind CSS", "JWT", "REST"],
    repo: "https://github.com/lakshitha779988/Fuel-Management-System",
  },
];

// Add your certificate images to /public/certs/ and the real "View Certificate"
// URLs below. Cards show an elegant gradient fallback until an image is provided.
// TODO(praveen): set image paths + link URLs.
export const certifications = [
  {
    title: "Full-Stack Web Development (MERN)",
    type: "Participation",
    issuer: "MERN Stack Program",
    image: "/certs/mern-participation.png",
    link: "#",
  },
  {
    title: "Full-Stack Web Development (MERN)",
    type: "Project Completion",
    issuer: "MERN Stack Program",
    image: "/certs/mern-completion.png",
    link: "#",
  },
  {
    title: "Programming with JavaScript",
    type: "Course",
    issuer: "Meta · Coursera",
    image: "/certs/meta-javascript.png",
    link: "#",
  },
  {
    title: "Introduction to DevOps",
    type: "Course",
    issuer: "IBM · Coursera",
    image: "/certs/ibm-devops.png",
    link: "#",
  },
];

export const education = [
  {
    school: "University of Kelaniya",
    qualification: "B.Sc. (Hons) Software Engineering",
    period: "Jul 2023 – Present",
    detail: "Current GPA 3.26 / 4.0",
    note: "Specializing in Full-Stack Web Development, MERN Stack, Database Technologies, and Responsive Web Applications.",
  },
  {
    school: "Prince of Wales College, Moratuwa",
    qualification: "G.C.E. Advanced Level",
    period: "Jul 2019 – Feb 2022",
    detail: "Mathematics Stream · Z-Score 1.6789",
    note: "Strong mathematics foundation that underpins my problem-solving approach.",
  },
];

export const activities = [
  {
    role: "Web Developer",
    org: "IT Unit · Leo Club, University of Kelaniya",
    period: "Oct 2022 – Present",
    icon: "code",
    note: "Build and maintain web applications and internal tools for university departments; bug fixes, feature work, and code reviews with Git best practices.",
  },
  {
    role: "Programme Team Member",
    org: "IEEE Day 2024, University of Kelaniya",
    period: "Oct 2024",
    icon: "users",
    note: "Supported planning, coordination, and logistics of IEEE Day technical events and sessions for students.",
  },
  {
    role: "Wrestler",
    org: "University of Kelaniya",
    period: "Dec 2023 – Jun 2025",
    icon: "trophy",
    note: "Competed at university-level wrestling events — discipline, resilience, and commitment.",
  },
  {
    role: "Cricket Player",
    org: "Prince of Wales College",
    period: "2014 – 2016",
    icon: "trophy",
    note: "Represented the school cricket team — teamwork, communication, and leadership.",
  },
];
