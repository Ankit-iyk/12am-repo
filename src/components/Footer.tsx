import { TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FairScore
            </span>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 FairScore. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Version 2.0 — Powered by ML & SHAP Explainability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
