'use client';

import { UserPlus, Search, Send, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: 'Create Account',
            desc: 'Sign up in minutes with your professional profile or company details.',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: <Search size={32} />,
            title: 'Search & Match',
            desc: 'Find the perfect job or candidate using our advanced AI matching.',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            icon: <Send size={32} />,
            title: 'Apply / Post',
            desc: 'Apply for roles or post vacancies directly on the platform.',
            color: 'bg-emerald-50 text-emerald-600'
        },
        {
            icon: <CheckCircle size={32} />,
            title: 'Get Results',
            desc: 'Schedule interviews and finalize hires with career security.',
            color: 'bg-brand-accent/10 text-brand-accent'
        }
    ];

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
        <section ref={sectionRef} className="section-premium bg-white relative overflow-hidden">
            <div className="max-container">
                <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tighter">
                        How it <span className="text-brand-accent">works</span>.
                    </h2>
                    <p className="text-brand-gray font-medium text-lg max-w-2xl mx-auto">
                        A seamless journey designed for Africa's most ambitious professionals and employers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                            className={`flex flex-col items-center text-center p-12 bg-white rounded-[3rem] border border-brand-primary/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        >
                            <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8`}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-primary mb-4">{step.title}</h3>
                            <p className="text-brand-gray font-medium text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Narrative Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-primary/5 hidden lg:block -z-10"></div>
        </section>
    );
}
