# SchoolDekho - Find Your Perfect School in India

A comprehensive school search platform that helps parents find the perfect school for their children across India. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

### Core Features
- **Advanced School Search**: Search schools by name, location, board type, and other criteria
- **Location-Based Search**: Find schools near you with distance calculation
- **Comprehensive Filters**: Filter by fees range, board type, rating, facilities, and more
- **School Profiles**: Detailed information including fees, facilities, reviews, and virtual tours
- **Recently Viewed**: Track schools you've explored for quick access
- **Virtual Tours**: Explore schools virtually before visiting
- **Reviews & Ratings**: Read authentic reviews from parents and students

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Beautiful, professional interface with smooth animations
- **Location Detection**: Automatic location detection for nearby school search
- **Share Functionality**: Share schools with friends and family
- **Favorites**: Save schools to your favorites list

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Next.js 14**: Latest features with App Router
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd schooldekho
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
schooldekho/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── search/            # Search page
│   │   ├── schools/           # All schools listing
│   │   ├── school/[id]/       # Individual school details
│   │   ├── recently-viewed/   # Recently viewed schools
│   │   ├── nearby/            # Schools near user location
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── help/              # Help center
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── SchoolCard.tsx     # School card component
│   │   └── FilterSidebar.tsx  # Filter sidebar
│   ├── data/                  # Mock data and utilities
│   │   └── schools.ts         # School data and filtering logic
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Interface definitions
│   └── utils/                 # Utility functions
│       ├── location.ts        # Location services
│       └── storage.ts         # Local storage utilities
├── public/                    # Static assets
│   └── images/               # Image assets
└── package.json              # Dependencies and scripts
```

## 🎨 Key Components

### Header Component
- Navigation menu
- Search functionality
- Location detection
- Mobile responsive menu

### Hero Section
- Compelling call-to-action
- Advanced search form
- Location autocomplete
- Popular search suggestions

### SchoolCard Component
- School information display
- Rating and reviews
- Quick action buttons
- Responsive design

### FilterSidebar Component
- Comprehensive filtering options
- Real-time filter application
- Mobile-friendly design

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with search
- Recently viewed schools
- Schools near you
- Featured schools
- Statistics and features

### Search (`/search`)
- Advanced search with filters
- Real-time results
- Sorting options
- Grid/list view toggle

### All Schools (`/schools`)
- Complete school listing
- Advanced filtering
- Search functionality
- Sorting and view options

### School Details (`/school/[id]`)
- Comprehensive school information
- Reviews and ratings
- Virtual tour
- Contact information
- Gallery

### Recently Viewed (`/recently-viewed`)
- Track viewed schools
- Quick access to favorites
- Clear history option

### Nearby Schools (`/nearby`)
- Location-based search
- Distance calculation
- Radius adjustment
- Location detection

### About (`/about`)
- Company information
- Mission and values
- Team overview
- Statistics

### Contact (`/contact`)
- Contact form
- Support information
- FAQ section
- Office location

### Help (`/help`)
- Comprehensive help center
- FAQ categories
- Support options
- Quick links

## 🎯 Features in Detail

### Search & Filtering
- **Text Search**: Search by school name, board, or features
- **Location Search**: Find schools in specific cities or areas
- **Advanced Filters**:
  - Fees range (annual/monthly)
  - Board type (CBSE, ICSE, IB, etc.)
  - Rating filter
  - Facilities filter
  - Admission status
- **Sorting Options**: By rating, fees, distance, or name
- **View Modes**: Grid and list view

### School Information
- **Basic Details**: Name, location, contact info
- **Academic Info**: Board type, grades, medium
- **Fees Structure**: Annual and monthly fees
- **Facilities**: Complete list of available facilities
- **Timing**: School hours and working days
- **Statistics**: Student count, teacher count, establishment year
- **Achievements**: Awards and recognitions

### User Features
- **Location Detection**: Automatic location detection
- **Recently Viewed**: Track browsing history
- **Favorites**: Save schools to favorites
- **Share**: Share schools via social media or messaging
- **Reviews**: Read and write school reviews
- **Virtual Tours**: Explore schools virtually

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## 📊 Data Structure

The application uses a comprehensive data structure for schools:

```typescript
interface School {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
    coordinates: { lat: number; lng: number };
  };
  fees: {
    annual: number;
    monthly: number;
    currency: string;
  };
  details: {
    type: 'CBSE' | 'ICSE' | 'IB' | 'State Board' | 'International';
    grades: string[];
    medium: 'English' | 'Hindi' | 'Both';
    established: number;
    studentCount: number;
    teacherCount: number;
  };
  timing: {
    startTime: string;
    endTime: string;
    workingDays: string[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  images: {
    main: string;
    gallery: string[];
    virtualTour: string;
  };
  rating: number;
  reviews: Review[];
  facilities: string[];
  achievements: string[];
  admissionOpen: boolean;
  distance?: number;
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS Amplify**: Connect your repository and deploy
- **Docker**: Create a Dockerfile and deploy to any container platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- All contributors and supporters

## 📞 Support

For support, email support@schooldekho.com or visit our [Help Center](/help).

---

**SchoolDekho** - Making school search simple and informed for every parent in India.
