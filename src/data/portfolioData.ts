export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'AI & Machine Learning' | 'Computer Vision' | 'Full-Stack Web';
  technologies: string[];
  image?: string;
  status: 'In Development' | 'Completed' | 'Educational Exploration' | 'Prototype' | 'Concept';
  features: string[];
  disclaimer?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  keyLearnings?: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    description?: string;
  }[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Waqas Ali",
  title: "Full-Stack Developer | AI/ML Developer",
  location: "Lahore, Pakistan",
  email: "waqasali.wa20000@gmail.com",
  linkedin: "https://linkedin.com/in/waqas-ali-138005306/",
  github: "https://github.com/Waqas-amant",
  bio: "I'm a dedicated developer with a strong foundation in Information Technology, currently advancing my practical expertise in full-stack web engineering and applied AI/ML systems. I enjoy architecting robust web solutions and exploring how modern machine learning models—such as transformers and multimodal architectures—can solve real-world challenges.",
  heroHeadline: "Building Intelligent Digital Experiences.",
  heroSupporting: "I'm Waqas Ali, a Full-Stack Developer and aspiring AI/ML Engineer passionate about building modern web applications and intelligent AI-powered solutions.",
  avatar: "/assets/aistudio/cvpho_3779dc12.jpg",
  statusBadge: "Available for internships & junior roles",
};

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Full-Stack Development",
    subtitle: "Frontend & Backend Engineering",
    description: "Designing responsive, performant user interfaces with React, TypeScript, and Tailwind CSS, coupled with robust Node.js, Express, and Python backend APIs.",
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Vision, NLP & Deep Learning",
    description: "Experimenting with modern neural networks, transfer learning, Swin Transformers, and multimodal vision models using PyTorch, Scikit-learn, and Hugging Face.",
  },
  {
    title: "Continuous Learning",
    subtitle: "Applied R&D Mindset",
    description: "Actively studying emerging LLM paradigms, RAG architectures, and AI-driven automation workflows through hands-on technical projects.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Modern, responsive client architectures with accessible UI standards.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend",
    description: "Scalable server logic, RESTful API design, and asynchronous workflows.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    name: "Databases",
    description: "Relational and document storage schemas designed for reliability.",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Database Design" },
    ],
  },
  {
    name: "AI & Machine Learning",
    description: "Data modeling, deep neural networks, vision transformers, and modern AI.",
    skills: [
      { name: "Python for Data Science" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "Deep Learning fundamentals" },
      { name: "Computer Vision" },
      { name: "Transformers" },
      { name: "LLM Applications" },
      { name: "RAG concepts" },
      { name: "AI Automation" },
    ],
  },
  {
    name: "Tools & DevOps",
    description: "Source control, development environments, and container basics.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Google Colab" },
      { name: "Docker fundamentals" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "stylemind-ai",
    title: "StyleMind AI",
    category: "AI & Machine Learning",
    status: "In Development",
    description: "An AI-powered fashion discovery project designed to help users explore clothing styles and find visually similar fashion products using image embeddings and multimodal AI concepts.",
    longDescription: "StyleMind AI addresses the challenge of visual style discovery by leveraging state-of-the-art vision-language representations. By generating high-dimensional vector embeddings of fashion items using models such as CLIP, the system enables visual similarity indexing and cross-modal queries (matching text inspirations with apparel catalog images).",
    technologies: ["Python", "Flask", "CLIP", "PyTorch", "Pandas", "Computer Vision"],
    image: "/src/assets/images/project_stylemind_ai_1793077766155.jpg",
    features: [
      "Image-based fashion visual search and nearest-neighbor matching",
      "Multimodal embedding projections using CLIP neural representations",
      "Fashion product catalog discovery and category clustering",
      "Modular Flask backend for inference requests"
    ],
    githubUrl: "https://github.com/Waqas-amant/StyleMind-AI",
    liveDemoUrl: "",
    keyLearnings: [
      "Handling normalized vector representations and cosine similarity calculations",
      "Structuring multimodal pipelines for real-time visual recommendation",
      "Dataset preprocessing and augmentation with Pandas & PyTorch"
    ],
  },
  {
    id: "oral-cancer-classification",
    title: "Oral Cancer Image Classification",
    category: "Computer Vision",
    status: "Completed",
    description: "A computer vision project that uses a pretrained Swin Transformer model and transfer learning to classify oral image samples into cancer and non-cancer categories.",
    longDescription: "This research project investigates the hierarchical shifted window mechanism of Swin Transformers for medical image categorization. By fine-tuning a pretrained transformer backbone with transfer learning, the pipeline extracts local and global contextual cues from oral lesion biopsy imagery.",
    technologies: ["Python", "PyTorch", "Transformers", "Swin Transformer", "Flask", "Computer Vision"],
    image: "/src/assets/images/project_oral_cancer_1793077767013.jpg",
    disclaimer: "Important notice: This is an experimental educational research project conducted for academic learning, and is NOT a clinically validated medical diagnostic system.",
    features: [
      "Image upload interface supporting high-resolution histology samples",
      "Hierarchical feature representation via Swin Transformer architecture",
      "Binary prediction output (Cancer vs. Non-Cancer) with confidence scoring",
      "Evaluation metrics breakdown including accuracy and loss convergence"
    ],
    githubUrl: "https://github.com/Waqas-amant/Oral-Cancer-Classification-SwinTransformer",
    liveDemoUrl: "",
    keyLearnings: [
      "Implementing shifted-window self-attention for vision tasks",
      "Mitigating class imbalance through targeted data augmentations",
      "Deploying PyTorch weights via a lightweight Flask inference pipeline"
    ],
  },
  {
    id: "chest-xray-classification",
    title: "Chest X-Ray Classification",
    category: "Computer Vision",
    status: "Educational Exploration",
    description: "An educational deep-learning project exploring the classification of chest X-ray images into normal and pneumonia categories.",
    longDescription: "An exploration into convolutional neural architectures and deep learning classifiers for radiology radiographs. The system processes normalized grayscale pulmonary scans to assist in distinguishing between typical chest X-rays and indicators consistent with pneumonia.",
    technologies: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "Flask"],
    image: "/src/assets/images/project_chest_xray_1793077766595.jpg",
    disclaimer: "Educational exploration project created for deep learning practice; not intended for clinical use.",
    features: [
      "Biomedical image preprocessing and contrast normalization pipeline",
      "Binary classification output: Normal vs. Pneumonia",
      "Validation accuracy curves and cross-entropy loss tracking",
      "Lightweight model weight exporting for fast local inference"
    ],
    githubUrl: "https://github.com/Waqas-amant/Chest-XRay-DeepLearning",
    liveDemoUrl: "",
    keyLearnings: [
      "Image tensor transformations and batch normalization techniques",
      "Monitoring training metrics to prevent overfitting on clinical sets",
      "Designing clean API contracts for inference servers"
    ],
  },
  {
    id: "grocery-ecommerce-management",
    title: "Grocery E-Commerce Management System",
    category: "Full-Stack Web",
    status: "Prototype",
    description: "An e-commerce project focused on grocery product browsing, shopping workflows, cart management, and inventory tracking.",
    longDescription: "A full-featured digital grocery storefront and merchant administration concept. Designed with a customer-facing responsive catalog and a back-office inventory monitoring view, providing end-to-end shopping simulation from product listing to checkout confirmation.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    image: "/src/assets/images/project_ecommerce_app_1793077768941.jpg",
    features: [
      "Dynamic product catalog with instant category filtering and search",
      "Persistent cart state with quantity adjustments and real-time total computation",
      "Inventory tracking view showing stock thresholds and item availability",
      "Clean RESTful backend API with structured database schema"
    ],
    githubUrl: "https://github.com/Waqas-amant/Grocery-Ecommerce-Platform",
    liveDemoUrl: "",
    keyLearnings: [
      "State management for multi-item cart interactions in React",
      "Relational schema design with PostgreSQL for product inventory",
      "Building clean, accessible user flows with responsive Tailwind CSS"
    ],
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Full-Stack Web",
    status: "Prototype",
    description: "A web application concept for managing employee records, departmental organizational structures, and related administrative operations.",
    longDescription: "A centralized organizational tool built to streamline internal HR and managerial workflows. Provides intuitive record management, departmental groupings, role assignments, and search capabilities across company member profiles.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    features: [
      "Full CRUD operations for employee profiles and departmental assignments",
      "Interactive data table with multi-parameter search and department filtering",
      "Modal-based record editing with client-side form validation",
      "REST API integration with structured MongoDB document collections"
    ],
    githubUrl: "https://github.com/Waqas-amant/Employee-Management-System",
    liveDemoUrl: "",
    keyLearnings: [
      "Designing clean RESTful CRUD routes in Node.js and Express",
      "Managing form state and asynchronous validation feedback in React",
      "NoSQL schema modeling for hierarchical organizational data"
    ],
  },
  {
    id: "builder-ai",
    title: "Builder AI",
    category: "AI & Machine Learning",
    status: "Concept",
    description: "A software project exploring AI-assisted application building, automated workflow orchestration, and generative code scaffolding.",
    longDescription: "An experimental exploration into developer productivity tools using large language models. The concept explores translating high-level software specifications into structured scaffolding, component boilerplate, and API blueprints.",
    technologies: ["Python", "LLM APIs", "Prompt Engineering", "React", "TypeScript"],
    features: [
      "System specification analysis and structured prompt generation",
      "Modular code scaffolding templates for common application stacks",
      "Extensible architecture for custom workflow orchestrations",
      "Interactive developer dashboard with preview panes"
    ],
    githubUrl: "https://github.com/Waqas-amant/Builder-AI",
    liveDemoUrl: "",
    keyLearnings: [
      "Prompt engineering and structured JSON output conditioning with LLMs",
      "Building interactive web interfaces for developer tooling",
      "Orchestrating multi-step AI pipelines"
    ],
  },
];

