import { BadgeCheck, Sparkles, TrendingUp, Cpu, Users, BarChart3, Fingerprint } from 'lucide-react';

export default function BentoGrid() {
    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="max-container">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold text-brand-primary mb-8 tracking-tighter">
                        An interesting way <br /> to <span className="text-brand-accent italic">evolve</span>.
                    </h2>
                    <p className="text-xl text-brand-gray max-w-2xl font-medium">
                        We've built a multi-layered ecosystem that serves both sides of the market with extreme precision.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Main Card: Skill-First Philosophy */}
                    <div className="col-span-12 lg:col-span-8 bento-card bg-brand-primary text-brand-neutral border-none h-[400px] flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Fingerprint size={280} className="rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-6">
                                <BadgeCheck className="text-brand-primary" />
                            </div>
                            <h3 className="text-4xl font-bold mb-4">Skills Over Degrees</h3>
                            <p className="text-brand-neutral/60 max-w-md font-medium">
                                Our VCN (Verified Competency Network) ensures that institutional labels matter less than verified abilities. We champion the 95% placement rate across 24 countries.
                            </p>
                        </div>
                    </div>

                    {/* Card: Real-time Analytics */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 bento-card bg-brand-accent group">
                        <div className="flex justify-between items-start mb-12">
                            <BarChart3 className="text-brand-primary" size={32} />
                            <div className="bg-brand-primary/10 px-3 py-1 rounded-full text-[10px] font-black uppercase text-brand-primary">Live Data</div>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-primary mb-4">Market Pulse</h3>
                        <p className="text-brand-primary/60 font-medium mb-12">
                            Get real-time insights into which skills are trending in major hubs like Lagos, Nairobi, and Jo'burg.
                        </p>
                        <div className="flex gap-2">
                            <div className="w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-primary w-2/3 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card: For Employers */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 bento-card">
                        <Cpu className="text-brand-accent mb-6" size={32} />
                        <h3 className="text-2xl font-bold text-brand-primary mb-4">Employer OS</h3>
                        <p className="text-brand-gray font-medium mb-10">
                            A high-performance pipeline to hire pre-vetted talent in under 48 hours. Zero noise, just excellence.
                        </p>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">+1k</div>
                        </div>
                    </div>

                    {/* Card: Job Seeker Growth */}
                    <div className="col-span-12 lg:col-span-8 bento-card flex gap-12 items-center flex-col md:flex-row">
                        <div className="flex-grow">
                            <TrendingUp className="text-brand-accent mb-6" size={32} />
                            <h3 className="text-2xl font-bold text-brand-primary mb-4">Zero to Career</h3>
                            <p className="text-brand-gray font-medium">
                                Map your career goals to real-world skill requirements using our AI-driven pathfinder. Built for the ambitious African professional.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-64 aspect-video bg-brand-neutral rounded-2xl border border-brand-primary/5 flex flex-col p-4 justify-center">
                            <div className="h-2 w-full bg-brand-accent/20 rounded-full mb-2"></div>
                            <div className="h-2 w-4/5 bg-brand-primary/10 rounded-full mb-2"></div>
                            <div className="h-2 w-3/4 bg-brand-primary/5 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
