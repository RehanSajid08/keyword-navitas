
import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import { contentFormats, demoContent } from '@/utils/mockData';

const ContentGenerator = () => {
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [selectedKeyword, setSelectedKeyword] = useState('productivity tools');
  
  const toggleFormat = (formatId: string) => {
    setSelectedFormats(prev => 
      prev.includes(formatId) 
        ? prev.filter(id => id !== formatId)
        : [...prev, formatId]
    );
  };
  
  const handleGenerate = () => {
    if (selectedFormats.length === 0) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContent(demoContent);
    }, 3000);
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
          <h3 className="text-xl font-semibold mb-4">Generate Content</h3>
          
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Target Keyword
              </label>
              <select
                value={selectedKeyword}
                onChange={(e) => setSelectedKeyword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
              >
                <option value="productivity tools">productivity tools</option>
                <option value="productivity apps">productivity apps</option>
                <option value="best productivity tools">best productivity tools</option>
                <option value="productivity software">productivity software</option>
                <option value="productivity tools for work">productivity tools for work</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Content Formats
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {contentFormats.map((format) => (
                  <div
                    key={format.id}
                    onClick={() => toggleFormat(format.id)}
                    className={`cursor-pointer rounded-lg p-4 border transition-all duration-200 ${
                      selectedFormats.includes(format.id)
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedFormats.includes(format.id)
                          ? 'border-primary'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {selectedFormats.includes(format.id) && (
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{format.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{format.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || selectedFormats.length === 0}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:hover:bg-primary flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Generating Content...</span>
                  </>
                ) : (
                  <span>Generate Content</span>
                )}
              </button>
            </div>
          </div>
          
          {generatedContent && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 space-y-6"
            >
              <div>
                <h4 className="text-md font-medium mb-3">Generated Content</h4>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Title</h5>
                    <p className="text-lg font-semibold">{generatedContent.title}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Meta Description</h5>
                    <p className="text-sm">{generatedContent.meta}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">Content Sections</h5>
                    {generatedContent.sections.map((section: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <h6 className="font-medium">{section.heading}</h6>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{section.content}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">FAQ Section</h5>
                    {generatedContent.faq.map((item: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <h6 className="font-medium">{item.question}</h6>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download</span>
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                    <path d="M9 22l9-9"></path>
                    <path d="M17.5 13.5L19 12l2 2-2 2-1.5-1.5"></path>
                    <path d="M13.5 17.5L12 19l2 2 2-2-1.5-1.5"></path>
                    <line x1="19" y1="12" x2="21" y2="14"></line>
                    <line x1="19" y1="16" x2="21" y2="14"></line>
                    <line x1="14" y1="19" x2="12" y2="21"></line>
                    <line x1="14" y1="23" x2="12" y2="21"></line>
                  </svg>
                  <span>Export to WordPress</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContentGenerator;
