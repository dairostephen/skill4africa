'use client';

import { Briefcase, Building, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function TrustIndicators() {
    const [counts, setCounts] = useState({ jobs: 0, companies: 0, candidates: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const targets = {
        jobs: 2500,
        companies: 1000,
        candidates: 50000
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts({
                jobs: Math.floor(targets.jobs * easeOutQuart),
                companies: Math.floor(targets.companies * easeOutQuart),
                candidates: Math.floor(targets.candidates * easeOutQuart)
            });

            if (currentStep >= steps) {
                setCounts({
                    jobs: targets.jobs,
                    companies: targets.companies,
                    candidates: targets.candidates
                });
                clearInterval(interval);
            }
        }, stepDuration);
    };

    const stats = [
        { label: 'Live Jobs', value: counts.jobs, displayValue: `${counts.jobs.toLocaleString()}+`, icon: <Briefcase size={28} /> },
        { label: 'Companies', value: counts.companies, displayValue: `${counts.companies.toLocaleString()}+`, icon: <Building size={28} /> },
        { label: 'Candidates', value: counts.candidates, displayValue: `${counts.candidates.toLocaleString()}+`, icon: <Users size={28} /> },
    ];

    return (
        <section ref={sectionRef} className="section-premium bg-brand-neutral border-y border-brand-primary/5">
            <div className="max-container flex flex-col md:flex-row justify-around items-center gap-12">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-4 shadow-soft group-hover:bg-brand-accent transition-colors">
                            {stat.icon}
                        </div>
                        <span className="text-4xl md:text-5xl font-bold text-brand-primary mb-1 tabular-nums">
                            {stat.displayValue}
                        </span>
                        <span className="text-xs uppercase font-black text-brand-gray/40 tracking-[0.2em]">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
