
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold gradient-text">LLM AI</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
            <Button variant="outline" onClick={onLoginClick} className="font-medium">Login</Button>
            <Button 
              onClick={onSignupClick}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
            >
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
              <Button variant="outline" onClick={onLoginClick} className="font-medium w-full">Login</Button>
              <Button 
                onClick={onSignupClick}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors w-full"
              >
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
