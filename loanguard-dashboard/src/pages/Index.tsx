import logo from "@/assets/logo.png";
import { DocumentUpload } from "@/components/DocumentUpload";
import { LoanTrapMeter } from "@/components/LoanTrapMeter";
import { EMIStressIndicator } from "@/components/EMIStressIndicator";
import { APRCalculator } from "@/components/APRCalculator";
import { LoanComparison } from "@/components/LoanComparison";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AI Fairstake Logo" className="h-12" />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('document-upload')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Document Upload
              </button>
              <button 
                onClick={() => scrollToSection('loan-trap-meter')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Loan Trap Meter
              </button>
              <button 
                onClick={() => scrollToSection('emi-stress')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                EMI Stress Indicator
              </button>
              <button 
                onClick={() => scrollToSection('apr-calculator')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                APR Calculator
              </button>
              <button 
                onClick={() => scrollToSection('loan-comparison')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Loan Comparison
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
            Protect Yourself from Loan Traps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered analysis to detect hidden charges, fraud indicators, and predatory lending practices
          </p>
        </div>

        {/* Components Grid */}
        <div className="space-y-8">
          {/* Section 1: Document Upload */}
          <div id="document-upload">
            <DocumentUpload />
          </div>

          {/* Section 2 & 3: Two column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="loan-trap-meter">
              <LoanTrapMeter />
            </div>
            <div id="emi-stress">
              <EMIStressIndicator />
            </div>
          </div>

          {/* Section 4: APR Calculator */}
          <div id="apr-calculator">
            <APRCalculator />
          </div>

          {/* Section 5: Loan Comparison */}
          <div id="loan-comparison">
            <LoanComparison />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm text-muted-foreground">
            LoanGuard • Module 3 • Fintech Risk & Loan Analysis Platform
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by advanced AI algorithms for comprehensive loan document analysis
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
