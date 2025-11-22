import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, HelpCircle } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SHAPExplanations = () => {
  const shapData = [
    { feature: 'Regular UPI Payments', impact: 45, positive: true },
    { feature: 'Timely Bill Payments', impact: 38, positive: true },
    { feature: 'Diverse Merchants', impact: 25, positive: true },
    { feature: 'Stable Income Pattern', impact: 22, positive: true },
    { feature: 'Late Night Transactions', impact: -15, positive: false },
    { feature: 'High-Risk Merchants', impact: -12, positive: false },
    { feature: 'Irregular Deposits', impact: -8, positive: false },
  ];

  return (
    <section id="shap" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">SHAP Explanations</h2>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    SHAP values show how each feature impacts your credit score. Positive values increase your score, negative values decrease it.
                  </p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand what factors are driving your FairScore
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-semibold">Positive Contributors</h3>
                </div>
                <div className="space-y-3">
                  {shapData.filter(d => d.positive).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.feature}</p>
                        <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"
                            style={{ width: `${(item.impact / 45) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-accent">+{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  <h3 className="text-lg font-semibold">Negative Contributors</h3>
                </div>
                <div className="space-y-3">
                  {shapData.filter(d => !d.positive).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.feature}</p>
                        <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-destructive to-orange-500 transition-all duration-500"
                            style={{ width: `${(Math.abs(item.impact) / 15) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-destructive">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-6 text-center">Feature Impact Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={shapData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
                  <YAxis
                    type="category"
                    dataKey="feature"
                    width={150}
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '11px' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
                    {shapData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.positive ? 'hsl(var(--accent))' : 'hsl(var(--destructive))'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SHAPExplanations;
