
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

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
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="bg-primary text-white font-semibold h-8 w-8 rounded-md flex items-center justify-center">
            N
          </span>
          <span className={cn(
            "font-medium text-xl transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-90"
          )}>
            Navitas
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
