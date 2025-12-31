"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-bg-primary/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-3 z-[60]">
                        <Image
                            src="/rb_logo.png"
                            alt="RoastedByte Logo"
                            width={44}
                            height={44}
                            className="h-11 w-11 object-contain"
                        />
                        <span className="font-heading text-2xl font-bold tracking-tight text-white/90">
                            RoastedByte
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {/* Services Dropdown */}
                        <div className="group relative">
                            <Link
                                href="#services"
                                className="flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-text-primary py-2"
                            >
                                Services
                                <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="w-[400px] rounded-2xl border border-white/10 bg-bg-secondary p-4 shadow-2xl backdrop-blur-xl">
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            {
                                                title: "Automation",
                                                desc: "Workflows & Bots",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "API Development",
                                                desc: "REST & GraphQL",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-coffee" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "Data Engineering",
                                                desc: "Pipelines & Warehousing",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "Machine Learning",
                                                desc: "Models & Inference",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-coffee" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "Web Platforms",
                                                desc: "React & Next.js",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "Backend Systems",
                                                desc: "Scalable Architecture",
                                                icon: (
                                                    <svg className="w-5 h-5 text-accent-coffee" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                                    </svg>
                                                )
                                            }
                                        ].map((item, i) => (
                                            <Link key={i} href="#services" className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors">
                                                <div className="mt-1 flex-shrink-0 bg-white/5 p-1.5 rounded-lg border border-white/5">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="font-heading text-sm font-semibold text-white">{item.title}</div>
                                                    <div className="text-xs text-text-muted">{item.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#process"
                            className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                        >
                            Process
                        </Link>
                        <Link
                            href="#why-us"
                            className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                        >
                            Why Us
                        </Link>
                        <Link
                            href="#projects"
                            className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/careers"
                            className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                        >
                            Careers
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Desktop CTA */}
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10 md:block"
                        >
                            Start Building
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            className="flex flex-col gap-1.5 p-2 z-[60] md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-bg-primary transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex h-full flex-col justify-center px-8 pt-20">
                    <nav className="flex flex-col gap-6">
                        {["Services", "Process", "Why Us", "Projects"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="border-b border-white/5 pb-4 font-heading text-3xl font-bold text-white transition-colors hover:text-accent-coffee"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/careers"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="border-b border-white/5 pb-4 font-heading text-3xl font-bold text-white transition-colors hover:text-accent-coffee"
                        >
                            Careers
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="border-b border-white/5 pb-4 font-heading text-3xl font-bold text-white transition-colors hover:text-accent-coffee"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="mt-12">
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsContactModalOpen(true);
                            }}
                            className="w-full rounded-full bg-white py-4 text-lg font-bold text-black"
                        >
                            Start Building
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
