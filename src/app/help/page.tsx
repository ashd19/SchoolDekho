import Header from '@/components/Header';
import { Search, BookOpen, MessageCircle, Phone, Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          question: "How do I search for schools?",
          answer: "Use the search bar on the homepage to search by school name, location, or board type. You can also use filters to narrow down your search based on fees, rating, and other criteria."
        },
        {
          question: "How do I save schools to my list?",
          answer: "Click the heart icon on any school card to save it to your favorites. You can view all your saved schools in your profile section."
        },
        {
          question: "How do I compare schools?",
          answer: "Select multiple schools and use the compare feature to see them side by side. This helps you make informed decisions based on fees, facilities, and other factors."
        }
      ]
    },
    {
      title: "School Information",
      icon: <Search className="w-6 h-6" />,
      questions: [
        {
          question: "How accurate is the school information?",
          answer: "We verify all school information through multiple sources and regular updates. Schools can also update their own profiles to ensure accuracy."
        },
        {
          question: "How often is information updated?",
          answer: "School information is updated regularly. We encourage schools to keep their profiles current and we also conduct periodic verification checks."
        },
        {
          question: "Can I trust the reviews and ratings?",
          answer: "Yes, we have a verification process for reviews to ensure they come from genuine parents and students. We also moderate reviews to maintain quality."
        }
      ]
    },
    {
      title: "Account & Privacy",
      icon: <MessageCircle className="w-6 h-6" />,
      questions: [
        {
          question: "How do I create an account?",
          answer: "Currently, you can use SchoolDekho without creating an account. However, creating an account allows you to save schools, write reviews, and get personalized recommendations."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard security measures to protect your personal information. We never share your data with third parties without your consent."
        },
        {
          question: "How do I delete my account?",
          answer: "You can delete your account by contacting our support team. We'll process your request within 30 days and remove all your personal data."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      action: "Start Chat",
      href: "#"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: <Phone className="w-8 h-8 text-green-600" />,
      action: "Call Now",
      href: "tel:+9118001234567"
    },
    {
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      action: "Send Email",
      href: "mailto:support@schooldekho.com"
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
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions and get the support you need
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <a
                    href={option.href}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              {helpCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((item, itemIndex) => (
                      <details key={itemIndex} className="group">
                        <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-medium text-gray-900">{item.question}</h4>
                            <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                          </div>
                        </summary>
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/schools"
                className="p-6 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Browse Schools</h3>
                <p className="text-blue-700">Explore all schools in our database</p>
              </Link>
              
              <Link
                href="/search"
                className="p-6 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-green-900 mb-2">Search Schools</h3>
                <p className="text-green-700">Find schools based on your criteria</p>
              </Link>
              
              <Link
                href="/recently-viewed"
                className="p-6 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Recently Viewed</h3>
                <p className="text-purple-700">See schools you&apos;ve recently explored</p>
              </Link>
              
              <Link
                href="/contact"
                className="p-6 bg-orange-50 rounded-lg text-center hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Contact Us</h3>
                <p className="text-orange-700">Get in touch with our support team</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="tel:+9118001234567"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
