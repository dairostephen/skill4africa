import { BarChart3, Fingerprint, Award } from 'lucide-react';

export default function Differentiator() {
    const points = [
        {
            title: 'Skills over Degrees',
            desc: 'Institutional labels matter less than verified abilities. We champion potential.',
            icon: <Award className="text-brand-accent" size={32} />,
        },
        {
            title: 'Deep Market Insights',
            desc: 'Built by Africans for the African market, understanding local hiring nuances.',
            icon: <BarChart3 className="text-brand-accent" size={32} />,
        },
        {
            title: 'Trust Intelligence',
            desc: 'Our proctored verification system ensures every badge represents true mastery.',
            icon: <Fingerprint className="text-brand-accent" size={32} />,
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-container flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-10 tracking-tight">
                        Why we are different.
                    </h2>
                    <div className="space-y-12">
                        {points.map((p, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    {p.icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-brand-primary mb-3">{p.title}</h4>
                                    <p className="text-brand-gray font-medium leading-relaxed max-w-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="text-[12rem] font-bold text-brand-primary/5 select-none absolute -top-40 -left-20 -z-10 leading-none">
                        SKILL
                    </div>
                    <div className="bg-brand-neutral border border-brand-primary/5 rounded-[4rem] p-12 relative overflow-hidden shadow-premium">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center p-2">
                                <div className="w-full h-full border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                            </div>
                            <h3 className="text-3xl font-bold text-brand-primary">The New Standard.</h3>
                            <p className="text-brand-gray font-medium max-w-xs uppercase text-xs tracking-[0.3em]">
                                Replacing traditional CVs with verified skill data.
                            </p>
                            <div className="pt-8">
                                <button className="text-brand-primary font-black flex items-center gap-2 hover:gap-4 transition-all">
                                    Learn how we verify <Award size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
