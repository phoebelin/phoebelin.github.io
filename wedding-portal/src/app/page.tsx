'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { findGuest } from './utils/guestUtils';
import PageTransition from './components/PageTransition';
import AnimatedButton from './components/AnimatedButton';
import { fadeUpVariants, staggerContainerVariants, listItemVariants } from './utils/animations';
import PublicEventInfo from './components/PublicEventInfo';

export default function Home() {
  const [guestName, setGuestName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guest = findGuest(guestName);
    
    if (guest) {
      router.push(`/guest/${guest.id}`);
    } else {
      setError('Guest not found. Please check the name and try again.');
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-16 space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={fadeUpVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Wedding Celebration
            </h1>
            <p className="text-xl text-gray-600">
              Join us for our special day
            </p>
          </motion.div>

          {/* Guest Portal Section */}
          <motion.section
            variants={fadeUpVariants}
            className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Guest Portal</h2>
              <p className="text-gray-600 mt-2">Enter your name to view your personal invitation</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <motion.input
                  type="text"
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                  whileFocus={{ scale: 1.02 }}
                  animate={error ? { x: [-4, 4, -4, 4, 0] } : {}}
                />
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-rose-500 text-sm mt-2"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <AnimatedButton type="submit" variant="primary" size="lg" className="w-full">
                View table #
              </AnimatedButton>
            </form>
          </motion.section>

          {/* Event Information */}
          <motion.div variants={fadeUpVariants} className="max-w-4xl mx-auto">
            <PublicEventInfo />
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
