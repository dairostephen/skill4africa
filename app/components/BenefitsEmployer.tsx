import { Search, Zap, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

export default function BenefitsEmployer() {
    return (
        <section className="py-24 bg-brand-primary text-brand-neutral overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-container grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="order-2 lg:order-1 relative">
                    <div className="bg-brand-neutral shadow-2xl rounded-[3rem] p-8 md:p-12 text-brand-dark">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                                    <Search size={20} className="text-brand-primary" />
                                </div>
                                <span className="font-bold">Advanced Filtering</span>
                            </div>
                            <Zap className="text-brand-accent" size={20} />
                        </div>

                        <div className="space-y-6">
                            {['Data Science', 'Engineering', 'Products'].map((tag) => (
                                <div key={tag} className="flex items-center justify-between p-4 bg-brand-neutral border border-brand-primary/5 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                        <span className="font-bold text-sm">{tag} Applicant</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase text-brand-accent">Hiring</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-5 bg-brand-primary rounded-2xl text-white">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold opacity-50">Skill Score Match</span>
                                <span className="text-xs font-bold text-brand-accent">96%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-accent w-[96%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract floating icon */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-accent rounded-2xl rotate-12 flex items-center justify-center shadow-2xl">
                        <TrendingUp className="text-brand-primary" size={32} />
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tighter">
                        Zero Guesswork. <br /> Just <span className="text-brand-accent">Excellence.</span>
                    </h2>
                    <p className="text-brand-neutral/60 text-lg mb-12 max-w-lg font-medium">
                        Traditional CVs are obsolete. We provide employers with the technical and
                        soft-skill data needed to hire the best African talent, faster.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <Cpu className="text-brand-accent" size={32} />
                            <h4 className="text-xl font-bold">Skill-First Filtering</h4>
                            <p className="text-brand-neutral/40 text-sm font-medium">Filter candidates by actual verified assessment scores, not just history.</p>
                        </div>
                        <div className="space-y-4">
                            <TrendingUp className="text-brand-accent" size={32} />
                            <h4 className="text-xl font-bold">Better Retention</h4>
                            <p className="text-brand-neutral/40 text-sm font-medium">Hiring by skill accuracy leads to 45% better employee retention rates.</p>
                        </div>
                    </div>

                    <button className="mt-16 bg-brand-accent text-brand-primary px-10 py-4 rounded-full font-black hover:shadow-2xl hover:scale-105 transition-all">
                        Join Hiring Partners
                    </button>
                </div>
            </div>
        </section>
    );
}
