"use client";

export default function Services() {
    const services = [
        {
            title: "Automation Systems",
            description: "Eliminate repetitive work. Focus on growth. We design custom automation workflows that replace manual processes across operations, analytics, and customer workflows. From internal tooling to third-party integrations, our systems save hundreds of hours every month.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <circle cx="32" cy="32" r="12" />
                    <path d="M32 8v8M32 48v8M56 32h-8M16 32H8" />
                    <path d="M49 15L43 21M21 43l-6 6M49 49l-6-6M21 21l-6-6" />
                    <circle cx="32" cy="32" r="24" strokeDasharray="4 4" />
                </svg>
            ),
        },
        {
            title: "API Development",
            description: "Robust, scalable APIs built for real-world usage. We build secure, well-documented APIs designed for performance and long-term scalability. Our focus is clean architecture, predictable behavior, and excellent developer experience.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <path d="M20 16L8 32l12 16" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44 16l12 16-12 16" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38 12L26 52" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            title: "Data Engineering",
            description: "Turn raw data into actionable insight. We architect data pipelines that collect, process, and store data efficiently — enabling analytics, real-time dashboards, and AI applications.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <ellipse cx="32" cy="16" rx="20" ry="8" />
                    <path d="M12 16v32c0 4.4 8.95 8 20 8s20-3.6 20-8V16" />
                    <path d="M12 32c0 4.4 8.95 8 20 8s20-3.6 20-8" />
                    <path d="M12 24c0 4.4 8.95 8 20 8s20-3.6 20-8" />
                </svg>
            ),
        },
        {
            title: "Web Development",
            description: "Modern, fast, and conversion-focused web experiences. We build responsive, SEO-optimized websites and web applications using modern frameworks. Performance, accessibility, and clean design are built in from day one.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <circle cx="32" cy="32" r="24" />
                    <ellipse cx="32" cy="32" rx="10" ry="24" />
                    <path d="M8 32h48" />
                    <path d="M12 20h40" />
                    <path d="M12 44h40" />
                </svg>
            ),
        },
        {
            title: "Machine Learning",
            description: "Intelligent systems that learn and adapt. We design and deploy machine learning solutions tailored to business problems — from prediction and classification to recommendation and automation.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <circle cx="32" cy="20" r="8" />
                    <circle cx="16" cy="44" r="6" />
                    <circle cx="48" cy="44" r="6" />
                    <path d="M26 26l-6 14M38 26l6 14" />
                    <path d="M22 44h20" />
                </svg>
            ),
        },
        {
            title: "Cloud Solutions",
            description: "Infrastructure that scales with your business. We design secure, reliable cloud architectures that support growth without unnecessary complexity or cost.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
                    <path d="M16 44a12 12 0 01-4-23.3A16 16 0 0144 16a16 16 0 0112 26" />
                    <path d="M12 44h40" strokeLinecap="round" />
                    <path d="M20 50h24" strokeLinecap="round" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="py-24 bg-bg-primary">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Our <span className="text-accent-coffee">Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base md:text-lg">
                        Comprehensive engineering solutions built with precision and care
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-white/5 bg-bg-secondary p-8 transition-all duration-300 hover:border-accent-coffee hover:shadow-lg hover:shadow-accent-coffee/5 active:scale-[0.98]"
                        >
                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full min-h-[220px]">
                                {/* Title */}
                                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-coffee">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-muted text-sm leading-relaxed transition-colors duration-300 group-hover:text-text-primary">
                                    {service.description}
                                </p>

                                {/* Spacer */}
                                <div className="flex-grow" />

                                {/* Icon - positioned bottom right */}
                                <div className="flex justify-end mt-6">
                                    <div className="text-text-muted/30 transition-all duration-500 group-hover:text-accent-coffee group-hover:scale-110 group-hover:rotate-3">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Minimal corner accent */}
                            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent-coffee opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
