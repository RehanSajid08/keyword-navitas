
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                SEO Content Creation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Transform Your <span className="text-primary">SEO Strategy</span> With AI
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-balance">
                Research keywords, analyze trends, and generate high-quality content in multiple formats — all with a single platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/95 transition-all duration-300 transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>See Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={cn(
                    "w-8 h-8 rounded-full border-2 border-white dark:border-gray-900",
                    i === 1 ? "bg-blue-400" :
                    i === 2 ? "bg-green-400" :
                    i === 3 ? "bg-amber-400" :
                    "bg-purple-400"
                  )}>
                  </div>
                ))}
              </div>
              <span>Trusted by 2,000+ content creators</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="glass-panel rounded-xl overflow-hidden shadow-glass-lg">
              <div className="bg-gray-50 dark:bg-gray-800/30 p-3 border-b border-gray-200 dark:border-gray-700/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Keyword Research</span>
                  </div>
                  <div className="h-32 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/20 p-4">
                    <div className="flex flex-col space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Content Generation</span>
                  </div>
                  <div className="h-32 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/20 p-4">
                    <div className="flex flex-col space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
