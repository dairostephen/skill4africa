'use client';

import { MapPin, Banknote, Bookmark, Briefcase, Search, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const jobs = [
    { title: 'Senior Product Designer', company: 'Google', location: 'Lagos, NG (Remote)', salary: '₦1.2M - ₦1.8M', type: 'Full-time', icon: <Briefcase /> },
    { title: 'Frontend Developer', company: 'Paystack', location: 'Lagos, NG', salary: '₦800k - 1.2M', type: 'Full-time', icon: <Briefcase size={20} /> },
    { title: 'UX Researcher', company: 'Interswitch', location: 'Lagos, NG', salary: '₦600k - 900k', type: 'Contract', icon: <Briefcase size={20} /> },
];

export default function JobsGrid() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-56 bg-white">
            <div className="max-container">
                <div className={`flex justify-between items-end mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 tracking-tighter">
                            Featured <span className="text-brand-accent">Opportunities</span>
                        </h2>
                        <p className="text-brand-gray font-medium text-lg">Hand-picked roles from top African companies.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors">
                        View all jobs
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`bg-white border border-brand-primary/5 rounded-[2rem] p-8 hover:shadow-premium hover:-translate-y-2 transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        >
                            <div className="w-12 h-12 bg-brand-neutral rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-accent transition-colors">
                                {job.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-1">{job.title}</h3>
                            <p className="text-brand-gray text-sm font-medium mb-6 uppercase tracking-wider">{job.company}</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-gray/50">
                                    <MapPin size={14} /> {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-brand-gray/50">
                                    <Banknote size={14} /> {job.salary}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${job.type === 'Contract' ? 'bg-orange-100 text-orange-600' : 'bg-brand-primary/5 text-brand-primary'}`}>
                                    {job.type}
                                </span>
                                <button className="text-brand-primary/20 hover:text-brand-accent transition-colors">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

