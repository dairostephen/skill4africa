'use client';

export default function PartnerTicker() {
    const partners = [
        'Google', 'Amazon', 'Microsoft', 'Safary', 'Flutterwave',
        'Paystack', 'Andela', 'Interswitch', 'Kuda', 'Airtel'
    ];

    return (
        <section className="py-12 bg-white border-b border-brand-primary/5 overflow-hidden">
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gray/30 mb-8">
                    Empowering talent for global leaders
                </span>

                <div className="relative w-full flex overflow-hidden">
                    <div className="flex animate-ticker whitespace-nowrap gap-20 items-center">
                        {[...partners, ...partners].map((partner, idx) => (
                            <span
                                key={idx}
                                className="text-2xl md:text-3xl font-black text-brand-primary/10 hover:text-brand-accent transition-colors cursor-default select-none"
                            >
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
