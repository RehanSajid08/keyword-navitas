
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LoadingSpinner from './LoadingSpinner';
import { Lock, Calendar, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormData {
  keywords: string;
  context: string;
  author: string;
  apiKey: string;
  contentType: string;
  publishDate?: string;
}

interface ContentResearchFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
  selectedKeyword?: string;
}

const ContentResearchForm = ({ onSubmit, isLoading, selectedKeyword = '' }: ContentResearchFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    keywords: selectedKeyword,
    context: '',
    author: '',
    apiKey: '',
    contentType: 'blog',
  });
  const [showApiKey, setShowApiKey] = useState(false);
  const [schedulePublish, setSchedulePublish] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Update keywords when selectedKeyword changes
  if (selectedKeyword && formData.keywords !== selectedKeyword) {
    setFormData(prev => ({ ...prev, keywords: selectedKeyword }));
  }

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
              <Label htmlFor="contentType">Content Type</Label>
              <Select 
                value={formData.contentType} 
                onValueChange={(value) => handleSelectChange('contentType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="landingPage">Landing Page</SelectItem>
                  <SelectItem value="product">Product Description</SelectItem>
                  <SelectItem value="pillar">Pillar Content</SelectItem>
                  <SelectItem value="guide">Complete Guide</SelectItem>
                </SelectContent>
              </Select>
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
              <Label htmlFor="author">Author</Label>
              <Select 
                value={formData.author} 
                onValueChange={(value) => handleSelectChange('author', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
                  <SelectItem value="Michael Chen">Michael Chen</SelectItem>
                  <SelectItem value="Jennifer Smith">Jennifer Smith</SelectItem>
                  <SelectItem value="Robert Garcia">Robert Garcia</SelectItem>
                  <SelectItem value="Custom">Custom Author...</SelectItem>
                </SelectContent>
              </Select>
              {formData.author === 'Custom' && (
                <Input
                  name="customAuthor"
                  placeholder="Enter custom author name"
                  className="mt-2"
                  onChange={(e) => handleSelectChange('author', e.target.value)}
                />
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="schedule-checkbox"
                checked={schedulePublish}
                onChange={() => setSchedulePublish(!schedulePublish)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="schedule-checkbox" className="text-sm cursor-pointer">
                Schedule publication
              </Label>
            </div>
            
            {schedulePublish && (
              <div className="space-y-2">
                <Label htmlFor="publishDate">Publication Date</Label>
                <div className="relative">
                  <Input
                    id="publishDate"
                    name="publishDate"
                    type="date"
                    value={formData.publishDate}
                    onChange={handleChange}
                    className="w-full pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Label htmlFor="apiKey">OpenAI API Key</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[220px] text-xs">
                          Provide your OpenAI API key to generate content. Your key is not stored on our servers.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
                  required
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Required for content generation. We recommend using an API key with appropriate rate limits.
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
