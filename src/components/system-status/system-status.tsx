import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function SystemStatus() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto max-w-4xl px-4 animate-fade-in-up animation-delay-400">
        <Card className="bg-success/10 border-success/20 p-4 rounded-2xl">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="h-6 w-6 text-success" />
            <p className="font-semibold text-success-foreground">✅ All systems operational</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
