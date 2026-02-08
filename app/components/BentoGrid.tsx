'use client';

import { Sparkles, ArrowUpRight, Zap, Target, Shield, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BentoGrid() {
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
        <section ref={sectionRef} className="section-premium bg-white overflow-hidden">
            <div className="max-container">
                <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-7xl font-bold text-brand-primary mb-8 tracking-tighter">
                        An interesting way <br /> to <span className="text-brand-accent italic">evolve</span>.
                    </h2>
                    <p className="text-xl text-brand-gray font-medium max-w-2xl">
                        Our platform is designed for the modern African professional, combining cutting-edge technology with local market insights.
                    </p>
                </div>

                <div className="bento-grid h-[800px]">
                    {/* Large Featured Card */}
                    <div
                        className={`col-span-12 md:col-span-7 bento-card transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center mb-8">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-brand-primary mb-6">Real-time Job Matching</h3>
                            <p className="text-lg text-brand-gray font-medium leading-relaxed max-w-md">Our proprietary algorithm matches your skills with the perfect opportunities in milliseconds.</p>
                            <div className="mt-auto flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-sm cursor-pointer group/link">
                                Learn more <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={18} />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    {/* Secondary Tall Card */}
                    <div
                        className={`col-span-12 md:col-span-5 bento-card bg-brand-primary text-brand-neutral transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    >
                        <div className="flex flex-col h-full bg-brand-primary">
                            <div className="w-16 h-16 bg-white/10 text-brand-accent rounded-2xl flex items-center justify-center mb-8">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Verified Employers Only</h3>
                            <p className="text-brand-neutral/60 font-medium">We vet every single company on our platform to ensure your safety and career security.</p>
                        </div>
                    </div>

                    {/* Bottom Flex Cards */}
                    <div
                        className={`col-span-12 md:col-span-4 bento-card transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    >
                        <Shield className="text-brand-accent mb-6" size={32} />
                        <h4 className="text-xl font-bold text-brand-primary mb-2">Secure Application</h4>
                        <p className="text-brand-gray text-sm font-medium">Your data is encrypted and secure.</p>
                    </div>

                    <div
                        className={`col-span-12 md:col-span-4 bento-card transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    >
                        <Globe className="text-brand-accent mb-6" size={32} />
                        <h4 className="text-xl font-bold text-brand-primary mb-2">Pan-African Network</h4>
                        <p className="text-brand-gray text-sm font-medium">Reach beyond borders.</p>
                    </div>

                    <div
                        className={`col-span-12 md:col-span-4 bento-card border-none bg-brand-accent/5 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    >
                        <Sparkles className="text-brand-primary mb-6" size={32} />
                        <h4 className="text-xl font-bold text-brand-primary mb-2">AI Resume Builder</h4>
                        <p className="text-brand-gray text-sm font-medium">Create a stunning CV in minutes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
