'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Menu, X, School, Phone, Mail } from 'lucide-react';
import { getUserLocation } from '@/utils/location';
import { UserLocation } from '@/types';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Try to get saved location first
    const savedLocation = localStorage.getItem('schooldekho_user_location');
    if (savedLocation) {
      setUserLocation(JSON.parse(savedLocation));
    }
  }, []);

  const handleGetLocation = async () => {
    setIsLoadingLocation(true);
    try {
      const location = await getUserLocation();
      setUserLocation(location);
      localStorage.setItem('schooldekho_user_location', JSON.stringify(location));
    } catch (error) {
      console.error('Error getting location:', error);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 1800-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@schooldekho.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
            <Link href="/help" className="hover:text-blue-200 transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <School className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SchoolDekho</h1>
              <p className="text-xs text-gray-600">Find Your Perfect School</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search schools by name, location, or board..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Location and navigation */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                {userLocation ? (
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Your Location</p>
                    <p className="text-gray-600 truncate max-w-32">
                      {userLocation.address.split(',')[0]}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleGetLocation}
                    disabled={isLoadingLocation}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {isLoadingLocation ? 'Detecting...' : 'Detect Location'}
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="lg:hidden mt-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search schools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                {userLocation ? (
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Your Location</p>
                    <p className="text-gray-600">{userLocation.address}</p>
                  </div>
                ) : (
                  <button
                    onClick={handleGetLocation}
                    disabled={isLoadingLocation}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {isLoadingLocation ? 'Detecting...' : 'Detect Location'}
                  </button>
                )}
              </div>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/help" className="text-gray-700 hover:text-blue-600">
                Help
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
