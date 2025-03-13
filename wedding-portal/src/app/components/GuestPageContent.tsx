'use client';

import { motion } from 'framer-motion';
import { guests } from '@/app/data/guests';
import InfoCard from '@/app/components/InfoCard';
import AnimatedEnvelope from '@/app/components/AnimatedEnvelope';
import PageTransition from '@/app/components/PageTransition';
import { fadeUpVariants, staggerContainerVariants } from '@/app/utils/animations';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { notFound } from 'next/navigation';

export default function GuestPageContent({ id }: { id: string }) {
  const [guest, setGuest] = useState<typeof guests[0] | undefined>(undefined);

  useEffect(() => {
    if (!id) {
      notFound();
      return;
    }
    const foundGuest = guests.find(g => g.id === id);
    if (!foundGuest) {
      notFound();
      return;
    }
    setGuest(foundGuest);
  }, [id]);

  if (!guest) {
    return <LoadingSpinner />;
  }

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
          <motion.header 
            variants={fadeUpVariants}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Welcome, {guest.name}!
            </h1>
            <p className="text-xl text-gray-600">
              Here are your personalized details
            </p>
          </motion.header>

          {/* Guest Details Section */}
          <motion.div
            variants={fadeUpVariants}
            className="max-w-4xl mx-auto space-y-16"
          >
            <div>
              <InfoCard title="Your Table Assignment" icon="🪑" delay={0.2}>
                <p>You are seated at Table {guest.tableNumber}</p>
                {guest.plusOne && (
                  <p className="mt-2 text-rose-600">
                    You are welcome to bring a guest
                  </p>
                )}
              </InfoCard>
            </div>

            {guest.dietaryRestrictions && (
              <div>
                <InfoCard title="Dietary Notes" icon="🍽️" delay={0.3}>
                  <p>{guest.dietaryRestrictions}</p>
                </InfoCard>
              </div>
            )}

            <div>
              <AnimatedEnvelope message={guest.personalNote} delay={0.4} />
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div 
            variants={fadeUpVariants}
            className="text-center"
          >
            <a
              href="/"
              className="inline-flex items-center text-rose-500 hover:text-rose-600 transition duration-200 space-x-2"
            >
              <span>←</span>
              <span>Back to home</span>
            </a>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
} 