import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const FairScoreDisplay = () => {
  const currentScore = 742;
  const previousScore = 698;
  const scoreChange = currentScore - previousScore;
  const scorePercentage = (currentScore / 1000) * 100;

  const getScoreCategory = (score: number) => {
    if (score >= 800) return { label: 'Excellent', gradient: 'var(--gradient-score-excellent)' };
    if (score >= 700) return { label: 'Good', gradient: 'var(--gradient-score-good)' };
    if (score >= 600) return { label: 'Fair', gradient: 'var(--gradient-score-fair)' };
    return { label: 'Needs Improvement', gradient: 'var(--gradient-score-poor)' };
  };

  const category = getScoreCategory(currentScore);

  const historyData = [
    { month: 'Sep', score: 650 },
    { month: 'Oct', score: 675 },
    { month: 'Nov', score: 698 },
    { month: 'Dec', score: 720 },
    { month: 'Jan', score: 742 },
  ];

  return (
    <section id="fairscore" className="py-16 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your FairScore</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive credit score based on your financial behavior
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ background: category.gradient }}></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">Current Score</p>
                <div className="relative inline-block">
                  <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="hsl(var(--muted))"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${scorePercentage * 5.34} 534`}
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {currentScore}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1">out of 1000</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                  <span className="text-lg font-semibold">{category.label}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  {scoreChange > 0 ? (
                    <>
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium">+{scoreChange} points this month</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="h-4 w-4 text-destructive" />
                      <span className="text-destructive font-medium">{scoreChange} points this month</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Score History</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={historyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  domain={[600, 800]}
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FairScoreDisplay;
