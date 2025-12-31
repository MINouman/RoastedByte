"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface Project {
    title: string;
    category: string;
    challenge: string;
    solution: string;
    outcome: string;
    tools: string[];
    icon: React.ReactNode;
    renderDiagram: (isInView: boolean) => React.ReactNode;
}

const SentimentDiagram = ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
        {/* Data Flow Diagram */}
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C58A44" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4FD1C5" stopOpacity="0.8" />
            </linearGradient>
        </defs>

        {/* Source nodes */}
        <rect x="10" y="20" width="60" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
        <text x="40" y="40" fill="#A1A1A1" fontSize="8" textAnchor="middle">Sentiment</text>

        <rect x="10" y="70" width="60" height="30" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
        <text x="40" y="90" fill="#A1A1A1" fontSize="8" textAnchor="middle">Stock Data</text>

        {/* Flow lines */}
        <path d="M70 35 Q100 35 120 55" stroke="#C58A44" strokeWidth="2" fill="none" strokeDasharray="4 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />}
        </path>
        <path d="M70 85 Q100 85 120 65" stroke="#4FD1C5" strokeWidth="2" fill="none" strokeDasharray="4 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />}
        </path>

        {/* Processing node */}
        <circle cx="140" cy="60" r="20" fill="#1a1a1a" stroke="url(#grad1)" strokeWidth="2" />
        <text x="140" y="64" fill="#F5F5F5" fontSize="7" textAnchor="middle">Analyze</text>

        {/* Output flow */}
        <path d="M160 60 L200 40" stroke="#C58A44" strokeWidth="2" fill="none" />
        <path d="M160 60 L200 60" stroke="#8B5CF6" strokeWidth="2" fill="none" />
        <path d="M160 60 L200 80" stroke="#4FD1C5" strokeWidth="2" fill="none" />

        {/* Output nodes */}
        <rect x="200" y="25" width="80" height="24" rx="4" fill="#1a1a1a" stroke="#C58A44" strokeWidth="1" />
        <text x="240" y="41" fill="#C58A44" fontSize="7" textAnchor="middle">Correlation</text>

        <rect x="200" y="50" width="80" height="24" rx="4" fill="#1a1a1a" stroke="#8B5CF6" strokeWidth="1" />
        <text x="240" y="66" fill="#8B5CF6" fontSize="7" textAnchor="middle">Causality Test</text>

        <rect x="200" y="75" width="80" height="24" rx="4" fill="#1a1a1a" stroke="#4FD1C5" strokeWidth="1" />
        <text x="240" y="91" fill="#4FD1C5" fontSize="7" textAnchor="middle">Prediction</text>

        {/* Legend dots */}
        <circle cx="20" cy="120" r="4" fill="#C58A44" />
        <text x="30" y="123" fill="#A1A1A1" fontSize="7">VADER</text>
        <circle cx="70" cy="120" r="4" fill="#4FD1C5" />
        <text x="80" y="123" fill="#A1A1A1" fontSize="7">Yahoo</text>
        <circle cx="120" cy="120" r="4" fill="#8B5CF6" />
        <text x="130" y="123" fill="#A1A1A1" fontSize="7">Granger</text>
    </svg>
);

