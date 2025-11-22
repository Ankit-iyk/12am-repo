import { useState } from 'react';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';
import FairScoreDisplay from '@/components/FairScoreDisplay';
import SHAPExplanations from '@/components/SHAPExplanations';
import ScoreInsights from '@/components/ScoreInsights';
import ImprovementTips from '@/components/ImprovementTips';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDataProcessed, setIsDataProcessed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <UploadSection onDataProcessed={() => setIsDataProcessed(true)} />
        {isDataProcessed && (
          <>
            <FairScoreDisplay />
            <SHAPExplanations />
            <ScoreInsights />
            <ImprovementTips />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
