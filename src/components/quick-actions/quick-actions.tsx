import { Button } from '@/components/ui/button';
import { LifeBuoy, MessageSquareWarning, PenSquare, School } from 'lucide-react';

const actions = [
    { icon: PenSquare, text: 'Create a Ticket', href: '#' },
    { icon: LifeBuoy, text: 'Contact Support', href: '#' },
    { icon: School, text: 'Circle Academy', href: '#' },
    { icon: MessageSquareWarning, text: 'Report a Problem', href: '#' },
];

export default function QuickActions() {
    return (
        <section id="quick-actions" className="w-full py-12 md:py-20 bg-card">
            <div className="container mx-auto max-w-5xl px-4 animate-fade-in-up animation-delay-600">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">🧭 Quick Action Panel</h2>
                    <p className="text-muted-foreground">
                        Need to do something specific? Here are some quick links.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actions.map((action, index) => (
                        <Button key={index} asChild variant="outline" className="h-28 flex-col gap-2 rounded-2xl text-lg font-semibold shadow-sm hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 transition-all glow">
                           <a href={action.href}>
                             <action.icon className="h-8 w-8 mb-2 text-primary" />
                             {action.text}
                           </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}