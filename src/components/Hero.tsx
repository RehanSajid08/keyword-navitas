
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8 max-w-xl"
          >
            <div>
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                SEO Content Creation Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Research, Create, and Optimize Content
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                A complete platform for keyword research, trend analysis, and AI-powered content generation with WordPress integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Schedule Demo <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="SEO Content Platform Dashboard" 
                className="w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
