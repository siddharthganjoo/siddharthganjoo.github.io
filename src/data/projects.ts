export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  category: 'hpc' | 'cv' | 'rl' | 'nlp';
  description: string;
  image: string;
  isFeatured?: boolean;
  impact: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
}

export const projectsData: ProjectItem[] = [
  {
    id: "loopit-ai",
    title: "Loopit.ai - Vehicle Damage Detection",
    tag: "Startup & Commercial AI",
    category: "cv",
    description: "AI-driven platform automating vehicular damage detection, localization, and repair estimation for insurance companies. Won the €1,000 EAISI AI Incentive Award.",
    image: "assets/project/loopit-preview.svg",
    isFeatured: true,
    impact: ["🏆 Award Winner", "👥 12-person team", "⚡ Real-time YOLOv8"],
    links: [
      { label: "Visit site →", url: "https://loopit.ai" },
      { label: "GitHub →", url: "https://github.com/siddharthganjoo" }
    ]
  },
  {
    id: "spike-a-supercomputing",
    title: "Spike-A AI Supercomputing Workloads",
    tag: "AI-SIB // Supercomputing",
    category: "hpc",
    description: "High-performance AI model acceleration, distributed training pipelines, and multi-GPU cluster scaling on TU/e's Spike-A supercomputer as part of the regional AI-SIB initiative.",
    image: "assets/project/spike-ai.svg",
    impact: ["💻 Spike-A Cluster", "⚡ Distributed AI", "🌐 AI-SIB Brabant"],
    links: [
      { label: "AI-SIB Initiative →", url: "https://www.tue.nl" },
      { label: "GitHub →", url: "https://github.com/siddharthganjoo" }
    ]
  },
  {
    id: "rl-egg-sorting",
    title: "RL-Based Egg Sorting Calibration",
    tag: "Applied RL Research",
    category: "rl",
    description: "Reinforcement learning framework reducing false negatives by 50% in high-throughput automated sorting lines at Vencomatic Group.",
    image: "assets/project/rl-sorting.svg",
    impact: ["€25K savings", "15K eggs saved/yr"]
  },
  {
    id: "codet5",
    title: "CodeT5 Prompt Compression",
    tag: "LLM Research",
    category: "nlp",
    description: "Optimized prompt gisting and attention masking for code generation models at William & Mary University.",
    image: "assets/project/codet5.svg",
    impact: ["20-40% token savings", "Pass@k benchmarked"]
  },
  {
    id: "proximity-alert",
    title: "Vehicle Proximity Alert",
    tag: "Edge AI",
    category: "cv",
    description: "Real-time YOLOv4-tiny collision warning system detecting nearby vehicles and pedestrians with audio warnings.",
    image: "assets/project/proximity-alert.svg",
    impact: ["30+ FPS edge AI", "Audio alerts"],
    links: [
      { label: "GitHub →", url: "https://github.com/siddharthganjoo" }
    ]
  },
  {
    id: "ocr-scan",
    title: "Handwritten Form Digitization",
    tag: "Document AI",
    category: "cv",
    description: "Automated document parsing pipeline extracting handwritten form fields using custom CNNs and Tesseract OCR.",
    image: "assets/project/ocr-scan.svg",
    impact: ["High-accuracy OCR", "Automated parsing"],
    links: [
      { label: "GitHub →", url: "https://github.com/siddharthganjoo" }
    ]
  }
];

