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
    title: "LoopIt.ai: Vehicle Damage Detection",
    tag: "Startup & Commercial AI",
    description: "AI platform that automates vehicle damage detection, localisation and repair estimation for insurers. I co-founded it and led its technical strategy and architecture, from concept to deployment. Won the €1,000 EAISI AI Incentive Award.",
    image: "/assets/project/loopit-preview.svg",
    isFeatured: true,
    impact: ["EAISI Award", "Real-time YOLOv8", "Intern teams mentored"],
    links: [
      { label: "Visit loopit.ai", url: "https://loopit.ai" }
    ]
  },
  {
    id: "tensorflow-b300",
    title: "TensorFlow on NVIDIA B300",
    tag: "Supercomputing Brabant · Open source",
    description: "TensorFlow doesn’t run out of the box on NVIDIA’s new B300 GPUs. While setting up our new GPU node, we built a working setup and published it with instructions, so others don’t hit the same wall.",
    image: "/assets/project/tensorflow-b300.svg",
    impact: ["NVIDIA DGX B300", "Ready-to-use build"],
    links: [
      { label: "View on GitHub", url: "https://github.com/HPC-TUE/tensorflow-b300" }
    ]
  },
  {
    id: "rl-egg-sorting",
    title: "Meggsius Select Auto-Calibration",
    tag: "Applied RL Research",
    description: "Reinforcement learning that tunes defect thresholds in Vencomatic’s egg sorting machines from farmer feedback, cutting false negatives by over 50%.",
    image: "/assets/project/rl-sorting.svg",
    impact: ["€25K savings", "15K eggs saved/yr"]
  },
  {
    id: "codet5",
    title: "CodeT5 Prompt Compression",
    tag: "LLM Research",
    description: "Optimized prompt gisting and attention masking for code generation models at William & Mary University.",
    image: "/assets/project/codet5.svg",
    impact: ["20-40% token savings", "Pass@k benchmarked"]
  },
  {
    id: "proximity-alert",
    title: "Vehicle Proximity Alert",
    tag: "Edge AI",
    description: "Real-time YOLOv4-tiny collision warning system detecting nearby vehicles and pedestrians with audio warnings.",
    image: "/assets/project/proximity-alert.svg",
    impact: ["30+ FPS edge AI", "Audio alerts"]
  },
  {
    id: "ocr-scan",
    title: "Handwritten Form Digitization",
    tag: "Document AI",
    description: "Automated document parsing pipeline extracting handwritten form fields using custom CNNs and Tesseract OCR.",
    image: "/assets/project/ocr-scan.svg",
    impact: ["High-accuracy OCR", "Automated parsing"]
  }
];