export const EDUCATION: EducationEntry = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Minhaj University Lahore",
  period: "2021 – 2026",
  location: "Lahore, Pakistan",
  status: "In Progress (Senior Year)",
  highlights: [
    "Comprehensive academic curriculum covering Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Object-Oriented Programming.",
    "Academic coursework and research projects focusing on modern Web Engineering, Machine Learning algorithms, and Computer Vision architectures.",
    "Active participant in technical student clubs and collaborative software development initiatives.",
  ],
};

export const CURRENTLY_EXPLORING = [
  {
    topic: "Artificial Intelligence & Machine Learning",
    description: "Foundational mathematical principles, supervised/unsupervised algorithms, and statistical model evaluation.",
  },
  {
    topic: "Deep Learning & Computer Vision",
    description: "Convolutional neural networks, Vision Transformers (ViT, Swin), transfer learning, and image feature extraction.",
  },
  {
    topic: "Multimodal AI & LLM Applications",
    description: "Vision-language alignment (e.g. CLIP), modern LLM APIs, prompt engineering, and Retrieval-Augmented Generation (RAG).",
  },
  {
    topic: "Full-Stack Application Development",
    description: "Architecting end-to-end web apps with React, TypeScript, Node.js, and containerized deployment patterns.",
  },
  {
    topic: "Practical AI Product Development",
    description: "Connecting trained models to clean user-facing web applications to solve tangible everyday problems.",
  },
];

/**
 * Verified professional experience entries.
 * Kept empty per user instruction: "Do not invent employers, job titles, internships, or employment dates.
 * Create an optional experience section that remains hidden when no verified professional experience entries have been configured."
 */
export const EXPERIENCES: ExperienceEntry[] = [];
