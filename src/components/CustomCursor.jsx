import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Outer ring values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Inner dot values (1:1 tracking)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Smooth out the outer ring
  const springConfig = { damping: 25, stiffness: 250, mass: 0.2 };
  const smoothCursorX = useSpring(cursorX, springConfig);
  const smoothCursorY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Center the 32px outer ring
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Center the 6px inner dot
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('[data-magnetic]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer frosted glass ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 backdrop-blur-sm pointer-events-none z-[10000] hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        style={{
          x: smoothCursorX,
          y: smoothCursorY,
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)',
          borderColor: isHovering ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-muted-gold rounded-full pointer-events-none z-[10001] hidden md:block drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"
        style={{
          x: dotX,
          y: dotY
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
