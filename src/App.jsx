import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Layout, Server, Wrench, Github, Linkedin, 
  Mail, Code2, Sparkles, ArrowRight, Sun, Moon, 
  Download, GraduationCap, Briefcase, X, ChevronLeft, ChevronRight, Brain, Smartphone, Menu
} from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTechIcon = (tech) => {
    const icons = {
      "React": "react/react-original.svg", "Laravel": "laravel/laravel-original.svg",
      "Flutter": "flutter/flutter-original.svg", "Firebase": "firebase/firebase-plain.svg",
      "Tailwind": "tailwindcss/tailwindcss-original.svg", "MySQL": "mysql/mysql-original.svg",
      "Android": "android/android-original.svg", "Java": "java/java-original.svg",
      "JavaScript": "javascript/javascript-original.svg", "Python": "python/python-original.svg"
    };
    const key = Object.keys(icons).find(k => tech.includes(k));
    return key ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icons[key]}` : null;
  };

  const projects = [
    {
      id: "drconnect",
      title: "DrConnect",
      type: "Mobile & Android Solution",
      desc: "Système complet de gestion médicale. Une fusion entre Flutter et Firebase pour une expérience utilisateur fluide et sécurisée.",
      images: ["/projects/drconnect-1.png", "/projects/drconnect-2.png", "/projects/drconnect-3.png", "/projects/drconnect-4.png"],
      tech: ["Flutter", "Android", "Firebase", "Dart"],
      github: "https://github.com/Sara200413/DrConnect-Flutter-Firebase"
    },
    {
      id: "easymanage",
      title: "EasyManage",
      type: "Full-Stack SaaS",
      desc: "La plateforme ultime pour les freelances. Dashboard intelligent, facturation automatisée et gestion de clients en temps réel.",
      images: ["/projects/easymanage-1.png", "/projects/easymanage-2.png", "/projects/easymanage-3.png"],
      tech: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/Sara200413"
    },
    {
      id: "autopart",
      title: "AutoPart",
      type: "E-commerce Platform",
      desc: "Une interface intuitive pour le marché automobile. Moteur de recherche haute performance avec filtrage dynamique.",
      images: ["/projects/autopart-1.png", "/projects/autopart-2.png"],
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/Sara200413/AutoPart"
    }
  ];

  const skills = {
    "Mobile & Android": { icon: <Smartphone size={24}/>, items: ["Android", "Flutter", "Java", "Dart"] },
    "Frontend Engineering": { icon: <Layout size={24}/>, items: ["React.js", "Tailwind CSS", "JS", "Bootstrap"] },
    "Backend & Cloud": { icon: <Server size={24}/>, items: ["Laravel", "Node.js", "Firebase", "MySQL"] },
    "Tools": { icon: <Wrench size={24}/>, items: ["Python", "C", "Git", "VS Code"] }
  };

  const education = [
    {
      period: "2025 — PRÉSENT",
      title: "Élève Ingénieure en Ingénierie Logicielle & IA",
      school: "ENSA Fès",
      desc: "Formation en Ingénierie Logicielle et Intelligence Artificiell."
    },
    {
      period: "2023 — 2025",
      title: "Cycle Préparatoire Intégré",
      school: "ENSA Fès",
      desc: "Validation d'un cursus scientifique rigoureux et bases en algorithmique."
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#030303] text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-700 selection:bg-emerald-500/30 overflow-x-hidden`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/*Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl border-b border-white/5 py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 font-black text-2xl italic tracking-tighter">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-emerald-500/20"><Code2 className="text-black" /></div>
            <span>SARA.ECHFFANI</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-12 font-bold text-[10px] uppercase tracking-[0.2em] opacity-60">
            {['home', 'about', 'projects', 'resume'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-emerald-500 transition-colors">{item}</a>
            ))}
            <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 transition-all">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-emerald-500"><Menu size={32}/></button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center gap-8">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-emerald-500"><X size={40}/></button>
            {['home', 'about', 'projects', 'resume'].map(item => (
              <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="text-5xl font-black italic uppercase text-white/20 hover:text-emerald-500 transition-all">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Big Image & Clear Titles */}
      <section id="home" className="pt-56 md:pt-72 pb-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7 text-center md:text-left order-2 md:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-10 italic">
              <Sparkles size={14} className="animate-pulse" /> Engineering Student @ ENSA Fès
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10 italic uppercase">
              SOFTWARE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">& AI ENGINEER</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-3xl opacity-40 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-12">
              Spécialisée en <b>Software & Intelligence Artificielle</b>.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="#projects" className="px-12 py-5 bg-white text-black font-black rounded-3xl hover:bg-emerald-500 transition-all shadow-2xl">VOIR MES PROJETS</a>
              <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="p-5 bg-white/5 rounded-3xl border border-white/10 hover:bg-emerald-500/20 transition-all"><Github size={26}/></a>
            </motion.div>
          </div>

          {/* Hero Image  */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 10 }} animate={{ opacity: 1, scale: 1, rotate: 10 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="md:col-span-5 order-1 md:order-2 relative w-full max-w-[500px] aspect-square mx-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-[80px] blur-[80px] animate-pulse"></div>
            <img src="/sara.png" className="relative w-full h-full rounded-[60px] md:rounded-[100px] object-cover shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-emerald-500/10" alt="Sara Echffani" />
          </motion.div>
        </div>
      </section>

      {/* SKILLS  */}
      <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase mb-4 text-center md:text-left italic">Core Expertise</h2>
        <h3 className="text-5xl md:text-7xl font-black mb-20 italic tracking-tighter text-center md:text-left">COMPÉTENCES</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, {icon, items}], idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 bg-white/[0.02] border border-white/5 rounded-[60px] hover:border-emerald-500/30 transition-all group">
              <div className="text-emerald-500 mb-8 p-4 bg-emerald-500/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{icon}</div>
              <h4 className="text-xl font-black mb-6 tracking-tight uppercase italic">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={i} className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-2xl text-[10px] font-bold opacity-60 border border-white/5 hover:opacity-100 hover:bg-emerald-500/10 transition-all">
                    {getTechIcon(item) && <img src={getTechIcon(item)} className="w-3 h-3 grayscale group-hover:grayscale-0" alt={item} />} {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-20 italic uppercase tracking-tighter">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                 className="group relative bg-white/[0.02] border border-white/5 rounded-[70px] overflow-hidden cursor-pointer hover:border-emerald-500/30 transition-all shadow-2xl"
                 onClick={() => { setSelectedProject(p); setCurrentImgIdx(0); }}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center font-black text-[10px] tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-sm">Explore Case</div>
              </div>
              <div className="p-10">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{p.type}</span>
                <h3 className="text-3xl font-black mt-2 mb-8 tracking-tight italic uppercase">{p.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <div key={t} className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-black/40 border border-white/5 text-[10px] font-bold">
                      {getTechIcon(t) && <img src={getTechIcon(t)} className="w-3 h-3 grayscale" alt={t} />} {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESUME & EDUCATION */}
      <section id="resume" className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h3 className="text-5xl md:text-6xl font-black mb-16 italic flex items-center gap-4 uppercase tracking-tighter">Formation</h3>
          <div className="space-y-20 border-l-2 border-white/5 pl-12 relative">
            {education.map((edu, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[57px] top-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#030303] group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-[10px] font-black text-emerald-500 uppercase mb-4 block tracking-widest italic">{edu.period}</span>
                <h4 className="text-3xl font-black tracking-tight uppercase leading-tight group-hover:text-emerald-400 transition-colors">{edu.title}</h4>
                <p className="text-xl font-bold opacity-40 mt-4 italic">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <motion.div whileHover={{ y: -10 }} className="w-full p-16 md:p-24 bg-emerald-500 rounded-[80px] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform"><Briefcase size={250} className="text-black" /></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter text-black">Curriculum <br/> Vitae</h3>
            <p className="text-black/60 font-bold mb-12 max-w-sm mx-auto text-lg leading-relaxed">Téléchargez mon parcours à l'<b>ENSA Fès</b>.</p>
            <a href="/cv_sara_echffani.pdf" download="cv_sara_echffani.pdf" className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white font-black rounded-3xl hover:scale-105 transition-all shadow-2xl">
              DOWNLOAD CV <Download size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center backdrop-blur-3xl bg-black/98 p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div initial={{ scale: 0.9, y: 100 }} animate={{ scale: 1, y: 0 }}
              className="max-w-7xl w-full max-h-[95vh] overflow-y-auto bg-white/[0.03] p-10 md:p-20 rounded-[80px] border border-white/10 relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-12 right-12 p-5 bg-white/5 rounded-full text-white/50 hover:text-white transition-all" onClick={() => setSelectedProject(null)}><X size={35}/></button>
              
              <div className="mb-20 text-center">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-6 block italic">{selectedProject.type}</span>
                <h4 className="text-6xl md:text-[100px] font-black italic uppercase tracking-tighter mb-10 text-white">{selectedProject.title}</h4>
                <div className="flex flex-wrap gap-4 justify-center mb-16">
                  {selectedProject.tech.map(t => (
                    <div key={t} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest italic">
                      {getTechIcon(t) && <img src={getTechIcon(t)} className="w-4 h-4 grayscale" alt={t} />} {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full aspect-video md:aspect-[21/9] bg-black/60 rounded-[60px] overflow-hidden group mb-20 shadow-2xl border border-white/5">
                <img src={selectedProject.images[currentImgIdx]} className="w-full h-full object-contain p-4" alt="Gallery" />
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p-1+selectedProject.images.length)%selectedProject.images.length); }} 
                          className="p-6 bg-black/80 rounded-full hover:bg-emerald-500 transition-all text-white"><ChevronLeft size={30}/></button>
                  <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p+1)%selectedProject.images.length); }} 
                          className="p-6 bg-black/80 rounded-full hover:bg-emerald-500 transition-all text-white"><ChevronRight size={30}/></button>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                  {selectedProject.images.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImgIdx ? 'w-10 bg-emerald-500' : 'w-3 bg-white/20'}`}></div>
                  ))}
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center">
                <p className="text-2xl md:text-4xl opacity-70 leading-relaxed font-bold mb-16 italic">{selectedProject.desc}</p>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 text-emerald-500 font-black uppercase tracking-[0.5em] text-sm hover:gap-12 transition-all">
                   Gihub Repository <ArrowRight size={30}/>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center gap-16 mb-20">
          <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="opacity-20 hover:opacity-100 hover:text-emerald-500 transition-all"><Github size={45}/></a>
          <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" rel="noreferrer" className="opacity-20 hover:opacity-100 hover:text-emerald-500 transition-all"><Linkedin size={45}/></a>
        </div>
        <p className="text-[10px] font-black tracking-[1em] opacity-10 uppercase">SARA ECHFFANI • ENSA FÈS • 2026</p>
      </footer>
    </div>
  );
};

export default App;