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
  /** Font Awesome glyph shown on highlight cards that have no photo. */
  icon?: string;
  url?: string;
  skills?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "supercomputing-brabant",
    category: "work",
    typeBadge: "Supercomputing",
    dateBadge: "Aug 2026 – Present",
    location: "North Brabant, Netherlands",
    roleTitle: "Machine Learning Engineer",
    orgName: "Supercomputing Brabant",
    description: "GPU workload optimisation and AI infrastructure on Spike-A, the NVIDIA DGX B300 extension of the SPIKE cluster for Supercomputing Brabant. I help Brabant-based companies take their AI workloads from prototype to production at scale.",
    logoImg: "/assets/logos/supercomputing-brabant.svg",
    skills: ["NVIDIA DGX B300", "GPU optimisation", "Distributed training", "Slurm", "CUDA"]
  },
  {
    id: "tue-scc",
    category: "work",
    typeBadge: "Supercomputing",
    dateBadge: "Aug 2026 – Present",
    location: "Eindhoven, Netherlands",
    roleTitle: "ML Engineer",
    orgName: "TU/e Supercomputing Center",
    description: "Part of the TU/e Supercomputing Center for AI, HPC and Quantum, home of the Spike-1 supercomputer. Among other things, I built and published a working TensorFlow setup for NVIDIA’s new B300 GPUs.",
    logoImg: "/assets/logos/tue.svg",
    skills: ["HPC", "TensorFlow", "PyTorch", "Linux"]
  },
  {
    id: "ai-salon-eindhoven",
    category: "news",
    typeBadge: "Event",
    dateBadge: "Oct 2026",
    location: "High Tech Campus, Eindhoven",
    roleTitle: "AI Salon Eindhoven",
    orgName: "Representing Supercomputing Brabant",
    description: "At the Supercomputing Brabant stand, I met teams working on all kinds of AI challenges, talked through their ideas and compute needs, and showed how supercomputing can support their work.",
    icon: "fa-comments"
  },
  {
    id: "supercomputing-brabant-launch",
    category: "news",
    typeBadge: "Launch",
    dateBadge: "Sep 2026",
    location: "JADS, ’s-Hertogenbosch",
    roleTitle: "Supercomputing Brabant launches",
    orgName: "BOM, Tilburg University, TU/e and Provincie Noord-Brabant",
    description: "The official launch of Supercomputing Brabant: large-scale AI compute, expert support and a regional community, so that promising AI ideas don’t get stuck at the prototype stage.",
    icon: "fa-rocket",
    url: "https://supercomputingbrabant.nl"
  },
  {
    id: "loopit-ai",
    category: "work",
    typeBadge: "Founder",
    dateBadge: "Feb 2024 – Oct 2026",
    location: "Eindhoven, Netherlands",
    roleTitle: "Co-Founder",
    orgName: "LoopIt.ai",
    description: "Built an AI-powered vehicle damage detection platform with computer vision and deep learning. Led technical strategy, product development and the end-to-end system architecture, from concept to deployment, and mentored several cohorts of university interns.",
    logoImg: "/assets/logos/loopit.svg",
    skills: ["Computer vision", "YOLOv8", "FastAPI", "Docker"]
  },
  {
    id: "vencomatic-data-scientist",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Oct 2025 – Jul 2026",
    location: "Eersel, Netherlands",
    roleTitle: "Data Scientist",
    orgName: "Vencomatic Group",
    description: "Built and deployed machine learning models for anomaly detection and classification in industrial automation systems, and developed Azure data pipelines and web dashboards to modernise legacy tools.",
    logoImg: "/assets/logos/vencomatic.png",
    skills: ["Python", "Azure", "Time series", "Computer vision", "SQL Server", "Streamlit"]
  },
  {
    id: "msc-graduation",
    category: "news",
    typeBadge: "Milestone",
    dateBadge: "Aug 2025",
    location: "Eindhoven, Netherlands",
    roleTitle: "MSc Computer Science Graduation",
    orgName: "Eindhoven University of Technology (TU/e)",
    description: "Graduated from TU/e with a master’s thesis on reinforcement learning for adaptive egg sorting, in collaboration with Vencomatic Group.",
    mediaImg: "/assets/news/graduation.jpg",
    mediaAlt: "MSc Graduation at TU Eindhoven"
  },
  {
    id: "vencomatic-thesis",
    category: "work",
    typeBadge: "Internship",
    dateBadge: "Jan 2025 – Aug 2025",
    location: "Eersel, Netherlands",
    roleTitle: "Graduate Intern",
    orgName: "Vencomatic Group",
    description: "Developed a reinforcement learning system that dynamically adjusts defect thresholds in Meggsius Select egg sorting machines, cutting false negatives by over 50% (~€25,000 a year, ~15,000 eggs saved). Integrated machine and farm data into an OWL/RDF knowledge graph.",
    logoImg: "/assets/logos/vencomatic.png",
    skills: ["Reinforcement learning", "Knowledge graphs", "Optimisation"]
  },
  {
    id: "ai-summit-brainport",
    category: "news",
    typeBadge: "Event",
    dateBadge: "Dec 2024",
    location: "Evoluon, Eindhoven",
    roleTitle: "AI Summit Brainport 2024",
    orgName: "LoopIt.ai showcase",
    description: "Showcased LoopIt.ai’s platform at the Evoluon to key stakeholders across the insurance and automotive industries.",
    mediaImg: "/assets/news/loopit-ai-summit.jpg",
    mediaAlt: "AI Summit Brainport 2024"
  },
  {
    id: "william-mary",
    category: "work",
    typeBadge: "Research",
    dateBadge: "Sep 2024 – Dec 2024",
    location: "Williamsburg, VA, United States",
    roleTitle: "Research Intern",
    orgName: "William & Mary",
    description: "Optimised LLM prompts for code tasks by adapting gisting and prompt masking to CodeT5. Benchmarked on CodeXGLUE with CrystalBLEU and Pass@k, finding 20–40% gisting the best trade-off between compression and performance.",
    logoImg: "/assets/logos/wm.png",
    skills: ["LLMs", "CodeT5", "Prompt gisting", "NLP"]
  },
  {
    id: "iese-bootcamp",
    category: "news",
    typeBadge: "Entrepreneurship",
    dateBadge: "Jul 2024",
    location: "Barcelona, Spain",
    roleTitle: "IESE Ignite Bootcamp Barcelona",
    orgName: "EuroTeQ & IESE Business School",
    description: "Represented TU/e in the EuroTeQ cohort, accelerating LoopIt.ai through mentorship, business development and VC presentations.",
    mediaImg: "/assets/news/iese-bootcamp.jpg",
    mediaAlt: "IESE Bootcamp Barcelona"
  },
  {
    id: "eaisi-award",
    category: "news",
    typeBadge: "Award",
    isAward: true,
    dateBadge: "Apr 2024",
    location: "Eindhoven, Netherlands",
    roleTitle: "EAISI AI Incentive Award",
    orgName: "Eindhoven AI Systems Institute",
    description: "Won the €1,000 EAISI AI Incentive Award for LoopIt.ai’s automated vehicle damage detection platform.",
    mediaImg: "/assets/news/eaisi-award.jpg",
    mediaAlt: "EAISI AI Award Winner"
  },
  {
    id: "philips-innovation",
    category: "news",
    typeBadge: "Innovation",
    dateBadge: "2024",
    location: "Eindhoven, Netherlands",
    roleTitle: "Philips Innovation Initiative",
    orgName: "Philips",
    description: "Took part in a Philips innovation initiative, collaborating on technology challenges in the Eindhoven ecosystem.",
    mediaImg: "/assets/news/philips-innovation.jpg",
    mediaAlt: "Philips Innovation"
  },
  {
    id: "eindhovens-dagblad",
    category: "news",
    typeBadge: "Press",
    dateBadge: "Sep 2023",
    location: "Eindhoven, Netherlands",
    roleTitle: "Featured in Eindhovens Dagblad",
    orgName: "Regional Dutch press",
    description: "A cashless festival bar system I developed for the student community was featured in the regional newspaper.",
    mediaImg: "/assets/news/eindhovens-dagblad.jpg",
    mediaAlt: "Featured in Eindhovens Dagblad"
  },
  {
    id: "bu-wuppertal",
    category: "work",
    typeBadge: "Research",
    dateBadge: "Feb 2022 – May 2022",
    location: "Wuppertal, Germany",
    roleTitle: "Research Intern",
    orgName: "University of Wuppertal",
    description: "Developed deep learning models using reinforcement learning and job-shop scheduling to optimise aerospace production planning in the AlphaMES project.",
    logoImg: "/assets/logos/wuppertal.svg",
    skills: ["Deep learning", "Reinforcement learning", "Scheduling"]
  },
  {
    id: "ingersoll-rand",
    category: "work",
    typeBadge: "Work",
    dateBadge: "Oct 2021 – Mar 2022",
    location: "India",
    roleTitle: "Software Engineering Intern",
    orgName: "Ingersoll Rand",
    description: "Developed a Python dashboard with real-time telemetry integration and modular pipelines for machine usage monitoring and automated reporting.",
    logoImg: "/assets/logos/ingersoll.png",
    skills: ["Python", "Dashboards", "Telemetry"]
  }
];
