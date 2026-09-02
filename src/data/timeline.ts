export interface TimelineItem {
  id: string;
  category: 'work' | 'news';
  typeBadge: string;
  isAward?: boolean;
  dateBadge: string;
  location?: string;
  roleTitle: string;
  orgName: string;
  description: string;
  logoImg?: string;
  logoBadge?: string;
  mediaImg?: string;
  mediaAlt?: string;
  skills?: string[];
  linkedinUrl?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "tue-supercomputing",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Aug 2026 – Present",
    location: "Eindhoven, Netherlands",
    roleTitle: "Machine Learning Engineer",
    orgName: "TU/e Supercomputing Center — Spike AI",
    description: "Developing high-performance Spiking Neural Network (SNN) pipelines and neuromorphic computing architectures on TU/e supercomputing infrastructure for energy-efficient next-generation AI.",
    logoImg: "assets/logos/tue.png",
    skills: ["Spike AI", "Neuromorphic", "HPC", "PyTorch", "Python"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "vencomatic-junior-ds",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Nov 2025 – Jun 2026",
    location: "Eersel, Netherlands",
    roleTitle: "Junior Data Scientist",
    orgName: "Vencomatic Group",
    description: "Built automated data pipelines and interactive dashboards using Python, SQL Server, and Streamlit to analyze poultry production telemetry, track KPIs, and detect sensor anomalies on Azure.",
    logoImg: "assets/logos/vencomatic.png",
    skills: ["Python", "SQL Server", "Streamlit", "Azure", "Telemetry"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "msc-graduation",
    category: "news",
    typeBadge: "Milestone",
    dateBadge: "Aug 2025",
    location: "Eindhoven, Netherlands",
    roleTitle: "MSc Computer Science Graduation",
    orgName: "Eindhoven University of Technology (TU/e)",
    description: "Graduated from TU/e with Master's thesis on reinforcement learning for adaptive egg-sorting in collaboration with Vencomatic Group.",
    mediaImg: "assets/news/graduation.jpg",
    mediaAlt: "MSc Graduation at TU Eindhoven",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "vencomatic-thesis",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Dec 2024 – Aug 2025",
    location: "Eersel, Netherlands",
    roleTitle: "Master's Thesis Intern",
    orgName: "Vencomatic Group",
    description: "Developed RL-based calibration system reducing false negatives by over 50% (~€25,000 annual savings, ~15,000 eggs saved, ~1,440kg CO₂e avoided). Integrated with knowledge graphs.",
    logoImg: "assets/logos/vencomatic.png",
    skills: ["Reinforcement Learning", "Knowledge Graphs", "Optimization"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "ai-summit-brainport",
    category: "news",
    typeBadge: "Event",
    dateBadge: "Dec 2024",
    location: "Evoluon, Eindhoven",
    roleTitle: "AI Summit Brainport 2024",
    orgName: "Loopit.ai Showcase",
    description: "Showcased Loopit.ai's platform at the Evoluon to key stakeholders across insurance and automotive industries.",
    mediaImg: "assets/news/loopit-ai-summit.jpg",
    mediaAlt: "AI Summit Brainport 2024",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "william-mary",
    category: "work",
    typeBadge: "Research",
    dateBadge: "Sep 2024 – Dec 2024",
    location: "Williamsburg, VA, United States",
    roleTitle: "Research Intern",
    orgName: "William & Mary University",
    description: "Optimized LLM prompts for code generation using CodeT5 by adapting gisting and prompt masking. Benchmarked on CodexGlue with CrystalBLEU and Pass@k.",
    logoImg: "assets/logos/wm.png",
    skills: ["LLMs", "CodeT5", "Prompt Gisting", "NLP"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "iese-bootcamp",
    category: "news",
    typeBadge: "Entrepreneurship",
    dateBadge: "Jul 2024",
    location: "Barcelona, Spain",
    roleTitle: "IESE Ignite Bootcamp Barcelona",
    orgName: "EuroTeQ & IESE Business School",
    description: "Represented TU/e in EuroTeQ cohort, accelerating Loopit.ai through mentorship, business development, and VC presentations.",
    mediaImg: "assets/news/iese-bootcamp.jpg",
    mediaAlt: "IESE Bootcamp Barcelona",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "eaisi-award",
    category: "news",
    typeBadge: "🏆 Award",
    isAward: true,
    dateBadge: "Apr 2024",
    location: "Eindhoven, Netherlands",
    roleTitle: "EAISI AI Incentive Award Winner",
    orgName: "Eindhoven AI Systems Institute",
    description: "Won the €1,000 EAISI AI Incentive Award for Loopit.ai's promising automated vehicular damage detection platform.",
    mediaImg: "assets/news/eaisi-award.jpg",
    mediaAlt: "EAISI AI Award Winner",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "loopit-ai",
    category: "work",
    typeBadge: "Founder",
    dateBadge: "Feb 2024 – Present",
    location: "Eindhoven, Netherlands",
    roleTitle: "Co-Founder & CTO",
    orgName: "Loopit.ai",
    description: "Led end-to-end development of AI-driven platform automating vehicle damage detection and repair estimation. Managed 12-member team. Won €1,000 EAISI AI Incentive Award.",
    logoBadge: "LA",
    skills: ["YOLOv8", "Computer Vision", "FastAPI", "Docker"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "philips-innovation",
    category: "news",
    typeBadge: "Innovation",
    dateBadge: "2024",
    location: "Eindhoven, Netherlands",
    roleTitle: "Philips Innovation Initiative",
    orgName: "Philips",
    description: "Participated in Philips innovation initiative, collaborating on cutting-edge technology challenges in the Eindhoven ecosystem.",
    mediaImg: "assets/news/philips-innovation.jpg",
    mediaAlt: "Philips Innovation",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "eindhovens-dagblad",
    category: "news",
    typeBadge: "Press",
    dateBadge: "Sep 2023",
    location: "Eindhoven, Netherlands",
    roleTitle: "Featured in Eindhovens Dagblad",
    orgName: "Regional Dutch Press",
    description: "Cashless festival bar system developed for student community featured in the regional newspaper.",
    mediaImg: "assets/news/eindhovens-dagblad.jpg",
    mediaAlt: "Featured in Eindhovens Dagblad",
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "bu-wuppertal",
    category: "work",
    typeBadge: "Research",
    dateBadge: "Feb 2022 – May 2022",
    location: "Wuppertal, Germany",
    roleTitle: "Research Intern",
    orgName: "Bergische Universität Wuppertal",
    description: "Developed and fine-tuned deep learning models utilizing reinforcement learning and job-shop scheduling to optimize aerospace production in the AlphaMES project.",
    logoBadge: "BU",
    skills: ["Deep Learning", "Reinforcement Learning", "Aerospace"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  },
  {
    id: "ingersoll-rand",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Oct 2021 – Mar 2022",
    location: "India",
    roleTitle: "Software Engineering Intern",
    orgName: "Ingersoll Rand",
    description: "Developed Python-based dashboard with real-time telemetry data integration and modular pipelines for machine usage monitoring and automated reporting on cloud platforms.",
    logoImg: "assets/logos/ingersoll.png",
    skills: ["Python", "Dashboards", "Telemetry"],
    linkedinUrl: "https://www.linkedin.com/in/siddharthganjoo/"
  }
];
