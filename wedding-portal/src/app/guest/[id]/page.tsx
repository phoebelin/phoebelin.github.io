import { guests } from '@/app/data/guests';
import GuestPageContent from '@/app/components/GuestPageContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return guests.map((guest) => ({
    id: guest.id,
  }));
}

export default async function GuestPage({ params }: { params: { id: string } }) {
  // Ensure params.id is available
  const id = await Promise.resolve(params.id);
  if (!id) {
    notFound();
  }

  const guest = guests.find(g => g.id === id);

  if (!guest) {
    notFound();
  }

  return <GuestPageContent id={params.id} />;
} 