
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import FeatureCard from '@/components/FeatureCard';
import ContentResearchForm from '@/components/ContentResearchForm';
import OutputDisplay, { ContentOutput } from '@/components/OutputDisplay';
import SEMrushImport from '@/components/SEMrushImport';
import KeywordDataTable from '@/components/KeywordDataTable';
import { generateContent } from '@/utils/mockContentGenerator';
import { BookOpen, LayoutGrid, Tag, Share2, Database, PenTool, Layers, RefreshCw } from 'lucide-react';
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: string;
}

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<ContentOutput | null>(null);
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("data");

  const handleFormSubmit = async (formData: { 
    keywords: string; 
    context: string; 
    author: string; 
    apiKey: string;
    contentType: string;
    publishDate?: string;
  }) => {
    if (!formData.keywords.trim()) {
      toast.error("Please enter at least one keyword");
      return;
    }

    if (!formData.apiKey.trim()) {
      toast.error("OpenAI API key is required");
      return;
    }

    setIsGenerating(true);
    try {
      const content = await generateContent({
        keywords: formData.keywords,
        context: formData.context,
        author: formData.author,
        apiKey: formData.apiKey
      });
      setGeneratedContent(content);
      setActiveTab("content");
      toast.success("Content generated successfully!");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSEMrushDataImport = (data: KeywordData[]) => {
    setKeywordData(data);
    setActiveTab("keywords");
  };

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeyword(keyword);
    setActiveTab("generate");
    toast.success(`Selected keyword: ${keyword}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Research, Create & Optimize<br />
                <span className="text-primary">SEO-Driven Content</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Transform your content strategy with SEMrush data and AI-powered content generation that delivers SEO-optimized results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for SEO Content Success</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our intelligent content agent combines SEMrush data with AI-powered creation to help you research, create, and optimize content for maximum impact.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Database className="h-6 w-6" />}
              title="SEMrush Integration"
              description="Import data directly from SEMrush for comprehensive keyword research and competitor analysis."
              index={0}
            />
            
            <FeatureCard
              icon={<PenTool className="h-6 w-6" />}
              title="AI Content Creation"
              description="Generate high-quality, SEO-optimized content using OpenAI's GPT-4 with your specific requirements."
              index={1}
            />
            
            <FeatureCard
              icon={<Layers className="h-6 w-6" />}
              title="Content Packages"
              description="Create pillar content, supporting pages, meta tags, and social media posts from a single keyword."
              index={2}
            />
            
            <FeatureCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="Automated Publishing"
              description="Schedule and automatically post generated content to WordPress as blog posts or landing pages."
              index={3}
            />
          </div>
        </div>
      </section>
      
      {/* Content Workflow Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full inline-block mb-4">
                Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Content Creation Workflow</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Import SEMrush data, select keywords, and generate comprehensive content packages in minutes.
              </p>
            </motion.div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="data">Import Data</TabsTrigger>
              <TabsTrigger value="keywords">Select Keywords</TabsTrigger>
              <TabsTrigger value="generate">Generate Content</TabsTrigger>
              <TabsTrigger value="content">Review & Publish</TabsTrigger>
            </TabsList>
            
            <TabsContent value="data">
              <div className="max-w-3xl mx-auto">
                <SEMrushImport onDataImported={handleSEMrushDataImport} />
              </div>
            </TabsContent>
            
            <TabsContent value="keywords">
              <div className="max-w-4xl mx-auto">
                {keywordData.length > 0 ? (
                  <KeywordDataTable data={keywordData} onKeywordSelect={handleKeywordSelect} />
                ) : (
                  <div className="text-center p-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                    <Database className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No SEMrush Data Imported</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                      Import data from SEMrush first to see keywords and metrics for content creation.
                    </p>
                    <button 
                      onClick={() => setActiveTab("data")}
                      className="px-4 py-2 bg-primary text-white rounded-md"
                    >
                      Import SEMrush Data
                    </button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="generate">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <ContentResearchForm 
                    onSubmit={handleFormSubmit} 
                    isLoading={isGenerating} 
                    selectedKeyword={selectedKeyword}
                  />
                </div>
                
                <div className="lg:col-span-7">
                  {selectedKeyword ? (
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 h-full">
                      <h3 className="text-xl font-semibold mb-4">Keyword Insights: {selectedKeyword}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {keywordData.filter(item => item.keyword === selectedKeyword).map((data, idx) => (
                          <div key={idx}>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Volume</p>
                              <p className="text-2xl font-bold">{data.volume.toLocaleString()}</p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                              <p className="text-sm text-gray-500 dark:text-gray-400">Keyword Difficulty</p>
                              <div className="flex items-center mt-1">
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full rounded-full ${
                                      data.difficulty > 70 ? "bg-red-500" : 
                                      data.difficulty > 50 ? "bg-yellow-500" : 
                                      "bg-green-500"
                                    }`} 
                                    style={{ width: `${data.difficulty}%` }}
                                  />
                                </div>
                                <span className="ml-2">{data.difficulty}</span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {data.difficulty > 70 ? "High difficulty" : 
                                 data.difficulty > 50 ? "Medium difficulty" : 
                                 "Low difficulty"}
                              </p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                              <p className="text-sm text-gray-500 dark:text-gray-400">Cost Per Click</p>
                              <p className="text-2xl font-bold">{data.cpc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Content Recommendations</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Create a comprehensive guide targeting "{selectedKeyword}"</li>
                          <li>Include related keywords and long-tail variations</li>
                          <li>Structure with H2 and H3 headings for better readability</li>
                          <li>Add practical examples and case studies</li>
                          <li>Include visuals like infographics or diagrams</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl h-full flex flex-col justify-center items-center">
                      <Tag className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Keyword Selected</h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                        Please select a keyword from SEMrush data to see insights and generate content.
                      </p>
                      <button 
                        onClick={() => setActiveTab("keywords")}
                        className="px-4 py-2 bg-primary text-white rounded-md"
                      >
                        Select a Keyword
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content">
              {generatedContent ? (
                <OutputDisplay output={generatedContent} />
              ) : (
                <div className="text-center p-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg max-w-4xl mx-auto">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Content Generated Yet</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                    Generate content first to review, edit, and publish your SEO-optimized content package.
                  </p>
                  <button 
                    onClick={() => setActiveTab("generate")}
                    className="px-4 py-2 bg-primary text-white rounded-md"
                  >
                    Generate Content
                  </button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Four-Step Process</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our SEO content workflow is designed to be efficient and effective, helping you create high-quality content that ranks.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Import SEMrush Data</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload SEMrush exports or connect directly to your SEMrush account for keyword insights.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Select Keywords</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose high-potential keywords based on volume, difficulty, and relevance to your business.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Generate Content</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use AI to create comprehensive content packages optimized for search engines and your audience.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Publish & Promote</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Schedule and automatically publish to WordPress, then promote with generated social media content.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your SEO Strategy?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Try our SEO content agent today and experience the difference that data-driven, AI-powered content can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} SEO Content Generation Tool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
