import { guests } from '@/app/data/guests';
import GuestPageContent from '@/app/components/GuestPageContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return guests.map((guest) => ({
    id: guest.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function GuestPage({ params }: Props) {
  const { id } = await params;
  const guest = guests.find(g => g.id === id);

  if (!guest) {
    notFound();
  }

  return <GuestPageContent id={id} />;
} 