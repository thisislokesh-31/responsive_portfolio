import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative film-grain">
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#12100E_100%)] pointer-events-none opacity-80"></div>
      
      <div className="text-center z-10 px-6 relative pointer-events-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img 
            whileHover={{ scale: 1.03, boxShadow: "0px 0px 30px rgba(212,175,55,0.2)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/profile.png" 
            alt="Lokesh Yarramsetti" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-muted-gold/40 sepia-[.2] contrast-110 shadow-[0_0_20px_rgba(212,175,55,0.1)] cursor-pointer"
          />
          <div className="text-center md:text-left">
            <motion.p 
              whileHover={{ color: "#E3DCD2", textShadow: "0px 0px 12px rgba(227,220,210,0.4)" }}
              transition={{ duration: 0.5 }}
              className="text-rust tracking-[0.3em] uppercase text-sm mb-2 font-medium"
            >
              Data Scientist
            </motion.p>
            <motion.h1 
              whileHover={{ scale: 1.01, color: "#F9F6F0", textShadow: "0px 0px 20px rgba(212,175,55,0.2)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-marathon text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream drop-shadow-2xl leading-none cursor-default"
            >
              LOKESH<br className="hidden md:block" /> YARRAMSETTI
            </motion.h1>
          </div>
        </motion.div>
        
        <motion.p 
          whileHover={{ scale: 1.02 }}
          className="max-w-xl mx-auto text-cream/70 text-lg md:text-xl font-light leading-relaxed cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          B.Tech CSE (Data Science) | Aspiring Data Scientist | Machine Learning | Python | Data Analytics | Building Data-Driven Solutions
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Magnetic>
            <motion.a 
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="block border border-muted-gold text-muted-gold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-muted-gold hover:text-espresso transition-all duration-300 font-bold"
            >
              View Projects
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a 
              whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="block border border-transparent text-cream px-10 py-4 uppercase tracking-[0.2em] text-xs hover:border-cream/30 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
