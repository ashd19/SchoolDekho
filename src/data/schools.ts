import { School, FilterOptions } from '@/types';

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
  },
  // Adding many more schools with diverse data
  {
    id: '7',
    name: 'Modern School, Barakhamba Road',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Barakhamba Road, New Delhi - 110001',
      coordinates: { lat: 28.6289, lng: 77.2065 }
    },
    fees: {
      annual: 250000,
      monthly: 20833,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1920,
      studentCount: 3800,
      teacherCount: 160
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-11-23312345',
      email: 'info@modernschool.edu.in',
      website: 'https://www.modernschool.edu.in'
    },
    images: {
      main: '/images/schools/modern-school.jpg',
      gallery: [
        '/images/schools/modern-school-1.jpg',
        '/images/schools/modern-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/modern-school-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r8',
        schoolId: '7',
        userName: 'Vikram Singh',
        rating: 5,
        comment: 'Excellent school with modern facilities and strong academic focus.',
        date: '2024-01-22',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Robotics Lab',
      'Digital Library',
      'Olympic-size Pool',
      'Indoor Sports Complex',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Best CBSE School 2023',
      'National Robotics Champions',
      'Academic Excellence Award'
    ],
    admissionOpen: true
  },
  {
    id: '8',
    name: 'Welham Girls School',
    location: {
      city: 'Dehradun',
      state: 'Uttarakhand',
      address: 'Mussorie Road, Dehradun - 248001',
      coordinates: { lat: 30.3254, lng: 78.0411 }
    },
    fees: {
      annual: 650000,
      monthly: 54167,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['6-12'],
      medium: 'English',
      established: 1957,
      studentCount: 450,
      teacherCount: 65
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-135-2646400',
      email: 'info@welhamgirls.com',
      website: 'https://www.welhamgirls.com'
    },
    images: {
      main: '/images/schools/welham-girls.jpg',
      gallery: [
        '/images/schools/welham-girls-1.jpg',
        '/images/schools/welham-girls-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/welham-girls-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r9',
        schoolId: '8',
        userName: 'Anjali Verma',
        rating: 5,
        comment: 'Outstanding boarding school for girls with excellent facilities.',
        date: '2024-01-25',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Music Room',
      'Art Studio',
      'Library',
      'Computer Lab'
    ],
    achievements: [
      'Top Girls Boarding School',
      'Sports Excellence',
      'Cultural Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '9',
    name: 'Bishop Cotton School',
    location: {
      city: 'Shimla',
      state: 'Himachal Pradesh',
      address: 'Shimla - 171001',
      coordinates: { lat: 31.1048, lng: 77.1734 }
    },
    fees: {
      annual: 750000,
      monthly: 62500,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1859,
      studentCount: 350,
      teacherCount: 45
    },
    timing: {
      startTime: '07:15 AM',
      endTime: '02:45 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-177-2658000',
      email: 'info@bishopcottonschool.com',
      website: 'https://www.bishopcottonschool.com'
    },
    images: {
      main: '/images/schools/bishop-cotton.jpg',
      gallery: [
        '/images/schools/bishop-cotton-1.jpg',
        '/images/schools/bishop-cotton-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/bishop-cotton-tour'
    },
    rating: 4.9,
    reviews: [
      {
        id: 'r10',
        schoolId: '9',
        userName: 'Rahul Mehta',
        rating: 5,
        comment: 'Heritage boarding school with excellent mountain sports facilities.',
        date: '2024-01-28',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Mountain Sports',
      'Skiing Facilities',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Computer Center'
    ],
    achievements: [
      'Heritage School Award',
      'Mountain Sports Champions',
      'Academic Excellence'
    ],
    admissionOpen: false
  },
  {
    id: '10',
    name: 'Mayo College',
    location: {
      city: 'Ajmer',
      state: 'Rajasthan',
      address: 'Ajmer - 305001',
      coordinates: { lat: 26.4499, lng: 74.6399 }
    },
    fees: {
      annual: 900000,
      monthly: 75000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1875,
      studentCount: 800,
      teacherCount: 95
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '03:15 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-145-2660000',
      email: 'info@mayocollege.com',
      website: 'https://www.mayocollege.com'
    },
    images: {
      main: '/images/schools/mayo-college.jpg',
      gallery: [
        '/images/schools/mayo-college-1.jpg',
        '/images/schools/mayo-college-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/mayo-college-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r11',
        schoolId: '10',
        userName: 'Devendra Singh',
        rating: 5,
        comment: 'Royal heritage school with world-class facilities and traditions.',
        date: '2024-01-30',
        verified: true
      }
    ],
    facilities: [
      'Royal Heritage Campus',
      'Equestrian Center',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Auditorium'
    ],
    achievements: [
      'Royal Heritage Award',
      'Equestrian Champions',
      'Academic Excellence'
    ],
    admissionOpen: true
  },
  {
    id: '11',
    name: 'Scindia School',
    location: {
      city: 'Gwalior',
      state: 'Madhya Pradesh',
      address: 'Gwalior - 474001',
      coordinates: { lat: 26.2183, lng: 78.1828 }
    },
    fees: {
      annual: 800000,
      monthly: 66667,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['6-12'],
      medium: 'English',
      established: 1897,
      studentCount: 600,
      teacherCount: 75
    },
    timing: {
      startTime: '07:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-751-2345000',
      email: 'info@scindiaschool.com',
      website: 'https://www.scindiaschool.com'
    },
    images: {
      main: '/images/schools/scindia-school.jpg',
      gallery: [
        '/images/schools/scindia-school-1.jpg',
        '/images/schools/scindia-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/scindia-school-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r12',
        schoolId: '11',
        userName: 'Karan Singh',
        rating: 4,
        comment: 'Excellent boarding school with strong academic and sports focus.',
        date: '2024-02-01',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Computer Lab',
      'Music Room'
    ],
    achievements: [
      'Sports Excellence Award',
      'Academic Leadership',
      'Cultural Heritage'
    ],
    admissionOpen: true
  },
  {
    id: '12',
    name: 'Rishi Valley School',
    location: {
      city: 'Madanapalle',
      state: 'Andhra Pradesh',
      address: 'Madanapalle - 517325',
      coordinates: { lat: 13.5500, lng: 78.5000 }
    },
    fees: {
      annual: 400000,
      monthly: 33333,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1926,
      studentCount: 350,
      teacherCount: 50
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-8571-280000',
      email: 'info@rishivalley.org',
      website: 'https://www.rishivalley.org'
    },
    images: {
      main: '/images/schools/rishi-valley.jpg',
      gallery: [
        '/images/schools/rishi-valley-1.jpg',
        '/images/schools/rishi-valley-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/rishi-valley-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r13',
        schoolId: '12',
        userName: 'Priya Reddy',
        rating: 4,
        comment: 'Alternative education with focus on holistic development.',
        date: '2024-02-03',
        verified: true
      }
    ],
    facilities: [
      'Alternative Education',
      'Organic Farm',
      'Sports Ground',
      'Library',
      'Computer Center',
      'Music Room',
      'Art Studio',
      'Meditation Center'
    ],
    achievements: [
      'Alternative Education Award',
      'Environmental Leadership',
      'Holistic Development'
    ],
    admissionOpen: false
  },
  {
    id: '13',
    name: 'Kodaikanal International School',
    location: {
      city: 'Kodaikanal',
      state: 'Tamil Nadu',
      address: 'Kodaikanal - 624101',
      coordinates: { lat: 10.2381, lng: 77.4892 }
    },
    fees: {
      annual: 1200000,
      monthly: 100000,
      currency: 'INR'
    },
    details: {
      type: 'IB',
      grades: ['KG', '1-12'],
      medium: 'English',
      established: 1901,
      studentCount: 500,
      teacherCount: 80
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-4542-247000',
      email: 'info@kis.in',
      website: 'https://www.kis.in'
    },
    images: {
      main: '/images/schools/kodaikanal.jpg',
      gallery: [
        '/images/schools/kodaikanal-1.jpg',
        '/images/schools/kodaikanal-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/kodaikanal-tour'
    },
    rating: 4.9,
    reviews: [
      {
        id: 'r14',
        schoolId: '13',
        userName: 'Arun Kumar',
        rating: 5,
        comment: 'International curriculum with excellent facilities in beautiful hill station.',
        date: '2024-02-05',
        verified: true
      }
    ],
    facilities: [
      'IB Curriculum',
      'International Faculty',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Library',
      'Computer Lab',
      'Music Room'
    ],
    achievements: [
      'IB Excellence Award',
      'International Recognition',
      'Academic Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '14',
    name: 'Woodstock School',
    location: {
      city: 'Mussoorie',
      state: 'Uttarakhand',
      address: 'Mussoorie - 248179',
      coordinates: { lat: 30.4598, lng: 78.0660 }
    },
    fees: {
      annual: 1500000,
      monthly: 125000,
      currency: 'INR'
    },
    details: {
      type: 'IB',
      grades: ['KG', '1-12'],
      medium: 'English',
      established: 1854,
      studentCount: 450,
      teacherCount: 70
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-135-2639000',
      email: 'info@woodstock.ac.in',
      website: 'https://www.woodstock.ac.in'
    },
    images: {
      main: '/images/schools/woodstock.jpg',
      gallery: [
        '/images/schools/woodstock-1.jpg',
        '/images/schools/woodstock-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/woodstock-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r15',
        schoolId: '14',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'International school with excellent facilities and diverse student body.',
        date: '2024-02-07',
        verified: true
      }
    ],
    facilities: [
      'IB Curriculum',
      'International Faculty',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Library',
      'Computer Lab',
      'Art Studio'
    ],
    achievements: [
      'IB Excellence Award',
      'International Recognition',
      'Cultural Diversity'
    ],
    admissionOpen: true
  },
  {
    id: '15',
    name: 'Patha Bhavan',
    location: {
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'Kolkata - 700029',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    },
    fees: {
      annual: 80000,
      monthly: 6667,
      currency: 'INR'
    },
    details: {
      type: 'State Board',
      grades: ['1-12'],
      medium: 'Bengali',
      established: 1944,
      studentCount: 1200,
      teacherCount: 60
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '01:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-33-24650000',
      email: 'info@pathabhavan.org',
      website: 'https://www.pathabhavan.org'
    },
    images: {
      main: '/images/schools/patha-bhavan.jpg',
      gallery: [
        '/images/schools/patha-bhavan-1.jpg',
        '/images/schools/patha-bhavan-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/patha-bhavan-tour'
    },
    rating: 4.3,
    reviews: [
      {
        id: 'r16',
        schoolId: '15',
        userName: 'Soumitra Das',
        rating: 4,
        comment: 'Good Bengali medium school with traditional values.',
        date: '2024-02-09',
        verified: true
      }
    ],
    facilities: [
      'Traditional Building',
      'Science Labs',
      'Sports Ground',
      'Library',
      'Computer Lab',
      'Music Room',
      'Art Room'
    ],
    achievements: [
      'Cultural Heritage Award',
      'Academic Excellence',
      'Traditional Values'
    ],
    admissionOpen: true
  },
  {
    id: '16',
    name: 'Delhi Public School, Vasant Vihar',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Vasant Vihar, New Delhi - 110057',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 180000,
      monthly: 15000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1980,
      studentCount: 3200,
      teacherCount: 140
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-11-26150000',
      email: 'info@dpsvasantvihar.org',
      website: 'https://www.dpsvasantvihar.org'
    },
    images: {
      main: '/images/schools/dps-vasant-vihar.jpg',
      gallery: [
        '/images/schools/dps-vasant-vihar-1.jpg',
        '/images/schools/dps-vasant-vihar-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/dps-vasant-vihar-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r17',
        schoolId: '16',
        userName: 'Neha Gupta',
        rating: 4,
        comment: 'Good CBSE school with modern facilities.',
        date: '2024-02-11',
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
      'CBSE Excellence Award',
      'Academic Performance',
      'Sports Champions'
    ],
    admissionOpen: true
  },
  {
    id: '17',
    name: 'Springdales School',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Dhaula Kuan, New Delhi - 110021',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 160000,
      monthly: 13333,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1956,
      studentCount: 2800,
      teacherCount: 120
    },
    timing: {
      startTime: '08:15 AM',
      endTime: '02:45 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-11-24110000',
      email: 'info@springdales.com',
      website: 'https://www.springdales.com'
    },
    images: {
      main: '/images/schools/springdales.jpg',
      gallery: [
        '/images/schools/springdales-1.jpg',
        '/images/schools/springdales-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/springdales-tour'
    },
    rating: 4.5,
    reviews: [
      {
        id: 'r18',
        schoolId: '17',
        userName: 'Rajesh Malhotra',
        rating: 4,
        comment: 'Good school with balanced approach to academics and activities.',
        date: '2024-02-13',
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
      'Academic Excellence',
      'Sports Performance',
      'Cultural Activities'
    ],
    admissionOpen: true
  },
  {
    id: '18',
    name: 'Vasant Valley School',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Vasant Vihar, New Delhi - 110057',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 220000,
      monthly: 18333,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1990,
      studentCount: 1800,
      teacherCount: 90
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-11-26150000',
      email: 'info@vasantvalley.org',
      website: 'https://www.vasantvalley.org'
    },
    images: {
      main: '/images/schools/vasant-valley.jpg',
      gallery: [
        '/images/schools/vasant-valley-1.jpg',
        '/images/schools/vasant-valley-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/vasant-valley-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r19',
        schoolId: '18',
        userName: 'Priya Kapoor',
        rating: 5,
        comment: 'Excellent school with focus on holistic development.',
        date: '2024-02-15',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Computer Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Holistic Development Award',
      'Academic Excellence',
      'Innovation Leadership'
    ],
    admissionOpen: false
  },
  {
    id: '19',
    name: 'The Heritage School',
    location: {
      city: 'Gurgaon',
      state: 'Haryana',
      address: 'Gurgaon - 122001',
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    fees: {
      annual: 300000,
      monthly: 25000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 2001,
      studentCount: 2200,
      teacherCount: 110
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-124-4567000',
      email: 'info@heritageschool.in',
      website: 'https://www.heritageschool.in'
    },
    images: {
      main: '/images/schools/heritage-school.jpg',
      gallery: [
        '/images/schools/heritage-school-1.jpg',
        '/images/schools/heritage-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/heritage-school-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r20',
        schoolId: '19',
        userName: 'Amit Kumar',
        rating: 4,
        comment: 'Modern school with excellent facilities and innovative teaching methods.',
        date: '2024-02-17',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Robotics Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Innovation Award',
      'Academic Excellence',
      'Technology Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '20',
    name: 'Shri Ram School',
    location: {
      city: 'Gurgaon',
      state: 'Haryana',
      address: 'Gurgaon - 122001',
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    fees: {
      annual: 350000,
      monthly: 29167,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1988,
      studentCount: 2500,
      teacherCount: 130
    },
    timing: {
      startTime: '08:15 AM',
      endTime: '03:15 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-124-4568000',
      email: 'info@shriramschool.org',
      website: 'https://www.shriramschool.org'
    },
    images: {
      main: '/images/schools/shri-ram.jpg',
      gallery: [
        '/images/schools/shri-ram-1.jpg',
        '/images/schools/shri-ram-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/shri-ram-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r21',
        schoolId: '20',
        userName: 'Ritu Singh',
        rating: 5,
        comment: 'Excellent school with strong academic focus and values.',
        date: '2024-02-19',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Computer Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Academic Excellence Award',
      'Values Education',
      'Sports Champions'
    ],
    admissionOpen: true
  },
  // Adding more schools with diverse data
  {
    id: '7',
    name: 'Modern School, Barakhamba Road',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Barakhamba Road, New Delhi - 110001',
      coordinates: { lat: 28.6289, lng: 77.2065 }
    },
    fees: {
      annual: 250000,
      monthly: 20833,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1920,
      studentCount: 3800,
      teacherCount: 160
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-11-23312345',
      email: 'info@modernschool.edu.in',
      website: 'https://www.modernschool.edu.in'
    },
    images: {
      main: '/images/schools/modern-school.jpg',
      gallery: [
        '/images/schools/modern-school-1.jpg',
        '/images/schools/modern-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/modern-school-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r8',
        schoolId: '7',
        userName: 'Vikram Singh',
        rating: 5,
        comment: 'Excellent school with modern facilities and strong academic focus.',
        date: '2024-01-22',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Robotics Lab',
      'Digital Library',
      'Olympic-size Pool',
      'Indoor Sports Complex',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Best CBSE School 2023',
      'National Robotics Champions',
      'Academic Excellence Award'
    ],
    admissionOpen: true
  },
  {
    id: '8',
    name: 'Welham Girls School',
    location: {
      city: 'Dehradun',
      state: 'Uttarakhand',
      address: 'Mussorie Road, Dehradun - 248001',
      coordinates: { lat: 30.3254, lng: 78.0411 }
    },
    fees: {
      annual: 650000,
      monthly: 54167,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['6-12'],
      medium: 'English',
      established: 1957,
      studentCount: 450,
      teacherCount: 65
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-135-2646400',
      email: 'info@welhamgirls.com',
      website: 'https://www.welhamgirls.com'
    },
    images: {
      main: '/images/schools/welham-girls.jpg',
      gallery: [
        '/images/schools/welham-girls-1.jpg',
        '/images/schools/welham-girls-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/welham-girls-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r9',
        schoolId: '8',
        userName: 'Anjali Verma',
        rating: 5,
        comment: 'Outstanding boarding school for girls with excellent facilities.',
        date: '2024-01-25',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Music Room',
      'Art Studio',
      'Library',
      'Computer Lab'
    ],
    achievements: [
      'Top Girls Boarding School',
      'Sports Excellence',
      'Cultural Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '9',
    name: 'Bishop Cotton School',
    location: {
      city: 'Shimla',
      state: 'Himachal Pradesh',
      address: 'Shimla - 171001',
      coordinates: { lat: 31.1048, lng: 77.1734 }
    },
    fees: {
      annual: 750000,
      monthly: 62500,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1859,
      studentCount: 350,
      teacherCount: 45
    },
    timing: {
      startTime: '07:15 AM',
      endTime: '02:45 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-177-2658000',
      email: 'info@bishopcottonschool.com',
      website: 'https://www.bishopcottonschool.com'
    },
    images: {
      main: '/images/schools/bishop-cotton.jpg',
      gallery: [
        '/images/schools/bishop-cotton-1.jpg',
        '/images/schools/bishop-cotton-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/bishop-cotton-tour'
    },
    rating: 4.9,
    reviews: [
      {
        id: 'r10',
        schoolId: '9',
        userName: 'Rahul Mehta',
        rating: 5,
        comment: 'Heritage boarding school with excellent mountain sports facilities.',
        date: '2024-01-28',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Mountain Sports',
      'Skiing Facilities',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Computer Center'
    ],
    achievements: [
      'Heritage School Award',
      'Mountain Sports Champions',
      'Academic Excellence'
    ],
    admissionOpen: false
  },
  {
    id: '10',
    name: 'Mayo College',
    location: {
      city: 'Ajmer',
      state: 'Rajasthan',
      address: 'Ajmer - 305001',
      coordinates: { lat: 26.4499, lng: 74.6399 }
    },
    fees: {
      annual: 900000,
      monthly: 75000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1875,
      studentCount: 800,
      teacherCount: 95
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '03:15 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-145-2660000',
      email: 'info@mayocollege.com',
      website: 'https://www.mayocollege.com'
    },
    images: {
      main: '/images/schools/mayo-college.jpg',
      gallery: [
        '/images/schools/mayo-college-1.jpg',
        '/images/schools/mayo-college-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/mayo-college-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r11',
        schoolId: '10',
        userName: 'Devendra Singh',
        rating: 5,
        comment: 'Royal heritage school with world-class facilities and traditions.',
        date: '2024-01-30',
        verified: true
      }
    ],
    facilities: [
      'Royal Heritage Campus',
      'Equestrian Center',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Auditorium'
    ],
    achievements: [
      'Royal Heritage Award',
      'Equestrian Champions',
      'Academic Excellence'
    ],
    admissionOpen: true
  },
  {
    id: '11',
    name: 'Scindia School',
    location: {
      city: 'Gwalior',
      state: 'Madhya Pradesh',
      address: 'Gwalior - 474001',
      coordinates: { lat: 26.2183, lng: 78.1828 }
    },
    fees: {
      annual: 800000,
      monthly: 66667,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['6-12'],
      medium: 'English',
      established: 1897,
      studentCount: 600,
      teacherCount: 75
    },
    timing: {
      startTime: '07:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-751-2345000',
      email: 'info@scindiaschool.com',
      website: 'https://www.scindiaschool.com'
    },
    images: {
      main: '/images/schools/scindia-school.jpg',
      gallery: [
        '/images/schools/scindia-school-1.jpg',
        '/images/schools/scindia-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/scindia-school-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r12',
        schoolId: '11',
        userName: 'Karan Singh',
        rating: 4,
        comment: 'Excellent boarding school with strong academic and sports focus.',
        date: '2024-02-01',
        verified: true
      }
    ],
    facilities: [
      'Boarding Houses',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Cricket Ground',
      'Library',
      'Computer Lab',
      'Music Room'
    ],
    achievements: [
      'Sports Excellence Award',
      'Academic Leadership',
      'Cultural Heritage'
    ],
    admissionOpen: true
  },
  {
    id: '12',
    name: 'Rishi Valley School',
    location: {
      city: 'Madanapalle',
      state: 'Andhra Pradesh',
      address: 'Madanapalle - 517325',
      coordinates: { lat: 13.5500, lng: 78.5000 }
    },
    fees: {
      annual: 400000,
      monthly: 33333,
      currency: 'INR'
    },
    details: {
      type: 'ICSE',
      grades: ['4-12'],
      medium: 'English',
      established: 1926,
      studentCount: 350,
      teacherCount: 50
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-8571-280000',
      email: 'info@rishivalley.org',
      website: 'https://www.rishivalley.org'
    },
    images: {
      main: '/images/schools/rishi-valley.jpg',
      gallery: [
        '/images/schools/rishi-valley-1.jpg',
        '/images/schools/rishi-valley-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/rishi-valley-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r13',
        schoolId: '12',
        userName: 'Priya Reddy',
        rating: 4,
        comment: 'Alternative education with focus on holistic development.',
        date: '2024-02-03',
        verified: true
      }
    ],
    facilities: [
      'Alternative Education',
      'Organic Farm',
      'Sports Ground',
      'Library',
      'Computer Center',
      'Music Room',
      'Art Studio',
      'Meditation Center'
    ],
    achievements: [
      'Alternative Education Award',
      'Environmental Leadership',
      'Holistic Development'
    ],
    admissionOpen: false
  },
  {
    id: '13',
    name: 'Kodaikanal International School',
    location: {
      city: 'Kodaikanal',
      state: 'Tamil Nadu',
      address: 'Kodaikanal - 624101',
      coordinates: { lat: 10.2381, lng: 77.4892 }
    },
    fees: {
      annual: 1200000,
      monthly: 100000,
      currency: 'INR'
    },
    details: {
      type: 'IB',
      grades: ['KG', '1-12'],
      medium: 'English',
      established: 1901,
      studentCount: 500,
      teacherCount: 80
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-4542-247000',
      email: 'info@kis.in',
      website: 'https://www.kis.in'
    },
    images: {
      main: '/images/schools/kodaikanal.jpg',
      gallery: [
        '/images/schools/kodaikanal-1.jpg',
        '/images/schools/kodaikanal-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/kodaikanal-tour'
    },
    rating: 4.9,
    reviews: [
      {
        id: 'r14',
        schoolId: '13',
        userName: 'Arun Kumar',
        rating: 5,
        comment: 'International curriculum with excellent facilities in beautiful hill station.',
        date: '2024-02-05',
        verified: true
      }
    ],
    facilities: [
      'IB Curriculum',
      'International Faculty',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Library',
      'Computer Lab',
      'Music Room'
    ],
    achievements: [
      'IB Excellence Award',
      'International Recognition',
      'Academic Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '14',
    name: 'Woodstock School',
    location: {
      city: 'Mussoorie',
      state: 'Uttarakhand',
      address: 'Mussoorie - 248179',
      coordinates: { lat: 30.4598, lng: 78.0660 }
    },
    fees: {
      annual: 1500000,
      monthly: 125000,
      currency: 'INR'
    },
    details: {
      type: 'IB',
      grades: ['KG', '1-12'],
      medium: 'English',
      established: 1854,
      studentCount: 450,
      teacherCount: 70
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-135-2639000',
      email: 'info@woodstock.ac.in',
      website: 'https://www.woodstock.ac.in'
    },
    images: {
      main: '/images/schools/woodstock.jpg',
      gallery: [
        '/images/schools/woodstock-1.jpg',
        '/images/schools/woodstock-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/woodstock-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r15',
        schoolId: '14',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'International school with excellent facilities and diverse student body.',
        date: '2024-02-07',
        verified: true
      }
    ],
    facilities: [
      'IB Curriculum',
      'International Faculty',
      'Sports Complex',
      'Swimming Pool',
      'Tennis Courts',
      'Library',
      'Computer Lab',
      'Art Studio'
    ],
    achievements: [
      'IB Excellence Award',
      'International Recognition',
      'Cultural Diversity'
    ],
    admissionOpen: true
  },
  {
    id: '15',
    name: 'Patha Bhavan',
    location: {
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'Kolkata - 700029',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    },
    fees: {
      annual: 80000,
      monthly: 6667,
      currency: 'INR'
    },
    details: {
      type: 'State Board',
      grades: ['1-12'],
      medium: 'Bengali',
      established: 1944,
      studentCount: 1200,
      teacherCount: 60
    },
    timing: {
      startTime: '07:00 AM',
      endTime: '01:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-33-24650000',
      email: 'info@pathabhavan.org',
      website: 'https://www.pathabhavan.org'
    },
    images: {
      main: '/images/schools/patha-bhavan.jpg',
      gallery: [
        '/images/schools/patha-bhavan-1.jpg',
        '/images/schools/patha-bhavan-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/patha-bhavan-tour'
    },
    rating: 4.3,
    reviews: [
      {
        id: 'r16',
        schoolId: '15',
        userName: 'Soumitra Das',
        rating: 4,
        comment: 'Good Bengali medium school with traditional values.',
        date: '2024-02-09',
        verified: true
      }
    ],
    facilities: [
      'Traditional Building',
      'Science Labs',
      'Sports Ground',
      'Library',
      'Computer Lab',
      'Music Room',
      'Art Room'
    ],
    achievements: [
      'Cultural Heritage Award',
      'Academic Excellence',
      'Traditional Values'
    ],
    admissionOpen: true
  },
  {
    id: '16',
    name: 'Delhi Public School, Vasant Vihar',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Vasant Vihar, New Delhi - 110057',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 180000,
      monthly: 15000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1980,
      studentCount: 3200,
      teacherCount: 140
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '02:30 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    contact: {
      phone: '+91-11-26150000',
      email: 'info@dpsvasantvihar.org',
      website: 'https://www.dpsvasantvihar.org'
    },
    images: {
      main: '/images/schools/dps-vasant-vihar.jpg',
      gallery: [
        '/images/schools/dps-vasant-vihar-1.jpg',
        '/images/schools/dps-vasant-vihar-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/dps-vasant-vihar-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r17',
        schoolId: '16',
        userName: 'Neha Gupta',
        rating: 4,
        comment: 'Good CBSE school with modern facilities.',
        date: '2024-02-11',
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
      'CBSE Excellence Award',
      'Academic Performance',
      'Sports Champions'
    ],
    admissionOpen: true
  },
  {
    id: '17',
    name: 'Springdales School',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Dhaula Kuan, New Delhi - 110021',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 160000,
      monthly: 13333,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1956,
      studentCount: 2800,
      teacherCount: 120
    },
    timing: {
      startTime: '08:15 AM',
      endTime: '02:45 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-11-24110000',
      email: 'info@springdales.com',
      website: 'https://www.springdales.com'
    },
    images: {
      main: '/images/schools/springdales.jpg',
      gallery: [
        '/images/schools/springdales-1.jpg',
        '/images/schools/springdales-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/springdales-tour'
    },
    rating: 4.5,
    reviews: [
      {
        id: 'r18',
        schoolId: '17',
        userName: 'Rajesh Malhotra',
        rating: 4,
        comment: 'Good school with balanced approach to academics and activities.',
        date: '2024-02-13',
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
      'Academic Excellence',
      'Sports Performance',
      'Cultural Activities'
    ],
    admissionOpen: true
  },
  {
    id: '18',
    name: 'Vasant Valley School',
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Vasant Vihar, New Delhi - 110057',
      coordinates: { lat: 28.5562, lng: 77.1000 }
    },
    fees: {
      annual: 220000,
      monthly: 18333,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1990,
      studentCount: 1800,
      teacherCount: 90
    },
    timing: {
      startTime: '08:30 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-11-26150000',
      email: 'info@vasantvalley.org',
      website: 'https://www.vasantvalley.org'
    },
    images: {
      main: '/images/schools/vasant-valley.jpg',
      gallery: [
        '/images/schools/vasant-valley-1.jpg',
        '/images/schools/vasant-valley-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/vasant-valley-tour'
    },
    rating: 4.7,
    reviews: [
      {
        id: 'r19',
        schoolId: '18',
        userName: 'Priya Kapoor',
        rating: 5,
        comment: 'Excellent school with focus on holistic development.',
        date: '2024-02-15',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Computer Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Holistic Development Award',
      'Academic Excellence',
      'Innovation Leadership'
    ],
    admissionOpen: false
  },
  {
    id: '19',
    name: 'The Heritage School',
    location: {
      city: 'Gurgaon',
      state: 'Haryana',
      address: 'Gurgaon - 122001',
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    fees: {
      annual: 300000,
      monthly: 25000,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 2001,
      studentCount: 2200,
      teacherCount: 110
    },
    timing: {
      startTime: '08:00 AM',
      endTime: '03:00 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-124-4567000',
      email: 'info@heritageschool.in',
      website: 'https://www.heritageschool.in'
    },
    images: {
      main: '/images/schools/heritage-school.jpg',
      gallery: [
        '/images/schools/heritage-school-1.jpg',
        '/images/schools/heritage-school-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/heritage-school-tour'
    },
    rating: 4.6,
    reviews: [
      {
        id: 'r20',
        schoolId: '19',
        userName: 'Amit Kumar',
        rating: 4,
        comment: 'Modern school with excellent facilities and innovative teaching methods.',
        date: '2024-02-17',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Robotics Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Innovation Award',
      'Academic Excellence',
      'Technology Leadership'
    ],
    admissionOpen: true
  },
  {
    id: '20',
    name: 'Shri Ram School',
    location: {
      city: 'Gurgaon',
      state: 'Haryana',
      address: 'Gurgaon - 122001',
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    fees: {
      annual: 350000,
      monthly: 29167,
      currency: 'INR'
    },
    details: {
      type: 'CBSE',
      grades: ['Nursery', 'KG', '1-12'],
      medium: 'English',
      established: 1988,
      studentCount: 2500,
      teacherCount: 130
    },
    timing: {
      startTime: '08:15 AM',
      endTime: '03:15 PM',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    contact: {
      phone: '+91-124-4568000',
      email: 'info@shriramschool.org',
      website: 'https://www.shriramschool.org'
    },
    images: {
      main: '/images/schools/shri-ram.jpg',
      gallery: [
        '/images/schools/shri-ram-1.jpg',
        '/images/schools/shri-ram-2.jpg'
      ],
      virtualTour: 'https://www.youtube.com/embed/shri-ram-tour'
    },
    rating: 4.8,
    reviews: [
      {
        id: 'r21',
        schoolId: '20',
        userName: 'Ritu Singh',
        rating: 5,
        comment: 'Excellent school with strong academic focus and values.',
        date: '2024-02-19',
        verified: true
      }
    ],
    facilities: [
      'Smart Classrooms',
      'Advanced Science Labs',
      'Computer Lab',
      'Digital Library',
      'Sports Complex',
      'Swimming Pool',
      'Auditorium',
      'Cafeteria'
    ],
    achievements: [
      'Academic Excellence Award',
      'Values Education',
      'Sports Champions'
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

export const filterSchools = (schools: School[], filters: FilterOptions): School[] => {
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
    
    // Gender filter
    if (filters.gender && filters.gender.length > 0 && school.details.gender && !filters.gender.includes(school.details.gender)) {
      return false;
    }
    
    // Boarding filter
    if (filters.boarding !== undefined && school.details.boarding !== filters.boarding) {
      return false;
    }
    
    // Day school filter
    if (filters.daySchool !== undefined && school.details.daySchool !== filters.daySchool) {
      return false;
    }
    
    // Special needs filter
    if (filters.specialNeeds !== undefined && school.specialNeeds !== filters.specialNeeds) {
      return false;
    }
    
    // International students filter
    if (filters.internationalStudents !== undefined && school.internationalStudents !== filters.internationalStudents) {
      return false;
    }
    
    // Facilities filter
    if (filters.facilities && filters.facilities.length > 0) {
      const hasAllFacilities = filters.facilities.every((facility: string) => 
        school.facilities.includes(facility)
      );
      if (!hasAllFacilities) {
        return false;
      }
    }
    
    // Sports filter
    if (filters.sports && filters.sports.length > 0 && school.sports) {
      const hasAnySport = filters.sports.some((sport: string) => 
        school.sports!.includes(sport)
      );
      if (!hasAnySport) {
        return false;
      }
    }
    
    // Extracurricular filter
    if (filters.extracurricular && filters.extracurricular.length > 0 && school.extracurricular) {
      const hasAnyActivity = filters.extracurricular.some((activity: string) => 
        school.extracurricular!.includes(activity)
      );
      if (!hasAnyActivity) {
        return false;
      }
    }
    
    // Established year filter
    if (filters.establishedYear) {
      if (filters.establishedYear.min && school.details.established < filters.establishedYear.min) {
        return false;
      }
      if (filters.establishedYear.max && school.details.established > filters.establishedYear.max) {
        return false;
      }
    }
    
    // Student count filter
    if (filters.studentCount) {
      if (filters.studentCount.min && school.details.studentCount < filters.studentCount.min) {
        return false;
      }
      if (filters.studentCount.max && school.details.studentCount > filters.studentCount.max) {
        return false;
      }
    }
    
    return true;
  });
};
