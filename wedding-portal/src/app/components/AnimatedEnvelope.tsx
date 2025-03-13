'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedEnvelopeProps {
  message: string;
  delay?: number;
}

export default function AnimatedEnvelope({ message, delay = 0 }: AnimatedEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const envelopeVariants = {
    closed: {
      rotateX: 0,
      scale: 1,
    },
    open: {
      rotateX: 0,
      scale: 1.05,
      opacity: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const flapVariants = {
    closed: {
      rotateX: 0,
      backgroundColor: "#fecdd3", // rose-200
    },
    open: {
      rotateX: -180,
      backgroundColor: "#ffe4e6", // rose-100
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
    },
    visible: {
      y: -40, // Move up to overlap with the envelope
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
      style={{ perspective: "1500px" }}
    >
      <div className="relative">
        {/* Envelope always visible */}
        <motion.div
          className="cursor-pointer"
          onClick={() => !isOpen && setIsOpen(true)}
          variants={envelopeVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {/* Envelope body */}
          <div className="relative bg-rose-100 rounded-lg shadow-md overflow-hidden border border-rose-200">
            <div className="p-12">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-4xl">💌</span>
                <span className="text-gray-700 font-medium text-lg">
                  {!isOpen ? "Click to open your personal note" : ""}
                </span>
              </div>
            </div>

            {/* Envelope flap */}
            <motion.div
              className="absolute top-0 left-0 w-full h-16 origin-top"
              variants={flapVariants}
              animate={isOpen ? "open" : "closed"}
              style={{ 
                transformStyle: "preserve-3d",
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                zIndex: 10,
              }}
            />

            {/* Flap shadow */}
            <div
              className="absolute top-0 left-0 w-full h-16 bg-rose-300/10"
              style={{ 
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
            />
          </div>
        </motion.div>

        {/* Note content */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="content"
              className="absolute top-0 left-0 w-full bg-white rounded-lg shadow-lg p-6 border border-rose-200"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Personal Note</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-500 transition p-2 hover:bg-rose-50 rounded-full"
                  >
                    ✉️
                  </button>
                </div>
                <motion.p 
                  className="italic text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {message}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 