const DoctorDiagram = ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
        {/* API Architecture Diagram */}
        <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C58A44" stopOpacity="0.6" />
            </linearGradient>
        </defs>

        {/* Client */}
        <rect x="10" y="50" width="50" height="40" rx="6" fill="#1a1a1a" stroke="#4FD1C5" strokeWidth="1.5" />
        <circle cx="35" cy="62" r="6" fill="none" stroke="#4FD1C5" strokeWidth="1" />
        <rect x="25" y="74" width="20" height="3" rx="1" fill="#4FD1C5" opacity="0.5" />
        <rect x="25" y="80" width="20" height="3" rx="1" fill="#4FD1C5" opacity="0.3" />

        {/* Arrow to API */}
        <path d="M60 70 L85 70" stroke="#4FD1C5" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8" fill="none" stroke="#4FD1C5" strokeWidth="1" />
            </marker>
        </defs>

        {/* API Gateway */}
        <rect x="85" y="40" width="55" height="60" rx="6" fill="#1a1a1a" stroke="url(#grad2)" strokeWidth="2" />
        <text x="112" y="58" fill="#F5F5F5" fontSize="8" textAnchor="middle" fontWeight="600">FastAPI</text>
        <rect x="92" y="65" width="40" height="10" rx="2" fill="#4FD1C5" opacity="0.2" />
        <text x="112" y="73" fill="#4FD1C5" fontSize="6" textAnchor="middle">/api/v1</text>
        <rect x="92" y="80" width="40" height="10" rx="2" fill="#C58A44" opacity="0.2" />
        <text x="112" y="88" fill="#C58A44" fontSize="6" textAnchor="middle">JWT ✓</text>

        {/* Connecting lines */}
        <path d="M140 55 Q160 55 170 35" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        <path d="M140 70 L170 70" stroke="#4FD1C5" strokeWidth="1.5" fill="none" />
        <path d="M140 85 Q160 85 170 105" stroke="#C58A44" strokeWidth="1.5" fill="none" />

        {/* Redis Cache */}
        <rect x="170" y="18" width="55" height="30" rx="4" fill="#1a1a1a" stroke="#EF4444" strokeWidth="1" />
        <text x="197" y="36" fill="#EF4444" fontSize="8" textAnchor="middle">Redis</text>
        <circle cx="178" cy="36" r="3" fill="#EF4444" opacity="0.5">
            {isInView && <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />}
        </circle>

        {/* PostgreSQL */}
        <rect x="170" y="55" width="55" height="30" rx="4" fill="#1a1a1a" stroke="#4FD1C5" strokeWidth="1" />
        <text x="197" y="73" fill="#4FD1C5" fontSize="8" textAnchor="middle">PostgreSQL</text>

        {/* Scheduler */}
        <rect x="170" y="92" width="55" height="30" rx="4" fill="#1a1a1a" stroke="#C58A44" strokeWidth="1" />
        <text x="197" y="110" fill="#C58A44" fontSize="8" textAnchor="middle">Scheduler</text>

        {/* Async arrows */}
        <path d="M225 70 L250 70 L250 55" stroke="#4FD1C5" strokeWidth="1" strokeDasharray="3 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />}
        </path>
        <path d="M225 107 L255 107 L255 55" stroke="#C58A44" strokeWidth="1" strokeDasharray="3 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.2s" repeatCount="indefinite" />}
        </path>

        {/* Response */}
        <rect x="240" y="35" width="50" height="35" rx="6" fill="#1a1a1a" stroke="#22C55E" strokeWidth="1.5" />
        <text x="265" y="50" fill="#22C55E" fontSize="7" textAnchor="middle">Response</text>
        <text x="265" y="62" fill="#A1A1A1" fontSize="6" textAnchor="middle">200 OK ✓</text>
    </svg>
);

const EmailDiagram = ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
        {/* Email Classification Pipeline */}
        <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C58A44" stopOpacity="0.8" />
            </linearGradient>
        </defs>

        {/* Email icon */}
        <rect x="15" y="50" width="40" height="30" rx="3" fill="#1a1a1a" stroke="#A1A1A1" strokeWidth="1" />
        <path d="M15 55 L35 70 L55 55" stroke="#A1A1A1" strokeWidth="1" fill="none" />
        <text x="35" y="95" fill="#A1A1A1" fontSize="7" textAnchor="middle">Incoming</text>

        {/* Flow arrow */}
        <path d="M55 65 L80 65" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />}
        </path>

        {/* NLP Processing */}
        <rect x="80" y="40" width="60" height="50" rx="6" fill="#1a1a1a" stroke="url(#grad3)" strokeWidth="2" />
        <text x="110" y="58" fill="#F5F5F5" fontSize="8" textAnchor="middle" fontWeight="600">LangChain</text>
        <text x="110" y="70" fill="#8B5CF6" fontSize="6" textAnchor="middle">NLP Classifier</text>
        <rect x="88" y="76" width="44" height="6" rx="2" fill="#8B5CF6" opacity="0.3" />

        {/* Classification branches */}
        <path d="M140 50 L165 30" stroke="#22C55E" strokeWidth="1.5" />
        <path d="M140 65 L165 65" stroke="#EAB308" strokeWidth="1.5" />
        <path d="M140 80 L165 100" stroke="#EF4444" strokeWidth="1.5" />

        {/* Priority levels */}
        <rect x="165" y="15" width="50" height="25" rx="4" fill="#1a1a1a" stroke="#22C55E" strokeWidth="1" />
        <circle cx="175" cy="27" r="4" fill="#22C55E" />
        <text x="200" y="30" fill="#22C55E" fontSize="7" textAnchor="middle">Low</text>

        <rect x="165" y="52" width="50" height="25" rx="4" fill="#1a1a1a" stroke="#EAB308" strokeWidth="1" />
        <circle cx="175" cy="64" r="4" fill="#EAB308" />
        <text x="200" y="67" fill="#EAB308" fontSize="7" textAnchor="middle">Medium</text>

        <rect x="165" y="90" width="50" height="25" rx="4" fill="#1a1a1a" stroke="#EF4444" strokeWidth="1" />
        <circle cx="175" cy="102" r="4" fill="#EF4444">
            {isInView && <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />}
        </circle>
        <text x="200" y="105" fill="#EF4444" fontSize="7" textAnchor="middle">Urgent</text>

        {/* Routing arrows */}
        <path d="M215 27 L240 50" stroke="#22C55E" strokeWidth="1" />
        <path d="M215 64 L240 60" stroke="#EAB308" strokeWidth="1" />
        <path d="M215 102 L240 70" stroke="#EF4444" strokeWidth="1" />

        {/* Output */}
        <rect x="238" y="40" width="55" height="45" rx="6" fill="#1a1a1a" stroke="#4FD1C5" strokeWidth="1.5" />
        <text x="265" y="55" fill="#4FD1C5" fontSize="7" textAnchor="middle">Auto-Route</text>
        <rect x="246" y="62" width="38" height="5" rx="1" fill="#4FD1C5" opacity="0.4" />
        <rect x="246" y="70" width="30" height="5" rx="1" fill="#4FD1C5" opacity="0.3" />
    </svg>
);

