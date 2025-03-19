
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Clipboard, FileText, Share2, Tags, Linkedin } from 'lucide-react';
import { toast } from "sonner";

export interface ContentOutput {
  pillarContent: {
    title: string;
    content: string;
  };
  supportingPages: Array<{
    title: string;
    summary: string;
  }>;
  metaTags: {
    title: string;
    description: string;
    keywords: string;
  };
  socialMedia: {
    linkedin: string[];
  };
}

interface OutputDisplayProps {
  output: ContentOutput | null;
}

const OutputDisplay = ({ output }: OutputDisplayProps) => {
  const [activeTab, setActiveTab] = useState("pillar");

  if (!output) return null;

  const copyToClipboard = (text: string, itemName: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${itemName} copied to clipboard`);
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8"
    >
      <Card className="border border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Generated Content</CardTitle>
          <CardDescription>
            Review and use the generated content across your platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="pillar" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Pillar Content</span>
              </TabsTrigger>
              <TabsTrigger value="supporting" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Supporting Pages</span>
              </TabsTrigger>
              <TabsTrigger value="meta" className="flex items-center gap-2">
                <Tags className="h-4 w-4" />
                <span className="hidden sm:inline">Meta Tags</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Social Media</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pillar" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">{output.pillarContent.title}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(
                    `${output.pillarContent.title}\n\n${output.pillarContent.content}`, 
                    "Pillar content"
                  )}
                >
                  <Clipboard className="h-4 w-4 mr-2" /> Copy
                </Button>
              </div>
              <div className="whitespace-pre-line bg-slate-50 dark:bg-slate-900 p-4 rounded-md text-sm">
                {output.pillarContent.content}
              </div>
            </TabsContent>
            
            <TabsContent value="supporting" className="space-y-6">
              {output.supportingPages.map((page, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4 flex flex-row items-center justify-between bg-slate-50 dark:bg-slate-900">
                    <CardTitle className="text-md">{page.title}</CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard(
                        `${page.title}\n\n${page.summary}`, 
                        "Supporting page"
                      )}
                    >
                      <Clipboard className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="p-4 text-sm">
                    {page.summary}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="meta" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-md">Meta Title</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-900 rounded-md">
                  <div className="text-sm">{output.metaTags.title}</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyToClipboard(output.metaTags.title, "Meta title")}
                  >
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-md">Meta Description</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-900 rounded-md">
                  <div className="text-sm">{output.metaTags.description}</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyToClipboard(output.metaTags.description, "Meta description")}
                  >
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-md">Meta Keywords</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-900 rounded-md">
                  <div className="text-sm">{output.metaTags.keywords}</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyToClipboard(output.metaTags.keywords, "Meta keywords")}
                  >
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">LinkedIn Posts</h3>
              </div>
              
              {output.socialMedia.linkedin.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4 flex justify-between items-start gap-4">
                    <div className="text-sm whitespace-pre-line">{post}</div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="shrink-0"
                      onClick={() => copyToClipboard(post, "LinkedIn post")}
                    >
                      <Clipboard className="h-4 w-4 mr-2" /> Copy
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OutputDisplay;
