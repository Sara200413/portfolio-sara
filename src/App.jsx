import React, { useState, useEffect } from 'react';
import { 
  Terminal, Layout, Server, Brain, Wrench, Github, Linkedin, 
  Mail, Code2, Sparkles, ArrowRight, ExternalLink, Sun, Moon, 
  Download, GraduationCap, Calendar, CheckCircle2, X, ChevronLeft, 
  ChevronRight, Briefcase, Cpu, Globe
} from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const isDark = theme === 'dark';

  // --- Data Section ---
  const projects = [
    {
      id: "drconnect",
      title: "DrConnect",
      type: "Mobile App • Full-Stack",
      desc: "Une application mobile révolutionnaire pour la gestion des rendez-vous médicaux. Intègre un algorithme de validation en temps réel et une architecture NoSQL sécurisée via Firebase.",
      images: ["/projects/drconnect-1.png", "/projects/drconnect-2.png", "/projects/drconnect-3.png", "/projects/drconnect-4.png"],
      tech: ["Flutter", "Dart", "Firebase", "NoSQL", "Cloud Functions"],
      github: "https://github.com/Sara200413/DrConnect-Flutter-Firebase"
    },
    {
      id: "easymanage",
      title: "EasyManage",
      type: "SaaS • Web Application",
      desc: "Solution complète de gestion d'entreprise (ERP) pour les freelances. Inclut un tableau de bord analytique, facturation automatisée et gestion de projets.",
      images: ["/projects/easymanage-1.png", "/projects/easymanage-2.png", "/projects/easymanage-3.png"],
      tech: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
      github: "https://github.com/Sara200413"
    },
    {
      id: "autopart",
      title: "AutoPart",
      type: "E-commerce • SPA",
      desc: "Plateforme spécialisée dans la vente de pièces automobiles. Moteur de recherche avancé avec filtrage dynamique par compatibilité et marque.",
      images: ["/projects/autopart-1.png", "/projects/autopart-2.png"],
      tech: ["React", "JavaScript", "Bootstrap", "Context API"],
      github: "https://github.com/Sara200413/AutoPart"
    }
  ];

  const skills = {
    "Frontend": { icon: <Layout />, items: ["React.js", "Flutter", "Tailwind CSS", "Bootstrap", "Next.js"] },
    "Backend": { icon: <Server />, items: ["Laravel", "Node.js", "REST APIs", "Firebase"] },
    "Languages": { icon: <Terminal />, items: ["JavaScript", "Dart", "PHP", "SQL", "Python"] },
    "Tools & DevOps": { icon: <Wrench />, items: ["Git", "GitHub", "MySQL", "NoSQL", "VS Code"] }
  };

  const education = [
    {
      period: "Depuis Septembre 2025",
      title: "Élève Ingénieur en Ingénierie Logicielle et Intelligence Artificielle",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Formation d'ingénieur approfondie en architecture logicielle, data science et systèmes d'intelligence artificielle."
    },
    {
      period: "2023 — 2025",
      title: "Cycle Préparatoire Intégré",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Validation d'un cursus intensif en sciences fondamentales (Maths, Physique) et initiation aux bases de l'algorithmique."
    }
  ];

  // --- Logic ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => setIsVisible(p => ({ ...p, [e.target.id]: e.isIntersecting })));
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const getTechIcon = (tech) => {
    const icons = {
      "React": "react/react-original.svg", "Laravel": "laravel/laravel-original.svg",
      "Flutter": "flutter/flutter-original.svg", "Firebase": "firebase/firebase-plain.svg",
      "Tailwind": "tailwindcss/tailwindcss-original.svg", "MySQL": "mysql/mysql-original.svg",
      "Python": "python/python-original.svg", "JS": "javascript/javascript-original.svg"
    };
    const key = Object.keys(icons).find(k => tech.includes(k));
    return key ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icons[key]}` : null;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 font-sans selection:bg-emerald-500/30`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 font-black text-2xl tracking-tighter group cursor-pointer">
            <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-12 transition-transform">
              <Code2 className="text-black" size={20} />
            </div>
            <span>SARA<span className="text-emerald-500">.</span>ECHFFANI</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase opacity-60">
              <a href="#about" className="hover:text-emerald-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
              <a href="#resume" className="hover:text-emerald-500 transition-colors">Resume</a>
            </div>
            <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 transition-all">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-8 animate-bounce">
              <span className="w-12 h-[1px] bg-emerald-500"></span>
              <span className="text-emerald-500 text-xs font-black tracking-widest uppercase">Available for Hire</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-10">
              SOFTWARE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">& AI ENGINEER</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-40 max-w-2xl leading-relaxed mb-12">
              Étudiante passionnée en ingénierie, je transforme des idées complexes en solutions numériques élégantes et performantes.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-10 py-5 bg-emerald-500 text-black font-black rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">EXPLORE WORK</a>
              <div className="flex gap-4">
                <a href="https://github.com/Sara200413" target="_blank" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Github size={24}/></a>
                <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Linkedin size={24}/></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 relative flex justify-center">
            <div className="absolute -inset-10 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
            <img src="/sara.png" className="relative w-80 h-80 md:w-full md:h-full rounded-[60px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10 rotate-3 hover:rotate-0" alt="Sara Echffani" />
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="about" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs font-black tracking-[0.4em] text-emerald-500 uppercase mb-4">Core Expertise</h2>
            <h3 className="text-5xl font-bold tracking-tighter">SKILLS & TECHNOLOGIES</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, {icon, items}], idx) => (
              <div key={category} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-emerald-500/40 transition-all group">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">{icon}</div>
                <h4 className="text-2xl font-bold mb-6">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-black/40 rounded-xl text-[11px] font-bold opacity-70 border border-white/5 hover:opacity-100 transition-opacity">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-xs font-black tracking-[0.4em] text-emerald-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-5xl font-bold tracking-tighter">SELECTED WORKS</h3>
          </div>
          <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest hidden md:block">Click card for gallery</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div key={p.id} className="group relative bg-white/5 border border-white/10 rounded-[50px] overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-all duration-500"
                 onClick={() => { setSelectedProject(p); setCurrentImgIdx(0); }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{p.type}</span>
                    <h4 className="text-3xl font-bold mt-1">{p.title}</h4>
                  </div>
                  <a href={p.github} target="_blank" onClick={e => e.stopPropagation()} className="p-3 bg-white/5 rounded-full hover:bg-emerald-500 hover:text-black transition-all">
                    <Github size={18} />
                  </a>
                </div>
                <p className="text-sm opacity-50 mb-8 line-clamp-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map(t => (
                    <div key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-white/5 text-[10px] font-bold">
                      {getTechIcon(t) && <img src={getTechIcon(t)} className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all" />}
                      {t}
                    </div>
                  ))}
                  {p.tech.length > 3 && <span className="text-[10px] opacity-40 flex items-center">+{p.tech.length-3} more</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION & RESUME --- */}
      <section id="resume" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Education timeline */}
          <div>
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <GraduationCap className="text-emerald-500" /> Education
            </h3>
            <div className="space-y-12 relative border-l border-white/10 pl-8 ml-4">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#050505]"></div>
                  <span className="text-[10px] font-black text-emerald-500 tracking-widest mb-2 block">{edu.period}</span>
                  <h4 className="text-2xl font-bold mb-2">{edu.title}</h4>
                  <p className="text-sm font-bold opacity-80 mb-3">{edu.school}</p>
                  <p className="text-sm opacity-40 leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download Card */}
          <div className="flex flex-col justify-center">
            <div className="p-12 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[60px] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                <Briefcase size={120} />
              </div>
              <h3 className="text-4xl font-black mb-6 leading-tight">PRÊT POUR DE <br /> NOUVEAUX DÉFIS ?</h3>
              <p className="text-lg opacity-60 mb-10">Consultez mon CV complet pour découvrir mon parcours technique et mes certifications en détail.</p>
              <a href="/cv_sara_echffani.pdf" download className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-emerald-500 transition-all shadow-xl">
                DOWNLOAD FULL CV <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL / LIGHTBOX --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl bg-black/90 p-6 transition-all"
             onClick={() => setSelectedProject(null)}>
          <button className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedProject(null)}>
            <X size={40} />
          </button>
          
          <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center" onClick={e => e.stopPropagation()}>
            <div className="md:col-span-8 relative">
              <div className="aspect-video rounded-[40px] overflow-hidden bg-white/5 shadow-2xl relative">
                <img src={selectedProject.images[currentImgIdx]} className="w-full h-full object-contain" alt="Project view" />
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p-1+selectedProject.images.length)%selectedProject.images.length); }} 
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-emerald-500 transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p+1)%selectedProject.images.length); }} 
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-emerald-500 transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center mt-6 gap-3">
                {selectedProject.images.map((_, i) => (
                  <button key={i} onClick={() => setCurrentImgIdx(i)} 
                          className={`h-1.5 transition-all rounded-full ${i === currentImgIdx ? 'w-10 bg-emerald-500' : 'w-3 bg-white/20'}`}></button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-4">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{selectedProject.type}</span>
              <h4 className="text-5xl font-black mb-6 tracking-tighter">{selectedProject.title}</h4>
              <p className="text-lg opacity-60 leading-relaxed mb-10">{selectedProject.desc}</p>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold">{t}</span>
                  ))}
                </div>
                <a href={selectedProject.github} target="_blank" className="flex items-center gap-3 text-emerald-500 font-bold hover:gap-5 transition-all">
                  VIEW ON GITHUB <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-10 mb-12">
            <a href="mailto:saraechffani@gmail.com" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-110"><Mail size={32}/></a>
            <a href="https://github.com/Sara200413" target="_blank" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-110"><Github size={32}/></a>
            <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-110"><Linkedin size={32}/></a>
          </div>
          <p className="text-[10px] font-black tracking-[0.5em] opacity-20 uppercase">© 2026 Sara Echffani • Designed for Impact</p>
        </div>
      </footer>
    </div>
  );
};

export default App;