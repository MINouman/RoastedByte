"use client";

export default function WhyUs() {
    const features = [
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <circle cx="38" cy="18" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M32 38c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
            ),
            title: "Founder-Led Execution",
            description: "Your project is handled directly by a senior engineer — not passed between layers."
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M14 14l10 10M34 14L24 24M14 34l10-10M34 34L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
            ),
            title: "Scalable by Design",
            description: "Everything we build is designed to grow with your business, not break under load."
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Clean Communication",
            description: "Clear timelines, honest expectations, and technical clarity from day one."
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6l4 8 9 1-6.5 6.5L32 31l-8-4-8 4 1.5-9.5L11 15l9-1 4-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                    <circle cx="24" cy="38" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M24 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Practical AI",
            description: "We apply AI where it actually adds value, avoiding unnecessary complexity or hype."
        }
    ];

    return (
        <section id="why-us" className="py-20 md:py-28 bg-bg-primary">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        {/* Section subtitle */}
                        <span className="text-accent-coffee text-sm font-medium tracking-wide mb-4">
                            / Why RoastedByte?
                        </span>

                        {/* Main heading */}
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-6">
                            Why Companies Choose
                            <br />
                            RoastedByte
                        </h2>

                        {/* Description */}
                        <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                            We prioritize solid system design, performance, and maintainability — not shortcuts.
                        </p>

                        {/* CTA Links */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 text-accent-coffee font-semibold hover:text-accent-tech transition-colors group"
                            >
                                Explore Services
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-text-muted font-semibold hover:text-text-primary transition-colors group"
                            >
                                Get in Touch
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-bg-secondary border border-border hover:border-accent-coffee/30 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="text-accent-coffee mb-4 group-hover:text-accent-tech transition-colors duration-300">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
