import { LayoutDashboard, FileText, BadgeCheck, Sparkles } from 'lucide-react';

export default function BenefitsSeeker() {
    const benefits = [
        {
            title: 'Skill-First Matching',
            desc: 'Go beyond the bullet points. Get roles based on what you actually do.',
            icon: <Sparkles className="text-brand-accent" />,
        },
        {
            title: 'Automated CV Builder',
            desc: 'Turn your verified skills into a professional resume in one click.',
            icon: <FileText className="text-brand-accent" />,
        },
        {
            title: 'Global Credentials',
            desc: 'Earn badges that are recognized by international hiring standards.',
            icon: <BadgeCheck className="text-brand-accent" />,
        },
    ];

    return (
        <section className="section-premium bg-white border-y border-brand-primary/5 overflow-hidden">
            <div className="max-container grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 tracking-tighter">
                        For the <br /> <span className="text-brand-accent">Ambitious.</span>
                    </h2>
                    <p className="text-lg text-brand-gray mb-12 font-medium">
                        Stop guessing what employers want. Skill4Africa provides the roadmap and the proof you need to win.
                    </p>

                    <div className="space-y-10">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-premium flex items-center justify-center border border-brand-primary/5 group-hover:scale-110 transition-transform">
                                    {b.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-primary mb-2">{b.title}</h4>
                                    <p className="text-brand-gray font-medium">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-white p-12 rounded-[3rem] shadow-premium border border-brand-primary/5 hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-primary rounded-full"></div>
                                <div className="space-y-1">
                                    <div className="h-3 w-20 bg-brand-primary/10 rounded-full"></div>
                                    <div className="h-2 w-12 bg-brand-primary/5 rounded-full"></div>
                                </div>
                            </div>
                            <LayoutDashboard className="text-brand-primary/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="h-32 bg-brand-neutral rounded-2xl flex flex-col items-center justify-center p-4">
                                <span className="text-3xl font-bold text-brand-primary">82%</span>
                                <span className="text-[10px] uppercase font-black text-brand-gray/40">Market Readiness</span>
                            </div>
                            <div className="h-32 bg-brand-accent rounded-2xl flex flex-col items-center justify-center p-4">
                                <Sparkles className="text-white mb-2" size={20} />
                                <span className="text-xs font-bold text-brand-primary">Pro Level</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-4 bg-brand-neutral rounded-full w-full"></div>
                            <div className="h-4 bg-brand-neutral rounded-full w-4/5"></div>
                        </div>
                    </div>
                    {/* Accent decoration */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
