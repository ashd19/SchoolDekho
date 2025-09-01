import Header from '@/components/Header';
import { School, Users, Award, Globe, Heart, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const features = [
    {
      icon: <School className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive School Database",
      description: "Access detailed information about thousands of schools across India"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Parent Reviews & Ratings",
      description: "Read authentic reviews from parents and students to make informed decisions"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Verified Information",
      description: "All school information is verified and regularly updated for accuracy"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Virtual Tours",
      description: "Explore schools virtually before visiting them in person"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Personalized Recommendations",
      description: "Get school recommendations based on your preferences and location"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure & Private",
      description: "Your data is protected with industry-standard security measures"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Schools Listed" },
    { number: "50,000+", label: "Happy Parents" },
    { number: "500+", label: "Cities Covered" },
    { number: "4.8★", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Education Experts",
      role: "Curriculum & Standards",
      description: "Our team includes experienced educators and curriculum specialists"
    },
    {
      name: "Technology Team",
      role: "Platform Development",
      description: "Skilled developers creating the best user experience"
    },
    {
      name: "Data Analysts",
      role: "Information Verification",
      description: "Ensuring all school information is accurate and up-to-date"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SchoolDekho
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We&apos;re on a mission to help parents find the perfect school for their children 
              by providing comprehensive, verified information about schools across India.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every child deserves the best education possible. We believe that finding the right school 
                is one of the most important decisions parents make. SchoolDekho was created to simplify 
                this process by providing comprehensive, reliable information about schools across India.
              </p>
              <p className="text-lg text-gray-600">
                Our platform connects parents with detailed school profiles, authentic reviews, 
                virtual tours, and powerful search tools to help them make informed decisions 
                about their child&apos;s education.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SchoolDekho?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide everything you need to make the best decision for your child&apos;s education
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals behind SchoolDekho
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
                <p className="text-gray-600">Building trust through verified information and authentic reviews</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Care</h3>
                <p className="text-gray-600">Caring about every child&apos;s educational journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for excellence in everything we do</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Building a supportive community of parents and educators</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect School?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of parents who have found the ideal school for their children 
              using SchoolDekho&apos;s comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Searching
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
