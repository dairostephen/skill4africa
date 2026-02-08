import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="section-premium bg-brand-neutral overflow-hidden">
            <div className="max-container">
                <div className="bg-brand-primary rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-2xl">
                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-5xl md:text-7xl font-bold text-brand-neutral mb-8 leading-tight tracking-tighter relative z-10">
                        Start your career <br /> journey <span className="text-brand-accent italic">today</span>.
                    </h2>

                    <p className="text-xl text-brand-neutral/60 max-w-2xl mx-auto mb-16 font-medium relative z-10">
                        Join thousands of African professionals getting hired by verified skills.
                        The next chapter of your career begins here.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <button className="btn-premium bg-brand-accent text-brand-primary text-xl active:scale-95 group">
                            Start Building Skills
                            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="btn-premium border-2 border-brand-neutral/20 text-brand-neutral text-xl hover:bg-brand-neutral/5">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
