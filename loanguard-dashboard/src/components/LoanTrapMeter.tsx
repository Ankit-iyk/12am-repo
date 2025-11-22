import { AlertTriangle, Shield, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LoanTrapMeter = () => {
  const riskScore = 72; // Example score
  const redFlags = [
    { icon: AlertTriangle, text: "Processing fee exceeds 2% threshold", severity: "high" },
    { icon: AlertCircle, text: "Auto-debit clause detected in fine print", severity: "medium" },
    { icon: AlertTriangle, text: "Hidden charges in documentation fee", severity: "high" },
    { icon: AlertCircle, text: "Prepayment penalty of 3% identified", severity: "medium" },
  ];

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: "Safe", color: "text-success", bgColor: "bg-success/10", gradient: "gradient-success" };
    if (score < 60) return { level: "Medium Risk", color: "text-warning", bgColor: "bg-warning/10", gradient: "gradient-warning" };
    return { level: "High Risk", color: "text-destructive", bgColor: "bg-destructive/10", gradient: "gradient-danger" };
  };

  const risk = getRiskLevel(riskScore);

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Loan Trap Severity Meter
        </CardTitle>
        <CardDescription>Real-time risk assessment based on document analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Risk Gauge */}
        <div className="relative">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - riskScore / 100)}`}
                  className={riskScore < 30 ? "text-success" : riskScore < 60 ? "text-warning" : "text-destructive"}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-5xl font-bold">{riskScore}</p>
                <p className="text-sm text-muted-foreground">out of 100</p>
              </div>
            </div>
            <Badge className={`mt-6 px-6 py-2 text-lg ${risk.gradient}`}>
              {risk.level}
            </Badge>
          </div>
        </div>

        {/* Risk Interpretation */}
        <div className={`p-4 rounded-lg ${risk.bgColor}`}>
          <p className={`font-semibold ${risk.color}`}>
            {riskScore < 30 
              ? "This loan appears safe with minimal concerning clauses."
              : riskScore < 60
              ? "This loan has moderate risk factors that require attention."
              : "This loan shows significant red flags. Consider alternative options."}
          </p>
        </div>

        {/* Red Flags */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Red Flags Detected
          </h4>
          <div className="space-y-2">
            {redFlags.map((flag, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:shadow-card transition-smooth"
              >
                <flag.icon 
                  className={`w-5 h-5 mt-0.5 ${flag.severity === "high" ? "text-destructive" : "text-warning"}`}
                />
                <p className="text-sm flex-1">{flag.text}</p>
                <Badge variant={flag.severity === "high" ? "destructive" : "secondary"}>
                  {flag.severity}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
