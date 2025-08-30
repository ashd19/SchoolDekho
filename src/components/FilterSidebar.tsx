'use client';

import { useState } from 'react';
import { X, Filter, Sliders, Star, MapPin, DollarSign, School, Clock } from 'lucide-react';
import { FilterOptions } from '@/types';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  onClearFilters
}: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters: FilterOptions = {};
    setLocalFilters(clearedFilters);
    onClearFilters();
  };

  const boardTypes = ['CBSE', 'ICSE', 'IB', 'State Board', 'International'];
  const facilities = [
    'Smart Classrooms',
    'Science Labs',
    'Computer Lab',
    'Library',
    'Sports Ground',
    'Swimming Pool',
    'Auditorium',
    'Cafeteria',
    'Boarding Houses',
    'Music Room',
    'Art Studio'
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Location */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </h3>
              <input
                type="text"
                placeholder="Enter city or area..."
                value={localFilters.location || ''}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Fees Range */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <DollarSign className="w-4 h-4" />
                <span>Annual Fees Range</span>
              </h3>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={localFilters.feesRange?.min || ''}
                    onChange={(e) => handleFilterChange('feesRange', {
                      ...localFilters.feesRange,
                      min: e.target.value ? parseInt(e.target.value) : undefined
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={localFilters.feesRange?.max || ''}
                    onChange={(e) => handleFilterChange('feesRange', {
                      ...localFilters.feesRange,
                      max: e.target.value ? parseInt(e.target.value) : undefined
                    })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  Enter amount in ₹ (e.g., 50000 for ₹50,000)
                </div>
              </div>
            </div>

            {/* Board Type */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <School className="w-4 h-4" />
                <span>Board Type</span>
              </h3>
              <div className="space-y-2">
                {boardTypes.map((board) => (
                  <label key={board} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={localFilters.board?.includes(board) || false}
                      onChange={(e) => {
                        const currentBoards = localFilters.board || [];
                        const newBoards = e.target.checked
                          ? [...currentBoards, board]
                          : currentBoards.filter(b => b !== board);
                        handleFilterChange('board', newBoards);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{board}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <Star className="w-4 h-4" />
                <span>Minimum Rating</span>
              </h3>
              <div className="space-y-2">
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="rating"
                      checked={localFilters.rating === rating}
                      onChange={() => handleFilterChange('rating', rating)}
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-700">{rating}+</span>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <Sliders className="w-4 h-4" />
                <span>Facilities</span>
              </h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {facilities.map((facility) => (
                  <label key={facility} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={localFilters.facilities?.includes(facility) || false}
                      onChange={(e) => {
                        const currentFacilities = localFilters.facilities || [];
                        const newFacilities = e.target.checked
                          ? [...currentFacilities, facility]
                          : currentFacilities.filter(f => f !== facility);
                        handleFilterChange('facilities', newFacilities);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{facility}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Admission Status */}
            <div>
              <h3 className="flex items-center space-x-2 text-sm font-medium text-gray-900 mb-3">
                <Clock className="w-4 h-4" />
                <span>Admission Status</span>
              </h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localFilters.admissionOpen === true}
                    onChange={(e) => handleFilterChange('admissionOpen', e.target.checked ? true : undefined)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Admission Open</span>
                </label>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t space-y-3">
            <button
              onClick={handleApplyFilters}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
            <button
              onClick={handleClearFilters}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
