'use client';

import { EventDetails as EventDetailsType } from '../data/guests';
import InfoCard from './InfoCard';

interface EventDetailsProps {
  event: EventDetailsType;
  title: string;
  delay?: number;
}

export default function EventDetails({ event, title, delay }: EventDetailsProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <InfoCard 
      title={title}
      icon="🎉"
      delay={delay}
    >
      <div className="space-y-4">
        <div>
          <p className="font-medium">Date & Time</p>
          <p>{formattedDate}</p>
          <p>{event.time}</p>
        </div>

        <div>
          <p className="font-medium">Venue</p>
          <p>{event.venue.name}</p>
          <p>{event.venue.address}</p>
          {event.venue.googleMapsUrl && (
            <a
              href={event.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 transition inline-flex items-center gap-1 mt-1"
            >
              View on Maps 📍
            </a>
          )}
        </div>

        {event.dresscode && (
          <div>
            <p className="font-medium">Dress Code</p>
            <p>{event.dresscode}</p>
          </div>
        )}
      </div>
    </InfoCard>
  );
} 