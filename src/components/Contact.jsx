import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 film-grain relative">
      <div className="max-w-4xl mx-auto bg-white/[0.01] backdrop-blur-xl border border-white/[0.03] border-t-white/[0.08] border-l-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Subtle glass reflection */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>

        <motion.h2 
          className="font-marathon text-5xl md:text-7xl text-cream mb-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Fin.
        </motion.h2>
        <motion.p 
          className="text-cream/60 mb-12 text-lg relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Ready to build data-driven solutions? Let's connect.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Magnetic>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:lokeshyarramsetti2@gmail.com" 
              className="block border border-white/20 bg-white/5 backdrop-blur-md text-muted-gold px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-bold rounded-full"
            >
              Send an Email
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139,58,43,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" download 
              className="block border border-white/10 bg-black/20 backdrop-blur-md text-rust px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black/40 hover:border-white/20 transition-all duration-300 font-bold rounded-full flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </motion.a>
          </Magnetic>
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-8 text-sm uppercase tracking-widest text-cream/40 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a whileHover={{ y: -5, color: "#E3DCD2" }} href="https://github.com/thisislokesh-31" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300">GitHub</motion.a>
          <motion.a whileHover={{ y: -5, color: "#E3DCD2" }} href="https://www.linkedin.com/in/lokesh-yarramsetti-8a2591376/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300">LinkedIn</motion.a>
          <motion.a whileHover={{ y: -5, color: "#E3DCD2" }} href="https://x.com/thisislokesh_31" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300">X</motion.a>
        </motion.div>
        
        <p className="mt-16 text-xs text-cream/20 uppercase tracking-widest relative z-10">
          &copy; {new Date().getFullYear()} Lokesh Yarramsetti. All rights reserved.
        </p>
      </div>
    </section>
  );
}