const RagDiagram = ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
        {/* RAG Pipeline */}
        <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C58A44" stopOpacity="0.8" />
            </linearGradient>
        </defs>

        {/* Query input */}
        <rect x="10" y="55" width="45" height="30" rx="4" fill="#1a1a1a" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="32" y="68" fill="#3B82F6" fontSize="7" textAnchor="middle">Query</text>
        <text x="32" y="78" fill="#A1A1A1" fontSize="5" textAnchor="middle">"How to..."</text>

        {/* Arrow to embedding */}
        <path d="M55 70 L75 70" stroke="#3B82F6" strokeWidth="1.5" />

        {/* Embedding node */}
        <circle cx="90" cy="70" r="15" fill="#1a1a1a" stroke="#8B5CF6" strokeWidth="2" />
        <text x="90" y="68" fill="#8B5CF6" fontSize="6" textAnchor="middle">Embed</text>
        <text x="90" y="76" fill="#A1A1A1" fontSize="5" textAnchor="middle">→ Vec</text>

        {/* To vector DB */}
        <path d="M105 70 L130 50" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2">
            {isInView && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />}
        </path>

        {/* Vector Database */}
        <rect x="130" y="25" width="50" height="45" rx="6" fill="#1a1a1a" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="155" y="40" fill="#8B5CF6" fontSize="7" textAnchor="middle">Pinecone</text>
        {/* Vector dots */}
        <circle cx="140" cy="52" r="2" fill="#8B5CF6" opacity="0.6" />
        <circle cx="148" cy="55" r="2" fill="#8B5CF6" opacity="0.8" />
        <circle cx="156" cy="50" r="2" fill="#C58A44" />
        <circle cx="164" cy="56" r="2" fill="#8B5CF6" opacity="0.5" />
        <circle cx="170" cy="52" r="2" fill="#8B5CF6" opacity="0.7" />

        {/* Docs retrieval */}
        <path d="M155 70 L155 90 L190 90" stroke="#C58A44" strokeWidth="1.5">
            {isInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />}
        </path>

        {/* Retrieved docs */}
        <rect x="190" y="78" width="40" height="25" rx="3" fill="#1a1a1a" stroke="#C58A44" strokeWidth="1" />
        <rect x="195" y="84" width="30" height="3" rx="1" fill="#C58A44" opacity="0.5" />
        <rect x="195" y="90" width="25" height="3" rx="1" fill="#C58A44" opacity="0.3" />
        <rect x="195" y="96" width="28" height="3" rx="1" fill="#C58A44" opacity="0.4" />
        <text x="210" y="110" fill="#A1A1A1" fontSize="6" textAnchor="middle">Context</text>

        {/* Query + Context merge */}
        <path d="M105 70 L125 90 L190 90" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

        {/* Arrow to LLM */}
        <path d="M230 90 L250 70" stroke="url(#grad4)" strokeWidth="2" />

        {/* LLM */}
        <rect x="245" y="45" width="48" height="45" rx="8" fill="#1a1a1a" stroke="url(#grad4)" strokeWidth="2" />
        <text x="269" y="63" fill="#F5F5F5" fontSize="8" textAnchor="middle" fontWeight="600">LLM</text>
        <rect x="252" y="70" width="34" height="4" rx="1" fill="#4FD1C5" opacity="0.5">
            {isInView && <animate attributeName="width" values="20;34;20" dur="2s" repeatCount="indefinite" />}
        </rect>
        <rect x="252" y="77" width="28" height="4" rx="1" fill="#4FD1C5" opacity="0.3">
            {isInView && <animate attributeName="width" values="28;20;28" dur="2s" repeatCount="indefinite" />}
        </rect>

        {/* Response label */}
        <text x="269" y="110" fill="#4FD1C5" fontSize="7" textAnchor="middle">Grounded Response</text>
    </svg>
);

