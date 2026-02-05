import { Search, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="h-hero relative flex items-center pt-24 overflow-hidden">
            {/* Immersive Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Skills4Arika.jpeg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/95 via-brand-primary/85 to-brand-primary/95"></div>
            </div>

            <div className="max-container w-full relative h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center mb-24">
                    <div className="inline-flex items-center gap-3 bg-white border border-brand-primary/5 px-6 py-2 rounded-full mb-10 shadow-soft">
                        <Sparkles className="text-brand-accent" size={16} />
                        <span className="text-xs font-black text-brand-primary uppercase tracking-[0.2em]">Live Jobs, Verified Talent</span>
                    </div>

                    <h1 className="text-premium-h1 text-white mb-12">
                        Find the perfect <br />
                        <span className="text-brand-accent underline decoration-[12px] decoration-white/20 underline-offset-[-4px]">job</span> for you.
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed font-medium">
                        Search thousands of jobs in Nigeria. The best job vacancies and recruitment opportunities near you.
                    </p>
                </div>

                {/* Absolute-Positioned Search Experience */}
                <div className="relative md:absolute md:bottom-[-60px] md:left-1/2 md:-translate-x-1/2 w-full max-w-5xl bg-white p-3 rounded-[2.5rem] shadow-2xl border border-brand-primary/5 flex flex-col md:flex-row items-center gap-3 z-20">
                    <div className="flex-grow flex items-center px-6 py-5 gap-4 w-full md:border-r border-brand-primary/5">
                        <Search className="text-brand-gray/30" size={20} />
                        <input
                            type="text"
                            placeholder="Job title, keywords, or company"
                            className="bg-transparent border-none text-brand-primary font-bold placeholder:text-brand-gray/30 focus:ring-0 focus:outline-none w-full text-base"
                        />
                    </div>
                    <div className="flex-grow flex items-center px-6 py-5 gap-4 w-full">
                        <MapPin className="text-brand-gray/30" size={20} />
                        <select className="bg-transparent border-none text-brand-primary font-bold focus:ring-0 focus:outline-none w-full appearance-none text-base">
                            <option value="">All Locations</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="ph">Port Harcourt</option>
                        </select>
                    </div>
                    <button className="bg-brand-primary text-brand-neutral px-14 py-5 rounded-[2rem] font-bold text-base w-full md:w-auto hover:bg-brand-primary/95 transition-all hover:shadow-xl">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}
