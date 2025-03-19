
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoadingSpinner from './LoadingSpinner';
import { Lock } from 'lucide-react';

interface FormData {
  keywords: string;
  context: string;
  author: string;
  apiKey: string;
}

interface ContentResearchFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const ContentResearchForm = ({ onSubmit, isLoading }: ContentResearchFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    keywords: '',
    context: '',
    author: '',
    apiKey: '',
  });
  const [showApiKey, setShowApiKey] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full">
      <div className="glass-panel rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">Research & Create Content</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="keywords">Target Keywords</Label>
              <Input
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                placeholder="Enter primary keywords (e.g., content marketing, SEO strategy)"
                required
                className="w-full"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Separate multiple keywords with commas
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="context">Content Context</Label>
              <Textarea
                id="context"
                name="context"
                value={formData.context}
                onChange={handleChange}
                placeholder="Provide context about your target audience, goals, and any specific requirements"
                rows={4}
                className="w-full resize-none"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="author">Author (Optional)</Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Who will be listed as the author of this content?"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="apiKey">OpenAI API Key (Optional)</Label>
                <button 
                  type="button"
                  className="text-xs text-primary hover:text-primary/80 flex items-center"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? 'Hide' : 'Show'} API Key
                </button>
              </div>
              <div className="relative">
                <Input
                  id="apiKey"
                  name="apiKey"
                  type={showApiKey ? 'text' : 'password'}
                  value={formData.apiKey}
                  onChange={handleChange}
                  placeholder="sk-..."
                  className="w-full pr-10"
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                For better results, provide your OpenAI API key. If not provided, a mock service will be used instead.
              </p>
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" /> 
                  Generating Content...
                </>
              ) : (
                "Generate Content"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentResearchForm;
