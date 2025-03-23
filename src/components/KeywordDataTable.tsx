
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown, Download } from 'lucide-react';

interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: string;
}

interface KeywordDataTableProps {
  data: KeywordData[];
  onKeywordSelect: (keyword: string) => void;
}

const KeywordDataTable = ({ data, onKeywordSelect }: KeywordDataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof KeywordData>("volume");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  
  const handleSort = (field: keyof KeywordData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };
  
  const filteredData = data.filter(item =>
    item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortField === "keyword") {
      return sortDirection === "asc" 
        ? a.keyword.localeCompare(b.keyword)
        : b.keyword.localeCompare(a.keyword);
    } else if (sortField === "cpc") {
      const aValue = parseFloat(a.cpc.replace("$", ""));
      const bValue = parseFloat(b.cpc.replace("$", ""));
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    } else {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
  });
  
  const exportToCSV = () => {
    const headers = ["Keyword", "Volume", "Difficulty", "CPC"];
    const csvData = sortedData.map(item => 
      `"${item.keyword}",${item.volume},${item.difficulty},"${item.cpc}"`
    );
    
    const csv = [headers.join(","), ...csvData].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "semrush_keywords.csv");
    link.click();
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" onClick={exportToCSV}>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] cursor-pointer" onClick={() => handleSort("keyword")}>
                <div className="flex items-center">
                  Keyword
                  {sortField === "keyword" && (
                    <ArrowUpDown className={`ml-2 h-4 w-4 ${sortField === "keyword" ? "opacity-100" : "opacity-0"}`} />
                  )}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("volume")}>
                <div className="flex items-center">
                  Volume
                  {sortField === "volume" && (
                    <ArrowUpDown className={`ml-2 h-4 w-4 ${sortField === "volume" ? "opacity-100" : "opacity-0"}`} />
                  )}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("difficulty")}>
                <div className="flex items-center">
                  Difficulty
                  {sortField === "difficulty" && (
                    <ArrowUpDown className={`ml-2 h-4 w-4 ${sortField === "difficulty" ? "opacity-100" : "opacity-0"}`} />
                  )}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("cpc")}>
                <div className="flex items-center">
                  CPC
                  {sortField === "cpc" && (
                    <ArrowUpDown className={`ml-2 h-4 w-4 ${sortField === "cpc" ? "opacity-100" : "opacity-0"}`} />
                  )}
                </div>
              </TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.keyword}</TableCell>
                <TableCell>{item.volume.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          item.difficulty > 70 ? "bg-red-500" : 
                          item.difficulty > 50 ? "bg-yellow-500" : 
                          "bg-green-500"
                        }`} 
                        style={{ width: `${item.difficulty}%` }}
                      />
                    </div>
                    <span className="ml-2 text-xs">{item.difficulty}</span>
                  </div>
                </TableCell>
                <TableCell>{item.cpc}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onKeywordSelect(item.keyword)}
                  >
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default KeywordDataTable;
