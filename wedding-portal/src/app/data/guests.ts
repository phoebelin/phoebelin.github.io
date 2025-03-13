export interface EventDetails {
  date: string;
  time: string;
  venue: {
    name: string;
    address: string;
    googleMapsUrl?: string;
  };
  dresscode?: string;
}

export interface Guest {
  id: string;
  name: string;
  tableNumber: number;
  dietaryRestrictions?: string;
  plusOne?: boolean;
  personalNote: string;
  rsvpStatus?: 'pending' | 'confirmed' | 'declined';
  events: {
    ceremony?: EventDetails;
    reception: EventDetails;
  };
}

// This is sample data - you'll want to replace it with your actual guest list
export const guests: Guest[] = [
  {
    id: '1',
    name: 'John Smith',
    tableNumber: 1,
    personalNote: 'Thank you for being part of our special day! We can\'t wait to celebrate with you.',
    plusOne: true,
    events: {
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
    }
  },
  {
    id: '2',
    name: 'Jane Doe',
    tableNumber: 2,
    dietaryRestrictions: 'Vegetarian',
    personalNote: 'We\'re so happy you can join us on our wedding day!',
    events: {
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
    }
  }
]; 