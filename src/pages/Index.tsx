
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import KeywordResearchForm from '@/components/KeywordResearchForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import ContentGenerator from '@/components/ContentGenerator';
import WordPressExport from '@/components/WordPressExport';

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Navitas - SEO Content Creation & Keyword Research Platform";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for SEO Content</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our all-in-one platform streamlines the entire content creation process, from keyword research to WordPress publishing.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              }
              title="Advanced Keyword Research"
              description="Discover high-performing keywords with detailed metrics on search volume, competition, and trend analysis."
              index={0}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              }
              title="AI Content Generation"
              description="Create high-quality, SEO-optimized content in multiple formats with our advanced AI algorithms."
              index={1}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              }
              title="Trend Analysis"
              description="Track keyword performance over time with visual charts and identify emerging opportunities."
              index={2}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              }
              title="Multi-Format Content"
              description="Generate content in various formats including website pages, blog posts, FAQs, and structured data."
              index={3}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              }
              title="WordPress Integration"
              description="Seamlessly publish your generated content directly to your WordPress website with one click."
              index={4}
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <line x1="6" y1="9" x2="6" y2="21"></line>
                </svg>
              }
              title="Customizable Workflows"
              description="Tailor the content creation process to your specific needs with flexible workflow options."
              index={5}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See Navitas in Action</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Experience the seamless workflow from keyword research to content creation and WordPress publishing.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <KeywordResearchForm />
            <ResultsDisplay />
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContentGenerator />
            <WordPressExport />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the plan that works best for your content creation needs.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel rounded-xl overflow-hidden hover-lift border border-gray-200 dark:border-gray-800 p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">For individuals and small blogs</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">100 keywords per month</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">10,000 words of content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Basic WordPress integration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                Get Started
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel rounded-xl overflow-hidden hover-lift border-2 border-primary p-8 flex flex-col relative md:-mt-4 md:mb-4 shadow-lg"
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase">
                Popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Professional</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">For growing businesses and marketers</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">500 keywords per month</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">50,000 words of content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Advanced WordPress integration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Priority email & chat support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Custom content formats</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                Get Started
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel rounded-xl overflow-hidden hover-lift border border-gray-200 dark:border-gray-800 p-8 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">For agencies and large businesses</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Unlimited keywords</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">200,000 words of content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Multi-site WordPress support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-sm">API access & custom integrations</span>
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join thousands of content creators who are already using Navitas to optimize their SEO strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <a href="/" className="flex items-center space-x-2 mb-4">
                <span className="bg-primary text-white font-semibold h-8 w-8 rounded-md flex items-center justify-center">
                  N
                </span>
                <span className="font-medium text-xl">Navitas</span>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Revolutionizing SEO content creation with AI technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Integrations</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Guides</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Navitas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
