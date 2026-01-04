import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";
import UserWelcome from '../../assets/USER_WELCOME.png';
import { FiSend, FiPlusCircle, FiFileText } from "react-icons/fi";

export default function Phone3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mx-auto group" style={{ perspective: "1500px" }}>
      {/* Main Phone Container */}
      <motion.div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Phone Frame */}
        <motion.div
          className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] p-3 shadow-3d"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Screen */}
  <div className="bg-trading-bg rounded-[2.5rem] overflow-hidden relative h-[500px] w-[280px] sm:h-[400px] sm:w-[220px] md:h-[600px] md:w-[280px] shadow-glow">
    <img src={UserWelcome} alt="User Welcome" className="w-full h-full object-cover" />
  </div>
        </motion.div>
      </motion.div>

<FloatingIcon
  icon={<FiSend className="w-6 h-6 text-white" />}
  text="Transfert d’argent"
  position="lg:block hidden top-[15%] -left-[50%]"
  color="bg-primary"
  delay={0}
/>
<FloatingIcon
  icon={<FiPlusCircle className="w-6 h-6 text-white" />}
  text="Dépôt sur le wallet"
  position="lg:block hidden top-[40%] -right-[50%]"
  color="bg-secondary"
  delay={0.5}
/>
<FloatingIcon
  icon={<FiFileText className="w-6 h-6 text-white" />}
  text="Paiement facture"
  position="lg:block hidden top-[70%] -right-[50%]"
  color="bg-accent"
  delay={1}
/>

    </div>
  );
}

function FloatingIcon({ icon, text, position, color, delay }) {
  // Determine if the icon is on the right side
  const isRight = position && position.includes("right");
  return (
    <motion.div
      className={`absolute ${position} flex items-center group cursor-pointer`}
      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 0,
        y: [0, -10, 0],
        rotateX: [0, 5, 0],
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1, rotateY: 10, transition: { duration: 0.2 } }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`flex items-center gap-2`}>
        <motion.p
          className={`opacity-0 ${
            isRight ? "order-2" : "order-1"
          } group-hover:opacity-100 transition-opacity duration-500 text-sm bg-primary/20 backdrop-blur-sm p-3 rounded-xl w-fit text-secondary-content border border-primary `}
          whileHover={{ scale: 1.05 }}
        >
          {text}
        </motion.p>
        <motion.div
          className={`${color} p-3 ${
            isRight ? "order-1 " : "order-2 mr-2"
          } rounded-xl shadow-lg text-white text-lg w-fit`}
          transition={{
            duration: 4,
            repeat: Infinity,
            rotateZ: { duration: 2, repeat: Infinity },
          }}
          whileHover={{ rotateZ: 360 }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}
