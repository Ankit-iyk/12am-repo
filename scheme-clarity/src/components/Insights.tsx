import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Target, Lightbulb, TrendingUp } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      icon: AlertTriangle,
      color: "text-danger",
      bgColor: "bg-danger/10",
      title: "Most Biased Sections",
      items: [
        "Eligibility Criteria (Page 3-5): Contains 3 high-severity exclusionary clauses",
        "Application Process (Page 7-9): Lacks accessibility provisions",
      ],
    },
    {
      icon: Target,
      color: "text-warning",
      bgColor: "bg-warning/10",
      title: "High-Risk Exclusions",
      items: [
        "Recent migrants and mobile populations (residence requirement)",
        "Unbanked and financially vulnerable groups (banking requirement)",
        "Working-class applicants (business hours limitation)",
      ],
    },
    {
      icon: Lightbulb,
      color: "text-success",
      bgColor: "bg-success/10",
      title: "Key Recommendations",
      items: [
        "Reduce residence requirement from 10 years to 1 year",
        "Accept alternative financial documentation",
        "Implement online application portal with 24/7 access",
        "Add explicit provisions for persons with disabilities",
        "Replace subjective criteria with objective benchmarks",
      ],
    },
    {
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      title: "Potential Impact",
      items: [
        "Implementing recommendations could increase fairness score by 28 points",
        "Estimated 35% increase in eligible beneficiary population",
        "Reduced risk of discrimination complaints and legal challenges",
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Actionable Insights</CardTitle>
        <CardDescription>
          Data-driven recommendations to improve scheme fairness and reach
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${insight.bgColor} border-${insight.color.replace("text-", "")}/20`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                    <Icon className={`h-6 w-6 ${insight.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{insight.title}</h3>
                </div>
                <ul className="space-y-2">
                  {insight.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm flex items-start gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${insight.color.replace("text-", "bg-")} flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Insights;
