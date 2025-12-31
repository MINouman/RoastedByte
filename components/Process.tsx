"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function Process() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.3 });

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [lineProgress, setLineProgress] = useState<number[]>([]);

    const steps = [
        {
            number: "01",
            title: "Discover",
            description: "We start by deeply understanding your business goals, technical constraints, and existing systems. No assumptions — only clarity.",
        },
        {
            number: "02",
            title: "Design",
            description: "We design a solution architecture that balances performance, scalability, and simplicity. Every decision is intentional.",
        },
        {
            number: "03",
            title: "Build",
            description: "We implement clean, well-structured systems using modern tools and best practices — optimized for long-term reliability.",
        },
        {
            number: "04",
            title: "Launch & Optimize",
            description: "After deployment, we monitor performance, refine workflows, and optimize for real-world usage. Transparent communication at every stage.",
        },
    ];

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isInView || isPaused) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => {
                const current = prev;
                const next = (prev + 1) % steps.length;

                // Start line animation for current step
                setTimeout(() => {
                    setLineProgress((lines) => {
                        if (!lines.includes(current)) {
                            return [...lines, current];
                        }
                        return lines;
                    });
                }, 100);

                // Complete the circle after line finishes (after 1 second)
                setTimeout(() => {
                    setCompletedSteps((completed) => {
                        if (!completed.includes(current)) {
                            const newCompleted = [...completed, current];

                            // Check if all steps are now completed
                            if (newCompleted.length === steps.length) {
                                // Pause for 2 seconds before resetting
                                setIsPaused(true);
                                setTimeout(() => {
                                    setCompletedSteps([]);
                                    setLineProgress([]);
                                    setActiveStep(0);
                                    setIsPaused(false);
                                }, 2000);
                            }

                            return newCompleted;
                        }
                        return completed;
                    });
                }, 1200);

                return next;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, [steps.length, isPaused, isInView]);

    return (
        <section id="process" ref={sectionRef} className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
                        How We Work
                    </h2>
                    <p className="mx-auto max-w-xl text-text-muted">
                        A transparent, efficient process designed to deliver value from day one.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-4 relative">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index;
                        const isCompleted = completedSteps.includes(index);
                        const isLineAnimating = lineProgress.includes(index);

                        return (
                            <div key={index} className="relative">
                                {/* Connecting line - now for ALL steps including the last one */}
                                <div className="absolute top-8 left-1/2 hidden h-0.5 w-full -translate-x-1/2 md:block">
                                    {/* Base line */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-border to-bg-secondary" />
                                    {/* Animated progress line */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-accent-tech to-accent-coffee transition-all duration-1000 ${isLineAnimating
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0"
                                            }`}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div
                                        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-500 ${isCompleted
                                            ? "border-accent-coffee bg-accent-coffee shadow-lg shadow-accent-coffee/50"
                                            : isActive
                                                ? "border-accent-tech bg-accent-tech shadow-xl shadow-accent-tech/50 scale-110"
                                                : "border-border bg-bg-secondary shadow-lg"
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <svg
                                                className="w-8 h-8 text-white animate-scale-in"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        ) : (
                                            <span
                                                className={`font-heading text-xl font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-text-muted"
                                                    }`}
                                            >
                                                {step.number}
                                            </span>
                                        )}
                                    </div>
                                    <h3
                                        className={`mb-3 font-heading text-xl font-semibold transition-colors duration-500 ${isActive || isCompleted
                                            ? "text-text-primary"
                                            : "text-text-muted"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="max-w-xs text-sm text-text-muted">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes scale-in {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
}
