import { Search, Zap, CheckCircle2, Building2, BarChart3, ArrowRight } from 'lucide-react';

export default function ForEmployers() {
    const values = [
        'Hire verified African talent instantly',
        'Skill-first filtering for accuracy',
        'Faster, better hiring with proctored data',
        'Transparent candidate performance reports'
    ];

    return (
        <section id="employers" className="section-padding bg-brand-primary text-white overflow-hidden relative">
            {/* Visual background splash */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="lg:w-1/2">
                    <h4 className="text-brand-accent font-black uppercase tracking-[0.2em] text-sm mb-4">Build Your Dream Team</h4>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                        The Smartest Way to Hire <br /> across <span className="text-brand-accent">Africa.</span>
                    </h2>

                    <p className="text-gray-400 text-lg font-medium mb-10 max-w-lg">
                        Skip the 1000s of noisy CVs. Our platform gives you direct access to pre-vetted, verified talent ready to build from day one.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {values.map((v, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <CheckCircle2 className="text-brand-accent flex-shrink-0" size={20} />
                                <span className="font-bold text-sm tracking-tight">{v}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-black text-lg hover:bg-brand-accent hover:text-white transition-all">
                        Join 100+ Hiring Partners
                    </button>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-3xl">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                                    <Search className="text-white" size={24} />
                                </div>
                                <p className="font-black text-lg">Filter by Skill</p>
                            </div>
                            <BarChart3 className="text-white/30" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['Python', 'React', 'Project Management', 'UI/UX', 'Cloud Engineering', 'DevOps'].map((s) => (
                                    <span key={s} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-brand-accent transition-colors cursor-pointer">
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:border-brand-accent/50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
                                    <div>
                                        <p className="font-black">Chinedu O.</p>
                                        <p className="text-xs text-brand-accent uppercase font-bold">Top Match: 98% Match</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-sm font-bold opacity-60 flex items-center justify-center">
                                <Zap className="mr-2 text-brand-accent" size={16} /> Hire in under 48 hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
