import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);
    const click = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mousedown', click);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mousedown', click);
    };
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{
            translateX: springX,
            translateY: springY,
          }}
        >
          {/* Cursor body: outer ring + dot */}
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-xl mix-blend-color"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Inner dot */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md shadow-primary" />

            {/* Click burst */}
            {isClicked && (
              <motion.div className="absolute top-1/2 left-1/2 w-10 h-10 border-2 border-primary rounded-full -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0.5, opacity: 0.6 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
