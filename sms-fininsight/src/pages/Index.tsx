import { useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadSection } from "@/components/finance/UploadSection";
import { VolatilityScore } from "@/components/finance/VolatilityScore";
import { ImpulsiveSpending } from "@/components/finance/ImpulsiveSpending";
import { CategoryBreakdown } from "@/components/finance/CategoryBreakdown";
import { HighIncomeWaste } from "@/components/finance/HighIncomeWaste";
import { SavingsNudges } from "@/components/finance/SavingsNudges";
import { FinancialHealthScore } from "@/components/finance/FinancialHealthScore";
import { Upload, TrendingUp, Zap, PieChart, AlertTriangle, Lightbulb, Activity } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [smsData, setSmsData] = useState<any[]>([]);

  const handleSmsUpload = (data: any[]) => {
    setSmsData(data);
    setActiveTab("health-score");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AI Fairstake" className="h-10" />
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("upload")}>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("health-score")}>
              <Activity className="h-4 w-4 mr-2" />
              Health Score
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("volatility")}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Volatility
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("impulsive")}>
              <Zap className="h-4 w-4 mr-2" />
              Impulsive
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("category")}>
              <PieChart className="h-4 w-4 mr-2" />
              Categories
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("waste")}>
              <AlertTriangle className="h-4 w-4 mr-2" />
              Waste
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab("nudges")}>
              <Lightbulb className="h-4 w-4 mr-2" />
              Nudges
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Finance360
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            SMS-Based Financial Behaviour Intelligence
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Upload your banking SMS messages to unlock powerful insights about your spending patterns, 
            impulsive behaviors, and financial health. Get personalized nudges to improve your financial well-being.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsContent value="upload" id="upload">
            <UploadSection onUpload={handleSmsUpload} />
          </TabsContent>

          <TabsContent value="health-score" id="health-score">
            <FinancialHealthScore hasData={smsData.length > 0} />
          </TabsContent>

          <TabsContent value="volatility" id="volatility">
            <VolatilityScore hasData={smsData.length > 0} />
          </TabsContent>

          <TabsContent value="impulsive" id="impulsive">
            <ImpulsiveSpending hasData={smsData.length > 0} />
          </TabsContent>

          <TabsContent value="category" id="category">
            <CategoryBreakdown hasData={smsData.length > 0} />
          </TabsContent>

          <TabsContent value="waste" id="waste">
            <HighIncomeWaste hasData={smsData.length > 0} />
          </TabsContent>

          <TabsContent value="nudges" id="nudges">
            <SavingsNudges hasData={smsData.length > 0} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AI Fairstake" className="h-8" />
              <span className="text-sm text-muted-foreground">© 2024 AI Fairstake. All rights reserved.</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Version 3.0.0 | Finance360 Module
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
