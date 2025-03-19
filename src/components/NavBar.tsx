
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled 
          ? "bg-white dark:bg-gray-900 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="https://cdn-ilblgal.nitrocdn.com/LtOfWpqsvRVXueIPEGVTBaxpvBAGgdOw/assets/images/optimized/rev-8c34eb7/www.officespacesoftware.com/wp-content/uploads/oss-logo-top-nav-v1.png" 
            alt="OfficeSpace Logo" 
            className="h-8" 
          />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border-blue-600 text-blue-600 hover:bg-blue-50">
            Request Demo
          </Button>
          <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
