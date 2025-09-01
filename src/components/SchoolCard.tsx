'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Clock, Phone, Globe, Eye, Heart, Share2, Users, Award, Plus } from 'lucide-react';
import { School } from '@/types';
import { formatDistance } from '@/utils/location';
import { addRecentlyViewed, addToFavorites, removeFromFavorites, isFavorite } from '@/utils/storage';

interface SchoolCardProps {
  school: School;
  showDistance?: boolean;
}

export default function SchoolCard({ school, showDistance = false }: SchoolCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check if school is in favorites on component mount
    const checkFavoriteStatus = () => {
      const favoriteStatus = isFavorite(school.id);
      setIsLiked(favoriteStatus);
    };
    
    checkFavoriteStatus();
  }, [school.id]);

  const handleCardClick = () => {
    addRecentlyViewed(school.id);
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      removeFromFavorites(school.id);
      setIsLiked(false);
    } else {
      addToFavorites(school.id);
      setIsLiked(true);
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: school.name,
          text: `Check out ${school.name} on SchoolDekho`,
          url: window.location.origin + `/school/${school.id}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin + `/school/${school.id}`);
    }
  };

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
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getSchoolTypeBadge = () => {
    if (school.details.boarding && school.details.daySchool) {
      return { text: 'Boarding & Day', color: 'bg-purple-500' };
    } else if (school.details.boarding) {
      return { text: 'Boarding', color: 'bg-blue-500' };
    } else if (school.details.daySchool) {
      return { text: 'Day School', color: 'bg-green-500' };
    }
    return null;
  };

  const getGenderBadge = () => {
    if (school.details.gender === 'Boys') {
      return { text: 'Boys', color: 'bg-blue-500' };
    } else if (school.details.gender === 'Girls') {
      return { text: 'Girls', color: 'bg-pink-500' };
    } else if (school.details.gender === 'Co-ed') {
      return { text: 'Co-ed', color: 'bg-purple-500' };
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Image section */}
      <div className="relative h-48 bg-gray-200">
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
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-2xl font-bold">
                  {school.name.charAt(0)}
                </span>
              </div>
              <p className="text-blue-600 font-medium">School Image</p>
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={handleFavoriteToggle}
            className={`p-2 rounded-full ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
            } shadow-md hover:scale-105 transition-all`}
            title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <Link
            href={`/compare?add=${school.id}`}
            className="p-2 rounded-full bg-white text-gray-600 shadow-md hover:scale-105 transition-all"
            title="Add to comparison"
          >
            <Plus className="w-4 h-4" />
          </Link>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white text-gray-600 shadow-md hover:scale-105 transition-all"
            title="Share school"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Status badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {school.admissionOpen && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Admission Open
            </span>
          )}
          {getSchoolTypeBadge() && (
            <span className={`${getSchoolTypeBadge()!.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
              {getSchoolTypeBadge()!.text}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-md">
          <div className="flex items-center space-x-1">
            {renderStars(school.rating)}
            <span className="text-sm font-medium text-gray-700 ml-1">
              {school.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4">
        {/* School name and board */}
        <div className="mb-3">
          <Link
            href={`/school/${school.id}`}
            onClick={handleCardClick}
            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
          >
            {school.name}
          </Link>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
              {school.details.type}
            </span>
            {showDistance && school.distance && (
              <span className="text-sm text-gray-600">
                {formatDistance(school.distance)}
              </span>
            )}
          </div>
        </div>

        {/* Additional badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {getGenderBadge() && (
            <span className={`${getGenderBadge()!.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
              {getGenderBadge()!.text}
            </span>
          )}
          {school.internationalStudents && (
            <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              International
            </span>
          )}
          {school.specialNeeds && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Special Needs
            </span>
          )}
        </div>

        {/* Location */}
        <div className="flex items-start space-x-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 line-clamp-2">
            {school.location.address}
          </p>
        </div>

        {/* Fees */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Annual Fees</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatFees(school.fees.annual)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Monthly</span>
            <span className="text-sm text-gray-700">
              {formatFees(school.fees.monthly)}
            </span>
          </div>
        </div>

        {/* Quick info */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Timing</p>
              <p className="text-sm font-medium text-gray-900">
                {school.timing.startTime} - {school.timing.endTime}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Students</p>
              <p className="text-sm font-medium text-gray-900">
                {school.details.studentCount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Established year and achievements */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Est. {school.details.established}</span>
            {school.achievements.length > 0 && (
              <span className="flex items-center space-x-1">
                <Award className="w-3 h-3 text-yellow-500" />
                <span>{school.achievements.length} awards</span>
              </span>
            )}
          </div>
        </div>

        {/* Contact buttons */}
        <div className="flex space-x-2">
          <Link
            href={`/school/${school.id}`}
            onClick={handleCardClick}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Link>
          <a
            href={`tel:${school.contact.phone}`}
            className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            title="Call School"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={school.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            title="Visit Website"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
