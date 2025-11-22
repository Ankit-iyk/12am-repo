import { Card } from '@/components/ui/card';
import { Target, ArrowUpRight, Clock, Users, TrendingUp, Calendar } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ImprovementTips = () => {
  const tips = [
    {
      icon: Target,
      title: 'Reduce Late Night Transactions',
      description: 'Minimize transactions between 11 PM - 5 AM to improve behavior patterns.',
      currentValue: 15,
      targetValue: 5,
      unit: 'per month',
      priority: 'High',
      potentialGain: '+12 points',
      color: 'text-destructive',
      progressColor: 'bg-destructive',
    },
    {
      icon: Clock,
      title: 'Maintain Regular Payment Schedule',
      description: 'Keep up your consistent payment patterns. Set up auto-pay for recurring bills.',
      currentValue: 90,
      targetValue: 100,
      unit: '% on-time',
      priority: 'Medium',
      potentialGain: '+8 points',
      color: 'text-secondary',
      progressColor: 'bg-secondary',
    },
    {
      icon: Users,
      title: 'Diversify Merchant Transactions',
      description: 'Transact with more verified and reputable merchants to build trust.',
      currentValue: 8,
      targetValue: 15,
      unit: 'unique merchants',
      priority: 'Medium',
      potentialGain: '+10 points',
      color: 'text-accent',
      progressColor: 'bg-accent',
    },
    {
      icon: TrendingUp,
      title: 'Increase Savings Rate',
      description: 'Try to save at least 20% of your monthly income regularly.',
      currentValue: 15,
      targetValue: 20,
      unit: '% savings',
      priority: 'Low',
      potentialGain: '+6 points',
      color: 'text-primary',
      progressColor: 'bg-primary',
    },
    {
      icon: Calendar,
      title: 'Build Longer Transaction History',
      description: 'Continue using the same accounts consistently over time.',
      currentValue: 6,
      targetValue: 12,
      unit: 'months',
      priority: 'Low',
      potentialGain: '+5 points',
      color: 'text-secondary',
      progressColor: 'bg-secondary',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'Medium':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="tips" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Improvement Tips</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Actionable recommendations to boost your FairScore next month
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {tips.map((tip, idx) => {
            const progress = (tip.currentValue / tip.targetValue) * 100;
            return (
              <Card
                key={idx}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0`}>
                    <tip.icon className={`h-7 w-7 ${tip.color}`} />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold">{tip.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getPriorityColor(tip.priority)}`}>
                          {tip.priority} Priority
                        </span>
                        <div className="flex items-center gap-1 text-accent">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="text-sm font-bold">{tip.potentialGain}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Current: {tip.currentValue} {tip.unit}</span>
                        <span className="font-medium">Target: {tip.targetValue} {tip.unit}</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-2">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Potential Score Next Month</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                783
              </p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                By following these recommendations, you could improve your FairScore by up to <span className="font-semibold text-accent">+41 points</span> next month
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImprovementTips;
