import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

interface SavingsNudgesProps {
  hasData: boolean;
}

export const SavingsNudges = ({ hasData }: SavingsNudgesProps) => {
  const nudges = [
    {
      title: "Reduce Food Delivery Spending",
      category: "Food",
      currentSpend: 28500,
      targetSpend: 10000,
      potentialSaving: 18500,
      actionable: "Cook 4 meals at home per week instead of ordering",
      impact: "high",
      difficulty: "medium"
    },
    {
      title: "Consolidate Subscriptions",
      category: "Entertainment",
      currentSpend: 2500,
      targetSpend: 1000,
      potentialSaving: 1500,
      actionable: "Cancel unused streaming services - you have 5 active subscriptions but only use 2",
      impact: "medium",
      difficulty: "easy"
    },
    {
      title: "Use Public Transport",
      category: "Transport",
      currentSpend: 9000,
      targetSpend: 4000,
      potentialSaving: 5000,
      actionable: "Take metro instead of cab for daily commute - saves ₹250/day",
      impact: "medium",
      difficulty: "easy"
    },
    {
      title: "Meal Planning for Weekends",
      category: "Food",
      currentSpend: 8000,
      targetSpend: 3000,
      potentialSaving: 5000,
      actionable: "Plan weekend meals in advance - you spent 40% more on dining in May",
      impact: "high",
      difficulty: "medium"
    },
    {
      title: "Implement Shopping Cooldown",
      category: "Shopping",
      currentSpend: 42000,
      targetSpend: 20000,
      potentialSaving: 22000,
      actionable: "Wait 24 hours before purchases over ₹5,000 to reduce impulse buying",
      impact: "high",
      difficulty: "hard"
    },
  ];

  const totalPotentialSaving = nudges.reduce((sum, nudge) => sum + nudge.potentialSaving, 0);

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Savings Nudges</CardTitle>
          <CardDescription>Upload SMS data to get personalized savings recommendations</CardDescription>
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
      <Card className="border-success/50 bg-success/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-success" />
            Personalized Savings Opportunities
          </CardTitle>
          <CardDescription>
            Act on these nudges to save up to ₹{totalPotentialSaving.toLocaleString()} per month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="text-sm text-muted-foreground mb-1">Potential Savings</div>
              <div className="text-3xl font-bold text-success">₹{totalPotentialSaving.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">Per month</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Annual Impact</div>
              <div className="text-3xl font-bold">₹{(totalPotentialSaving * 12).toLocaleString()}</div>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-sm text-muted-foreground mb-1">Active Nudges</div>
              <div className="text-3xl font-bold">{nudges.length}</div>
              <div className="text-xs text-muted-foreground mt-1">Recommendations</div>
            </div>
          </div>

          <div className="space-y-4">
            {nudges.map((nudge, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-base">{nudge.title}</CardTitle>
                        <Badge variant="outline">{nudge.category}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={
                          nudge.impact === "high" ? "default" :
                          nudge.impact === "medium" ? "secondary" : "outline"
                        }>
                          {nudge.impact === "high" ? "🔥 High Impact" :
                           nudge.impact === "medium" ? "💡 Medium Impact" : "Low Impact"}
                        </Badge>
                        <Badge variant="outline">
                          {nudge.difficulty === "easy" ? "✅ Easy" :
                           nudge.difficulty === "medium" ? "⚡ Medium" : "💪 Challenging"}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-success">
                        ₹{nudge.potentialSaving.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">savings/month</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Current spending:</span>
                      <span className="font-semibold">₹{nudge.currentSpend.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Target spending:</span>
                      <span className="font-semibold text-success">₹{nudge.targetSpend.toLocaleString()}</span>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-muted/50 border">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{nudge.actionable}</p>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Apply This Nudge
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Success Metrics</CardTitle>
          <CardDescription>Track your progress when you implement these nudges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-sm text-muted-foreground mb-1">If you implement all nudges</div>
              <div className="text-3xl font-bold text-success mb-2">
                ₹{(totalPotentialSaving * 12).toLocaleString()}
              </div>
              <div className="text-sm">Annual savings potential</div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-sm text-muted-foreground mb-1">Investment Growth (8% returns)</div>
              <div className="text-3xl font-bold text-success mb-2">
                ₹{((totalPotentialSaving * 12 * 5) * 1.08).toFixed(0).toLocaleString()}
              </div>
              <div className="text-sm">Value after 5 years</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
