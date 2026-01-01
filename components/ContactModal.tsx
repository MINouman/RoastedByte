"use client";

import { useEffect, useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    useEffect(() => {
        if (!isOpen) setStatus("idle");
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
            setStatus("success");
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("idle");
            alert("Failed to send message. Please try again.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-bg-primary shadow-2xl backdrop-blur-xl flex flex-col md:flex-row">
                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-text-muted transition-colors hover:bg-white/20 hover:text-white md:hidden"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Sidebar - Contact Info */}
                <div className="relative w-full md:w-2/5 bg-accent-tech/10 p-8 flex flex-col justify-between overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-[-50px] left-[-50px] w-32 h-32 rounded-full bg-accent-tech/20 blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 rounded-full bg-accent-coffee/20 blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="font-heading text-2xl font-bold text-white mb-2">
                            Contact Information
                        </h2>
                        <p className="text-sm text-text-muted mb-8">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-tech border border-white/5 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-text-primary">+880 1799050132</span>
                                    <span className="text-sm text-text-primary">+880 1829531588</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-tech border border-white/5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:hello@roastedbyte.com" className="text-sm text-text-primary hover:text-white transition-colors">
                                    hello@roastedbyte.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Socials or Bottom Decorative Element */}
                    <div className="relative z-10 mt-12 md:mt-0 pt-8 md:pt-0">
                        {/* Circle overlay similar to design */}
                        <div className="w-24 h-24 rounded-full bg-white/5 absolute bottom-0 right-0 -mr-6 -mb-6 backdrop-blur-md"></div>
                        <div className="w-12 h-12 rounded-full bg-accent-coffee/20 absolute bottom-12 right-12 backdrop-blur-md"></div>
                    </div>
                </div>

                {/* Right Content - Form */}
                <div className="w-full md:w-3/5 p-8 bg-bg-secondary/50 relative">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-white/5 text-text-muted transition-colors hover:bg-white/10 hover:text-white md:flex"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {status === "success" ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-tech/10 text-accent-tech">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="mb-8 text-text-muted">We&apos;ll get back to you shortly.</p>
                            <button
                                onClick={onClose}
                                className="rounded-full bg-accent-tech px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form
                            className="space-y-6 mt-2"
                            onSubmit={handleSubmit}
                            name="contact"
                            data-netlify="true"
                            method="POST"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Autofill fix via CSS injection */}
                            <style jsx global>{`
                                input:-webkit-autofill,
                                input:-webkit-autofill:hover, 
                                input:-webkit-autofill:focus, 
                                input:-webkit-autofill:active{
                                    -webkit-box-shadow: 0 0 0 30px #151515 inset !important;
                                    -webkit-text-fill-color: white !important;
                                    transition: background-color 5000s ease-in-out 0s;
                                }
                            `}</style>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-xs font-semibold text-text-muted uppercase tracking-wider">
                                        Your Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-sm text-white placeholder-text-muted/30 focus:border-accent-coffee focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-xs font-semibold text-text-muted uppercase tracking-wider">
                                        Your Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-sm text-white placeholder-text-muted/30 focus:border-accent-coffee focus:outline-none transition-colors"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-2 block text-xs font-semibold text-text-muted uppercase tracking-wider">
                                    Your Subject
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-sm text-white placeholder-text-muted/30 focus:border-accent-coffee focus:outline-none transition-colors"
                                    placeholder="I want to hire you"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-xs font-semibold text-text-muted uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-sm text-white placeholder-text-muted/30 focus:border-accent-coffee focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="rounded-full bg-accent-tech px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-tech/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
