'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Jobs', href: '#' },
        { name: 'Career Advice', href: '#' },
        { name: 'CV Review', href: '#' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-brand-neutral/80 backdrop-blur-3xl py-6 border-b border-brand-primary/5' : 'bg-transparent py-14'}`}>
            <div className="max-container flex justify-between items-center">
                <a href="#" className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-accent font-black text-2xl shadow-lg">S</div>
                    <span className="text-2xl font-bold tracking-tighter text-brand-primary">Skill4Africa</span>
                </a>

                <div className="hidden md:flex items-center space-x-14">
                    {links.map(link => (
                        <a key={link.name} href={link.href} className="text-[14px] font-bold text-brand-primary uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-8">
                        <button className="text-[14px] font-bold text-brand-primary uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">Log In</button>
                        <button className="bg-brand-primary text-brand-neutral px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/10">
                            Post Job
                        </button>
                    </div>
                </div>

                <button className="md:hidden text-brand-primary">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}
