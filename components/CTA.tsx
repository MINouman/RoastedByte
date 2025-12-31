"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="py-32">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="mb-8 font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                        Let’s Build Something <br />
                        <span className="text-text-muted">That Lasts</span>
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-xl text-text-muted">
                        Whether you’re automating operations, building intelligent systems, or launching a modern web platform — RoastedByte is ready.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                        >
                            Start Building →
                        </button>

                    </div>
                </div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
