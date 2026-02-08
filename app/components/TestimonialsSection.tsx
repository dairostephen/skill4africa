'use client';

import { Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Sarah Adeyemi',
        role: 'Product Designer at Google',
        content: 'Skill4Africa transformed my job search. The matching algorithm is incredibly precise, and I found my dream role in under 3 weeks.',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400'
    },
    {
        name: 'John Okafor',
        role: 'Founder of AgriTech solutions',
        content: 'Hiring verified talent in Africa used to be a challenge. Now, we have a reliable pipeline of pre-vetted professionals ready to scale.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
        name: 'Amara Chene',
        role: 'Senior Software Engineer',
        content: 'The platform depth is unmatched. From career guidance to direct interview scheduling, it feels like a personal career agent.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    }
];

export default function TestimonialsSection() {
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
        <section ref={sectionRef} className="section-premium bg-brand-neutral overflow-hidden">
            <div className="max-container">
                <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tighter">
                        Success <span className="text-brand-accent">Stories</span>.
                    </h2>
                    <p className="text-brand-gray font-medium text-lg max-w-2xl mx-auto">
                        Join thousands of professionals and employers finding success through our ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {testimonials.map((testi, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 200}ms` }}
                            className={`bg-white p-12 rounded-[3.5rem] border border-brand-primary/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
                        >
                            <Quote className="text-brand-accent mb-10" size={48} />
                            <p className="text-xl text-brand-primary font-medium leading-relaxed mb-10">
                                "{testi.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testi.avatar}
                                    alt={testi.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent/20"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-brand-primary">{testi.name}</h4>
                                    <p className="text-sm text-brand-gray font-medium">{testi.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
