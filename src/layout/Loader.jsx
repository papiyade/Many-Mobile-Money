import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import body_bg from "../assets/body-bg.png"
import phoneApp from '../assets/USER_WELCOME.png';

const chartData = [
  [30, 80, 50, 90, 60, 120, 80, 95, 110, 85],
  [60, 110, 70, 130, 100, 160, 120, 140, 170, 145],
  [40, 90, 60, 100, 70, 130, 90, 115, 140, 105],
];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [chartStep, setChartStep] = useState(0);
  const [loadingText, setLoadingText] = useState('Chargement...');

  const loadingSteps = [
    'Initializing...',
    'Connecting to markets...',
    'Loading portfolio...',
    'Syncing data...',
    'Almost ready!'
  ];

  useEffect(() => {
    let frame;
    const animate = () => {
      setProgress((prev) => {
        if (prev < 100) {
          frame = requestAnimationFrame(animate);
          return prev + 0.8;
        }
        return 100;
      });
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setChartStep(prev => (prev + 1) % chartData.length);
    }, 1500);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const stepIndex = Math.floor(progress / 20);
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex]);
      }
    }, 1000);

    return () => clearInterval(textInterval);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center min-h-screen overflow-hidden`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={body_bg} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
        {/* Floating Trading Symbols */}
        {['$', '₹', '€', '£', '¥', '₿'].map((symbol, i) => (
          <motion.div className="absolute text-2xl font-bold text-blue-400 opacity-20 select-none" key={i}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div className={`absolute ${i % 2 === 0 ? 'w-3 h-3 bg-accent' : 'w-4 h-1 bg-accent/50'} opacity-20`} key={`shape-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '2px',
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}


        {/* Enhanced Phone SVG */}
        <motion.div className="relative mb-8 z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={phoneApp} alt="Phone" className="w-28 md:w-28 lg:w-28 rounded-2xl" />
          </motion.div>
        </motion.div>

        {/* App branding */}
        <motion.div className="text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            MANY
          </motion.h1>
          <motion.p className="text-lg mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Mobile Money
          </motion.p>
        </motion.div>

        {/* Enhanced progress section */}
        <motion.div className="w-80 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Progress bar container */}
          <div className="relative w-full h-2 bg-primary rounded-full overflow-hidden shadow-inner mb-4">
            <motion.div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
            {/* Glow effect */}
            <motion.div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm"
              animate={{
                x: ['-32px', '320px'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Loading text with typing effect */}
          <motion.div className="text-center text-sm font-medium"
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loadingText}
          </motion.div>

          {/* Progress percentage */}
          <motion.div className="text-center text-2xl font-bold text-secondary-content mt-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div className="absolute top-20 right-20 w-6 h-6 bg-primary rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div className="absolute bottom-20 left-20 w-4 h-4 bg-primary rounded-full opacity-40"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;