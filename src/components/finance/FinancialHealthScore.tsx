import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface FinancialHealthScoreProps {
  hasData: boolean;
}

export const FinancialHealthScore = ({ hasData }: FinancialHealthScoreProps) => {
  const healthScore = 72;
  const scoreColor = healthScore >= 70 ? "text-success" : healthScore >= 50 ? "text-warning" : "text-destructive";
  const scoreBg = healthScore >= 70 ? "bg-success" : healthScore >= 50 ? "bg-warning" : "bg-destructive";

  const trendData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 70 },
    { month: "Apr", score: 69 },
    { month: "May", score: 72 },
  ];

  const metrics = [
    { label: "Spending Volatility", score: 65, trend: "down", color: "success" },
    { label: "Impulsive Spending", score: 45, trend: "down", color: "warning" },
    { label: "Savings Rate", score: 82, trend: "up", color: "success" },
    { label: "Income Stability", score: 90, trend: "up", color: "success" },
  ];

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-muted-foreground" />
            Financial Health Score
          </CardTitle>
          <CardDescription>
            Upload SMS data to see your financial health score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            No data available. Please upload SMS messages first.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Overall Financial Health Score
          </CardTitle>
          <CardDescription>
            Based on your spending patterns, volatility, and savings behavior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-8">
            <div className={`text-7xl font-bold ${scoreColor} mb-4`}>
              {healthScore}
            </div>
            <div className="text-2xl font-semibold mb-6">
              {healthScore >= 70 ? "Good" : healthScore >= 50 ? "Fair" : "Needs Improvement"}
            </div>
            <div className="w-full max-w-md">
              <Progress value={healthScore} className="h-4" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center max-w-md">
              Your financial health has improved by 7 points over the last 5 months
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{metric.label}</CardTitle>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-success" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-3 mb-2">
                <div className={`text-3xl font-bold text-${metric.color}`}>
                  {metric.score}
                </div>
                <div className="text-sm text-muted-foreground mb-1">/ 100</div>
              </div>
              <Progress value={metric.score} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Health Score Trend</CardTitle>
          <CardDescription>Your financial health over the last 5 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--success))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--success))", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
