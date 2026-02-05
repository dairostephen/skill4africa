export default function MarketPulse() {
    const pulses = [
        { city: 'Lagos', role: 'Fullstack Dev', demand: 'High', skill: 'Next.js' },
        { city: 'Nairobi', role: 'Product Manager', demand: 'Extreme', skill: 'Fintech' },
        { city: 'Cape Town', role: 'Cloud Engineer', demand: 'High', skill: 'AWS' },
        { city: 'Accra', role: 'UX Designer', demand: 'Steady', skill: 'Figma' },
        { city: 'Johannesburg', role: 'Data Scientist', demand: 'Extreme', skill: 'Python' },
        { city: 'Kigali', role: 'Frontend Lead', demand: 'Emerging', skill: 'React' },
    ];

    return (
        <div className="bg-brand-primary py-4 overflow-hidden border-y border-white/10 relative z-30 w-full">
            <div className="flex whitespace-nowrap animate-ticker">
                {[...pulses, ...pulses].map((pulse, idx) => (
                    <div key={idx} className="flex items-center mx-12">
                        <span className="w-2 h-2 bg-brand-accent rounded-full mr-4 animate-pulse"></span>
                        <span className="text-white/60 text-xs font-black uppercase tracking-widest mr-3">{pulse.city}</span>
                        <span className="text-white text-sm font-bold mr-3">{pulse.role}</span>
                        <span className="bg-white/10 text-brand-accent px-2 py-0.5 rounded text-[10px] font-black uppercase">{pulse.skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
