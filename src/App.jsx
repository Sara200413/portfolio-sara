import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Layout, Server, Brain, Wrench, Github, Linkedin, 
  Mail, Code2, Sparkles, ArrowRight, ExternalLink, Sun, Moon, 
  Download, GraduationCap, Calendar, CheckCircle2, X, ChevronLeft, 
  ChevronRight, Briefcase
} from 'lucide-react';

// --- Animation Variants (قوالب الحركات) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const isDark = theme === 'dark';

  // --- البيانات الخاصة بك (Data) ---
  const projects = [
    {
      id: "drconnect",
      title: "DrConnect",
      type: "Mobile App • Full-Stack",
      desc: "Une application mobile révolutionnaire pour la gestion des rendez-vous médicaux. Intègre un algorithme de validation en temps réel via Firebase.",
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
    "Artificial Intelligence": { icon: <Brain />, items: ["Python", "TensorFlow", "Data Analysis", "Machine Learning"] },
    "Languages": { icon: <Terminal />, items: ["JavaScript", "Dart", "PHP", "SQL", "Python"] },
    "Tools & DevOps": { icon: <Wrench />, items: ["Git", "GitHub", "MySQL", "NoSQL", "VS Code"] }
  };

  const education = [
    {
      period: "Depuis Septembre 2025",
      title: "Élève Ingénieur en Ingénierية Logicielle et IA",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Formation d'ingénieur approfondie en architecture logicielle, data science et IA."
    },
    {
      period: "2023 — 2025",
      title: "Cycle Préparatoire Intégré",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Validation d'un cursus intensif en sciences fondamentales et algorithmique."
    }
  ];

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
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-3 font-black text-2xl tracking-tighter group cursor-pointer">
          <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 className="text-black" size={20} />
          </div>
          <span>SARA<span className="text-emerald-500">.</span>ECHFFANI</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase opacity-60">
            {['about', 'projects', 'resume'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-emerald-500 transition-colors">{item}</a>
            ))}
          </div>
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 transition-all">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-emerald-500"></span>
              <span className="text-emerald-500 text-xs font-black tracking-widest uppercase italic">Engineering Student at ENSA Fès</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10">
              SOFTWARE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">& AI ENGINEER</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl opacity-40 max-w-2xl leading-relaxed mb-12">
              À l'intersection du développement Full-Stack et de l'IA, je transforme des problématiques complexes en expériences utilisateurs fluides et robustes.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <a href="#projects" className="px-10 py-5 bg-emerald-500 text-black font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-emerald-500/20">EXPLORE WORK</a>
              <div className="flex gap-4">
                <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Github size={24}/></a>
                <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" rel="noreferrer" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Linkedin size={24}/></a>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }} whileInView={{ opacity: 1, scale: 1, rotate: 3 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="md:col-span-4 relative flex justify-center group"
          >
            <div className="absolute -inset-10 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
            <img src="/sara.png" className="relative w-80 h-80 md:w-full md:h-full rounded-[60px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10" alt="Sara Echffani" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="about" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
            <h2 className="text-xs font-black tracking-[0.4em] text-emerald-500 uppercase mb-4">Core Expertise</h2>
            <h3 className="text-5xl font-bold tracking-tighter italic">SKILLS & TECHNOLOGIES</h3>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {Object.entries(skills).map(([category, {icon, items}]) => (
              <motion.div key={category} variants={fadeInUp} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-emerald-500/40 transition-all group">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl w-fit mb-6 group-hover:rotate-[360deg] transition-transform duration-700">{icon}</div>
                <h4 className="text-2xl font-bold mb-6 tracking-tight">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-black/40 rounded-xl text-[11px] font-bold opacity-70 border border-white/5 hover:bg-emerald-500 hover:text-black hover:opacity-100 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-xs font-black tracking-[0.4em] text-emerald-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-5xl font-bold tracking-tighter italic">SELECTED WORKS</h3>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-[50px] overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-all duration-500"
              onClick={() => { setSelectedProject(p); setCurrentImgIdx(0); }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{p.type}</span>
                <h4 className="text-3xl font-bold mt-1 tracking-tight">{p.title}</h4>
                <p className="text-sm opacity-50 my-6 line-clamp-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map(t => (
                    <div key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-white/5 text-[10px] font-bold">
                      {getTechIcon(t) && <img src={getTechIcon(t)} className="w-3 h-3 grayscale group-hover:grayscale-0 transition-all" alt={t} />} {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION & RESUME --- */}
      <section id="resume" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h3 className="text-4xl font-bold mb-12 flex items-center gap-4 italic"><GraduationCap className="text-emerald-500" /> Education</h3>
            <div className="space-y-12 relative border-l border-white/10 pl-8 ml-4">
              {education.map((edu, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative group">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#050505] group-hover:scale-150 transition-transform"></div>
                  <span className="text-[10px] font-black text-emerald-500 tracking-widest mb-2 block uppercase">{edu.period}</span>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{edu.title}</h4>
                  <p className="text-sm font-bold opacity-80 mb-3">{edu.school}</p>
                  <p className="text-sm opacity-40 leading-relaxed">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <div className="p-12 bg-white/5 rounded-[60px] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"><Briefcase size={150} /></div>
              <h3 className="text-4xl font-black mb-6 leading-tight italic">CURRICULUM <br /> VITAE</h3>
              <p className="text-lg opacity-60 mb-10 leading-relaxed">Téléchargez mon CV complet pour découvrir mon parcours technique à l'<b>ENSA Fès</b>.</p>
              <a href="/cv_sara_echffani.pdf" download="cv_sara_echffani.pdf" className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-black font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-emerald-500/10">
                DOWNLOAD FULL CV <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl bg-black/95 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center bg-white/5 p-10 rounded-[60px] border border-white/10 relative"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-8 right-8 text-white/50 hover:text-white" onClick={() => setSelectedProject(null)}><X size={40}/></button>
              <div className="md:col-span-8 relative rounded-3xl overflow-hidden bg-black/50">
                <img src={selectedProject.images[currentImgIdx]} className="w-full h-[55vh] object-contain" alt="Project view" />
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p-1+selectedProject.images.length)%selectedProject.images.length); }} 
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-emerald-500 transition-all"><ChevronLeft size={24}/></button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p+1)%selectedProject.images.length); }} 
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-emerald-500 transition-all"><ChevronRight size={24}/></button>
              </div>
              <div className="md:col-span-4">
                <h4 className="text-5xl font-black mb-6 tracking-tighter italic">{selectedProject.title}</h4>
                <p className="text-lg opacity-60 leading-relaxed mb-10">{selectedProject.desc}</p>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-emerald-500 font-bold hover:gap-5 transition-all uppercase tracking-widest text-xs">VIEW ON GITHUB <ArrowRight size={20}/></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="flex justify-center gap-10 mb-12">
          <a href="mailto:saraechffani@gmail.com" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125"><Mail size={32}/></a>
          <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125"><Github size={32}/></a>
          <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125"><Linkedin size={32}/></a>
        </div>
        <p className="text-[10px] font-black tracking-[0.5em] opacity-20 uppercase tracking-tighter">© 2026 Sara Echffani • Engineering Student at ENSA Fès</p>
      </footer>
    </div>
  );
};

export default App;