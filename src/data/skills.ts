export interface Tool {
  name: string;
  /** Monochrome SVG in /assets/tech/ (Simple Icons). */
  icon?: string;
  /** Font Awesome glyph for tools without a brand logo. */
  fa?: string;
}

export interface ToolGroup {
  id: string;
  title: string;
  tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    id: "hpc",
    title: "Supercomputing & GPUs",
    tools: [
      { name: "NVIDIA DGX B300", icon: "nvidia" },
      { name: "CUDA", icon: "nvidia" },
      { name: "Slurm", fa: "fa-list-check" },
      { name: "Linux", icon: "linux" },
      { name: "Distributed training", fa: "fa-network-wired" },
      { name: "GPU workload optimisation", fa: "fa-gauge-high" }
    ]
  },
  {
    id: "ml",
    title: "Machine learning",
    tools: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "YOLOv8", fa: "fa-eye" },
      { name: "Reinforcement learning", fa: "fa-robot" }
    ]
  },
  {
    id: "data",
    title: "Data",
    tools: [
      { name: "Python", icon: "python" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL Server", fa: "fa-database" },
      { name: "Azure", fa: "fa-cloud" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Knowledge graphs", fa: "fa-diagram-project" }
    ]
  },
  {
    id: "ops",
    title: "Deployment",
    tools: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" }
    ]
  }
];

export interface Organisation {
  name: string;
  /** Logo in /assets/logos/. Without one, the name is set as a wordmark. */
  logo?: string;
  url?: string;
}

export interface OrganisationGroup {
  title: string;
  orgs: Organisation[];
}

export const organisationGroups: OrganisationGroup[] = [
  {
    title: "Supercomputing Brabant and its partners",
    orgs: [
      { name: "Supercomputing Brabant", logo: "/assets/logos/supercomputing-brabant.svg", url: "https://supercomputingbrabant.nl" },
      { name: "TU/e Supercomputing Center", logo: "/assets/logos/tue.svg", url: "https://supercomputing.tue.nl" },
      { name: "BOM", logo: "/assets/logos/bom.svg", url: "https://bom.nl" },
      { name: "Tilburg University", logo: "/assets/logos/tilburg.svg", url: "https://www.tilburguniversity.edu" },
      { name: "Provincie Noord-Brabant", logo: "/assets/logos/provincie-noord-brabant.svg", url: "https://www.brabant.nl" },
      { name: "JADS", logo: "/assets/logos/jads.svg", url: "https://www.jads.nl" }
    ]
  },
  {
    title: "Where I’ve worked and studied",
    orgs: [
      { name: "Vencomatic Group", logo: "/assets/logos/vencomatic.png" },
      { name: "LoopIt.ai", logo: "/assets/logos/loopit.svg", url: "https://loopit.ai" },
      { name: "William & Mary", logo: "/assets/logos/wm.png" },
      { name: "University of Wuppertal", logo: "/assets/logos/wuppertal.svg" },
      { name: "Ingersoll Rand", logo: "/assets/logos/ingersoll.png" },
      { name: "Jamia Millia Islamia", logo: "/assets/logos/jmi.png" }
    ]
  }
];
