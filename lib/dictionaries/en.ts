import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    titleSuffix: "ERP & Application Support | SQL & Data Integration",
    description:
      "Hamza Charaf Eddine — IHK-FOSA certified application developer specializing in ERP application support, SQL-based diagnostics, and data integration (SSIS, KNIME, EDI/EDIFACT, BMEcat/XML).",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    downloadCv: "Download CV",
    skipToContent: "Skip to content",
  },
  hero: {
    kicker: "ERP & Application Support · SQL & Data Integration",
    heading: "I keep enterprise data moving correctly, and I diagnose it when it doesn't.",
    subhead:
      "IHK-FOSA certified application developer with hands-on experience supporting ERP and SaaS applications, tracing faults through SQL and logs, and maintaining the data pipelines — SSIS, KNIME, EDI/EDIFACT, BMEcat/XML — that keep them in sync.",
    ctaPrimary: "View experience",
    ctaSecondary: "Download CV",
    location: "Based in Memmingen, Germany",
  },
  home: {
    introTitle: "What I do",
    introBody:
      "I work at the point where ERP systems, SQL databases, and application support meet. Day to day that means narrowing down faults in production systems using SQL and logs, maintaining clean ERP master data, and keeping EDI and XML data feeds running between suppliers and internal systems. I also build small full-stack applications on the side to stay close to modern development.",
    strengthsTitle: "Where I add value",
    strengths: [
      {
        title: "SQL-based diagnostics",
        body: "Tracing data and system errors back to their source using SQL Server, logs, and system data — not guesswork.",
      },
      {
        title: "ERP & master data",
        body: "Maintaining and quality-checking ERP article master data and product data in PIM systems, so downstream processes get clean input.",
      },
      {
        title: "Data integration",
        body: "Monitoring ETL processes in SSIS and KNIME, and validating EDI/EDIFACT and BMEcat/XML data moving between systems.",
      },
      {
        title: "User & ticket support",
        body: "Handling support tickets end to end — diagnosis, documentation, and coordination with development teams on complex incidents.",
      },
    ],
    experiencePreviewTitle: "Recent experience",
    viewAllExperience: "View full experience",
    projectsPreviewTitle: "Selected project",
    viewAllProjects: "View all projects",
    contactCta: {
      title: "Open to new opportunities",
      body: "Available from November 2026. If you're hiring for application support, ERP/data integration, or a junior development role, I'd like to hear from you.",
      button: "Get in touch",
    },
  },
  about: {
    heading: "About",
    intro: "A short background on my training, certification, and how I work.",
    summary:
      "I'm an IHK-FOSA certified Fachinformatiker für Anwendungsentwicklung (application developer — a German vocational qualification, recognized here with full equivalence) with practical experience in ERP, application support, and data integration. I'm comfortable tracing faults with SQL, optimizing data processes, and supporting the people who rely on these systems day to day. I work confidently with Microsoft SQL Server, SSIS, and KNIME, as well as BMEcat/XML and EDI/EDIFACT data formats.",
    factsTitle: "Quick facts",
    facts: [
      { label: "Location", value: "Memmingen, Bavaria, Germany" },
      { label: "Certification", value: "IHK-FOSA — full equivalence, Dec 2021" },
      { label: "Availability", value: "From November 2026" },
      { label: "Driving licence", value: "Class B" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "German", level: "Professional working proficiency (B2)" },
      { name: "English", level: "Professional working proficiency (B2)" },
      { name: "French", level: "Professional working proficiency (B2)" },
    ],
    educationTitle: "Education & recognition",
    education: [
      {
        title: "Fachinformatiker – Application Development",
        org: "IHK FOSA, Nuremberg — full equivalence recognition",
        period: "Dec 2021",
      },
      {
        title: "Bachelor's — IT Systems and Software",
        org: "PIGIER Essaouira / Avenir Formation, Essaouira, Morocco",
        period: "Sep 2018 – Sep 2019",
      },
      {
        title: "Diploma Technician — IT Development Techniques",
        org: "OFPPT NTIC, Marrakesh, Morocco",
        period: "Jun 2016 – Jul 2018",
      },
      {
        title: "Secondary diploma (Abitur) — Experimental Sciences (Biology & Geology)",
        org: "Lycée Ariha, Marrakesh, Morocco",
        period: "Jun 2014",
      },
    ],
    traitsTitle: "How I work",
    traits: [
      "Analytical thinking",
      "Structured way of working",
      "Fast onboarding into new systems",
      "Strong technical understanding",
    ],
  },
  experience: {
    heading: "Experience",
    intro: "Reverse-chronological, with the systems and tools used in each role.",
    entries: [
      {
        role: "IT Application Support / Application Support",
        org: "Data 5 Infrastructure Technologies GmbH",
        location: "Frankfurt am Main, Germany",
        period: "Jun 2023 – Nov 2026",
        bullets: [
          "Supported ERP and SaaS applications in technical support",
          "Used SQL to narrow down data and system faults",
          "Diagnosed issues from logs, system data, and error messages",
          "Processed and tracked support tickets through to resolution",
          "Advised users on application-related questions",
          "Documented fault patterns, root causes, and fixes",
          "Coordinated with development teams on complex incidents",
        ],
      },
      {
        role: "Continuing Education & Self-Study",
        org: "Independent",
        location: "Germany",
        period: "Oct 2022 – May 2023",
        bullets: ["Focused study of ERP data processes, SQL, and IT application support"],
      },
      {
        role: "ERP Data Management & Master Data Maintenance",
        org: "R. Pöppel GmbH & Co. KG",
        location: "Memmingen, Germany",
        period: "Jan 2021 – Sep 2022",
        bullets: [
          "Maintained, updated, and quality-checked ERP article master data",
          "Prepared and quality-controlled product data in PIM systems",
          "Monitored ETL data processes built with SSIS",
          "Used SQL to check data stocks and data flows",
          "Imported and quality-checked EDI/EDIFACT and BMEcat/XML data",
        ],
      },
      {
        role: "IT Support / Backend Support",
        org: "M-PRIME",
        location: "Marrakesh, Morocco",
        period: "Mar 2017 – Jun 2018",
        bullets: [
          "Tested Java-based backend applications and REST APIs",
          "Carried out technical fault analysis, documentation, and coordination with development teams",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    intro: "A full-stack application I designed, built, and operate independently.",
    featuredLabel: "Featured project",
    moreOnGithubTitle: "More on GitHub",
    moreOnGithubBody:
      "My GitHub also holds smaller exercises and course-based repositories from learning React, Next.js, and backend fundamentals — useful to browse, but not listed here as standalone projects.",
    viewGithub: "View GitHub profile",
    marrakech: {
      name: "MarrakechDunes",
      tagline: "Full-stack tourism booking platform",
      summary:
        "A booking platform for a Morocco-based tour operator: travelers browse activities and submit booking requests, while staff manage availability, booking and payment status, and reporting from a role-based back office.",
      viewCaseStudy: "Read the case study",
      viewLive: "View live site",
      viewRepo: "View repository",
    },
  },
  caseStudy: {
    back: "Back to projects",
    overviewTitle: "Overview",
    overview:
      "MarrakechDunes is a booking platform for a Marrakesh-based tour operator offering desert, mountain, and coastal excursions. The public site presents activities and collects booking requests; every request starts as pending until staff confirm it. I designed, built, and operate the application end to end, and it's deployed and in live use.",
    roleLabel: "Role",
    role: "Independent developer — design, implementation, deployment, and ongoing maintenance.",
    stackLabel: "Tech stack",
    stackTitle: "Built with",
    stack: [
      { group: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Radix UI"] },
      { group: "Backend", items: ["Node.js", "Express", "TypeScript", "Mongoose"] },
      { group: "Data", items: ["MongoDB", "Redis (optional caching)"] },
      { group: "Deployment", items: ["Vercel (frontend)", "Render (backend)", "Docker"] },
    ],
    architectureTitle: "Architecture",
    architecture: [
      "Monorepo split into client, server, and shared packages so types stay consistent across the stack.",
      "Frontend deployed on Vercel; Express API deployed separately on Render, talking to a MongoDB database.",
      "Dockerized for consistent builds (separate API and web Dockerfiles, Docker Compose for local development).",
    ],
    featuresTitle: "What it does",
    features: [
      "Public site with activity listings, a booking-request flow, and traveler reviews",
      "Every booking request starts as pending and is reviewed by staff before confirmation",
      "Role-based back office: admins run daily operations; superadmins also manage activities, staff accounts, audit logs, and executive reporting",
      "Separate tracking for booking status and payment status (unpaid / deposit paid / fully paid)",
      "Bulk status updates and data exports, plus an executive dashboard for superadmins",
      "Session-based staff authentication with CSRF protection, rate limiting, and bcrypt password hashing",
      "Automated email notifications and PDF exports",
    ],
    noteTitle: "Known limitation",
    note: "The customer-facing OTP login is explicitly documented in the project as not production-ready yet — it's a planned area for hardening, not a finished feature.",
    linksTitle: "Links",
    viewLive: "View live site",
    viewRepo: "View repository",
  },
  skills: {
    heading: "Skills",
    intro: "Grouped by area, matching how I actually use them day to day.",
    groups: [
      {
        title: "ERP & Application Support",
        items: ["User support", "Ticket handling & fault diagnosis", "Log & system review", "Technical documentation"],
      },
      {
        title: "SQL & Data Integration",
        items: ["Microsoft SQL Server", "SSIS / ETL processes", "KNIME Analytics", "Data quality & master data"],
      },
      {
        title: "Web development",
        items: ["React", "TypeScript", "Node.js / Express", "Next.js", "Tailwind CSS", "REST APIs"],
      },
    ],
    toolsTitle: "Tools & formats",
    tools: ["Git", "PIM systems", "BMEcat/XML", "EDI/EDIFACT", "Java (basics)", "MongoDB", "Docker"],
  },
  contact: {
    heading: "Contact",
    intro: "Open to application support, ERP/data integration, and junior development roles, available from November 2026.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    linksLabel: "Elsewhere",
    availability: "Available from November 2026",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
  },
};

export default en;
