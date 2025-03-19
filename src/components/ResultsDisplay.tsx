
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { keywordTrends } from '@/utils/mockData';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatData = (keyword: any) => {
  return keyword.trend.map((value: number, index: number) => ({
    name: months[index],
    value
  }));
};

const ResultsDisplay = () => {
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
          <h3 className="text-xl font-semibold mb-6">Keyword Trend Analysis</h3>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Keywords</h4>
                <p className="text-2xl font-semibold mt-2">{keywordTrends.length}</p>
              </div>
              
              <div className="glass-panel rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Search Volume</h4>
                <p className="text-2xl font-semibold mt-2">
                  {Math.round(keywordTrends.reduce((acc, kw) => acc + kw.searchVolume, 0) / keywordTrends.length).toLocaleString()}
                </p>
              </div>
              
              <div className="glass-panel rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Difficulty</h4>
                <p className="text-2xl font-semibold mt-2">
                  {Math.round(keywordTrends.reduce((acc, kw) => acc + kw.difficulty, 0) / keywordTrends.length)}%
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700/50">
              <h4 className="text-md font-medium mb-4">Search Volume Trends</h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={formatData(keywordTrends[0])}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700/50">
                  <h4 className="text-md font-medium">Top Keywords by Volume</h4>
                </div>
                <div className="p-4 space-y-4">
                  {keywordTrends
                    .sort((a, b) => b.searchVolume - a.searchVolume)
                    .slice(0, 5)
                    .map((kw, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{kw.keyword}</span>
                        <span className="text-sm font-medium">{kw.searchVolume.toLocaleString()}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700/50">
                  <h4 className="text-md font-medium">Keywords by Difficulty</h4>
                </div>
                <div className="p-4 space-y-4">
                  {keywordTrends
                    .sort((a, b) => a.difficulty - b.difficulty)
                    .slice(0, 5)
                    .map((kw, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{kw.keyword}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                width: `${kw.difficulty}%`,
                                backgroundColor: kw.difficulty < 30 ? '#10b981' : kw.difficulty < 60 ? '#f59e0b' : '#ef4444'
                              }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{kw.difficulty}%</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsDisplay;
