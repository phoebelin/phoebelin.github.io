'use client';

import { motion } from 'framer-motion';
import { EventDetails } from '../data/guests';
import InfoCard from './InfoCard';

const publicEvents: { ceremony: EventDetails; reception: EventDetails } = {
  ceremony: {
    date: '2024-06-15',
    time: '3:00 PM',
    venue: {
      name: 'St. Mary\'s Cathedral',
      address: '1111 Gough St, San Francisco, CA 94109',
      googleMapsUrl: 'https://maps.google.com/?q=St+Marys+Cathedral+SF'
    },
    dresscode: 'Formal'
  },
  reception: {
    date: '2024-06-15',
    time: '5:00 PM',
    venue: {
      name: 'San Francisco Palace Hotel',
      address: '2 New Montgomery St, San Francisco, CA 94105',
      googleMapsUrl: 'https://maps.google.com/?q=Palace+Hotel+SF'
    },
    dresscode: 'Black Tie Optional'
  }
};

export default function PublicEventInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <InfoCard title="Wedding Ceremony" icon="⛪" delay={0.2}>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Date & Time</p>
            <p>{new Date(publicEvents.ceremony.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</p>
            <p>{publicEvents.ceremony.time}</p>
          </div>

          <div>
            <p className="font-medium">Venue</p>
            <p>{publicEvents.ceremony.venue.name}</p>
            <p>{publicEvents.ceremony.venue.address}</p>
            {publicEvents.ceremony.venue.googleMapsUrl && (
              <a
                href={publicEvents.ceremony.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 transition inline-flex items-center gap-1 mt-1"
              >
                View on Maps 📍
              </a>
            )}
          </div>

          <div>
            <p className="font-medium">Dress Code</p>
            <p>{publicEvents.ceremony.dresscode}</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Wedding Reception" icon="🎉" delay={0.4}>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Date & Time</p>
            <p>{new Date(publicEvents.reception.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</p>
            <p>{publicEvents.reception.time}</p>
          </div>

          <div>
            <p className="font-medium">Venue</p>
            <p>{publicEvents.reception.venue.name}</p>
            <p>{publicEvents.reception.venue.address}</p>
            {publicEvents.reception.venue.googleMapsUrl && (
              <a
                href={publicEvents.reception.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 transition inline-flex items-center gap-1 mt-1"
              >
                View on Maps 📍
              </a>
            )}
          </div>

          <div>
            <p className="font-medium">Dress Code</p>
            <p>{publicEvents.reception.dresscode}</p>
          </div>
        </div>
      </InfoCard>
    </motion.div>
  );
} 