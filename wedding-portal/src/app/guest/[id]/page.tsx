import { guests } from '@/app/data/guests';
import GuestPageContent from '@/app/components/GuestPageContent';

export function generateStaticParams() {
  return guests.map((guest) => ({
    id: guest.id,
  }));
}

export default function GuestPage({ params }: { params: { id: string } }) {
  return <GuestPageContent id={params.id} />;
} 