import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, AlertCircle, ShoppingBag } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ImpulsiveSpendingProps {
  hasData: boolean;
}

export const ImpulsiveSpending = ({ hasData }: ImpulsiveSpendingProps) => {
  const impulsiveTransactions = [
    { date: "2024-05-20", merchant: "Amazon", amount: 12000, category: "Shopping", frequency: "High" },
    { date: "2024-05-19", merchant: "Swiggy", amount: 2500, category: "Food", frequency: "Very High" },
    { date: "2024-05-18", merchant: "BookMyShow", amount: 1800, category: "Entertainment", frequency: "Medium" },
    { date: "2024-05-15", merchant: "Myntra", amount: 8500, category: "Shopping", frequency: "High" },
  ];

  const categoryData = [
    { category: "Food", count: 23, amount: 18500 },
    { category: "Shopping", count: 8, amount: 42000 },
    { category: "Entertainment", count: 12, amount: 15000 },
    { category: "Transport", count: 18, amount: 9000 },
  ];

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Impulsive Spending Alerts</CardTitle>
          <CardDescription>Upload SMS data to detect impulsive spending patterns</CardDescription>
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
      <Card className="border-warning/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            Impulsive Spending Detected
          </CardTitle>
          <CardDescription>
            High-frequency and unexpected large transactions identified
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="text-sm text-muted-foreground mb-1">Impulsive Score</div>
              <div className="text-3xl font-bold text-warning">72/100</div>
              <div className="text-xs text-muted-foreground mt-1">Above average</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="text-sm text-muted-foreground mb-1">Total Impulsive</div>
              <div className="text-3xl font-bold text-destructive">₹84,500</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Frequency</div>
              <div className="text-3xl font-bold">61</div>
              <div className="text-xs text-muted-foreground mt-1">Transactions</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              Recent Impulsive Transactions
            </h4>
            {impulsiveTransactions.map((txn, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{txn.merchant}</span>
                      <Badge variant={
                        txn.frequency === "Very High" ? "destructive" : 
                        txn.frequency === "High" ? "default" : "secondary"
                      }>
                        {txn.frequency} Frequency
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {txn.date} • {txn.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-destructive">
                      ₹{txn.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Impulsive Spending by Category</CardTitle>
          <CardDescription>Frequency and amount of impulsive purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="hsl(var(--chart-3))" name="Amount (₹)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
