import { useState } from "react";
import Header from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import BiasDetection from "@/components/BiasDetection";
import ClauseRewrite from "@/components/ClauseRewrite";
import FairnessScore from "@/components/FairnessScore";
import Insights from "@/components/Insights";

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // Simulate processing
    setTimeout(() => {
      setAnalysisComplete(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <section id="upload" className="scroll-mt-20">
          <UploadSection onFileUpload={handleFileUpload} />
        </section>

        {analysisComplete && (
          <>
            <section id="bias-detection" className="scroll-mt-20">
              <BiasDetection fileName={uploadedFile?.name || ""} />
            </section>

            <section id="clause-rewrite" className="scroll-mt-20">
              <ClauseRewrite />
            </section>

            <section id="fairness-score" className="scroll-mt-20">
              <FairnessScore />
            </section>

            <section id="insights" className="scroll-mt-20">
              <Insights />
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 AI FairStake - SchemeSense v1.0</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
