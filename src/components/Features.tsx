
import React from 'react';
import { 
  MessageSquare, 
  Zap, 
  Lock, 
  Database, 
  LineChart, 
  FileText 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary-500" />,
      title: "Natural Conversations",
      description: "Engage in fluid, natural conversations with our advanced language model that understands context and nuance."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-500" />,
      title: "Lightning Fast",
      description: "Get responses in milliseconds with our optimized infrastructure built for speed and reliability."
    },
    {
      icon: <Lock className="h-10 w-10 text-primary-500" />,
      title: "Enterprise Security",
      description: "Your data stays private with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: <Database className="h-10 w-10 text-primary-500" />,
      title: "Knowledge Integration",
      description: "Connect to your existing data sources to make the AI smarter about your specific domain."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary-500" />,
      title: "Analytics Dashboard",
      description: "Track usage, performance metrics, and gain insights into how your team uses AI."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-500" />,
      title: "Document Analysis",
      description: "Extract insights, summarize content, and automate document processing workflows."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides cutting-edge language model capabilities to transform how you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
