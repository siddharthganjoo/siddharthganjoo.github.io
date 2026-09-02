export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
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
    id: "rl-egg-sorting",
    title: "RL-Based Egg Sorting Calibration",
    tag: "Applied RL Research",
    description: "Reinforcement learning framework reducing false negatives by 50% in high-throughput automated sorting lines at Vencomatic Group.",
    image: "assets/project/rl-sorting.svg",
    impact: ["€25K savings", "15K eggs saved/yr"]
  },
  {
    id: "spike-ai",
    title: "Spike AI - Neuromorphic Acceleration",
    tag: "Supercomputing AI",
    description: "Energy-efficient Spiking Neural Network (SNN) development and deployment framework at the TU/e Supercomputing Center.",
    image: "assets/project/spike-ai.svg",
    impact: ["⚡ Ultra-low power", "💻 HPC Clusters"]
  },
  {
    id: "codet5",
    title: "CodeT5 Prompt Compression",
    tag: "LLM Research",
    description: "Optimized prompt gisting and attention masking for code generation models at William & Mary University.",
    image: "assets/project/codet5.svg",
    impact: ["20-40% token savings", "Pass@k benchmarked"]
  },
  {
    id: "proximity-alert",
    title: "Vehicle Proximity Alert",
    tag: "Edge AI",
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
    description: "Automated document parsing pipeline extracting handwritten form fields using custom CNNs and Tesseract OCR.",
    image: "assets/project/ocr-scan.svg",
    impact: ["High-accuracy OCR", "Automated parsing"],
    links: [
      { label: "GitHub →", url: "https://github.com/siddharthganjoo" }
    ]
  }
];

