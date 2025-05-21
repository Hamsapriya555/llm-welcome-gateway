
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const LandingPage: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  const handleLoginClick = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };
  
  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };
  
  const handleModalClose = () => {
    setShowAuthModal(false);
  };
  
  const switchToSignup = () => {
    setAuthMode('signup');
  };
  
  const switchToLogin = () => {
    setAuthMode('login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onLoginClick={handleLoginClick} 
        onSignupClick={handleSignupClick} 
      />
      <Hero onGetStarted={handleSignupClick} />
      <Features />
      
      {/* Pricing section (simplified) */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for you and start leveraging AI language models today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-4">$9<span className="text-xl text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1,000 queries per month
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic models
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
              </ul>
              <button 
                onClick={handleSignupClick}
                className="w-full py-2 px-4 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="border-2 border-primary-500 rounded-xl p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">$29<span className="text-xl text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5,000 queries per month
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced models
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API access
                </li>
              </ul>
              <button 
                onClick={handleSignupClick}
                className="w-full py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Get Started
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">$99<span className="text-xl text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited queries
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All models + custom
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Dedicated support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <button 
                onClick={handleSignupClick}
                className="w-full py-2 px-4 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About LLM AI</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a team of AI experts, engineers, and designers passionate about making advanced 
              language models accessible to everyone. Our mission is to empower businesses and 
              individuals with AI tools that enhance productivity and creativity.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2023, we've been at the forefront of AI development, working with 
              organizations of all sizes to implement language model solutions that drive real results.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Auth Modal */}
      <Dialog open={showAuthModal} onOpenChange={handleModalClose}>
        <DialogContent className="p-0 overflow-hidden max-w-md">
          {authMode === 'login' ? (
            <LoginForm onSwitchToSignup={switchToSignup} />
          ) : (
            <SignupForm onSwitchToLogin={switchToLogin} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;
