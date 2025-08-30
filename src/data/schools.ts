import { School } from '@/types';

export const schoolsData: School[] = [
  {
    id: '1',
    name: 'Delhi Public School, R.K. Puram',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'R.K. Puram, New Delhi - 110022',
      coordinates: { lat: 28.5642, lng: 77.2025 }
    },
    fees: {
      annual: 120000,
      monthly: 10000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1972,
      studentCount: 4500,
      teacherCount: 180
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-11-26171234',
      email: 'info@dpsrkp.org',
      website: 'https://www.dpsrkp.org'
    },
    images: {
      main: '/images/schools/dps-rkp.jpg',
      gallery: [
        '/images/schools/dps-rkp-1.jpg',
        '/images/schools/dps-rkp-2.jpg',
        '/images/schools/dps-rkp-3.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/dps-rkp-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        schoolId: '1',
        userName: 'Priya Sharma',
        rating: 5,
        comment: 'Excellent infrastructure and teaching quality. My child has grown tremendously here.',
        date: '2024-01-15',
        verified: true
      },
      {
        id: 'r2',
        schoolId: '1',
        userName: 'Rajesh Kumar',
        rating: 4,
        comment: 'Good school with strong academic focus. Sports facilities could be better.',
        date: '2024-01-10',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Science Labs',
      'Computer Lab',
      'Library',
      'Sports Ground',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Best CBSE School Award 2023',
      '100% Board Results',
      'National Sports Champions'
    ],
    admissionOpen: true
  },
  {
    id: '2',
    name: 'The Doon School',
    location: {
      city: 'Dehradun',
      state: 'Uttarakhand',
      address: 'Mall Road, Dehradun - 248001',
      coordinates: { lat: 30.3165, lng: 78.0322 }
    },
    fees: {
      annual: 850000,
      monthly: 70833,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['6-12'],
      medium: 'English',
      established: 1935,
      studentCount: 600,
      teacherCount: 80
    },
    timing: {
      startTime: '07:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-135-2526400',
      email: 'info@doonschool.com',
      website: 'https://www.doonschool.com'
    },
    images: {
      main: '/images/schools/doon-school.jpg',
      gallery: [
        '/images/schools/doon-school-1.jpg',
        '/images/schools/doon-school-2.jpg',
        '/images/schools/doon-school-3.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/doon-school-tour'
    },
    rating: 4.9,
    reviews: [
      {
        id: 'r3',
        schoolId: '2',
        userName: 'Amit Patel',
        rating: 5,
        comment: 'World-class boarding school with excellent facilities and international exposure.',
        date: '2024-01-20',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'International Curriculum',
      'Sports Complex',
      'Horse Riding',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Music Room',
      'Art Studio'
    ],
    achievements: [
      'Top Boarding School in India',
      'International Exchange Programs',
      'Sports Excellence Awards'
    ],
    admissionOpen: true
  },
  {
    id: '3',
    name: 'Bombay Scottish School',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Mahim, Mumbai - 400016',
      coordinates: { lat: 19.0222, lng: 72.8564 }
    },
    fees: {
      annual: 180000,
      monthly: 15000,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['Nursery', 'KG', '1-10'],
      medium: 'English',
      established: 1847,
      studentCount: 2800,
      teacherCount: 120
    },
    timing: {
      startTime: '07:45 AM',
      endTime: '02:15 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-22-24363636',
      email: 'info@bombayscottish.in',
      website: 'https://www.bombayscottish.in'
    },
    images: {
      main: '/images/schools/bombay-scottish.jpg',
      gallery: [
        '/images/schools/bombay-scottish-1.jpg',
        '/images/schools/bombay-scottish-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/bombay-scottish-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r4',
        schoolId: '3',
        userName: 'Meera Iyer',
        rating: 5,
        comment: 'Heritage school with excellent academic standards and values.',
        date: '2024-01-18',
        verified: true
      }
    ],
    facilities: [
      'Heritage Building',
      'Modern Labs',
      'Sports Ground',
      'Library',
      'Computer Lab',
      'Music Room',
      'Art Room'
    ],
    achievements: [
      'Heritage School Award',
      'Academic Excellence',
      'Cultural Heritage Preservation'
    ],
    admissionOpen: false
  },
  {
    id: '4',
    name: 'La Martiniere for Girls',
    location: {
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'Rawdon Street, Kolkata - 700017',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    },
    fees: {
      annual: 150000,
      monthly: 12500,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1836,
      studentCount: 3200,
      teacherCount: 140
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-33-22875000',
      email: 'info@lamartiniereforgirls.edu.in',
      website: 'https://www.lamartiniereforgirls.edu.in'
    },
    images: {
      main: '/images/schools/la-martiniere.jpg',
      gallery: [
        '/images/schools/la-martiniere-1.jpg',
        '/images/schools/la-martiniere-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/la-martiniere-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r5',
        schoolId: '4',
        userName: 'Sneha Das',
        rating: 4,
        comment: 'Excellent girls school with strong focus on academics and character building.',
        date: '2024-01-12',
        verified: true
      }
    ],
    facilities: [
      'Historic Campus',
      'Science Labs',
      'Computer Center',
      'Library',
      'Sports Complex',
      'Auditorium',
      'Art Studio',
      'Music Room'
    ],
    achievements: [
      'Best Girls School Award',
      'Academic Excellence',
      'Cultural Heritage'
    ],
    admissionOpen: true
  },
  {
    id: '5',
    name: 'St. Xavier\'s Collegiate School',
    location: {
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'Park Street, Kolkata - 700016',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    },
    fees: {
      annual: 140000,
      monthly: 11667,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1860,
      studentCount: 3500,
      teacherCount: 150
    },
    timing: {
      startTime: '07:30 AM',
      endTime: '02:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-33-22295000',
      email: 'info@stxavierscollege.org',
      website: 'https://www.stxavierscollege.org'
    },
    images: {
      main: '/images/schools/st-xaviers.jpg',
      gallery: [
        '/images/schools/st-xaviers-1.jpg',
        '/images/schools/st-xaviers-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/st-xaviers-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r6',
        schoolId: '5',
        userName: 'Arjun Sen',
        rating: 5,
        comment: 'Outstanding Jesuit education with excellent facilities and values.',
        date: '2024-01-14',
        verified: true
      }
    ],
    facilities: [
      'Jesuit Heritage',
      'Modern Infrastructure',
      'Sports Complex',
      'Science Labs',
      'Computer Center',
      'Library',
      'Auditorium',
      'Chapel'
    ],
    achievements: [
      'Jesuit Excellence Award',
      'Academic Leadership',
      'Community Service'
    ],
    admissionOpen: false
  },
  {
    id: '6',
    name: 'The Cathedral and John Connon School',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Fort, Mumbai - 400001',
      coordinates: { lat: 18.9290, lng: 72.8347 }
    },
    fees: {
      annual: 200000,
      monthly: 16667,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1860,
      studentCount: 2500,
      teacherCount: 110
    },
    timing: {
      startTime: '08:15 AM',
      endTime: '02:45 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-22-22621884',
      email: 'info@cathedral-school.com',
      website: 'https://www.cathedral-school.com'
    },
    images: {
      main: '/images/schools/cathedral.jpg',
      gallery: [
        '/images/schools/cathedral-1.jpg',
        '/images/schools/cathedral-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/cathedral-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r7',
        schoolId: '6',
        userName: 'Riya Mehta',
        rating: 4,
        comment: 'Excellent school with strong academic focus and heritage.',
        date: '2024-01-16',
        verified: true
      }
    ],
    facilities: [
      'Heritage Building',
      'Modern Labs',
      'Sports Ground',
      'Library',
      'Computer Lab',
      'Music Room',
      'Art Studio',
      'Auditorium'
    ],
    achievements: [
      'Heritage School Award',
      'Academic Excellence',
      'Cultural Leadership'
    ],
    admissionOpen: true
  }
];

export const getSchoolsByLocation = (userLat: number, userLng: number, radius: number = 50): School[] => {
  return schoolsData.map(school => {
    const distance = calculateDistance(
      userLat, userLng,
      school.location.coordinates.lat,
      school.location.coordinates.lng
    );
    return { ...school, distance };
  }).filter(school => school.distance! <= radius)
    .sort((a, b) => a.distance! - b.distance!);
};

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

export const filterSchools = (schools: School[], filters: any): School[] => {
  return schools.filter(school => {
    // Location filter
    if (filters.location && !school.location.city.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Fees range filter
    if (filters.feesRange) {
      if (school.fees.annual < filters.feesRange.min || school.fees.annual > filters.feesRange.max) {
        return false;
      }
    }
    
    // Board filter
    if (filters.board && filters.board.length > 0 && !filters.board.includes(school.details.type)) {
      return false;
    }
    
    // Rating filter
    if (filters.rating && school.rating < filters.rating) {
      return false;
    }
    
    // Admission open filter
    if (filters.admissionOpen !== undefined && school.admissionOpen !== filters.admissionOpen) {
      return false;
    }
    
    return true;
  });
};
