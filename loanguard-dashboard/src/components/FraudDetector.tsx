import { AlertOctagon, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const FraudDetector = () => {
  const fraudPhrases = [
    {
      phrase: "Pre-approved. No credit check required.",
      risk: "high",
      explanation: "Legitimate lenders always perform credit checks. This phrase is a red flag for predatory lending.",
    },
    {
      phrase: "Guaranteed approval regardless of credit score",
      risk: "high",
      explanation: "No legitimate lender can guarantee approval without assessing creditworthiness first.",
    },
    {
      phrase: "Act now! Limited time offer expires today",
      risk: "medium",
      explanation: "High-pressure tactics are commonly used in loan scams to prevent careful consideration.",
    },
    {
      phrase: "Pay advance fee to process your loan",
      risk: "high",
      explanation: "Legitimate lenders deduct fees from the loan amount, never ask for upfront payments.",
    },
    {
      phrase: "No documentation needed",
      risk: "medium",
      explanation: "All legitimate loans require proper documentation for legal and regulatory compliance.",
    },
  ];

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <AlertOctagon className="w-6 h-6 text-destructive" />
          Fraud Phrase Detector
        </CardTitle>
        <CardDescription>AI-powered detection of suspicious language and scam indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertOctagon className="w-5 h-5 text-destructive" />
            <p className="font-semibold text-destructive">
              {fraudPhrases.length} Suspicious Phrases Detected
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            The document contains language commonly associated with fraudulent loan schemes. Review each phrase carefully.
          </p>
        </div>

        <div className="space-y-3">
          {fraudPhrases.map((item, index) => (
            <Collapsible key={index}>
              <div className="border border-destructive/30 rounded-lg overflow-hidden hover:border-destructive/50 transition-smooth">
                <CollapsibleTrigger className="w-full p-4 flex items-center gap-3 hover:bg-destructive/5 transition-smooth">
                  <AlertOctagon 
                    className={`w-5 h-5 flex-shrink-0 ${item.risk === "high" ? "text-destructive" : "text-warning"}`}
                  />
                  <div className="flex-1 text-left">
                    <p className="font-medium">"{item.phrase}"</p>
                  </div>
                  <Badge variant={item.risk === "high" ? "destructive" : "secondary"}>
                    {item.risk === "high" ? "High Risk" : "Medium Risk"}
                  </Badge>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 bg-muted/30 border-t border-destructive/20">
                    <p className="text-sm text-muted-foreground">{item.explanation}</p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        <div className="p-4 bg-success/10 rounded-lg border border-success/20 mt-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-success mt-0.5" />
            <div>
              <p className="font-semibold text-success mb-1">Recommendation</p>
              <p className="text-sm text-muted-foreground">
                Given the number of red flags, we strongly advise against proceeding with this loan. 
                Consider alternative lenders with transparent terms and verified credentials.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
