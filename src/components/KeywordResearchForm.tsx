
import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import { demoKeywordResults } from '@/utils/mockData';

const KeywordResearchForm = () => {
  const [url, setUrl] = useState('');
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };
  
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-panel rounded-xl overflow-hidden"
      >
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Research Keywords</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Website URL (optional)
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enter your website URL to analyze existing content
              </p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Topic or Niche*
              </label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Productivity tools, Digital marketing"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading || !topic}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:hover:bg-primary flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <span>Research Keywords</span>
                )}
              </button>
            </div>
          </form>
          
          {isSubmitted && !isLoading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6"
            >
              <h4 className="text-md font-medium mb-4">Keyword Suggestions for "{topic}"</h4>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Keyword</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Search Volume</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Difficulty</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">CPC</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    {demoKeywordResults.map((keyword, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{keyword.keyword}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{keyword.volume.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{keyword.difficulty}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{keyword.cpc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 flex items-center space-x-1">
                  <span>Export to CSV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default KeywordResearchForm;
