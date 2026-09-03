export interface SiteConfig {
  title: string;
  name: string;
  initials: string;
  role: string;
  description: string;
  location: string;
  url: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  title: "Siddharth Ganjoo - Machine Learning Engineer & Data Scientist",
  name: "Siddharth Ganjoo",
  initials: "SG",
  role: "Machine Learning Engineer & Data Scientist",
  description: "Machine Learning Engineer on the Spike-A supercomputer within the AI Supercomputing Initiative Brabant (AI-SIB) at TU Eindhoven (TU/e). Specializing in distributed high-performance computing, deep learning, and scalable production AI pipelines.",
  location: "Eindhoven, Netherlands",
  url: "https://siddharthganjoo.github.io/",
  resumeUrl: "assets/CV_SiddharthGanjoo.pdf",
  socials: {
    github: "https://github.com/siddharthganjoo",
    linkedin: "https://linkedin.com/in/siddharthganjoo"
  },
  stats: [
    { value: "€25K+", label: "Annual Savings" },
    { value: "50%", label: "Error Reduction" },
    { value: "€1,000", label: "EAISI Award" },
    { value: "15K+", label: "Eggs Saved / yr" }
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Lab", href: "#lab" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
    { label: "GitHub", href: "#github" },
    { label: "Research", href: "#research" }
  ]
};

