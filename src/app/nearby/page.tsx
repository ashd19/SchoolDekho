'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SchoolCard from '@/components/SchoolCard';
import { schoolsData, getSchoolsByLocation } from '@/data/schools';
import { getUserLocation } from '@/utils/storage';
import { School } from '@/types';
import { MapPin, Navigation, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function NearbySchoolsPage() {
  const [nearbySchools, setNearbySchools] = useState<School[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; address: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [radius, setRadius] = useState(50);

  useEffect(() => {
    loadNearbySchools();
  }, []);

  const loadNearbySchools = async () => {
    setIsLoading(true);
    
    // Try to get saved location first
    let location = getUserLocation();
    
    if (!location) {
      // Try to get current location
      try {
        if (navigator.geolocation) {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 300000
            });
          });
          
          location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
          };
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    }

    if (location) {
      setUserLocation(location);
      const nearby = getSchoolsByLocation(location.lat, location.lng, radius);
      setNearbySchools(nearby);
    }
    
    setIsLoading(false);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
    if (userLocation) {
      const nearby = getSchoolsByLocation(userLocation.lat, userLocation.lng, newRadius);
      setNearbySchools(nearby);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Schools Near You</h1>
              <p className="text-gray-600">
                Discover schools in your vicinity with distance information
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Finding schools near you...</p>
          </div>
        ) : userLocation ? (
          <>
            {/* Location info and controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Your Location</p>
                    <p className="text-gray-600">{userLocation.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Search radius:</span>
                    <select
                      value={radius}
                      onChange={(e) => handleRadiusChange(Number(e.target.value))}
                      className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={10}>10 km</option>
                      <option value={25}>25 km</option>
                      <option value={50}>50 km</option>
                      <option value={100}>100 km</option>
                    </select>
                  </div>
                  <button
                    onClick={loadNearbySchools}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            {nearbySchools.length > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {nearbySchools.length} schools found within {radius}km
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nearbySchools.map((school) => (
                    <SchoolCard key={school.id} school={school} showDistance={true} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No schools found nearby</h3>
                <p className="text-gray-600 mb-6">
                  Try increasing the search radius or explore schools in other areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleRadiusChange(100)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Search within 100km
                  </button>
                  <Link
                    href="/schools"
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Explore All Schools
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Location access required</h3>
            <p className="text-gray-600 mb-6">
              We need your location to show schools near you. Please enable location access and try again.
            </p>
            <button
              onClick={loadNearbySchools}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
