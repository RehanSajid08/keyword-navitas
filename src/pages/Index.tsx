
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import FeatureCard from '@/components/FeatureCard';
import ContentResearchForm from '@/components/ContentResearchForm';
import OutputDisplay, { ContentOutput } from '@/components/OutputDisplay';
import { generateContent } from '@/utils/mockContentGenerator';
import { BookOpen, LayoutGrid, Tag, Share2 } from 'lucide-react';
import { toast } from "sonner";

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<ContentOutput | null>(null);

  const handleFormSubmit = async (formData: { keywords: string; context: string; author: string }) => {
    if (!formData.keywords.trim()) {
      toast.error("Please enter at least one keyword");
      return;
    }

    setIsGenerating(true);
    try {
      const content = await generateContent(formData);
      setGeneratedContent(content);
      toast.success("Content generated successfully!");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
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
                <span className="text-primary">Content That Performs</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Transform your content strategy with AI-powered research, creation, and optimization tools that deliver results.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Content Success</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our intelligent content assistant helps you research, create, and optimize content for maximum impact.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Pillar Content"
              description="Generate comprehensive, authoritative content that serves as the foundation for your content strategy."
              index={0}
            />
            
            <FeatureCard
              icon={<LayoutGrid className="h-6 w-6" />}
              title="Supporting Pages"
              description="Create complementary content pieces that enhance your pillar content and target long-tail keywords."
              index={1}
            />
            
            <FeatureCard
              icon={<Tag className="h-6 w-6" />}
              title="SEO Optimization"
              description="Get optimized meta tags and structured data suggestions to improve search engine visibility."
              index={2}
            />
            
            <FeatureCard
              icon={<Share2 className="h-6 w-6" />}
              title="Social Media Content"
              description="Generate platform-specific social media content to promote your articles and engage your audience."
              index={3}
            />
          </div>
        </div>
      </section>
      
      {/* Content Generator Section */}
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
                Content Generator
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Optimized Content in Minutes</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Enter your target keywords and context to generate comprehensive content packages ready for publication.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <ContentResearchForm 
                onSubmit={handleFormSubmit} 
                isLoading={isGenerating} 
              />
            </div>
            
            <div className="lg:col-span-7">
              {generatedContent ? (
                <OutputDisplay output={generatedContent} />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your Content Will Appear Here</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">
                      Fill out the form to generate your comprehensive content package including pillar content, supporting pages, meta tags, and social posts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Three-Step Process</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our content creation tool is designed to be intuitive and efficient, allowing you to generate high-quality content in minutes.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Enter Keywords</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Input your target keywords and provide context about your audience and content goals.
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
                <h3 className="text-xl font-semibold mb-4">Generate Content</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI analyzes your input and generates optimized content packages ready for review.
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
                <h3 className="text-xl font-semibold mb-4">Export & Publish</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Review, refine, and export your content to WordPress or copy it directly to your preferred platform.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Try our intelligent content creator today and experience the difference that data-driven, optimized content can make.
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
              &copy; {new Date().getFullYear()} Content Creation Tool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
