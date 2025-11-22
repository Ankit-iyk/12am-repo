import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface UploadSectionProps {
  onUpload: (data: any[]) => void;
}

export const UploadSection = ({ onUpload }: UploadSectionProps) => {
  const [smsText, setSmsText] = useState("");
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  const [processing, setProcessing] = useState(false);

  const handlePaste = () => {
    setSmsText("");
    toast.info("Paste your SMS messages in the text area");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setSmsText(content);
        toast.success("File uploaded successfully");
      };
      reader.readAsText(file);
    }
  };

  const processSMS = () => {
    if (!smsText.trim()) {
      toast.error("Please enter or upload SMS messages");
      return;
    }

    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      const mockData = [
        { date: "2024-01-15", type: "debit", amount: 2500, category: "Food", merchant: "Swiggy" },
        { date: "2024-01-16", type: "debit", amount: 450, category: "Transport", merchant: "Uber" },
        { date: "2024-01-17", type: "credit", amount: 50000, category: "Salary", merchant: "Company Ltd" },
        { date: "2024-01-18", type: "debit", amount: 12000, category: "Shopping", merchant: "Amazon" },
        { date: "2024-01-19", type: "debit", amount: 800, category: "Food", merchant: "Zomato" },
      ];
      
      setUploadedData(mockData);
      onUpload(mockData);
      setProcessing(false);
      toast.success("SMS processed successfully! Check your insights.");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Upload SMS Data
          </CardTitle>
          <CardDescription>
            Paste your banking SMS messages or upload a file to analyze your financial behavior
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-24" onClick={handlePaste}>
              <div className="flex flex-col items-center gap-2">
                <FileText className="h-8 w-8" />
                <span>Paste SMS Text</span>
              </div>
            </Button>
            
            <label className="relative cursor-pointer">
              <Button variant="outline" className="h-24 w-full" asChild>
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8" />
                  <span>Upload File (CSV/TXT)</span>
                </div>
              </Button>
              <input
                type="file"
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
          </div>

          <Textarea
            placeholder="Paste your SMS messages here...&#10;&#10;Example:&#10;Your A/C XX1234 debited with Rs.2,500.00 on 15-Jan-24 to SWIGGY*&#10;Your A/C XX1234 credited with Rs.50,000.00 on 17-Jan-24 SALARY"
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />

          <Button 
            onClick={processSMS} 
            disabled={processing} 
            className="w-full"
            size="lg"
          >
            {processing ? "Processing..." : "Analyze SMS"}
          </Button>
        </CardContent>
      </Card>

      {uploadedData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Extracted Transactions
            </CardTitle>
            <CardDescription>
              {uploadedData.length} transactions detected from your SMS data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-right p-2">Amount</th>
                    <th className="text-left p-2">Category</th>
                    <th className="text-left p-2">Merchant</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedData.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/50">
                      <td className="p-2">{item.date}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.type === 'credit' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="p-2 text-right font-mono">₹{item.amount.toLocaleString()}</td>
                      <td className="p-2">{item.category}</td>
                      <td className="p-2">{item.merchant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
