'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import SchoolCard from '@/components/SchoolCard';
import FilterSidebar from '@/components/FilterSidebar';
import { schoolsData, filterSchools, getSchoolsByLocation } from '@/data/schools';
import { FilterOptions, School } from '@/types';
import { Filter, Search, Grid, List, SortAsc, SortDesc } from 'lucide-react';
import { getUserLocation } from '@/utils/storage';
import { addSearchHistory } from '@/utils/storage';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'fees' | 'distance'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isLoading, setIsLoading] = useState(true);

  const query = searchParams.get('q') || '';
  const locationQuery = searchParams.get('location') || '';

  useEffect(() => {
    setIsLoading(true);
    
    // Get initial schools based on search query
    let initialSchools = schoolsData;
    
    if (query) {
      initialSchools = schoolsData.filter(school => 
        school.name.toLowerCase().includes(query.toLowerCase()) ||
        school.details.type.toLowerCase().includes(query.toLowerCase()) ||
        school.location.city.toLowerCase().includes(query.toLowerCase()) ||
        school.facilities.some(facility => 
          facility.toLowerCase().includes(query.toLowerCase())
        )
      );
      addSearchHistory(query);
    }

    // Apply location filter if provided
    if (locationQuery) {
      const savedLocation = getUserLocation();
      if (savedLocation) {
        initialSchools = getSchoolsByLocation(savedLocation.lat, savedLocation.lng, 100);
      }
    }

    setSchools(initialSchools);
    setFilteredSchools(initialSchools);
    setIsLoading(false);
  }, [query, locationQuery]);

  useEffect(() => {
    // Apply filters
    let result = filterSchools(schools, filters);
    
    // Apply sorting
    result = result.sort((a, b) => {
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
        case 'distance':
          aValue = a.distance || 0;
          bValue = b.distance || 0;
          break;
        default:
          aValue = a.rating;
          bValue = b.rating;
      }
      
      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    
    setFilteredSchools(result);
  }, [schools, filters, sortBy, sortOrder]);

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {query ? `Search Results for "${query}"` : 'All Schools'}
              </h1>
              <p className="text-gray-600 mt-2">
                {filteredSchools.length} schools found
                {locationQuery && ` near ${locationQuery}`}
              </p>
            </div>
            
            {/* Mobile filter button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Search summary */}
          {(query || locationQuery) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-blue-800">
                    {query && <span>Searching for: <strong>{query}</strong></span>}
                    {query && locationQuery && <span> • </span>}
                    {locationQuery && <span>Location: <strong>{locationQuery}</strong></span>}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
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
                      onChange={(e) => setSortBy(e.target.value as 'rating' | 'fees' | 'distance')}
                      className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="rating">Rating</option>
                      <option value="fees">Fees</option>
                      <option value="distance">Distance</option>
                    </select>
                    <button
                      onClick={toggleSortOrder}
                      className="p-1 text-gray-600 hover:text-gray-900"
                    >
                      {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Results count */}
                <div className="text-sm text-gray-600">
                  Showing {filteredSchools.length} of {schools.length} schools
                </div>
              </div>
            </div>

            {/* Results */}
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredSchools.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredSchools.map((school) => (
                  <SchoolCard 
                    key={school.id} 
                    school={school} 
                    showDistance={!!locationQuery}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No schools found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters to find more schools.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
