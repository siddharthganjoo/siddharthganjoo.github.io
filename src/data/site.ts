export interface SiteConfig {
  title: string;
  name: string;
  initials: string;
  role: string;
  description: string;
  email: string;
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
  description: "Building high-performance AI and neuromorphic systems at the TU/e Supercomputing Center (Spike AI), previously engineered scalable production pipelines at Vencomatic Group, and automated computer vision solutions as Co-Founder of Loopit.ai. MSc Computer Science @ TU Eindhoven.",
  email: "sganjoo2000@gmail.com",
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
    { label: "Timeline", href: "#timeline" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Research", href: "#research" },
    { label: "Testimonials", href: "#recommendations" }
  ]
};

