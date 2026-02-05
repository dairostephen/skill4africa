import { Rocket, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export default function WhyUs() {
    const reasons = [
        {
            title: 'Skills Over Degrees',
            desc: "We focus on real-world ability. Prove you can do the job, and we'll handle the rest.",
            icon: <Rocket className="w-12 h-12 text-brand-accent" />,
        },
        {
            title: 'Built for Africa',
            desc: 'Optimized for local connectivity and specifically designed to meet African market needs.',
            icon: <MapPin className="w-12 h-12 text-indigo-500" />,
        },
        {
            title: 'Entry-Level Friendly',
            desc: 'Specifically designed to help junior talent break into the global tech ecosystem.',
            icon: <GraduationCap className="w-12 h-12 text-emerald-500" />,
        },
    ];

    return (
        <section id="why-us" className="section-padding bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h4 className="text-indigo-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Our Mission</h4>
                        <h2 className="text-5xl font-black text-brand-primary mb-8 leading-tight">
                            Why Choose <br /> <span className="text-brand-accent underline decoration-indigo-500 underline-offset-8 decoration-8">Skill4Africa?</span>
                        </h2>
                        <p className="text-lg text-brand-muted font-medium leading-relaxed mb-8">
                            We are not just another job board. We are a talent accelerator focused on closing the continental gap between ambition and opportunity.
                        </p>

                        <div className="space-y-4">
                            {['Vetted by Industry Experts', 'Endorsed by Top African Firms', 'Focus on 21st Century Skills'].map((text) => (
                                <div key={text} className="flex items-center space-x-3 text-brand-primary font-bold">
                                    <CheckCircle className="text-emerald-500" size={24} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {reasons.map((r, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-start space-x-6 hover:shadow-2xl transition-all duration-300">
                                <div className="flex-shrink-0">
                                    {r.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-brand-primary mb-2">{r.title}</h3>
                                    <p className="text-brand-muted font-medium">{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
