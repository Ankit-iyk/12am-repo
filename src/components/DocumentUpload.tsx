import { Upload, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleScan = () => {
    if (!file) return;
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Upload className="w-6 h-6 text-primary" />
          Loan Document Upload
        </CardTitle>
        <CardDescription>Upload your loan agreement PDF for comprehensive analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary hover:bg-secondary/30 transition-smooth cursor-pointer"
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold">Drop your PDF here or click to browse</p>
                <p className="text-sm text-muted-foreground mt-1">Supports PDF files up to 10MB</p>
              </div>
            </div>
          </label>
        </div>

        {file && (
          <div className="space-y-3 animate-scale-in">
            <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              {progress === 100 && <CheckCircle className="w-5 h-5 text-success" />}
            </div>

            {uploading && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground text-center">Scanning document... {progress}%</p>
              </div>
            )}

            <Button 
              onClick={handleScan} 
              disabled={uploading || progress === 100}
              className="w-full gradient-primary"
              size="lg"
            >
              {progress === 100 ? "Document Scanned" : "Scan Loan Document"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
