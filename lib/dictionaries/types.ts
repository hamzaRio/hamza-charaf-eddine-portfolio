export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  title: string;
  org: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Dictionary {
  meta: {
    titleSuffix: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    downloadCv: string;
    skipToContent: string;
  };
  hero: {
    kicker: string;
    heading: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };
  home: {
    introTitle: string;
    introBody: string;
    strengthsTitle: string;
    strengths: { title: string; body: string }[];
    experiencePreviewTitle: string;
    viewAllExperience: string;
    projectsPreviewTitle: string;
    viewAllProjects: string;
    contactCta: {
      title: string;
      body: string;
      button: string;
    };
  };
  about: {
    heading: string;
    intro: string;
    summary: string;
    factsTitle: string;
    facts: { label: string; value: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    educationTitle: string;
    education: EducationEntry[];
    traitsTitle: string;
    traits: string[];
  };
  experience: {
    heading: string;
    intro: string;
    entries: ExperienceEntry[];
  };
  projects: {
    heading: string;
    intro: string;
    featuredLabel: string;
    moreOnGithubTitle: string;
    moreOnGithubBody: string;
    viewGithub: string;
    marrakech: {
      name: string;
      tagline: string;
      summary: string;
      viewCaseStudy: string;
      viewLive: string;
      viewRepo: string;
    };
  };
  caseStudy: {
    back: string;
    overviewTitle: string;
    overview: string;
    roleLabel: string;
    role: string;
    stackLabel: string;
    stackTitle: string;
    stack: { group: string; items: string[] }[];
    architectureTitle: string;
    architecture: string[];
    featuresTitle: string;
    features: string[];
    noteTitle: string;
    note: string;
    linksTitle: string;
    viewLive: string;
    viewRepo: string;
  };
  skills: {
    heading: string;
    intro: string;
    groups: SkillGroup[];
    toolsTitle: string;
    tools: string[];
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linksLabel: string;
    availability: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
