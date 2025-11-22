import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown } from "lucide-react";

interface HighIncomeWasteProps {
  hasData: boolean;
}

export const HighIncomeWaste = ({ hasData }: HighIncomeWasteProps) => {
  const wastePatterns = [
    {
      category: "Food Delivery",
      monthly: 28500,
      income: 50000,
      percentage: 57,
      insight: "You're spending 57% of your income on food delivery. Consider meal planning to reduce this significantly.",
      severity: "high"
    },
    {
      category: "Shopping",
      monthly: 42000,
      income: 50000,
      percentage: 84,
      insight: "Shopping expenses exceed 80% of your income, indicating potential lifestyle inflation.",
      severity: "critical"
    },
    {
      category: "Entertainment",
      monthly: 15000,
      income: 50000,
      percentage: 30,
      insight: "Entertainment costs are above the recommended 15% of income.",
      severity: "medium"
    },
  ];

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>High-Income Waste Patterns</CardTitle>
          <CardDescription>Upload SMS data to detect spending disproportionate to income</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            No data available
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            High-Income Waste Detected
          </CardTitle>
          <CardDescription>
            Your spending patterns show significant waste relative to your income
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Monthly Income</div>
              <div className="text-3xl font-bold">₹50,000</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="text-sm text-muted-foreground mb-1">Wasteful Spending</div>
              <div className="text-3xl font-bold text-destructive">₹85,500</div>
              <div className="text-xs text-destructive mt-1">171% of income!</div>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="text-sm text-muted-foreground mb-1">Potential Savings</div>
              <div className="text-3xl font-bold text-warning">₹35,500</div>
              <div className="text-xs text-muted-foreground mt-1">Per month</div>
            </div>
          </div>

          <div className="space-y-4">
            {wastePatterns.map((pattern, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-lg border-2 ${
                  pattern.severity === "critical" ? "border-destructive/50 bg-destructive/5" :
                  pattern.severity === "high" ? "border-warning/50 bg-warning/5" :
                  "border-primary/20 bg-card"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{pattern.category}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        pattern.severity === "critical" ? "destructive" :
                        pattern.severity === "high" ? "default" :
                        "secondary"
                      }>
                        {pattern.severity === "critical" ? "Critical" :
                         pattern.severity === "high" ? "High Risk" : "Medium Risk"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {pattern.percentage}% of income
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-destructive mb-1">
                      ₹{pattern.monthly.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 p-3 rounded bg-background/50">
                  <TrendingDown className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/90">
                    {pattern.insight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Take these steps to reduce wasteful spending</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-semibold mb-1">Set Category Budgets</div>
                <div className="text-sm text-muted-foreground">
                  Limit food delivery to ₹10,000/month (20% of income)
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-semibold mb-1">Reduce Shopping Frequency</div>
                <div className="text-sm text-muted-foreground">
                  Implement a 48-hour waiting period before purchases over ₹5,000
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-semibold mb-1">Automate Savings</div>
                <div className="text-sm text-muted-foreground">
                  Set up automatic transfer of 20% of income to savings account
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
