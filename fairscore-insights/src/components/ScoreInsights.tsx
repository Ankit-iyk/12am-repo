import { Card } from '@/components/ui/card';
import { CheckCircle2, Sparkles, TrendingUp, Shield, Clock, Wallet } from 'lucide-react';

const ScoreInsights = () => {
  const insights = [
    {
      icon: CheckCircle2,
      title: 'Consistent Payment Behavior',
      description: 'Your regular on-time payments across UPI and bills significantly boost your score.',
      impact: '+45 points',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Sparkles,
      title: 'Diverse Transaction History',
      description: 'Transactions with various verified merchants show financial stability and responsibility.',
      impact: '+38 points',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: TrendingUp,
      title: 'Growing Savings Pattern',
      description: 'Increasing balance and regular savings deposits indicate strong financial health.',
      impact: '+32 points',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Shield,
      title: 'Low-Risk Transaction Profile',
      description: 'Most transactions are with established, verified merchants which reduces risk factors.',
      impact: '+28 points',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Clock,
      title: 'Regular Income Deposits',
      description: 'Consistent monthly income deposits demonstrate reliable earning patterns.',
      impact: '+25 points',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Wallet,
      title: 'Healthy Spending Ratio',
      description: 'Your spending-to-income ratio is within the healthy range of 40-60%.',
      impact: '+22 points',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="insights" className="py-16 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Score Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What improved your score and why these factors matter
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <Card
              key={idx}
              className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-xl ${insight.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <insight.icon className={`h-6 w-6 ${insight.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {insight.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground">Impact</span>
                <span className={`text-sm font-bold ${insight.color}`}>
                  {insight.impact}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoreInsights;