const projects: Project[] = [
    {
        title: "Employee Sentiment vs Stock Performance Analysis",
        category: "Data Science / Analytics",
        challenge: "Understand whether large-scale employee sentiment data can meaningfully correlate with stock market performance without falling into false correlations.",
        solution: "We built a statistical analysis pipeline combining sentiment analysis, financial data, and time-series modeling to identify meaningful relationships.",
        outcome: "Clean, reproducible analytics pipeline. Cross-correlation and causality insights. Data-driven decision support.",
        tools: ["Python", "Pandas", "NumPy", "NLTK (VADER)", "SciPy", "Statsmodels"],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        renderDiagram: (isInView) => <SentimentDiagram isInView={isInView} />,
    },
    {
        title: "Healix — AI Doctor Appointment System",
        category: "Automation / Backend Systems",
        challenge: "Manual appointment scheduling caused delays, errors, and poor user experience.",
        solution: "We designed an automated appointment system with secure authentication, scheduling logic, and asynchronous workflows.",
        outcome: "Fully automated scheduling. Reduced administrative workload. Reliable, scalable backend architecture.",
        tools: ["FastAPI", "PostgreSQL", "Redis", "Async APIs"],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        renderDiagram: (isInView) => <DoctorDiagram isInView={isInView} />,
    },
    {
        title: "MailMind — AI-Powered Email Automation",
        category: "AI / Automation",
        challenge: "Manual email sorting and prioritization consumed valuable time.",
        solution: "We built an AI-powered email classification system that automatically routes and prioritizes incoming emails using NLP models.",
        outcome: "Faster response times. Reduced manual triage. Intelligent email workflows.",
        tools: ["Python", "FastAPI", "AsyncIO", "NLP models", "LangChain"],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        renderDiagram: (isInView) => <EmailDiagram isInView={isInView} />,
    },
    {
        title: "RAGChat — Retrieval-Augmented Chat System",
        category: "AI / Knowledge Systems",
        challenge: "Generic chatbots produced inaccurate or ungrounded responses.",
        solution: "We implemented a retrieval-augmented generation system that grounds responses in domain-specific documents.",
        outcome: "Higher answer accuracy. Reliable knowledge retrieval. Scalable AI architecture.",
        tools: ["FastAPI", "LangChain", "Pinecone", "FAISS"],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        renderDiagram: (isInView) => <RagDiagram isInView={isInView} />,
    },
];

export default function Projects() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.1 }); // Lazy load animations

    return (
        <section id="projects" ref={sectionRef} className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Background gradient accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent-coffee/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-accent-tech/10 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl font-bold text-white md:text-5xl mb-4">
                        Our Projects
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Real-world solutions we&apos;ve built to solve complex problems with cutting-edge technology.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-white/10 bg-bg-secondary/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-bg-secondary/70"
                        >
                            {/* Card glow on hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coffee/20 via-purple-500/10 to-accent-tech/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

                            <div className="relative p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent-tech">
                                        {project.icon}
                                    </div>
                                    <span className="text-xs text-text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-accent-coffee transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <div className="space-y-3 mb-6">
                                    <div className="text-sm">
                                        <span className="font-semibold text-white block mb-1">Challenge:</span>
                                        <p className="text-text-muted leading-relaxed">{project.challenge}</p>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-semibold text-white block mb-1">Solution:</span>
                                        <p className="text-text-muted leading-relaxed">{project.solution}</p>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-semibold text-white block mb-1">Outcome:</span>
                                        <p className="text-text-muted leading-relaxed">{project.outcome}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-text-muted border border-white/5"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* Architecture Diagram */}
                                <div className="rounded-xl bg-black/30 border border-white/5 p-4 overflow-hidden">
                                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                                        {project.renderDiagram(isInView)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
