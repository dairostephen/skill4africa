import { Compass, ShieldCheck, Rocket } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            title: 'Define Your Path',
            desc: 'Map your career goals to real-world skill requirements using our AI-driven pathfinder.',
            icon: <Compass className="w-8 h-8 text-brand-primary" />,
        },
        {
            title: 'Verify Your Skill',
            desc: 'Take rigorous, proctored assessments to prove your capabilities to global employers.',
            icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
        },
        {
            title: 'Accelerate Career',
            desc: 'Get matched directly with top-tier firms looking for your specific verified expertise.',
            icon: <Rocket className="w-8 h-8 text-brand-primary" />,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-container">
                <div className="max-w-xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
                        How it works.
                    </h2>
                    <p className="text-lg text-brand-gray font-medium">
                        We've removed the noise from the hiring process.
                        Three steps from raw potential to a global career.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-16 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="w-16 h-16 bg-brand-neutral border border-brand-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-accent transition-all duration-500 shadow-premium">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-primary mb-4 flex items-center gap-3">
                                <span className="text-brand-accent text-sm font-black">0{idx + 1}</span>
                                {step.title}
                            </h3>
                            <p className="text-brand-gray font-medium leading-relaxed">
                                {step.desc}
                            </p>

                            {idx < 2 && (
                                <div className="hidden lg:block absolute top-8 left-[100%] w-1/2 h-px bg-brand-primary/5 -z-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
