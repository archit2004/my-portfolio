import {
  Trophy, Bot, Gamepad2, Terminal, Cpu, CheckCircle2, Award
} from 'lucide-react';

export const PROFILE = {
  name: "Archit Tiwari",
  role: "AI/ML Engineer & Roboticist",
  tagline: "Bridging software intelligence with real-world hardware.",
  bio: "B.Tech CSE (IoT) student at VIT Vellore with hands-on experience shipping backend and agentic AI systems in production, alongside a track record in Generative AI, Computer Vision, and Combat Robotics.",
  location: "Vellore, India",
  email: "tiwariarchit2004@gmail.com",
  linkedin: "https://linkedin.com/in/archit-tiwari-a74972247",
  github: "https://github.com/archit2004",
  resumeLink: "/Resume_ArchitTiwari.pdf"
};

export const EXPERIENCE = [
  {
    role: "Backend Engineering Intern",
    company: "Joveo",
    period: "June 2026 - July 2026",
    desc: [
      "Shipped live product features using FastAPI and PostgreSQL, building scalable REST APIs deployed to production.",
      "Designed agentic AI workflows integrating external APIs; performed QA testing and resolved critical bugs, improving system stability."
    ]
  },
  {
    role: "CTO Intern",
    company: "Genwe",
    period: "April 2025 - May 2026",
    desc: [
      "Architected an end-to-end multi-agent learning infrastructure (LangGraph, FastAPI) as a core product feature.",
      "Designed scalable database systems and AWS S3 object storage supporting 20,000-30,000 active users."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "SVNT Infotech",
    period: "Feb. 2026 - May 2026",
    desc: [
      "Architected a multi-tenant backend for data ingestion from 500+ IoT nodes, ensuring reliability over LTE networks.",
      "Developed a real-time telemetry pipeline with Telegraf, reducing data loss during transmission by 12%."
    ]
  },
  {
    role: "Student Placement Coordinator",
    company: "VIT Placement Cell",
    period: "May 2025 - Present",
    desc: [
      "Coordinated hybrid placement drives for 100+ students, managing recruiter-student alignment and stakeholders.",
      "Streamlined stakeholder workflows and managed company interactions during drives.",
      "Improved communication turnaround time between teams by 20%."
    ]
  },
  {
    role: "AI/ML Senior Core Member",
    company: "Robovitics Club",
    period: "May 2024 - Present",
    desc: [
      "Organized large-scale technical events including Vortex360 (72hr designathon) and Design to Duel.",
      "Led event logistics, sponsorship outreach, and technical coordination.",
      "Published technical articles on GANs and AI; mentored 100+ students in robotics and ML."
    ]
  },
  {
    role: "Electronics & Design Lead",
    company: "Team Orcus (Combat Robotics)",
    period: "May 2024 - Present",
    desc: [
      "Designed PCBs and integrated electronics for 8kg, 15kg, and 60kg combat robots.",
      "Collaborated across mechanical, electronics, and software teams for end-to-end development."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech Computer Science (IoT)",
    school: "VIT Vellore",
    period: "2023 - 2027",
    details: "CGPA: 8.88 | Core Member of Robotics Club"
  },
  {
    degree: "ISC (XII): 82.6% | ICSE (X): 90.2%",
    school: "Sheiling House School, Kanpur",
    period: "",
    details: ""
  }
];

export const CERTIFICATIONS = [
  "Oracle Generative AI Professional (2025)",
  "Oracle Data Science Professional (2025)",
  "Oracle OCI AI Foundations (2025)",
  "ML A-Z (Udemy)",
  "Full-Stack Web Development (Udemy)"
];

export const ACHIEVEMENTS = [
  { title: "Winner – Samsung GenAI Hackathon", icon: Trophy, color: "text-yellow-400" },
  { title: "1st Place – INNOAI Hackathon", icon: Trophy, color: "text-yellow-400" },
  { title: "1st – IIT Kanpur Robowars (60kg)", icon: Trophy, color: "text-amber-400" },
  { title: "1st – IIT Bombay Int. Robowars", icon: Trophy, color: "text-amber-400" },
  { title: "1st – BITS Hyd Robowars (8kg)", icon: Trophy, color: "text-amber-400" }
];

export const SKILLS = {
  "Languages": ["C/C++", "Python", "Java", "C#", "R", "JavaScript", "Bash", "SQL"],
  "AI & ML": [
    "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "LangGraph",
    "MediaPipe", "OpenCV", "Gemini API", "RAG Pipelines", "Vector Search",
    "Agentic AI", "Multi-Agent Systems", "Prompt Engineering", "Fine-Tuning", "GNNs", "Deep Learning"
  ],
  "Robotics & IoT": ["PCB Design", "Embedded Systems", "ESP32", "Arduino", "Raspberry Pi", "Sensors", "InfluxDB", "Telegraf"],
  "Dev & Tools": ["React", "Node.js", "FastAPI", "REST APIs", "MERN Stack", "Microservices", "Docker", "AWS", "AWS S3", "Git", "CI/CD (GitHub Actions)", "Postman", "Linux CLI"],
  "Creative": ["Blender (3D Animation)", "Unity Engine", "Adobe Creative Suite", "Fusion 360", "KiCad"]
};

export const PROJECTS = [
  {
    title: "Urban Watch",
    category: "AI & Tech",
    role: "1st Place – INNOAI Hackathon",
    desc: "Agentic AI pipeline (LangGraph, RAG) automating real estate investment scoring, cutting manual analysis time by 80%. Integrated Sentinel-2 satellite imagery and news APIs with a custom Siamese Swin-SAM-CD neural network achieving 0.77 recall on change detection.",
    tags: ["LangGraph", "RAG", "Computer Vision", "Satellite Imagery"],
    link: "#"
  },
  {
    title: "Climb the Corporate Ladder",
    category: "AI & Tech",
    role: "Samsung Gen AI Hackathon – Winner",
    desc: "Immersive Unity 6 roleplay simulation using LangGraph agents to help users practice real workplace scenarios. Pilot testing showed a 15% increase in user public speaking confidence. Built a low-latency speech-to-speech pipeline (Whisper, Coqui) reducing interaction delay by 40%, orchestrated via FastAPI for concurrent stateful conversations.",
    tags: ["Unity", "LangGraph", "GenAI", "FastAPI", "Whisper"],
    link: "#"
  },
  {
    title: "Facial Emotion GNN",
    category: "AI & Tech",
    role: "ML Engineer",
    desc: "Emotion-aware, GNN-powered model trained on 40,000+ facial landmarks, achieving 60% real-world emotion classification accuracy. Optimized PostgreSQL data retrieval, reducing landmark update latency by 25% for real-time MediaPipe processing.",
    tags: ["GNN", "PyTorch", "NLP", "PostgreSQL", "MediaPipe"],
    link: "#"
  },
  {
    title: "Team Orcus Combat Bots",
    category: "Robotics",
    role: "Lead Engineer",
    desc: "Designed and manufactured 60kg class combat robots. Implemented custom drive trains and weapon motor controllers.",
    tags: ["PCB Design", "SolidWorks", "Electronics"],
    link: "#"
  },
  {
    title: "Pet Healthcare Portal",
    category: "AI & Tech",
    role: "Full Stack Dev",
    desc: "OCR-based web application that extracts prescription data with 90% accuracy to automate pet medication ordering.",
    tags: ["React", "Node.js", "OCR", "MongoDB"],
    link: "#"
  },
  {
    title: "Blender Mechanics",
    category: "Creative",
    role: "3D Artist",
    desc: "A portfolio of cinematic mechanical animations and simulations focusing on realistic physics and lighting.",
    tags: ["Blender", "3D Modeling", "Animation"],
    link: "#"
  }
];
