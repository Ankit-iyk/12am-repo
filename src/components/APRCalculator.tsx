import { Calculator, PieChart } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const APRCalculator = () => {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [processingFee, setProcessingFee] = useState(10000);
  const [insurance, setInsurance] = useState(5000);
  const [documentation, setDocumentation] = useState(2000);
  const [calculated, setCalculated] = useState(false);

  const totalCharges = processingFee + insurance + documentation;
  const effectiveLoan = principal - totalCharges;
  const totalInterest = (principal * interestRate * 2) / 100; // Assuming 2 years
  const totalRepayment = principal + totalInterest + totalCharges;
  const apr = ((totalRepayment - effectiveLoan) / effectiveLoan / 2) * 100;

  const charges = [
    { name: "Processing Fee", amount: processingFee, color: "text-primary" },
    { name: "Insurance", amount: insurance, color: "text-accent" },
    { name: "Documentation", amount: documentation, color: "text-warning" },
  ];

  return (
    <Card className="shadow-card hover:shadow-elevated transition-smooth animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          APR Calculator & Hidden Charge Breakdown
        </CardTitle>
        <CardDescription>Understand the true cost of your loan including all fees</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Loan Amount</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              placeholder="500000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (% p.a.)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="processingFee">Processing Fee</Label>
            <Input
              id="processingFee"
              type="number"
              value={processingFee}
              onChange={(e) => setProcessingFee(Number(e.target.value))}
              placeholder="10000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="insurance">Insurance Charges</Label>
            <Input
              id="insurance"
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
              placeholder="5000"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="documentation">Documentation Fee</Label>
            <Input
              id="documentation"
              type="number"
              value={documentation}
              onChange={(e) => setDocumentation(Number(e.target.value))}
              placeholder="2000"
            />
          </div>
        </div>

        <Button 
          onClick={() => setCalculated(true)} 
          className="w-full gradient-accent"
          size="lg"
        >
          Calculate True APR
        </Button>

        {calculated && (
          <div className="space-y-6 animate-scale-in">
            {/* APR Result */}
            <div className="p-6 rounded-lg gradient-primary text-primary-foreground">
              <p className="text-sm opacity-90 mb-1">Effective Annual Percentage Rate</p>
              <p className="text-5xl font-bold">{apr.toFixed(2)}%</p>
              <p className="text-sm opacity-75 mt-2">
                vs. {interestRate}% advertised rate
              </p>
            </div>

            {/* Hidden Charges Breakdown */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Hidden Charges Breakdown
              </h4>
              
              <div className="space-y-2">
                {charges.map((charge, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className={`font-medium ${charge.color}`}>{charge.name}</span>
                    <span className="font-bold">₹{charge.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg border border-destructive/20 font-bold">
                  <span>Total Additional Charges</span>
                  <span className="text-destructive">₹{totalCharges.toLocaleString()}</span>
                </div>
              </div>

              {/* Visual Representation */}
              <div className="space-y-2">
                <div className="flex gap-2 h-8 rounded-lg overflow-hidden">
                  <div 
                    className="bg-primary flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(processingFee / totalCharges) * 100}%` }}
                  >
                    {Math.round((processingFee / totalCharges) * 100)}%
                  </div>
                  <div 
                    className="bg-accent flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(insurance / totalCharges) * 100}%` }}
                  >
                    {Math.round((insurance / totalCharges) * 100)}%
                  </div>
                  <div 
                    className="bg-warning flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(documentation / totalCharges) * 100}%` }}
                  >
                    {Math.round((documentation / totalCharges) * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="p-4 bg-secondary/30 rounded-lg space-y-2">
              <h5 className="font-semibold text-sm mb-3">Complete Cost Analysis</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Requested Loan Amount</span>
                  <span className="font-medium">₹{principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Upfront Charges Deducted</span>
                  <span className="font-medium text-destructive">-₹{totalCharges.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-muted-foreground">Actual Amount Received</span>
                  <span className="font-bold text-primary">₹{effectiveLoan.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Interest (2 years)</span>
                  <span className="font-medium">₹{totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-semibold">Total Amount to Repay</span>
                  <span className="font-bold text-lg">₹{totalRepayment.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-sm">
                <span className="font-semibold text-warning">Important:</span> While the advertised rate is {interestRate}%, 
                the effective APR is {apr.toFixed(2)}% when all hidden charges are factored in. 
                You're receiving ₹{effectiveLoan.toLocaleString()} but repaying ₹{totalRepayment.toLocaleString()}.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
