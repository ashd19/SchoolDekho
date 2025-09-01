'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SchoolCard from '@/components/SchoolCard';
import { schoolsData } from '@/data/schools';
import { getFavoriteSchools, clearAllData } from '@/utils/storage';
import { School } from '@/types';
import { Heart, ArrowLeft, Trash2, Grid, List, SortAsc, SortDesc } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
  const [favoriteSchools, setFavoriteSchools] = useState<School[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'fees' | 'name'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    loadFavoriteSchools();
  }, []);

  const loadFavoriteSchools = () => {
    const favorites = getFavoriteSchools(schoolsData);
    setFavoriteSchools(favorites);
  };



  const handleClearAllFavorites = () => {
    if (confirm('Are you sure you want to remove all schools from favorites?')) {
      clearAllData();
      setFavoriteSchools([]);
    }
  };

  const sortedSchools = [...favoriteSchools].sort((a, b) => {
    let aValue: number | string;
    let bValue: number | string;
    
    switch (sortBy) {
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'fees':
        aValue = a.fees.annual;
        bValue = b.fees.annual;
        break;
      case 'name':
        aValue = a.name;
        bValue = b.name;
        break;
      default:
        aValue = a.rating;
        bValue = b.rating;
    }
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorite Schools</h1>
              <p className="text-gray-600">
                Schools you&apos;ve marked as favorites for quick access
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

        {favoriteSchools.length > 0 ? (
          <>
            {/* Actions and controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  {/* View mode toggle */}
                  <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sort options */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'rating' | 'fees' | 'name')}
                      className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="rating">Rating</option>
                      <option value="fees">Fees</option>
                      <option value="name">Name</option>
                    </select>
                    <button
                      onClick={toggleSortOrder}
                      className="p-1 text-gray-600 hover:text-gray-900"
                    >
                      {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Results count and clear button */}
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    {favoriteSchools.length} favorite school{favoriteSchools.length !== 1 ? 's' : ''}
                  </div>
                  <button
                    onClick={handleClearAllFavorites}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear All</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Schools grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedSchools.map((school) => (
                <SchoolCard 
                  key={school.id} 
                  school={school}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite schools yet</h3>
            <p className="text-gray-600 mb-6">
              Start exploring schools and add them to your favorites for quick access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schools"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Explore Schools</span>
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>Search Schools</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
