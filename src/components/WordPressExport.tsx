
import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

const WordPressExport = () => {
  const [wpUrl, setWpUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  
  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
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
          <h3 className="text-xl font-semibold mb-4">WordPress Integration</h3>
          
          {!isConnected ? (
            <form onSubmit={handleConnect} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="wp-url" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  WordPress URL
                </label>
                <input
                  type="url"
                  id="wp-url"
                  value={wpUrl}
                  onChange={(e) => setWpUrl(e.target.value)}
                  placeholder="https://your-site.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password or Application Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isConnecting || !wpUrl || !username || !password}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:hover:bg-primary flex items-center justify-center space-x-2"
                >
                  {isConnecting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <span>Connect WordPress</span>
                  )}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                We recommend using application passwords for better security. <a href="#" className="text-primary hover:underline">Learn more</a>
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="font-medium">Connected to {wpUrl}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-md font-medium">Export Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-colors duration-200 cursor-pointer">
                    <div>
                      <h5 className="font-medium">Create New Posts</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Publish content as new blog posts or pages
                      </p>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 w-full">
                        Create New Post
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between hover:border-primary/50 transition-colors duration-200 cursor-pointer">
                    <div>
                      <h5 className="font-medium">Update Existing Content</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Apply changes to pages or posts that already exist
                      </p>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 w-full">
                        Select Content
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button 
                  onClick={() => setIsConnected(false)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Disconnect
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WordPressExport;
