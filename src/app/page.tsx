'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SchoolCard from '@/components/SchoolCard';
import { schoolsData, getSchoolsByLocation } from '@/data/schools';
import { getRecentlyViewedSchools, getUserLocation } from '@/utils/storage';
import { School } from '@/types';
import { Star, MapPin, Award, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [recentlyViewedSchools, setRecentlyViewedSchools] = useState<School[]>([]);
  const [nearbySchools, setNearbySchools] = useState<School[]>([]);
  const [featuredSchools, setFeaturedSchools] = useState<School[]>([]);

  useEffect(() => {
    // Get recently viewed schools
    const recent = getRecentlyViewedSchools(schoolsData);
    setRecentlyViewedSchools(recent.slice(0, 4));

    // Get featured schools (top rated)
    const featured = [...schoolsData]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
    setFeaturedSchools(featured);

    // Get nearby schools if location is available
    const savedLocation = getUserLocation();
    if (savedLocation) {
      const nearby = getSchoolsByLocation(savedLocation.lat, savedLocation.lng, 100);
      setNearbySchools(nearby.slice(0, 4));
    }
  }, []);

  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Verified Reviews",
      description: "Read authentic reviews from parents and students"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Location Based",
      description: "Find schools near you with distance calculation"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Detailed Information",
      description: "Complete school profiles with fees, facilities, and more"
    },
    {
      icon: <Play className="w-8 h-8 text-purple-500" />,
      title: "Virtual Tours",
      description: "Explore schools virtually before visiting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <Hero />

        {/* Recently Viewed Schools */}
        {recentlyViewedSchools.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Recently Viewed</h2>
                <Link 
                  href="/recently-viewed"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentlyViewedSchools.map((school) => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Schools */}
        {nearbySchools.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Schools Near You</h2>
                <Link 
                  href="/nearby"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbySchools.map((school) => (
                  <SchoolCard key={school.id} school={school} showDistance={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Schools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Schools</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover top-rated schools with excellent facilities and academic performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/schools"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Explore All Schools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SchoolDekho?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive information to help you make the best decision for your child&apos;s education
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Parents Across India</h2>
              <p className="text-xl opacity-90">
                Join thousands of parents who have found the perfect school for their children
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="opacity-90">Schools Listed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="opacity-90">Happy Parents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect School?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your search today and discover schools that match your requirements and preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Searching
              </Link>
              <Link
                href="/about"
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SchoolDekho</h3>
              <p className="text-gray-400 mb-4">
                Find the perfect school for your child with comprehensive information, reviews, and virtual tours.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/schools" className="text-gray-400 hover:text-white">All Schools</Link></li>
                <li><Link href="/search" className="text-gray-400 hover:text-white">Search Schools</Link></li>
                <li><Link href="/compare" className="text-gray-400 hover:text-white">Compare Schools</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-white">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/feedback" className="text-gray-400 hover:text-white">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SchoolDekho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
