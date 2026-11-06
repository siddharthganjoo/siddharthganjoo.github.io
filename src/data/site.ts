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
  title: "Siddharth Ganjoo · Machine Learning Engineer",
  name: "Siddharth Ganjoo",
  initials: "SG",
  role: "Machine Learning Engineer",
  description: "Machine Learning Engineer at Supercomputing Brabant and the TU/e Supercomputing Center. GPU workload optimisation and AI infrastructure on the SPIKE cluster (NVIDIA DGX B300), helping Brabant companies deploy AI at scale.",
  location: "Eindhoven, Netherlands",
  url: "https://siddharthganjoo.github.io/",
  resumeUrl: "/assets/CV_SiddharthGanjoo.pdf",
  socials: {
    github: "https://github.com/siddharthganjoo",
    linkedin: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  stats: [
    { value: "50%", label: "fewer sorting errors with RL calibration" },
    { value: "€25K", label: "annual savings per facility" },
    { value: "B300", label: "NVIDIA DGX GPUs I optimise workloads for" },
    { value: "EAISI", label: "AI Incentive Award winner" }
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" }
  ]
};

