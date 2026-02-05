import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="pt-72 pb-40 bg-white border-t border-brand-primary/5">
            <div className="max-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div>
                        <a href="#" className="text-2xl font-black text-brand-primary mb-8 inline-block">
                            Skill4<span className="text-brand-gray/40">Africa</span>
                        </a>
                        <p className="text-brand-gray font-medium max-w-sm leading-relaxed mb-8">
                            Connecting talent with opportunity across Africa. Find your dream job or the perfect candidate today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-neutral flex items-center justify-center text-brand-primary hover:bg-brand-accent transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mb-8">For Candidates</h5>
                        <ul className="space-y-4">
                            {['Browse Jobs', 'Career Advice', 'CV Review', 'Job Alerts'].map(link => (
                                <li key={link}><a href="#" className="text-brand-gray font-medium hover:text-brand-primary transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mb-8">For Employers</h5>
                        <ul className="space-y-4">
                            {['Post a Job', 'Talent Search', 'Recruitment Services', 'Pricing'].map(link => (
                                <li key={link}><a href="#" className="text-brand-gray font-medium hover:text-brand-primary transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mb-8">Contact Us</h5>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-brand-gray font-medium"><Mail size={16} /> info@skill4africa.com</li>
                            <li className="flex items-center gap-3 text-brand-gray font-medium"><Phone size={16} /> +234 800 123 4567</li>
                            <li className="flex items-center gap-3 text-brand-gray font-medium"><MapPin size={16} /> Lagos, Nigeria</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-primary/5 pt-12 text-center">
                    <p className="text-brand-gray/50 text-xs font-bold uppercase tracking-widest">
                        © 2026 Skill4Africa Platform. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
