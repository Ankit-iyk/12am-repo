import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface VolatilityScoreProps {
  hasData: boolean;
}

export const VolatilityScore = ({ hasData }: VolatilityScoreProps) => {
  const volatilityData = [
    { date: "Week 1", spending: 8500, avgSpending: 7000 },
    { date: "Week 2", spending: 12000, avgSpending: 7000 },
    { date: "Week 3", spending: 5500, avgSpending: 7000 },
    { date: "Week 4", spending: 9800, avgSpending: 7000 },
    { date: "Week 5", spending: 15000, avgSpending: 7000 },
  ];

  const dailyVolatility = [
    { day: "Mon", amount: 1200 },
    { day: "Tue", amount: 3500 },
    { day: "Wed", amount: 800 },
    { day: "Thu", amount: 2200 },
    { day: "Fri", amount: 4500 },
    { day: "Sat", amount: 6000 },
    { day: "Sun", amount: 3800 },
  ];

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Spending Volatility</CardTitle>
          <CardDescription>Upload SMS data to see your spending volatility analysis</CardDescription>
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Spending Volatility Analysis
          </CardTitle>
          <CardDescription>
            Your spending patterns show high volatility with significant week-to-week variations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="text-sm text-muted-foreground mb-1">Volatility Score</div>
              <div className="text-3xl font-bold text-warning">65/100</div>
              <div className="text-xs text-muted-foreground mt-1">High volatility</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Avg Weekly Spend</div>
              <div className="text-3xl font-bold">₹10,160</div>
              <div className="text-xs text-muted-foreground mt-1">Last 5 weeks</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="text-sm text-muted-foreground mb-1">Peak Spending</div>
              <div className="text-3xl font-bold text-destructive">₹15,000</div>
              <div className="text-xs text-muted-foreground mt-1">Week 5</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={volatilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="avgSpending" 
                stroke="hsl(var(--muted-foreground))" 
                strokeDasharray="5 5"
                name="Avg Spending"
              />
              <Line 
                type="monotone" 
                dataKey="spending" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                name="Actual Spending"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Spending Pattern</CardTitle>
          <CardDescription>Your spending distribution across the week</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={dailyVolatility}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="hsl(var(--chart-1))" 
                fill="hsl(var(--chart-1))" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4">
            📊 Weekend spending is 42% higher than weekdays
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
