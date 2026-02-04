import {
  Trophy, Bot, Gamepad2, Terminal, Cpu, CheckCircle2, Award
} from 'lucide-react';

export const PROFILE = {
  name: "Archit Tiwari",
  role: "AI/ML Engineer & Roboticist",
  tagline: "Bridging software intelligence with real-world hardware.",
  bio: "B.Tech CSE (IoT) student at VIT Vellore with a proven track record in Generative AI, Computer Vision, and Combat Robotics. Specializing in building autonomous agents and high-performance mechanical systems.",
  location: "Vellore, India",
  email: "tiwariarchit2004@gmail.com",
  linkedin: "https://linkedin.com/in/archit-tiwari-a74972247",
  github: "https://github.com/archit2004", 
  resumeLink: "/Resume_ArchitTiwari.pdf"
};

export const EXPERIENCE = [
  {
    role: "Student Placement Coordinator",
    company: "VIT Placement Cell",
    period: "May 2025 - Present",
    desc: [
      "Coordinated placement drives for 100+ students, ensuring efficient recruiter communication.",
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
    period: "2022 - 2026",
    details: "CGPA: 8.86 | Core Member of Robotics Club"
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
  { title: "1st – IIT Kanpur Robowars (60kg)", icon: Trophy, color: "text-amber-400" },
  { title: "1st – IIT Bombay Int. Robowars", icon: Trophy, color: "text-amber-400" },
  { title: "1st – BITS Hyd Robowars (8kg)", icon: Trophy, color: "text-amber-400" }
];

export const SKILLS = {
  "Languages": ["Python", "C++", "C#", "JavaScript", "SQL"],
  "AI & ML": ["PyTorch", "TensorFlow", "LangGraph", "OpenCV", "MediaPipe", "Gemini API"],
  "Robotics & IoT": ["PCB Design", "Embedded Systems", "Arduino", "Raspberry Pi", "Sensors"],
  "Dev & Tools": ["React", "Node.js", "Docker", "Git", "FastAPI"],
  "Creative": ["Blender (3D Animation)", "Unity Engine", "Adobe Creative Suite"]
};

export const PROJECTS = [
  {
    title: "Confidence Building Game",
    category: "AI & Tech",
    role: "Samsung GenAI Winner",
    desc: "An immersive Unity 6 roleplay game utilizing LangGraph agents and low-latency Whisper models to help users practice social scenarios.",
    tags: ["Unity", "LangGraph", "GenAI", "FastAPI"],
    link: "#"
  },
  {
    title: "Psychological Chatbot",
    category: "AI & Tech",
    role: "ML Engineer",
    desc: "Emotion-aware counseling bot trained on 40k+ samples using GNNs and MediaPipe facial landmarks for real-time sentiment analysis.",
    tags: ["GNN", "PyTorch", "NLP", "Python"],
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