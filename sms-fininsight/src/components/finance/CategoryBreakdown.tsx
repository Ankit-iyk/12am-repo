import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface CategoryBreakdownProps {
  hasData: boolean;
}

export const CategoryBreakdown = ({ hasData }: CategoryBreakdownProps) => {
  const categoryData = [
    { name: "Food & Dining", value: 28500, color: "hsl(var(--chart-1))" },
    { name: "Shopping", value: 42000, color: "hsl(var(--chart-2))" },
    { name: "Entertainment", value: 15000, color: "hsl(var(--chart-3))" },
    { name: "Bills & Utilities", value: 12000, color: "hsl(var(--chart-4))" },
    { name: "Transport", value: 9000, color: "hsl(var(--chart-5))" },
    { name: "Health", value: 5500, color: "hsl(160 40% 50%)" },
    { name: "Investments", value: 20000, color: "hsl(150 70% 40%)" },
  ];

  const totalSpending = categoryData.reduce((sum, cat) => sum + cat.value, 0);

  if (!hasData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
          <CardDescription>Upload SMS data to see your spending by category</CardDescription>
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
            <PieChart className="h-5 w-5 text-primary" />
            Spending by Category
          </CardTitle>
          <CardDescription>
            Total spending: ₹{totalSpending.toLocaleString()} this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RechartsPie>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            </RechartsPie>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.map((category, idx) => {
          const percentage = ((category.value / totalSpending) * 100).toFixed(1);
          return (
            <Card key={idx}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">
                  ₹{category.value.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {percentage}% of total spending
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
