# Wedding Guest Portal

A personalized mobile-friendly wedding website where guests can access their individual event details and personal messages.

## Features

### Current Features
- Mobile-responsive design optimized for all devices
- Guest name entry and validation
- Personalized welcome message
- Event details display including:
  - Date and time
  - Venue information
  - Table assignment
- Animated personal note for each guest

### Planned Features
- RSVP functionality
- Dietary preferences submission
- Interactive venue map
- Photo gallery
- Wedding registry links
- Travel and accommodation information

## Technical Stack

- **Frontend Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth animations
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Route pages
│   ├── styles/        # Global styles
│   └── utils/         # Helper functions
├── public/           # Static assets
└── data/            # Guest information and content
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Plan

1. **Phase 1**: Basic Setup
   - Project initialization
   - Mobile-responsive layout
   - Basic routing

2. **Phase 2**: Guest Authentication
   - Guest name entry form
   - Guest validation system
   - Personalized routing

3. **Phase 3**: Content Display
   - Event details component
   - Table assignment display
   - Animated personal message

4. **Phase 4**: Styling and Animation
   - Theme implementation
   - Responsive design refinement
   - Animation effects

5. **Phase 5**: Testing and Deployment
   - Cross-browser testing
   - Mobile device testing
   - Production deployment

## Contributing

This is a private project for personal wedding use.

## License

Private - All Rights Reserved 