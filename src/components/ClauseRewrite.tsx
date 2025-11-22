import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const ClauseRewrite = () => {
  const rewrites = [
    {
      original: "Only applicants with permanent residence for 10+ years are eligible",
      rewritten: "All applicants residing in the jurisdiction for at least 1 year are eligible, with priority consideration for longer-term residents",
      improvement: "Inclusive of recent migrants while recognizing long-term residents",
    },
    {
      original: "Requires bank account in applicant's name with minimum balance",
      rewritten: "Applicants may provide either bank account details, post office savings account, or authorized representative financial documentation",
      improvement: "Accessible to unbanked and financially vulnerable populations",
    },
    {
      original: "Application must be submitted during business hours only",
      rewritten: "Applications accepted online 24/7, in-person during extended hours (8 AM - 7 PM), and at weekend help centers",
      improvement: "Accommodates working-class and diverse schedules",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Fairness-Enhanced Clause Rewrites</CardTitle>
        <CardDescription>
          AI-powered suggestions to make scheme language more inclusive and fair
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rewrites.map((rewrite, index) => (
            <div key={index} className="space-y-3">
              <div className="p-4 bg-danger/5 border-l-4 border-danger rounded-r-lg">
                <div className="text-xs font-semibold text-danger mb-1">ORIGINAL</div>
                <p className="text-sm">{rewrite.original}</p>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>

              <div className="p-4 bg-success/5 border-l-4 border-success rounded-r-lg">
                <div className="text-xs font-semibold text-success mb-1">REWRITTEN</div>
                <p className="text-sm">{rewrite.rewritten}</p>
              </div>

              <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Improvement: </span>
                  {rewrite.improvement}
                </p>
              </div>

              {index < rewrites.length - 1 && <div className="border-t border-border" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClauseRewrite;
