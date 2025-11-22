import { useState } from 'react';
import { Upload, FileText, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const UploadSection = ({ onDataProcessed }: { onDataProcessed: () => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // Simulate data preview
      const mockData = [
        { date: '2025-01-15', type: 'UPI', amount: '₹250', merchant: 'Grocery Store' },
        { date: '2025-01-14', type: 'SMS', amount: '₹1200', merchant: 'Rent Payment' },
        { date: '2025-01-13', type: 'Bank', amount: '₹450', merchant: 'Utility Bill' },
        { date: '2025-01-12', type: 'UPI', amount: '₹80', merchant: 'Coffee Shop' },
      ];
      setPreviewData(mockData);
      toast.success('File uploaded successfully');
    }
  };

  const processData = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onDataProcessed();
      toast.success('Data processed! Scroll down to see your FairScore.');
      setTimeout(() => {
        document.getElementById('fairscore')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }, 2000);
  };

  return (
    <section id="upload" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Data</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your SMS, bank transactions, or UPI statements to calculate your FairScore
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 shadow-lg">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                type="file"
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">
                  {file ? file.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-muted-foreground">
                  CSV or TXT files (SMS, Bank, UPI statements)
                </p>
              </label>
            </div>

            {file && (
              <div className="mt-6 flex items-center gap-3 p-4 bg-muted rounded-lg">
                <FileText className="h-5 w-5 text-primary" />
                <span className="flex-1 text-sm font-medium">{file.name}</span>
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
            )}
          </Card>

          {previewData.length > 0 && (
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Preview</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Date</th>
                      <th className="text-left py-3 px-4 font-semibold">Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold">Merchant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((row, idx) => (
                      <tr key={idx} className="border-b border-border/50">
                        <td className="py-3 px-4 text-sm">{row.date}</td>
                        <td className="py-3 px-4 text-sm">{row.type}</td>
                        <td className="py-3 px-4 text-sm font-medium">{row.amount}</td>
                        <td className="py-3 px-4 text-sm">{row.merchant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  onClick={processData}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  {isProcessing ? 'Processing...' : 'Calculate FairScore'}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
