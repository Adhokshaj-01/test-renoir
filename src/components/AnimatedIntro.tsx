"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react"; // Door-handle-like icon

interface Props {
  onComplete: () => void;
}

const AnimatedIntro = ({ onComplete }: Props) => {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true);
    }, 800); 

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Left Curtain */}
      <motion.div
        className="absolute left-0 top-0 w-1/2 h-full bg-[#fdf6f0] flex justify-end items-center pr-4"
        initial={{ x: 0 }}
        animate={{ x: startExit ? "-100%" : 0 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        onAnimationComplete={() => {
          if (startExit) onComplete();
        }}
      >
        {/* Door handle icon */}
        Renoir 
        <GripVertical className="text-[#3b0000] w-6 h-20" />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full bg-[#fdf6f0] flex justify-start items-center pl-4"
        initial={{ x: 0  }}
        animate={{ x: startExit ? "100%" : 0 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
      >
        {/* Door handle icon */}
        <GripVertical className="text-[#3b0000] w-6 h-20" />

        Studio
      </motion.div>
    </div>
  );
};

export default AnimatedIntro;
