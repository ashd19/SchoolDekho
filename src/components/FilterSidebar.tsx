'use client';

import { useState } from 'react';
import { X, Filter, Sliders, Star, MapPin, DollarSign, School, Award } from 'lucide-react';
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
  const [activeSection, setActiveSection] = useState<string>('basic');

  const handleFilterChange = (key: keyof FilterOptions, value: string | number | boolean | string[] | { min: number; max: number } | undefined) => {
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
    'Art Studio',
    'Robotics Lab',
    'Digital Library',
    'Indoor Sports Complex',
    'Horse Riding',
    'Skiing Facilities',
    'Equestrian Center'
  ];
  const sports = [
    'Cricket',
    'Football',
    'Basketball',
    'Tennis',
    'Swimming',
    'Athletics',
    'Horse Riding',
    'Skiing',
    'Table Tennis',
    'Badminton',
    'Volleyball',
    'Hockey'
  ];
  const extracurricular = [
    'Music',
    'Dance',
    'Art',
    'Drama',
    'Debate',
    'Model UN',
    'Science Club',
    'Math Club',
    'Literature Club',
    'Photography',
    'Cooking',
    'Gardening'
  ];

  const renderSection = (sectionId: string, title: string, icon: React.ReactNode) => (
    <button
      onClick={() => setActiveSection(activeSection === sectionId ? '' : sectionId)}
      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
        activeSection === sectionId ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <div className={`transform transition-transform ${activeSection === sectionId ? 'rotate-180' : ''}`}>
        ▼
      </div>
    </button>
  );

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
              <h2 className="text-lg font-semibold text-gray-900">Advanced Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Basic Filters Section */}
            <div className="space-y-3">
              {renderSection('basic', 'Basic Filters', <Filter className="w-4 h-4" />)}
              
              {activeSection === 'basic' && (
                <div className="pl-4 space-y-4 border-l-2 border-blue-200">
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
                            min: e.target.value ? parseInt(e.target.value) : 0,
                            max: localFilters.feesRange?.max || 1000000
                          })}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={localFilters.feesRange?.max || ''}
                          onChange={(e) => handleFilterChange('feesRange', {
                            min: localFilters.feesRange?.min || 0,
                            max: e.target.value ? parseInt(e.target.value) : 1000000
                          })}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="text-xs text-gray-500">
                        Enter amount in ₹ (e.g., 50000 for ₹50,000)
                      </div>
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
                </div>
              )}
            </div>

            {/* Academic Section */}
            <div className="space-y-3">
              {renderSection('academic', 'Academic Details', <School className="w-4 h-4" />)}
              
              {activeSection === 'academic' && (
                <div className="pl-4 space-y-4 border-l-2 border-blue-200">
                  {/* Board Type */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Board Type</h3>
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

                  {/* Gender */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Gender</h3>
                    <div className="space-y-2">
                      {['Boys', 'Girls', 'Co-ed'].map((gender) => (
                        <label key={gender} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={localFilters.gender?.includes(gender) || false}
                            onChange={(e) => {
                              const currentGenders = localFilters.gender || [];
                              const newGenders = e.target.checked
                                ? [...currentGenders, gender]
                                : currentGenders.filter(g => g !== gender);
                              handleFilterChange('gender', newGenders);
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* School Type */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">School Type</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={localFilters.boarding === true}
                          onChange={(e) => handleFilterChange('boarding', e.target.checked ? true : undefined)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Boarding School</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={localFilters.daySchool === true}
                          onChange={(e) => handleFilterChange('daySchool', e.target.checked ? true : undefined)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Day School</span>
                      </label>
                    </div>
                  </div>

                  {/* Established Year */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Established Year</h3>
                    <div className="space-y-3">
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          placeholder="From"
                          value={localFilters.establishedYear?.min || ''}
                          onChange={(e) => handleFilterChange('establishedYear', {
                            min: e.target.value ? parseInt(e.target.value) : 1900,
                            max: localFilters.establishedYear?.max || 2024
                          })}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="number"
                          placeholder="To"
                          value={localFilters.establishedYear?.max || ''}
                          onChange={(e) => handleFilterChange('establishedYear', {
                            min: localFilters.establishedYear?.min || 1900,
                            max: e.target.value ? parseInt(e.target.value) : 2024
                          })}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Facilities Section */}
            <div className="space-y-3">
              {renderSection('facilities', 'Facilities & Activities', <Sliders className="w-4 h-4" />)}
              
              {activeSection === 'facilities' && (
                <div className="pl-4 space-y-4 border-l-2 border-blue-200">
                  {/* Facilities */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Facilities</h3>
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

                  {/* Sports */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Sports</h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {sports.map((sport) => (
                        <label key={sport} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={localFilters.sports?.includes(sport) || false}
                            onChange={(e) => {
                              const currentSports = localFilters.sports || [];
                              const newSports = e.target.checked
                                ? [...currentSports, sport]
                                : currentSports.filter(s => s !== sport);
                              handleFilterChange('sports', newSports);
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{sport}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Extracurricular */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Extracurricular</h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {extracurricular.map((activity) => (
                        <label key={activity} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={localFilters.extracurricular?.includes(activity) || false}
                            onChange={(e) => {
                              const currentActivities = localFilters.extracurricular || [];
                              const newActivities = e.target.checked
                                ? [...currentActivities, activity]
                                : currentActivities.filter(a => a !== activity);
                              handleFilterChange('extracurricular', newActivities);
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Special Features Section */}
            <div className="space-y-3">
              {renderSection('special', 'Special Features', <Award className="w-4 h-4" />)}
              
              {activeSection === 'special' && (
                <div className="pl-4 space-y-4 border-l-2 border-blue-200">
                  {/* Special Needs */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Special Features</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={localFilters.specialNeeds === true}
                          onChange={(e) => handleFilterChange('specialNeeds', e.target.checked ? true : undefined)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Special Needs Support</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={localFilters.internationalStudents === true}
                          onChange={(e) => handleFilterChange('internationalStudents', e.target.checked ? true : undefined)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">International Students</span>
                      </label>
                    </div>
                  </div>

                  {/* Admission Status */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Admission Status</h3>
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
              )}
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
