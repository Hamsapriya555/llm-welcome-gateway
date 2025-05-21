
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">Unlock the Power</span> of Language AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leverage state-of-the-art large language models to transform your workflows,
            automate tasks, and build incredible AI-powered experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onGetStarted}
              className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="text-primary-600 border-primary-500 hover:bg-primary-50 text-lg px-8 py-6 h-auto rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video gradient-bg opacity-10 absolute inset-0"></div>
            <div className="aspect-video bg-black/5 p-4 md:p-8 relative">
              {/* Mock console/code example */}
              <div className="bg-gray-900 rounded-lg h-full w-full overflow-hidden shadow-inner">
                <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-gray-400 text-sm ml-2">AI Assistant</div>
                </div>
                <div className="p-4 text-left">
                  <div className="text-sm text-green-400 mb-2">{"> Request advanced LLM analysis"}</div>
                  <div className="text-white mb-4">
                    <p className="mb-2">Analyzing market data using advanced language model...</p>
                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-500 h-full w-3/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-green-400 mb-2">{"> Generate comprehensive report"}</div>
                  <div className="text-white mb-4">
                    <p className="animate-pulse">Creating detailed insights from analysis...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
