import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Layout, Server, Wrench, Github, Linkedin, 
  Mail, Code2, Sparkles, ArrowRight, Sun, Moon, 
  Download, GraduationCap, Briefcase, X, ChevronLeft, ChevronRight, Brain
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: "drconnect",
      title: "DrConnect",
      type: "Mobile App • Full-Stack",
      desc: "Une application mobile révolutionnaire pour la gestion des rendez-vous médicaux via Firebase.",
      images: ["/projects/drconnect-1.png", "/projects/drconnect-2.png", "/projects/drconnect-3.png", "/projects/drconnect-4.png"],
      tech: ["Flutter", "Dart", "Firebase", "NoSQL"],
      github: "https://github.com/Sara200413/DrConnect-Flutter-Firebase"
    },
    {
      id: "easymanage",
      title: "EasyManage",
      type: "SaaS • Web Application",
      desc: "Solution ERP complète pour freelances incluant facturation et dashboard analytique.",
      images: ["/projects/easymanage-1.png", "/projects/easymanage-2.png", "/projects/easymanage-3.png"],
      tech: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/Sara200413"
    },
    {
      id: "autopart",
      title: "AutoPart",
      type: "E-commerce • SPA",
      desc: "Moteur de recherche de pièces automobiles avec filtrage dynamique.",
      images: ["/projects/autopart-1.png", "/projects/autopart-2.png"],
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/Sara200413/AutoPart"
    }
  ];

  const skills = {
    "Frontend": { icon: <Layout />, items: ["React.js", "Flutter", "Tailwind CSS", "Bootstrap"] },
    "Backend": { icon: <Server />, items: ["Laravel", "Node.js", "Firebase", "MySQL"] },
    "Languages": { icon: <Terminal />, items: ["JavaScript", "Dart", "PHP", "SQL", "Python","Java","C"] },
    "Tools": { icon: <Wrench />, items: ["Git", "GitHub", "VS Code", "Postman"] }
  };

  const education = [
    {
      period: "Depuis Septembre 2025",
      title: "Élève Ingénieur en Ingénierie Logicielle et IA",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Formation d'ingénieur en INGÉNIERIE LOGICIELLE & IA"
    },
    {
      period: "2023 — 2025",
      title: "Cycle Préparatoire Intégré",
      school: "École Nationale des Sciences Appliquées (ENSA), Fès",
      desc: "Cursus intensif en sciences fondamentales et algorithmique."
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
    <div className={`min-h-screen ${isDark ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 overflow-x-hidden`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      <motion.div 
        className="fixed w-6 h-6 rounded-full border-2 border-emerald-500 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 12, y: mousePos.y - 12, scale: selectedProject ? 2.5 : 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 font-black text-2xl tracking-tighter group cursor-pointer">
          <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-[360deg] transition-transform duration-1000">
            <Code2 className="text-black" size={20} />
          </div>
          <span>SARA.DEV</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase opacity-60">
            {['about', 'projects', 'resume'].map(item => <a key={item} href={`#${item}`} className="hover:text-emerald-500 transition-all">{item}</a>)}
          </div>
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/20 transition-all">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-56 pb-32 px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-emerald-500"></span>
              <span className="text-emerald-500 text-xs font-black tracking-widest uppercase italic tracking-[0.2em]">Engineering Student @ ENSA Fès</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-7xl md:text-[115px] font-black leading-[0.85] tracking-tighter mb-10 italic">
              SOFTWARE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">& AI ENGINEER</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl opacity-40 max-w-2xl leading-relaxed mb-12">
              Élève Ingénieure à l'<b>ENSA Fès</b>, je fusionne l'ingénierie logicielle et l'IA pour bâtir des solutions numériques d'exception.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <a href="#projects" className="px-12 py-5 bg-emerald-500 text-black font-black rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-emerald-500/20">VIEW PROJECTS</a>
              <div className="flex gap-4">
                <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Github size={24}/></a>
                <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" rel="noreferrer" className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"><Linkedin size={24}/></a>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            animate={{ y: [0, -20, 0], rotate: [2, -2, 2] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="md:col-span-4 relative flex justify-center group"
          >
            <div className="absolute -inset-10 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
            <img src="/sara.png" className="relative w-full aspect-square rounded-[70px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/10 shadow-emerald-500/10" alt="Sara Echffani" />
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="about" className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl font-bold tracking-tighter mb-20 italic">SKILLS & EXPERTISE</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, {icon, items}]) => (
              <motion.div key={category} variants={fadeInUp} className="p-10 bg-white/5 border border-white/10 rounded-[45px] hover:border-emerald-500/40 transition-all group">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">{icon}</div>
                <h4 className="text-2xl font-bold mb-6 tracking-tight">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-black/40 rounded-xl text-[11px] font-bold opacity-70 border border-white/5 hover:opacity-100 transition-all">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold tracking-tighter mb-20 italic">SELECTED WORKS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-[60px] overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-all duration-500 shadow-xl"
              onClick={() => { setSelectedProject(p); setCurrentImgIdx(0); }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-black text-xs tracking-widest text-emerald-400">VIEW GALLERY</div>
              </div>
              <div className="p-10">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{p.type}</span>
                <h4 className="text-3xl font-bold mt-2 tracking-tight">{p.title}</h4>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tech.map(t => (
                    <div key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-[10px] font-bold">
                      {getTechIcon(t) && <img src={getTechIcon(t)} className="w-3 h-3 grayscale group-hover:grayscale-0" alt={t} />} {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION & RESUME */}
      <section id="resume" className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h3 className="text-4xl font-bold mb-16 italic flex items-center gap-4"><GraduationCap className="text-emerald-500" /> EDUCATION</h3>
          <div className="space-y-16 border-l-2 border-white/5 pl-10 ml-4 relative">
            {education.map((edu, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative group">
                <div className="absolute -left-[51px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#050505] group-hover:scale-150 transition-transform"></div>
                <span className="text-[10px] font-black text-emerald-500 tracking-[0.3em] uppercase mb-3 block">{edu.period}</span>
                <h4 className="text-3xl font-black mb-2 tracking-tight">{edu.title}</h4>
                <p className="text-lg font-bold opacity-80 mb-4">{edu.school}</p>
                <p className="text-sm opacity-40 leading-relaxed max-w-md">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
          <div className="p-16 bg-white/5 rounded-[70px] border border-white/10 relative overflow-hidden group hover:bg-emerald-500/5 transition-all duration-700">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform"><Briefcase size={180} /></div>
            <h3 className="text-5xl font-black mb-8 italic leading-none tracking-tighter">CURRICULUM <br /> VITAE</h3>
            <p className="text-xl opacity-50 mb-12 max-w-sm leading-relaxed font-medium">Téléchargez mon parcours technique à l'<b>ENSA Fès</b>.</p>
            <a 
              href="/cv_sara_echffani.pdf" 
              download="cv_sara_echffani.pdf" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black rounded-[35px] hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/10"
            >
              DOWNLOAD CV <Download size={22} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl bg-black/95 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 100 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 100 }}
              className="max-w-7xl w-full grid md:grid-cols-12 gap-16 items-center bg-white/5 p-16 rounded-[80px] border border-white/10 relative shadow-2xl shadow-emerald-500/5"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-10 right-10 p-4 text-white/30 hover:text-white transition-all" onClick={() => setSelectedProject(null)}><X size={45}/></button>
              <div className="md:col-span-8 relative rounded-[40px] overflow-hidden bg-black/40">
                <img src={selectedProject.images[currentImgIdx]} className="w-full h-[60vh] object-contain" alt="Project zoom" />
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p-1+selectedProject.images.length)%selectedProject.images.length); }} 
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-5 bg-black/50 rounded-full hover:bg-emerald-500 transition-all"><ChevronLeft size={30}/></button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => (p+1)%selectedProject.images.length); }} 
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-5 bg-black/50 rounded-full hover:bg-emerald-500 transition-all"><ChevronRight size={30}/></button>
              </div>
              <div className="md:col-span-4">
                <h4 className="text-6xl font-black mb-8 italic tracking-tighter text-white">{selectedProject.title}</h4>
                <p className="text-xl opacity-60 leading-relaxed mb-12 text-white/80">{selectedProject.desc}</p>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-emerald-500 font-black text-sm tracking-[0.3em] hover:gap-8 transition-all uppercase">GITHUB REPO <ArrowRight size={25}/></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-24 px-8 border-t border-white/5 text-center">
        <div className="flex justify-center gap-12 mb-16">
          <a href="mailto:saraechffani@gmail.com" className="opacity-30 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125 duration-500"><Mail size={35}/></a>
          <a href="https://github.com/Sara200413" target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125 duration-500"><Github size={35}/></a>
          <a href="https://www.linkedin.com/in/sara-echffani-85b135311/" target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 hover:text-emerald-500 transition-all transform hover:scale-125 duration-500"><Linkedin size={35}/></a>
        </div>
        <p className="text-[11px] font-black tracking-[0.7em] opacity-20 uppercase tracking-tighter italic">SARA ECHFFANI • ENSA FÈS • ENGINEERING STUDENT</p>
      </footer>
    </div>
  );
};

export default App;