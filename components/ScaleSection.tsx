"use client";

export default function ScaleSection() {
    return (
        <section className="py-20 bg-bg-primary border-t border-white/5">
            {/* Top tagline */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <p className="text-xl md:text-2xl font-heading text-text-primary">
                        Develop with your favorite tools{" "}
                        <span className="text-accent-coffee">&gt;_</span>
                    </p>
                    <p className="text-xl md:text-2xl font-heading text-text-primary mt-2">
                        Launch globally, instantly{" "}
                        <span className="text-accent-tech">⊕</span>
                        {" "}Keep pushing{" "}
                        <span className="text-accent-coffee">↗</span>
                    </p>
                </div>

                {/* Scale your Enterprise section */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row py-8 border-t border-white/5">
                    <span className="text-text-muted text-lg">Scale your</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Enterprise
                    </span>
                    <span className="text-text-muted text-lg">without compromising</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Security
                    </span>
                </div>


            </div>
        </section>
    );
}
