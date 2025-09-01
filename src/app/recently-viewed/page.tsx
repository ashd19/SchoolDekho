'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SchoolCard from '@/components/SchoolCard';
import { schoolsData } from '@/data/schools';
import { getRecentlyViewedSchools } from '@/utils/storage';
import { School } from '@/types';
import { Clock, ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function RecentlyViewedPage() {
  const [recentlyViewedSchools, setRecentlyViewedSchools] = useState<School[]>([]);

  useEffect(() => {
    const recent = getRecentlyViewedSchools(schoolsData);
    setRecentlyViewedSchools(recent);
  }, []);

  const clearRecentlyViewed = () => {
    localStorage.removeItem('schooldekho_recently_viewed');
    setRecentlyViewedSchools([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Recently Viewed Schools</h1>
              <p className="text-gray-600">
                Schools you&apos;ve recently explored on SchoolDekho
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

        {recentlyViewedSchools.length > 0 ? (
          <>
            {/* Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{recentlyViewedSchools.length} schools viewed recently</span>
              </div>
              <button
                onClick={clearRecentlyViewed}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear History</span>
              </button>
            </div>

            {/* Schools grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recentlyViewedSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recently viewed schools</h3>
            <p className="text-gray-600 mb-6">
              Start exploring schools to see them appear here for quick access.
            </p>
            <Link
              href="/schools"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Explore Schools</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
