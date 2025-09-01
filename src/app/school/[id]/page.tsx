'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import { schoolsData } from '@/data/schools';
import { School } from '@/types';
import { addRecentlyViewed } from '@/utils/storage';
import { formatDistance } from '@/utils/location';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Users, 
  Calendar,
  Award,
  CheckCircle,
  Heart,
  Share2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function SchoolDetailPage() {
  const params = useParams();
  const [school, setSchool] = useState<School | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'gallery' | 'virtual-tour'>('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const schoolId = params.id as string;
    const foundSchool = schoolsData.find(s => s.id === schoolId);
    if (foundSchool) {
      setSchool(foundSchool);
      addRecentlyViewed(schoolId);
    }
  }, [params.id]);

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading school details...</p>
          </div>
        </div>
      </div>
    );
  }

  const formatFees = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount}`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: school.name,
          text: `Check out ${school.name} on SchoolDekho`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/search" className="hover:text-blue-600">Schools</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{school.name}</li>
          </ol>
        </nav>

        {/* School header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Hero image */}
          <div className="relative h-64 md:h-80 bg-gray-200">
            {!imageError ? (
              <Image
                src={school.images.main || '/images/school-placeholder.jpg'}
                alt={school.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">
                      {school.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium">School Image</p>
                </div>
              </div>
            )}
            
            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full ${
                  isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                } shadow-md hover:scale-105 transition-all`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-3 rounded-full bg-white text-gray-600 shadow-md hover:scale-105 transition-all"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Admission status */}
            {school.admissionOpen && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Admission Open
                </span>
              </div>
            )}
          </div>

          {/* School info */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{school.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(school.rating)}
                    <span className="text-lg font-semibold text-gray-900 ml-1">
                      {school.rating}
                    </span>
                    <span className="text-gray-600">({school.reviews.length} reviews)</span>
                  </div>
                  <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {school.details.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{school.location.address}</span>
                  {school.distance && (
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {formatDistance(school.distance)} away
                    </span>
                  )}
                </div>
              </div>
              
              {/* Quick actions */}
              <div className="flex flex-col space-y-3 mt-4 lg:mt-0">
                <a
                  href={`tel:${school.contact.phone}`}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call School</span>
                </a>
                <a
                  href={school.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'reviews', label: `Reviews (${school.reviews.length})` },
                    { id: 'gallery', label: 'Gallery' },
                    { id: 'virtual-tour', label: 'Virtual Tour' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'overview' | 'reviews' | 'gallery' | 'virtual-tour')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Quick info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{formatFees(school.fees.annual)}</div>
                        <div className="text-sm text-gray-600">Annual Fees</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{school.details.studentCount.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{school.details.established}</div>
                        <div className="text-sm text-gray-600">Established</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{school.details.teacherCount}</div>
                        <div className="text-sm text-gray-600">Teachers</div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About {school.name}</h3>
                      <div className={`text-gray-600 ${!showFullDescription ? 'line-clamp-3' : ''}`}>
                        <p>
                          {school.name} is a prestigious educational institution established in {school.details.established}. 
                          The school follows the {school.details.type} curriculum and provides education in {school.details.medium} medium. 
                          With a student-teacher ratio that ensures personalized attention, the school focuses on holistic development 
                          through academic excellence, sports, and extracurricular activities.
                        </p>
                        <p className="mt-3">
                          The school offers classes from {school.details.grades.join(', ')} and is known for its modern infrastructure, 
                          experienced faculty, and commitment to quality education. The institution has consistently achieved excellent 
                          board results and has been recognized for its outstanding performance in various academic and non-academic fields.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-blue-600 hover:text-blue-700 font-medium mt-2"
                      >
                        {showFullDescription ? 'Show less' : 'Read more'}
                      </button>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Facilities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {school.facilities.map((facility) => (
                          <div key={facility} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {school.achievements.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h3>
                        <div className="space-y-2">
                          {school.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {school.reviews.length > 0 ? (
                      school.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-gray-900">{review.userName}</span>
                                {review.verified && (
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                )}
                              </div>
                              <div className="flex items-center space-x-1">
                                {renderStars(review.rating)}
                                <span className="text-sm text-gray-600 ml-2">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">No reviews yet. Be the first to review this school!</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {school.images.gallery.map((image, index) => (
                      <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${school.name} gallery image ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Virtual Tour Tab */}
                {activeTab === 'virtual-tour' && (
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src={school.images.virtualTour}
                      title={`Virtual tour of ${school.name}`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <a href={`tel:${school.contact.phone}`} className="text-blue-600 hover:text-blue-700">
                    {school.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <a href={`mailto:${school.contact.email}`} className="text-blue-600 hover:text-blue-700">
                    {school.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <a 
                    href={school.contact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* School details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">School Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Established</div>
                    <div className="font-medium">{school.details.established}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Student Count</div>
                    <div className="font-medium">{school.details.studentCount.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Timing</div>
                    <div className="font-medium">{school.timing.startTime} - {school.timing.endTime}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-500">Working Days</div>
                    <div className="font-medium">{school.timing.workingDays.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees breakdown */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Fees</span>
                  <span className="font-semibold">{formatFees(school.fees.annual)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Fees</span>
                  <span className="font-semibold">{formatFees(school.fees.monthly)}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency</span>
                    <span className="font-semibold">{school.fees.currency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
