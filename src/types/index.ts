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
    additionalFees?: {
      admission: number;
      transport: number;
      uniform: number;
      books: number;
    };
  };
  details: {
    type: 'CBSE' | 'ICSE' | 'IB' | 'State Board' | 'International';
    grades: string[];
    medium: 'English' | 'Hindi' | 'Both' | 'Bengali';
    established: number;
    studentCount: number;
    teacherCount: number;
    studentTeacherRatio?: number;
    gender?: 'Boys' | 'Girls' | 'Co-ed';
    boarding?: boolean;
    daySchool?: boolean;
  };
  timing: {
    startTime: string;
    endTime: string;
    workingDays: string[];
    academicYear?: string;
    holidays?: string[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    principal?: string;
    admissionContact?: string;
  };
  images: {
    main: string;
    gallery: string[];
    virtualTour: string;
    logo?: string;
  };
  rating: number;
  reviews: Review[];
  facilities: string[];
  achievements: string[];
  admissionOpen: boolean;
  distance?: number; // Distance from user location
  admissionProcess?: string[];
  documentsRequired?: string[];
  entranceExam?: boolean;
  interview?: boolean;
  sports?: string[];
  extracurricular?: string[];
  specialNeeds?: boolean;
  internationalStudents?: boolean;
  exchangePrograms?: boolean;
  alumni?: string[];
  partnerships?: string[];
  awards?: Award[];
  statistics?: SchoolStatistics;
}

export interface Review {
  id: string;
  schoolId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful?: number;
  reply?: string;
  categories?: string[]; // e.g., ['Academics', 'Infrastructure', 'Sports']
}

export interface Award {
  name: string;
  year: number;
  category: string;
  description?: string;
}

export interface SchoolStatistics {
  boardResults?: {
    year: number;
    passPercentage: number;
    distinctionPercentage: number;
    averageScore: number;
  }[];
  collegePlacements?: {
    year: number;
    placementPercentage: number;
    averagePackage: number;
    topCompanies: string[];
  }[];
  sportsAchievements?: {
    year: number;
    achievements: string[];
  }[];
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
  gender?: string[];
  boarding?: boolean;
  daySchool?: boolean;
  specialNeeds?: boolean;
  internationalStudents?: boolean;
  sports?: string[];
  extracurricular?: string[];
  establishedYear?: {
    min: number;
    max: number;
  };
  studentCount?: {
    min: number;
    max: number;
  };
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

export interface FavoriteSchool {
  schoolId: string;
  addedAt: string;
  notes?: string;
}

export interface SchoolComparison {
  id: string;
  schools: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SearchHistory {
  query: string;
  timestamp: string;
  resultsCount: number;
}

export interface UserPreferences {
  preferredBoards: string[];
  preferredLocations: string[];
  budgetRange: {
    min: number;
    max: number;
  };
  preferredFacilities: string[];
  preferredSports: string[];
  specialNeeds: boolean;
  internationalCurriculum: boolean;
}

export interface SchoolApplication {
  id: string;
  schoolId: string;
  studentName: string;
  grade: string;
  parentName: string;
  contact: string;
  email: string;
  status: 'pending' | 'submitted' | 'under_review' | 'accepted' | 'rejected';
  submittedAt: string;
  updatedAt: string;
  documents: string[];
  notes?: string;
}

export interface Notification {
  id: string;
  type: 'admission_open' | 'deadline_reminder' | 'result_announced' | 'general';
  title: string;
  message: string;
  schoolId?: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}
