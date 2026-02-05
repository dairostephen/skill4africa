import { Briefcase, Building, Users } from 'lucide-react';

export default function TrustIndicators() {
    const stats = [
        { label: 'Live Jobs', value: '2,500+', icon: <Briefcase size={28} /> },
        { label: 'Companies', value: '1,000+', icon: <Building size={28} /> },
        { label: 'Candidates', value: '50,000+', icon: <Users size={28} /> },
    ];

    return (
        <section className="py-32 bg-brand-neutral border-y border-brand-primary/5">
            <div className="max-container flex flex-col md:flex-row justify-around items-center gap-12">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-4 shadow-soft group-hover:bg-brand-accent transition-colors">
                            {stat.icon}
                        </div>
                        <span className="text-4xl md:text-5xl font-bold text-brand-primary mb-1 tabular-nums">
                            {stat.value}
                        </span>
                        <span className="text-xs uppercase font-black text-brand-gray/40 tracking-[0.2em]">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
