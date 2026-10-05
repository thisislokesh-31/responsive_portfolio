import Magnetic from './Magnetic';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 md:top-6 z-50 pointer-events-auto flex justify-center px-4">
      <div className="w-full max-w-6xl bg-white/[0.01] backdrop-blur-lg border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-none md:rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300">
        <Magnetic>
          <a href="#hero" className="font-marathon text-2xl md:text-3xl text-muted-gold tracking-widest inline-block drop-shadow-md">LOKESH</a>
        </Magnetic>
        <div className="hidden md:flex space-x-6 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-cream/90">
          <Magnetic><a href="#about" className="hover:text-muted-gold transition-colors duration-300 inline-block px-3 py-2">About</a></Magnetic>
          <Magnetic><a href="#skills" className="hover:text-muted-gold transition-colors duration-300 inline-block px-3 py-2">Skills</a></Magnetic>
          <Magnetic><a href="#projects" className="hover:text-muted-gold transition-colors duration-300 inline-block px-3 py-2">Projects</a></Magnetic>
          <Magnetic><a href="#contact" className="hover:text-muted-gold transition-colors duration-300 inline-block px-3 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">Contact</a></Magnetic>
        </div>
      </div>
    </nav>
  );
}
