import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
}

const UploadSection = ({ onFileUpload }: UploadSectionProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setProcessing(true);
      
      toast.success("PDF uploaded successfully!");
      
      // Simulate processing
      setTimeout(() => {
        setProcessing(false);
        onFileUpload(selectedFile);
      }, 2000);
    } else {
      toast.error("Please upload a valid PDF file");
    }
  };

  return (
    <Card className="border-2 border-dashed border-border hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Upload className="h-6 w-6 text-primary" />
          Upload Government Scheme PDF
        </CardTitle>
        <CardDescription>
          Upload any government scheme PDF to analyze for bias and fairness
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
          >
            {file ? (
              <div className="text-center space-y-3">
                <CheckCircle className="h-12 w-12 text-success mx-auto" />
                <div className="flex items-center gap-2 justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">{file.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <div className="text-center space-y-3">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                <div>
                  <p className="font-medium">Click to upload PDF</p>
                  <p className="text-sm text-muted-foreground">or drag and drop</p>
                </div>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          {processing && (
            <div className="flex items-center justify-center gap-2 p-4 bg-info/10 rounded-lg">
              <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
              <span className="text-sm font-medium">Processing document...</span>
            </div>
          )}

          {file && !processing && (
            <Button
              onClick={() => {
                setFile(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }}
              variant="outline"
              className="w-full"
            >
              Upload Different File
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadSection;
