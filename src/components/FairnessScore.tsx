import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const FairnessScore = () => {
  const overallScore = 62;
  const categories = [
    { name: "Language Clarity", score: 75, change: "up" },
    { name: "Eligibility Fairness", score: 45, change: "down" },
    { name: "Process Accessibility", score: 58, change: "down" },
    { name: "Inclusivity", score: 52, change: "down" },
    { name: "Transparency", score: 80, change: "up" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-success";
    if (score >= 50) return "text-warning";
    return "text-danger";
  };

  const getProgressColor = (score: number) => {
    if (score >= 75) return "bg-success";
    if (score >= 50) return "bg-warning";
    return "bg-danger";
  };

  const getTrendIcon = (change: string) => {
    switch (change) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-danger" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Fairness Score</CardTitle>
        <CardDescription>
          Overall scheme fairness assessment based on multiple factors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Overall Score */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30">
              <div>
                <div className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </div>
                <div className="text-sm text-muted-foreground">/ 100</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Overall Fairness Score</h3>
              <p className="text-sm text-muted-foreground">Needs Improvement</p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Category Breakdown</h4>
            {categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    {getTrendIcon(category.change)}
                  </div>
                  <span className={`text-sm font-bold ${getScoreColor(category.score)}`}>
                    {category.score}%
                  </span>
                </div>
                <div className="relative">
                  <Progress value={category.score} className="h-2" />
                  <div
                    className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(
                      category.score
                    )}`}
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Score Legend */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium text-success">75-100</div>
              <div className="text-xs text-muted-foreground">Excellent</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-warning">50-74</div>
              <div className="text-xs text-muted-foreground">Needs Work</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-danger">0-49</div>
              <div className="text-xs text-muted-foreground">Critical</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FairnessScore;
