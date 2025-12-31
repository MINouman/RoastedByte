"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Job data (without salaries)
const jobs = [
    {
        id: 1,
        title: "Senior Backend Developer",
        company: "RoastedByte",
        location: "Remote",
        type: "Full-time",
        postedDate: "Dec 30, 2025",
        skills: ["Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
        id: 2,
        title: "AI/ML Engineer",
        company: "RoastedByte",
        location: "Remote",
        type: "Full-time",
        postedDate: "Dec 29, 2025",
        skills: ["Python", "TensorFlow", "PyTorch", "MLOps"]
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "RoastedByte",
        location: "Remote",
        type: "Full-time",
        postedDate: "Dec 29, 2025",
        skills: ["Kubernetes", "Docker", "Terraform", "CI/CD"]
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "RoastedByte",
        location: "Remote",
        type: "Part-time",
        postedDate: "Dec 28, 2025",
        skills: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
        id: 5,
        title: "Data Engineer",
        company: "RoastedByte",
        location: "Remote",
        type: "Full-time",
        postedDate: "Dec 27, 2025",
        skills: ["Apache Spark", "Airflow", "ETL", "Data Warehousing"]
    },
    {
        id: 6,
        title: "Technical Project Manager",
        company: "RoastedByte",
        location: "Remote",
        type: "Full-time",
        postedDate: "Dec 27, 2025",
        skills: ["Agile", "Scrum", "Jira", "Technical Leadership"]
    }
];

// Application Modal Component
function ApplicationModal({
    isOpen,
    onClose,
    jobTitle
}: {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setError("File size must be less than 10MB");
                setCvFile(null);
                return;
            }
            setError("");
            setCvFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!firstName || !lastName || !email || !cvFile) {
            setError("Please fill in all fields and attach your CV");
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("jobTitle", jobTitle);
            formData.append("cv", cvFile);

            const response = await fetch("/api/apply", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to submit application");
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFirstName("");
                setLastName("");
                setEmail("");
                setCvFile(null);
            }, 2000);
        } catch {
            setError("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-bg-secondary/95 backdrop-blur-xl shadow-2xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-text-muted hover:text-white transition-colors"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <h3 className="font-heading text-xl font-bold text-white">Apply for Position</h3>
                    <p className="text-sm text-text-muted mt-1">{jobTitle}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {success ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="font-heading text-lg font-semibold text-white">Application Submitted!</h4>
                            <p className="text-sm text-text-muted mt-1">We&apos;ll be in touch soon.</p>
                        </div>
                    ) : (
                        <>
                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-text-muted mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent-coffee/50 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-text-muted mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent-coffee/50 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs text-text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent-coffee/50 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* CV Upload */}
                            <div>
                                <label className="block text-xs text-text-muted mb-2">CV / Resume (Max 10MB)</label>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-4 py-6 text-sm text-text-muted hover:border-accent-coffee/50 hover:bg-white/10 transition-all flex flex-col items-center gap-2"
                                >
                                    {cvFile ? (
                                        <>
                                            <svg className="h-6 w-6 text-accent-coffee" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span className="text-white">{cvFile.name}</span>
                                            <span className="text-xs">({(cvFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <span>Click to upload your CV</span>
                                            <span className="text-xs">PDF, DOC, DOCX</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Error message */}
                            {error && (
                                <p className="text-sm text-red-400">{error}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

// Job Card Component with animations
function JobCard({ job, index, onApply }: { job: typeof jobs[0]; index: number; onApply: (title: string) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative rounded-2xl border border-white/10 bg-bg-secondary p-6 transition-all duration-500 hover:border-accent-coffee/50 hover:shadow-xl hover:shadow-accent-coffee/5"
            style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
                transform: 'translateY(20px)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect on hover */}
            <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-coffee/10 to-accent-tech/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    {/* Company Logo */}
                    {/* Company Logo */}
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/5 p-2 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/rb_logo.png"
                            alt="RoastedByte"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <span className="text-xs text-text-muted">{job.postedDate}</span>
                </div>

                {/* Title & Company */}
                <h3 className="font-heading text-lg font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-accent-coffee">
                    {job.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{job.company}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                    </span>
                </div>

                {/* Required Skills */}
                <div className="mb-6">
                    <p className="text-xs text-text-muted mb-2">Required skills</p>
                    <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted transition-all duration-300 hover:border-accent-coffee/50 hover:text-white"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Apply Button */}
                <button
                    disabled
                    className="w-full rounded-xl bg-white/5 py-3 text-sm font-medium text-text-muted cursor-not-allowed border border-white/5 transition-colors"
                >
                    Applications Closed
                </button>
            </div>

            {/* Animated border gradient */}
            <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(197, 138, 68, 0.3), transparent)',
                    backgroundSize: '200% 100%',
                    animation: isHovered ? 'shimmer 2s infinite' : 'none'
                }}
            />
        </div>
    );
}

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-bg-primary font-sans text-text-primary selection:bg-accent-coffee selection:text-black">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-3">
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
                    <Link
                        href="/"
                        className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent-coffee/5 blur-[120px]" />
                    <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-accent-tech/5 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
                        Open Jobs
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-text-muted">
                        Gain global experience, expand your skills, and build a career that grows with you.
                    </p>
                </div>

                {/* Decorative wireframe mountain (CSS-based) */}
                <div className="relative mt-16 h-32 overflow-hidden opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 40.5%, rgba(255,255,255,0.1) 41%, transparent 41.5%),
                                linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.1) 40.5%, rgba(255,255,255,0.1) 41%, transparent 41.5%),
                                linear-gradient(135deg, transparent 55%, rgba(255,255,255,0.05) 55.5%, rgba(255,255,255,0.05) 56%, transparent 56.5%),
                                linear-gradient(225deg, transparent 55%, rgba(255,255,255,0.05) 55.5%, rgba(255,255,255,0.05) 56%, transparent 56.5%)
                            `,
                            backgroundSize: '100px 100px',
                            backgroundPosition: 'center bottom'
                        }}
                    />
                </div>
            </section>

            {/* Jobs Grid */}
            <section className="pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job, index) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                index={index}
                                onApply={(title) => setSelectedJob(title)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="border-t border-white/5 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
                        Don&apos;t see a role that fits?
                    </h2>
                    <p className="mb-8 text-text-muted">
                        We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll reach out when something opens up.
                    </p>
                    <a
                        href="mailto:hello@roastedbyte.com"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
                    >
                        Contact Us
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm text-text-muted">
                        © 2025 RoastedByte. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Application Modal */}
            <ApplicationModal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                jobTitle={selectedJob || ""}
            />

            {/* Global styles for animations */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            `}</style>
        </div>
    );
}
