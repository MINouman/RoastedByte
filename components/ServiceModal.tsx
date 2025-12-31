"use client";

import Image from "next/image";

interface ServiceModalProps {
    isOpen: boolean;
    service: {
        title: string;
        subtitle: string;
        description: string;
        fullDescription: string[];
        testimonial?: {
            text: string;
            company: string;
        };
        stats?: Array<{ value: string; label: string }>;
        icon: React.ReactNode;
        details?: string[];
        heroImage: string;
    } | null;
    onClose: () => void;
}

export default function ServiceModal({ isOpen, service, onClose }: ServiceModalProps) {
    if (!isOpen || !service) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-hidden rounded-3xl border border-white/10 bg-bg-secondary/95 shadow-2xl backdrop-blur-xl"
                onMouseEnter={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Hero Image */}
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-bg-secondary to-bg-primary">
                    <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover opacity-70"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-12 pt-8">
                    {/* Title */}
                    <h2 className="mb-6 font-heading text-5xl font-bold text-white leading-tight">
                        {service.title} <br />
                        {service.subtitle}
                    </h2>

                    {/* Full Description */}
                    <div className="space-y-4 mb-8">
                        {service.fullDescription.map((paragraph, index) => (
                            <p key={index} className="text-base text-text-muted leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Testimonial */}
                    {service.testimonial && (
                        <div className="mb-10 p-8 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-lg text-text-muted italic mb-4">
                                "{service.testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/20" />
                                <span className="text-white font-semibold text-sm tracking-wider">
                                    ▲ {service.testimonial.company}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Stats Grid */}
                    {service.stats && service.stats.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                            {service.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* What We Deliver */}
                    {service.details && service.details.length > 0 && (
                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                What we deliver
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {service.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                                        <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-coffee flex-shrink-0" />
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </div>
    );
}
