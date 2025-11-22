import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

interface BiasDetectionProps {
  fileName: string;
}

const BiasDetection = ({ fileName }: BiasDetectionProps) => {
  const biasResults = [
    {
      type: "Unfair Eligibility",
      severity: "high",
      clause: "Only applicants with permanent residence for 10+ years are eligible",
      page: 3,
      issue: "Excludes recent migrants and mobile populations",
    },
    {
      type: "Exclusion Risk",
      severity: "high",
      clause: "Requires bank account in applicant's name with minimum balance",
      page: 5,
      issue: "Excludes financially vulnerable and unbanked populations",
    },
    {
      type: "Hidden Bias",
      severity: "medium",
      clause: "Application must be submitted during business hours only",
      page: 7,
      issue: "Disadvantages working-class applicants",
    },
    {
      type: "Unclear Rules",
      severity: "medium",
      clause: "Income proof must be 'sufficient' as per officer discretion",
      page: 9,
      issue: "Subjective criteria open to bias",
    },
    {
      type: "Missing Beneficiaries",
      severity: "low",
      clause: "No mention of support for persons with disabilities",
      page: 12,
      issue: "Lacks inclusive provisions",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-danger/10 text-danger border-danger/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "low":
        return "bg-info/10 text-info border-info/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="h-5 w-5" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5" />;
      case "low":
        return <Info className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Bias Detection Results</CardTitle>
        <CardDescription>
          Analyzing: {fileName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {biasResults.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${getSeverityColor(result.severity)}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(result.severity)}
                    <h3 className="font-semibold">{result.type}</h3>
                    <Badge variant="outline" className="ml-auto">
                      Page {result.page}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium italic">"{result.clause}"</p>
                  <p className="text-sm">
                    <span className="font-medium">Issue: </span>
                    {result.issue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-danger/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-danger">2</div>
            <div className="text-sm font-medium">High Severity</div>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-warning">2</div>
            <div className="text-sm font-medium">Medium Severity</div>
          </div>
          <div className="p-4 bg-info/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-info">1</div>
            <div className="text-sm font-medium">Low Severity</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BiasDetection;
