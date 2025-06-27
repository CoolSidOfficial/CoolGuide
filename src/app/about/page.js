import Navbar from "../Components/main/Navbar";
import Footer from "../Components/Footer";
// function about(){
//     return(
//         <>
//         <Navbar/>
//         <header className="text-white justify-center text-center flex   flex-col bg-slate-400 w-auto h-80">
//             <div className="text-5xl">About Coolguide</div>
//             <div>Your trusted companion in navigating the complex world of electronics.</div>
//         </header>
//             </>
//     )
// }
// export default about;

import React from 'react';
import { Users, Zap, MessageCircle, ShieldCheck, Laptop, Battery, Fan } from 'lucide-react';

function App() {
  return (
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <Navbar/>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Making Tech Choices 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"> Simple & Social</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expert knowledge, community wisdom, and smart tech to help you find the perfect electronics for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why We Started CoolGuide</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
               Remember the last time you spent hours comparing products, reading countless reviews, and still feeling unsure about your tech purchase? We &apos; ve been there too.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                That&apos;s why we built CoolGuide — to transform the way you make tech decisions. No more endless tabs, conflicting reviews, or post-purchase regrets. Just straightforward, personalized recommendations backed by real community discussions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <Laptop className="w-12 h-12 text-blue-500 mb-4" />
                <span className="text-4xl font-bold text-gray-900 dark:text-white mb-2">50K+</span>
                <span className="text-gray-600 dark:text-gray-300">Products Analyzed</span>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <span className="text-4xl font-bold text-gray-900 dark:text-white mb-2">100K+</span>
                <span className="text-gray-600 dark:text-gray-300">Active Users</span>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <MessageCircle className="w-12 h-12 text-purple-500 mb-4" />
                <span className="text-4xl font-bold text-gray-900 dark:text-white mb-2">250K+</span>
                <span className="text-gray-600 dark:text-gray-300">Community Discussions</span>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <ShieldCheck className="w-12 h-12 text-red-500 mb-4" />
                <span className="text-4xl font-bold text-gray-900 dark:text-white mb-2">98%</span>
                <span className="text-gray-600 dark:text-gray-300">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How CoolGuide Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50">
            <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI analyzes your preferences, budget, and needs to suggest the perfect electronics for you. No more analysis paralysis!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50">
            <div className="bg-green-100 dark:bg-green-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-time Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share product links and instantly join discussions with others considering the same item. Get real insights from real users.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50">
            <div className="bg-purple-100 dark:bg-purple-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Validation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our tech experts verify product claims and provide unbiased insights to ensure you make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What We Cover</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <Laptop className="w-12 h-12 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Laptops</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <Battery className="w-12 h-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Power Banks</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <Fan className="w-12 h-12 text-purple-500 dark:text-purple-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Air Purifiers</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-12 h-12 mx-auto mb-4">
              <span className="absolute inset-0 flex items-center justify-center text-red-500 dark:text-red-400 text-2xl font-bold">+</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">And More</h3>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to make smarter tech decisions?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of tech enthusiasts and never make a regrettable purchase again.
          </p>
          <button className="bg-white text-blue-600 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            Get Started — It&apos;s Free
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;