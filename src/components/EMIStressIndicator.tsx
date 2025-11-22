import { TrendingUp, DollarSign, Percent, Calendar } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const EMIStressIndicator = () => {
  const [income, setIncome] = useState(50000);
  const [expenses, setExpenses] = useState(20000);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(12);
  const [calculated, setCalculated] = useState(false);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const months = tenure;
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const disposableIncome = income - expenses;
  const stressScore = (emi / disposableIncome) * 100;

  const getStressLevel = (score: number) => {
    if (score < 20) return { level: "Low Stress", color: "text-success", bgColor: "bg-success/10", gradient: "gradient-success" };
    if (score < 40) return { level: "Moderate Stress", color: "text-warning", bgColor: "bg-warning/10", gradient: "gradient-warning" };
    return { level: "High Stress", color: "text-destructive", bgColor: "bg-destructive/10", gradient: "gradient-danger" };
  };

  const stress = getStressLevel(stressScore);

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" />
          EMI Stress Indicator
        </CardTitle>
        <CardDescription>Evaluate your financial capacity to handle monthly payments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Monthly Income
            </Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              placeholder="50000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expenses" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Monthly Expenses
            </Label>
            <Input
              id="expenses"
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              placeholder="20000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanAmount" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Loan Amount
            </Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              placeholder="500000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tenure" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Tenure (Months)
            </Label>
            <Input
              id="tenure"
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              placeholder="24"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="interestRate" className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Interest Rate (% per annum)
            </Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="12"
            />
          </div>
        </div>

        <Button 
          onClick={() => setCalculated(true)} 
          className="w-full gradient-accent"
          size="lg"
        >
          Calculate EMI Stress
        </Button>

        {calculated && (
          <div className="space-y-4 animate-scale-in">
            {/* EMI Amount */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold">₹{emi.toLocaleString()}</p>
            </div>

            {/* Stress Score */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Stress Score</span>
                <Badge className={stress.gradient}>{Math.round(stressScore)}%</Badge>
              </div>
              <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${stress.gradient} transition-all duration-1000 rounded-full`}
                  style={{ width: `${Math.min(stressScore, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>20% (Safe)</span>
                <span>40% (Moderate)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Insights */}
            <div className={`p-4 rounded-lg ${stress.bgColor}`}>
              <p className={`font-semibold ${stress.color} mb-2`}>{stress.level}</p>
              <p className="text-sm">
                Your EMI takes {Math.round(stressScore)}% of your disposable income.
                {stressScore < 20 && " Your financial position is comfortable for this loan."}
                {stressScore >= 20 && stressScore < 40 && " Monitor your expenses carefully to maintain financial stability."}
                {stressScore >= 40 && " This loan may significantly strain your finances. Consider a smaller amount or longer tenure."}
              </p>
            </div>

            {/* Comparison Chart */}
            <div className="p-4 bg-secondary/30 rounded-lg space-y-2">
              <h5 className="font-semibold text-sm">Financial Breakdown</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Income</span>
                  <span className="font-medium">₹{income.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Expenses</span>
                  <span className="font-medium">₹{expenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disposable Income</span>
                  <span className="font-medium">₹{disposableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-muted-foreground">EMI Amount</span>
                  <span className="font-bold text-primary">₹{emi.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Remaining Balance</span>
                  <span className={`font-bold ${disposableIncome - emi < 0 ? "text-destructive" : "text-success"}`}>
                    ₹{(disposableIncome - emi).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
