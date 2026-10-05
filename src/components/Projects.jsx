import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const projects = [
  {
    title: "AICTE-VOIS-Data-Analytics-Project",
    role: "Data Analyst",
    desc: "Completed as part of my AICTE & VOIS internship in Data Analytics. Explored and analyzed a car dataset including data exploration, descriptive statistics, missing-value checking, and visualization of car names and fuel types.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/thisislokesh-31/AICTE-VOIS-Data-Analytics-Project"
  },
  {
    title: "Sales & Demand Forecasting using Machine Learning",
    role: "Machine Learning Engineer",
    desc: "This project focuses on predicting future sales and demand using machine learning techniques. By analyzing historical retail sales data, the system helps businesses make data-driven decisions related to inventory management, demand planning, and revenue forecasting.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/thisislokesh-31/Sales_Demand_Forecasting"
  }
];

function ProjectCard({ project, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring physics for buttery smooth damping
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-200, 200], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: idx * 0.2, duration: 0.6 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}
        className="group relative bg-white/[0.01] backdrop-blur-xl border border-white/[0.03] border-t-white/[0.08] border-l-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/[0.12] transition-colors duration-500 flex flex-col h-full rounded-2xl p-8 overflow-hidden"
      >
        {/* Liquid glass light sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-2xl"></div>

        {/* 3D Inner Content */}
        <div style={{ transform: "translateZ(30px)", display: "flex", flexDirection: "column", height: "100%", position: "relative", zIndex: 10 }}>
          
          <h3 className="font-marathon text-2xl text-muted-gold mb-2">{project.title}</h3>
          <p className="text-rust text-xs uppercase tracking-[0.15em] mb-6">{project.role}</p>
          <p className="text-cream/70 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
          
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs text-cream/50 uppercase tracking-wider border-b border-cream/20 pb-1">
                {tag}
              </span>
            ))}
          </div>
          
          {project.github && (
            <div className="mt-6 pt-6 border-t border-muted-gold/10 pointer-events-auto relative z-20">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-gold hover:text-cream transition-colors duration-300 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 film-grain relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-marathon text-5xl text-cream mb-16 text-center"
          initial={{ opacity: 0, y: -20, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          Featured Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
