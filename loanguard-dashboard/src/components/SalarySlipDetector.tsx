import { FileCheck, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const SalarySlipDetector = () => {
  const authenticityScore = 68; // Example score
  const anomalies = [
    { type: "Font Inconsistency", severity: "high", detected: true },
    { type: "Alignment Issues", severity: "medium", detected: true },
    { type: "Missing PF Details", severity: "high", detected: true },
    { type: "ESI Information", severity: "low", detected: false },
    { type: "Signature Verification", severity: "medium", detected: true },
    { type: "Company Letterhead", severity: "low", detected: false },
  ];

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Highly Authentic", color: "text-success", gradient: "gradient-success" };
    if (score >= 50) return { level: "Questionable", color: "text-warning", gradient: "gradient-warning" };
    return { level: "Likely Manipulated", color: "text-destructive", gradient: "gradient-danger" };
  };

  const scoreInfo = getScoreLevel(authenticityScore);

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-primary" />
          Salary Slip Manipulation Detector
        </CardTitle>
        <CardDescription>Advanced forensic analysis to verify document authenticity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Authenticity Score */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Authenticity Score</span>
            <Badge className={scoreInfo.gradient}>{authenticityScore}/100</Badge>
          </div>
          <Progress value={authenticityScore} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>50 (Questionable)</span>
            <span>80 (Authentic)</span>
            <span>100</span>
          </div>
        </div>

        {/* Score Interpretation */}
        <div className={`p-4 rounded-lg ${authenticityScore >= 80 ? "bg-success/10" : authenticityScore >= 50 ? "bg-warning/10" : "bg-destructive/10"}`}>
          <p className={`font-semibold ${scoreInfo.color} mb-2`}>{scoreInfo.level}</p>
          <p className="text-sm text-muted-foreground">
            {authenticityScore >= 80 
              ? "The document appears authentic with no significant red flags detected."
              : authenticityScore >= 50
              ? "Some inconsistencies detected. Manual verification recommended before proceeding."
              : "Multiple manipulation indicators found. This document is likely forged or altered."}
          </p>
        </div>

        {/* Audit Results */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Detailed Audit Report
          </h4>
          <div className="space-y-2">
            {anomalies.map((anomaly, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  anomaly.detected 
                    ? anomaly.severity === "high" 
                      ? "bg-destructive/5 border-destructive/30" 
                      : "bg-warning/5 border-warning/30"
                    : "bg-success/5 border-success/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  {anomaly.detected ? (
                    <XCircle className={`w-5 h-5 ${anomaly.severity === "high" ? "text-destructive" : "text-warning"}`} />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                  <span className="font-medium">{anomaly.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  {anomaly.detected && (
                    <Badge 
                      variant={anomaly.severity === "high" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {anomaly.severity}
                    </Badge>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {anomaly.detected ? "Issue Found" : "Passed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
          <h5 className="font-semibold text-sm">Verification Recommendations</h5>
          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
            <li>Request original physical document for comparison</li>
            <li>Verify employer details through official company records</li>
            <li>Cross-check PF and ESI numbers with government databases</li>
            <li>Contact HR department directly for salary confirmation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
