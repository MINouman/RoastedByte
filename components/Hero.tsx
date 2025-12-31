"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";


export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">


                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pointer-events-none">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm pointer-events-auto">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-tech animate-pulse" />
                        <span className="text-xs font-medium text-text-muted">
                            Engineering Excellence, Delivered
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="mb-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                        Engineering intelligent
                        <br />
                        <span className="bg-gradient-to-r from-accent-coffee via-accent-tech to-accent-coffee bg-clip-text text-transparent">
                            systems that scale.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto mb-8 max-w-2xl text-base text-text-muted md:text-lg leading-relaxed">
                        RoastedByte is a modern software and automation agency building high-performance web platforms, data pipelines, and AI-powered systems for growing businesses. From automation and APIs to machine learning and cloud infrastructure, we design systems that reduce complexity, improve efficiency, and deliver measurable results.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row pointer-events-auto">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                        >
                            Start Building
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-medium text-white transition-all hover:border-white/20 hover:bg-white/5"
                        >
                            View Our Work
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 md:grid-cols-4">
                        {[
                            { value: "12+", label: "Projects Delivered" },
                            { value: "99.9%", label: "Uptime Guaranteed" },
                            { value: "24/7", label: "Support Available" },
                            { value: "2+", label: "Years Experience" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-xs text-text-muted">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
