import { UserCheck, FileText, BadgeCheck, Sparkles } from 'lucide-react';

export default function ForJobSeekers() {
    const features = [
        {
            title: 'Skill-based job matching',
            desc: 'Our algorithm prioritizes what you can do over your school name, finding roles that fit your actual ability.',
            icon: <Sparkles className="text-indigo-600" />,
        },
        {
            title: 'Dynamic CV Builder',
            desc: 'Auto-generate a professional, modern CV that highlights your verified skills and certifications.',
            icon: <FileText className="text-indigo-600" />,
        },
        {
            title: 'Verified Skill Badges',
            desc: 'Display trustworthy badges on your profile after passing our industry-standard assessments.',
            icon: <BadgeCheck className="text-indigo-600" />,
        },
    ];

    return (
        <section id="job-seekers" className="section-padding bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <BadgeCheck className="w-16 h-16 text-brand-success/20 -rotate-12" />
                        </div>
                        <h3 className="text-2xl font-black text-brand-primary mb-8 pr-12">Talent Dashboard</h3>

                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 animate-pulse"></div>
                                    <div className="flex-grow space-y-2">
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-brand-primary rounded-[2rem] text-white flex justify-between items-center">
                            <div>
                                <p className="text-xs uppercase font-bold opacity-70">New Badge Earned</p>
                                <p className="text-lg font-black">Fullstack JS Expert</p>
                            </div>
                            <Sparkles className="text-brand-accent" />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h4 className="text-indigo-600 font-black uppercase tracking-[0.2em] text-sm mb-4 italic">For the Innovators</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-primary leading-tight mb-8">
                        Empowering Job Seekers with <span className="text-indigo-600">Verified Proof.</span>
                    </h2>

                    <div className="space-y-8">
                        {features.map((f, i) => (
                            <div key={i} className="flex space-x-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                    {f.icon}
                                </div>
                                <div>
                                    <h5 className="text-xl font-black text-brand-primary mb-2">{f.title}</h5>
                                    <p className="text-brand-muted font-medium">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 text-indigo-600 font-bold flex items-center hover:bg-indigo-50 px-6 py-2 rounded-xl transition-colors">
                        Learn more about verification <ArrowRight className="ml-2 w-4 h-4 text-indigo-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}

// Re-using ArrowRight for consistence
import { ArrowRight } from 'lucide-react';
