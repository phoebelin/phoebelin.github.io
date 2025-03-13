import { Guest, guests } from '../data/guests';

export function findGuest(searchName: string): Guest | undefined {
  const normalizedSearch = normalizeString(searchName);
  
  return guests.find(guest => 
    normalizeString(guest.name) === normalizedSearch ||
    normalizeString(guest.name).includes(normalizedSearch) ||
    normalizedSearch.includes(normalizeString(guest.name))
  );
}

// Normalize strings for comparison by removing extra spaces, making lowercase, etc.
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
} 