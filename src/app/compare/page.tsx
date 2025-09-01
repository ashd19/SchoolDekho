'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { schoolsData } from '@/data/schools';
import { School, SchoolComparison } from '@/types';
import { createComparison, getComparison, updateComparison, deleteComparison } from '@/utils/storage';
import { ArrowLeft, Plus, X, Trash2, Share2, Download, Star, MapPin, Clock, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const [comparisonId, setComparisonId] = useState<string>('');
  const [comparison, setComparison] = useState<SchoolComparison | null>(null);
  const [schoolsToCompare, setSchoolsToCompare] = useState<School[]>([]);
  const [availableSchools, setAvailableSchools] = useState<School[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddSchool, setShowAddSchool] = useState(false);

  useEffect(() => {
    // Check if there's a comparison ID in URL
    const compId = searchParams.get('id');
    
    if (compId) {
      loadComparison(compId);
    } else {
      // Create new comparison if none exists
      createNewComparison();
    }
    
    setAvailableSchools(schoolsData);
  }, [searchParams]);

  useEffect(() => {
    // If there's an add parameter, add the school to comparison
    const addSchoolId = searchParams.get('add');
    if (addSchoolId && schoolsToCompare.length === 0) {
      const schoolToAdd = schoolsData.find(s => s.id === addSchoolId);
      if (schoolToAdd) {
        // Add school directly without using the callback
        if (schoolsToCompare.length >= 4) {
          alert('You can compare up to 4 schools at a time');
          return;
        }
        
        if (schoolsToCompare.some(s => s.id === schoolToAdd.id)) {
          alert('This school is already in the comparison');
          return;
        }
        
        const newSchools = [...schoolsToCompare, schoolToAdd];
        setSchoolsToCompare(newSchools);
        
        if (comparisonId) {
          updateComparison(comparisonId, newSchools.map(s => s.id));
        }
      }
    }
  }, [searchParams, schoolsToCompare.length, comparisonId]);

  const loadComparison = (id: string) => {
    const comp = getComparison(id);
    if (comp) {
      setComparison(comp);
      setComparisonId(id);
      const schools = schoolsData.filter(school => comp.schools.includes(school.id));
      setSchoolsToCompare(schools);
    }
  };

  const createNewComparison = () => {
    const newId = createComparison([]);
    setComparisonId(newId);
    setComparison({ id: newId, schools: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    setSchoolsToCompare([]);
  };

  const addSchoolToComparison = useCallback((school: School) => {
    if (schoolsToCompare.length >= 4) {
      alert('You can compare up to 4 schools at a time');
      return;
    }
    
    if (schoolsToCompare.some(s => s.id === school.id)) {
      alert('This school is already in the comparison');
      return;
    }
    
    const newSchools = [...schoolsToCompare, school];
    setSchoolsToCompare(newSchools);
    
    if (comparisonId) {
      updateComparison(comparisonId, newSchools.map(s => s.id));
    }
    
    setShowAddSchool(false);
    setSearchQuery('');
  }, [schoolsToCompare.length, comparisonId]);

  const removeSchoolFromComparison = (schoolId: string) => {
    const newSchools = schoolsToCompare.filter(s => s.id !== schoolId);
    setSchoolsToCompare(newSchools);
    
    if (comparisonId) {
      updateComparison(comparisonId, newSchools.map(s => s.id));
    }
  };

  const deleteCurrentComparison = () => {
    if (comparisonId && confirm('Are you sure you want to delete this comparison?')) {
      deleteComparison(comparisonId);
      createNewComparison();
    }
  };

  const shareComparison = () => {
    const url = `${window.location.origin}/compare?id=${comparisonId}`;
    if (navigator.share) {
      navigator.share({
        title: 'School Comparison',
        text: 'Check out this school comparison on SchoolDekho',
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Comparison URL copied to clipboard!');
    }
  };

  const exportComparison = () => {
    const data = {
      comparison: comparison,
      schools: schoolsToCompare,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `school-comparison-${comparisonId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredSchools = availableSchools.filter(school => 
    !schoolsToCompare.some(s => s.id === school.id) &&
    (school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     school.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
     school.details.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatFees = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount}`;
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Schools</h1>
              <p className="text-gray-600">
                Compare up to 4 schools side by side to make the best decision
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

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddSchool(!showAddSchool)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add School</span>
              </button>
              <button
                onClick={shareComparison}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={exportComparison}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {schoolsToCompare.length} of 4 schools
              </span>
              <button
                onClick={deleteCurrentComparison}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add School Modal */}
        {showAddSchool && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Add School to Comparison</h3>
              <button
                onClick={() => setShowAddSchool(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <input
              type="text"
              placeholder="Search schools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            
            <div className="max-h-60 overflow-y-auto space-y-2">
              {filteredSchools.map(school => (
                <div
                  key={school.id}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{school.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{school.name}</p>
                      <p className="text-sm text-gray-600">{school.location.city}, {school.details.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addSchoolToComparison(school)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {schoolsToCompare.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b">Features</th>
                    {schoolsToCompare.map(school => (
                      <th key={school.id} className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b min-w-64">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{school.name}</p>
                            <p className="text-xs text-gray-600">{school.location.city}</p>
                          </div>
                          <button
                            onClick={() => removeSchoolFromComparison(school.id)}
                            className="text-gray-400 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Basic Info */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Basic Information</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{school.rating} ({school.reviews.length} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-xs">{school.location.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-xs">{school.timing.startTime} - {school.timing.endTime}</span>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Academic Details */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Academic Details</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <p><strong>Board:</strong> {school.details.type}</p>
                          <p><strong>Grades:</strong> {school.details.grades.join(', ')}</p>
                          <p><strong>Medium:</strong> {school.details.medium}</p>
                          <p><strong>Established:</strong> {school.details.established}</p>
                          <p><strong>Students:</strong> {school.details.studentCount.toLocaleString()}</p>
                          <p><strong>Teachers:</strong> {school.details.teacherCount}</p>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Fees */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Fee Structure</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span><strong>Annual:</strong> {formatFees(school.fees.annual)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span><strong>Monthly:</strong> {formatFees(school.fees.monthly)}</span>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Facilities */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Facilities</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-1">
                          {school.facilities.slice(0, 6).map((facility, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-xs">{facility}</span>
                            </div>
                          ))}
                          {school.facilities.length > 6 && (
                            <p className="text-xs text-gray-500">+{school.facilities.length - 6} more</p>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Achievements */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Achievements</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-1">
                          {school.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-500" />
                              <span className="text-xs">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Contact */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">Contact Information</td>
                    {schoolsToCompare.map(school => (
                      <td key={school.id} className="px-6 py-4 text-sm text-gray-900">
                        <div className="space-y-2">
                          <p><strong>Phone:</strong> {school.contact.phone}</p>
                          <p><strong>Email:</strong> {school.contact.email}</p>
                          <p><strong>Website:</strong> 
                            <a href={school.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                              Visit
                            </a>
                          </p>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No schools to compare</h3>
            <p className="text-gray-600 mb-6">
              Add schools to start comparing them side by side.
            </p>
            <button
              onClick={() => setShowAddSchool(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add First School
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
