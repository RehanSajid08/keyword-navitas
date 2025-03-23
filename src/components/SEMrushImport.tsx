
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Link } from 'lucide-react';
import { toast } from "sonner";

interface SEMrushImportProps {
  onDataImported: (data: any) => void;
}

const SEMrushImport = ({ onDataImported }: SEMrushImportProps) => {
  const [activeTab, setActiveTab] = useState<string>("file");
  const [file, setFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [domain, setDomain] = useState("");
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setIsImporting(true);
    
    // Simulate processing file
    setTimeout(() => {
      // Mock data import - in a real app, this would process the CSV/Excel file
      const mockSEMrushData = [
        { keyword: "office space software", volume: 2900, difficulty: 67, cpc: "$4.20" },
        { keyword: "office management software", volume: 1800, difficulty: 58, cpc: "$5.10" },
        { keyword: "workspace management", volume: 3200, difficulty: 51, cpc: "$3.80" },
        { keyword: "desk booking app", volume: 5400, difficulty: 42, cpc: "$2.90" },
        { keyword: "hybrid workplace solution", volume: 2200, difficulty: 45, cpc: "$6.10" },
        { keyword: "return to office software", volume: 4100, difficulty: 39, cpc: "$4.50" },
        { keyword: "office utilization analytics", volume: 1500, difficulty: 37, cpc: "$7.20" },
      ];
      
      onDataImported(mockSEMrushData);
      setIsImporting(false);
      toast.success("SEMrush data imported successfully");
    }, 1500);
  };
  
  const handleAPIConnect = () => {
    if (!apiKey) {
      toast.error("Please enter your SEMrush API key");
      return;
    }
    
    if (!domain) {
      toast.error("Please enter a domain to analyze");
      return;
    }
    
    setIsImporting(true);
    
    // Simulate API connection
    setTimeout(() => {
      // Mock data import - in a real app, this would call the SEMrush API
      const mockSEMrushData = [
        { keyword: "office space management", volume: 3400, difficulty: 65, cpc: "$5.30" },
        { keyword: "desk booking system", volume: 4800, difficulty: 54, cpc: "$4.70" },
        { keyword: "workplace analytics", volume: 2900, difficulty: 61, cpc: "$6.20" },
        { keyword: "hot desking software", volume: 3700, difficulty: 48, cpc: "$3.90" },
        { keyword: "office floor plan software", volume: 2100, difficulty: 42, cpc: "$4.10" },
        { keyword: "workplace experience platform", volume: 1800, difficulty: 37, cpc: "$8.30" },
        { keyword: "office space utilization", volume: 2500, difficulty: 53, cpc: "$6.80" },
      ];
      
      onDataImported(mockSEMrushData);
      setIsImporting(false);
      toast.success("Connected to SEMrush API successfully");
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Import SEMrush Data</CardTitle>
        <CardDescription>
          Upload SEMrush export files or connect directly to your SEMrush account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="file" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span>File Upload</span>
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              <span>API Connection</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="file" className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="semrush-file">Upload SEMrush Export File</Label>
              <Input 
                id="semrush-file" 
                type="file" 
                accept=".csv,.xlsx,.xls" 
                onChange={handleFileChange}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Supported formats: CSV, Excel (xlsx, xls)
              </p>
            </div>
            <Button 
              onClick={handleFileUpload} 
              disabled={!file || isImporting}
              className="w-full mt-4"
            >
              {isImporting ? "Importing..." : "Import Data"}
            </Button>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="semrush-api-key">SEMrush API Key</Label>
                <Input
                  id="semrush-api-key"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your SEMrush API key"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="semrush-domain">Domain to Analyze</Label>
                <Input
                  id="semrush-domain"
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="e.g., competitor.com"
                />
              </div>
              
              <Button 
                onClick={handleAPIConnect} 
                disabled={!apiKey || !domain || isImporting}
                className="w-full mt-4"
              >
                {isImporting ? "Connecting..." : "Connect to SEMrush"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SEMrushImport;
