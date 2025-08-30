export interface School {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
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
  distance?: number; // Distance from user location
}

export interface Review {
  id: string;
  schoolId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FilterOptions {
  location?: string;
  feesRange?: {
    min: number;
    max: number;
  };
  board?: string[];
  grades?: string[];
  medium?: string[];
  rating?: number;
  facilities?: string[];
  admissionOpen?: boolean;
}

export interface SearchFilters {
  query: string;
  location: string;
  filters: FilterOptions;
}

export interface UserLocation {
  lat: number;
  lng: number;
  address: string;
}

export interface RecentlyViewed {
  schoolId: string;
  viewedAt: string;
}
