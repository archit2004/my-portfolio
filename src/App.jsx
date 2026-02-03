import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Bot,
  Cpu,
  Code2,
  Briefcase,
  GraduationCap,
  Trophy,
  Gamepad2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  Award,
  CheckCircle2
} from 'lucide-react';

/* ================= DATA CONFIGURATION ================= */

const PROFILE = {
  name: "Archit Tiwari",
  role: "AI/ML Engineer & Roboticist",
  tagline: "Bridging software intelligence with real-world hardware.",
  bio: "B.Tech CSE (IoT) student at VIT Vellore with a proven track record in Generative AI, Computer Vision, and Combat Robotics. Specializing in building autonomous agents and high-performance mechanical systems.",
  location: "Vellore, India",
  email: "tiwariarchit2004@gmail.com",
  linkedin: "https://linkedin.com/in/archit-tiwari-a74972247",
  github: "https://github.com/archit2004", 
};

// UPDATED EXPERIENCE SECTION
const EXPERIENCE = [
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

const EDUCATION = [
  {
    degree: "B.Tech Computer Science (IoT)",
    school: "VIT Vellore",
    period: "2022 - 2026",
    details: "CGPA: 8.86 | Core Member of Robotics Club"
  }
];

const CERTIFICATIONS = [
  "Oracle Generative AI Professional (2025)",
  "Oracle Data Science Professional (2025)",
  "Oracle OCI AI Foundations (2025)",
  "ML A-Z (Udemy)",
  "Full-Stack Web Development (Udemy)"
];

const ACHIEVEMENTS = [
  { title: "Winner – Samsung GenAI Hackathon", icon: Trophy, color: "text-yellow-400" },
  { title: "1st – IIT Kanpur Robowars (60kg)", icon: Trophy, color: "text-amber-400" },
  { title: "1st – IIT Bombay Int. Robowars", icon: Trophy, color: "text-amber-400" },
  { title: "1st – BITS Hyd Robowars (8kg)", icon: Trophy, color: "text-amber-400" }
];

const SKILLS = {
  "Languages": ["Python", "C++", "C#", "JavaScript", "SQL"],
  "AI & ML": ["PyTorch", "TensorFlow", "LangGraph", "OpenCV", "MediaPipe", "Gemini API"],
  "Robotics & IoT": ["PCB Design", "Embedded Systems", "Arduino", "Raspberry Pi", "Sensors"],
  "Dev & Tools": ["React", "Node.js", "Docker", "Git", "FastAPI"],
  "Creative": ["Blender (3D Animation)", "Unity Engine", "Adobe Creative Suite"]
};

const PROJECTS = [
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

/* ================= COMPONENT: SECTION HEADER ================= */
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="h-1 w-20 bg-blue-600 rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
);

/* ================= COMPONENT: X-SPLIT HERO ================= */
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col md:block">
      
      {/* MOBILE HERO (Visible only on small screens) */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center z-20 relative pt-20">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-6 shadow-blue-900/50 shadow-lg">
           {/* IMPORTANT: Ensure 'profile.jpeg' is inside the 'public' folder */}
           <img src="/profile.jpeg" alt="Archit" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{PROFILE.name}</h1>
        <p className="text-blue-400 font-medium mb-4">{PROFILE.role}</p>
        <p className="text-slate-400 text-sm mb-8">{PROFILE.bio}</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">Projects</a>
          <a href="#contact" className="px-6 py-2 border border-slate-700 text-slate-300 rounded-full font-medium">Contact</a>
        </div>
      </div>

      {/* DESKTOP X-SPLIT (Visible only on md+) */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        
        {/* TRIANGLE 1: ROBOTICS (TOP) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 hover:bg-orange-950/40 cursor-pointer transition-all duration-500 group"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
          onClick={() => document.getElementById('robotics-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group-hover:-translate-y-2 transition">
            <Bot className="w-12 h-12 text-slate-600 group-hover:text-orange-500 transition-colors" />
            <span className="text-xl font-bold text-slate-700 group-hover:text-white tracking-widest">ROBOTICS</span>
          </div>
        </div>

        {/* TRIANGLE 2: CREATIVE (LEFT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 hover:bg-purple-950/40 cursor-pointer transition-all duration-500 group"
          style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}
          onClick={() => document.getElementById('creative-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group-hover:-translate-x-2 transition">
            <Gamepad2 className="w-12 h-12 text-slate-600 group-hover:text-purple-500 transition-colors" />
            <span className="text-xl font-bold text-slate-700 group-hover:text-white tracking-widest">CREATIVE</span>
          </div>
        </div>

        {/* TRIANGLE 3: AI & TECH (RIGHT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 hover:bg-blue-950/40 cursor-pointer transition-all duration-500 group"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}
          onClick={() => document.getElementById('tech-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group-hover:translate-x-2 transition">
            <Terminal className="w-12 h-12 text-slate-600 group-hover:text-blue-500 transition-colors" />
            <span className="text-xl font-bold text-slate-700 group-hover:text-white tracking-widest">AI & TECH</span>
          </div>
        </div>

        {/* TRIANGLE 4: PROFILE (BOTTOM) */}
        <div 
          className="absolute inset-0 bg-slate-950 z-0 flex items-end justify-center pb-16"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
        >
          <div className="text-center max-w-2xl px-4 animate-fadeIn">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight">{PROFILE.name}</h1>
            <p className="text-slate-400 text-lg mb-8">{PROFILE.tagline}</p>
            <div className="flex justify-center gap-4">
              <a href={PROFILE.resumeLink} className="flex items-center gap-2 px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition">
                <Download size={20} /> Resume
              </a>
              <a href="#about" className="flex items-center gap-2 px-8 py-3 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition">
                Explore <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* CENTER AVATAR */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition rounded-full"></div>
            {/* IMPORTANT: Ensure 'profile.jpeg' is inside the 'public' folder */}
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="w-48 h-48 rounded-full border-8 border-slate-950 shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= MAIN APP ================= */
export default function App() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="font-bold text-xl text-white tracking-tight">AT.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </div>
          <a href="#contact" className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-blue-600 text-white rounded transition">
            Contact Me
          </a>
        </div>
      </nav>

      <HeroSection />

      {/* ABOUT & SUMMARY */}
      <section id="about" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          
          {/* Left Column: Bio + Certs + Achievements */}
          <div>
            <SectionTitle title="About Me" />
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              {PROFILE.bio}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              My journey involves a unique blend of digital intelligence and physical engineering. 
              Whether I'm optimizing a neural network or calibrating an ESC for a 60kg combat robot, 
              I am driven by the challenge of creating systems that work reliably in the real world.
            </p>
            
            {/* Achievements & Certs Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              
              {/* Achievements Column */}
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Trophy className="text-yellow-500" size={20} /> Achievements
                </h3>
                <div className="space-y-3">
                  {ACHIEVEMENTS.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition">
                      <ach.icon className={`w-5 h-5 ${ach.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm font-medium text-slate-300">{ach.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Column */}
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Award className="text-blue-500" size={20} /> Certifications
                </h3>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Education Sidebar */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 sticky top-24">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-400" /> Education
            </h3>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="font-semibold text-slate-200">{edu.school}</div>
                <div className="text-sm text-blue-400 mb-1">{edu.degree}</div>
                <div className="text-xs text-slate-500">{edu.period}</div>
                <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800">{edu.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Professional Experience" />
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-slate-950"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {exp.period}
                  </span>
                </div>
                <div className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                  <Briefcase size={16} /> {exp.company}
                </div>
                {/* Renders as a bullet list if it's an array, otherwise simple text */}
                {Array.isArray(exp.desc) ? (
                  <ul className="list-disc pl-4 space-y-2 text-slate-400 max-w-2xl">
                    {exp.desc.map((point, idx) => (
                      <li key={idx} className="pl-1">{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 max-w-2xl">{exp.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section id="skills" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Technical Expertise" subtitle="My toolkit across software and hardware domains." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Tech Block */}
            <div id="tech-skills" className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-blue-500" />
                <h3 className="text-xl font-bold text-white">AI & Development</h3>
              </div>
              <SkillGroup title="Languages" skills={SKILLS["Languages"]} />
              <SkillGroup title="AI / ML Stack" skills={SKILLS["AI & ML"]} />
              <SkillGroup title="Web & Tools" skills={SKILLS["Dev & Tools"]} />
            </div>

            {/* Robotics Block */}
            <div id="robotics-skills" className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-orange-500" />
                <h3 className="text-xl font-bold text-white">Robotics & Hardware</h3>
              </div>
              <SkillGroup title="Core Hardware" skills={SKILLS["Robotics & IoT"]} />
            </div>

            {/* Creative Block */}
            <div id="creative-skills" className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="text-purple-500" />
                <h3 className="text-xl font-bold text-white">Creative Tech</h3>
              </div>
              <SkillGroup title="Design Tools" skills={SKILLS["Creative"]} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle title="Featured Projects" />
            
            {/* Filter Tabs */}
            <div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-800 overflow-x-auto">
              {['All', 'AI & Tech', 'Robotics', 'Creative'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap ${
                    activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition duration-300 flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-300`}>
                      {project.category}
                    </span>
                    <ExternalLink className="text-slate-600 group-hover:text-blue-400 transition" size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-400 mb-3">{project.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/50 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 px-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build the Future</h2>
          <p className="text-slate-400 mb-8 text-lg">
            I'm currently looking for internships and collaborative opportunities in AI, Robotics, and Software Engineering.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition w-full md:w-auto justify-center">
              <Mail /> Send Email
            </a>
            <div className="flex gap-4">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 border border-slate-800 transition">
                <Linkedin />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 border border-slate-800 transition">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Archit Tiwari. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

/* Helper Component for Skills */
const SkillGroup = ({ title, skills }) => (
  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// ArrowDown icon was missing in previous context, defining a simple version here or relying on lucide import
const ArrowDown = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);