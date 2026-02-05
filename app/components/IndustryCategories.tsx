'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const categories = [
    {
        title: 'Fintech & Banking',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        count: '420+ Jobs'
    },
    {
        title: 'Software Engineering',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        count: '850+ Jobs'
    },
    {
        title: 'Healthcare & Biotech',
        image: 'https://images.unsplash.com/photo-1505751172107-167814e3049b?auto=format&fit=crop&q=80&w=800',
        count: '150+ Jobs'
    },
    {
        title: 'E-commerce & Retail',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
        count: '310+ Jobs'
    },
    {
        title: 'Creative & Design',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        count: '280+ Jobs'
    },
    {
        title: 'Agriculture & Agtech',
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
        count: '95+ Jobs'
    }
];

export default function IndustryCategories() {
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
        <section ref={sectionRef} className="py-56 bg-white overflow-hidden">
            <div className="max-container">
                <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tighter">
                        Top <span className="text-brand-accent">Industries</span>.
                    </h2>
                    <p className="text-brand-gray font-medium text-lg max-w-2xl">
                        Discover opportunities in high-growth sectors across the continent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className={`group relative h-[400px] overflow-hidden rounded-[3rem] border border-brand-primary/5 transition-all duration-1000 ${isVisible ? 'opacity-100 rotate-0 translate-y-0 scale-100' : 'opacity-0 rotate-3 translate-y-20 scale-95'}`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${cat.image}')` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent group-hover:via-brand-primary/40 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-10 flex justify-between items-end">
                                <div>
                                    <span className="text-xs font-black text-brand-accent uppercase tracking-widest mb-2 block">{cat.count}</span>
                                    <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                                </div>
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
