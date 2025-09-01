'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import React from 'react';

export default function ContactPage() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "93935c42-1199-404e-985d-670f1456bd56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }); 

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: ["+91 1800-123-4567", "+91 98765-43210"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email",
      details: ["support@schooldekho.com", "info@schooldekho.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Office",
      details: ["123 Education Street", "Mumbai, Maharashtra 400001", "India"],
      description: "Visit our office during business hours"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      description: "We're here to help during these hours"
    }
  ];

  const faqs = [
    {
      question: "How do I add a school to SchoolDekho?",
      answer: "Schools can be added by contacting our team. We verify all information before listing to ensure accuracy."
    },
    {
      question: "Are the reviews on SchoolDekho verified?",
      answer: "Yes, we have a verification process for reviews to ensure they come from genuine parents and students."
    },
    {
      question: "How often is school information updated?",
      answer: "We update school information regularly and encourage schools to keep their profiles current."
    },
    {
      question: "Can I compare multiple schools?",
      answer: "Yes, you can compare schools side by side to make informed decisions about your child's education."
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help you find the perfect school for your child.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id='contact' className=''>
              <h2 className="text-2xl font-bold  text-gray-900 mb-6">Send us a Message</h2>
              
              <form
                onSubmit={onSubmit}
                className="space-y-6 bg-white border-blue-500 rounded-lg shadow-sm border  p-6"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  />

                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                {result && (
                  <p className="mt-4 text-center text-sm text-gray-600">{result}</p>
                )}
              </form>
            </div>
            {/* Contact Information */}
            <div >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about SchoolDekho
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600">
                Come meet our team in person
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </div>
              <div className="text-gray-600">
                <p className="font-medium">SchoolDekho Office</p>
                <p>123 Education Street, Mumbai, Maharashtra 400001, India</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}