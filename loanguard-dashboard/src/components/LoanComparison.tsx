import { TrendingDown, Award, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LoanComparison = () => {
  const loans = [
    {
      lender: "Bank A - Personal Loan",
      interestRate: 10.5,
      apr: 13.2,
      processingFee: 8000,
      tenure: 24,
      prepaymentPenalty: "2%",
      totalCost: 612000,
      badge: "Best Option",
      badgeColor: "gradient-success",
    },
    {
      lender: "NBFC B - Quick Loan",
      interestRate: 12.0,
      apr: 16.8,
      processingFee: 15000,
      tenure: 24,
      prepaymentPenalty: "4%",
      totalCost: 658000,
      badge: "Highest Risk",
      badgeColor: "gradient-danger",
    },
    {
      lender: "Bank C - Standard Loan",
      interestRate: 11.2,
      apr: 14.5,
      processingFee: 10000,
      tenure: 24,
      prepaymentPenalty: "3%",
      totalCost: 628000,
      badge: "Moderate",
      badgeColor: "gradient-warning",
    },
    {
      lender: "Fintech D - Digital Loan",
      interestRate: 10.8,
      apr: 13.8,
      processingFee: 7500,
      tenure: 24,
      prepaymentPenalty: "1.5%",
      totalCost: 618000,
      badge: "Lowest APR",
      badgeColor: "gradient-accent",
    },
  ];

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-primary" />
          Real-Time Loan Comparison Engine
        </CardTitle>
        <CardDescription>Compare multiple loan offers side-by-side to find the best deal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg border-2 border-border hover:border-primary hover:shadow-elevated transition-smooth bg-card"
            >
              {/* Badge */}
              <div className="absolute -top-3 right-4">
                <Badge className={`${loan.badgeColor} shadow-lg`}>
                  {loan.badge === "Best Option" && <Award className="w-3 h-3 mr-1" />}
                  {loan.badge === "Highest Risk" && <AlertCircle className="w-3 h-3 mr-1" />}
                  {loan.badge}
                </Badge>
              </div>

              {/* Lender Name */}
              <h4 className="font-bold text-lg mb-4 pr-20">{loan.lender}</h4>

              {/* Loan Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Interest Rate</span>
                  <span className="font-semibold">{loan.interestRate}% p.a.</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Effective APR</span>
                  <span className="font-semibold text-primary">{loan.apr}%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Processing Fee</span>
                  <span className="font-semibold">₹{loan.processingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Tenure</span>
                  <span className="font-semibold">{loan.tenure} months</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Prepayment Penalty</span>
                  <span className="font-semibold text-destructive">{loan.prepaymentPenalty}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold">Total Cost</span>
                  <span className="font-bold text-xl text-primary">₹{loan.totalCost.toLocaleString()}</span>
                </div>
              </div>

              {/* Cost Indicator */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={loan.badge === "Best Option" ? "h-full gradient-success" : loan.badge === "Highest Risk" ? "h-full gradient-danger" : "h-full gradient-warning"}
                      style={{ width: `${(loan.totalCost / Math.max(...loans.map(l => l.totalCost))) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {((loan.totalCost / Math.min(...loans.map(l => l.totalCost)) - 1) * 100).toFixed(1)}% more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-sm">
            <span className="font-semibold text-primary">Recommendation:</span> {loans[0].lender} offers the lowest total cost 
            at ₹{loans[0].totalCost.toLocaleString()} with an effective APR of {loans[0].apr}%. 
            This could save you ₹{(Math.max(...loans.map(l => l.totalCost)) - loans[0].totalCost).toLocaleString()} compared to the most expensive option.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
