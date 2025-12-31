"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type AnimationPhase = 'idle' | 'typing' | 'cursor-move' | 'clicking' | 'sending' | 'ai-typing' | 'complete';

export default function AIShowcase() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.3 }); // Start when 30% visible

    const [phase, setPhase] = useState<AnimationPhase>('idle');
    const [inputText, setInputText] = useState('');
    const [sentMessage, setSentMessage] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const sendButtonRef = useRef<HTMLButtonElement>(null);

    const userMessage = 'Why is human feedback necessary for accurate llm responses?';
    const aiMessage = 'Human feedback helps refine AI models by providing real-world context and nuanced understanding that pure data cannot capture. It ensures responses are accurate, relevant, and aligned with human values and expectations.';

    // Main animation controller
    useEffect(() => {
        if (!isInView) {
            // Reset state when out of view
            setPhase('idle');
            setInputText('');
            setSentMessage('');
            setAiResponse('');
            return;
        }

        let timeout: NodeJS.Timeout;

        const runAnimation = async () => {
            // Phase 1: Start typing in input
            setPhase('typing');
            setInputText('');
            setSentMessage('');
            setAiResponse('');

            // Type user message character by character
            for (let i = 0; i <= userMessage.length; i++) {
                await new Promise(resolve => {
                    timeout = setTimeout(resolve, 40);
                });
                setInputText(userMessage.substring(0, i));
            }

            // Phase 2: Move cursor to send button
            await new Promise(resolve => {
                timeout = setTimeout(resolve, 300);
            });
            setPhase('cursor-move');

            // Animate cursor to button position
            await new Promise(resolve => {
                timeout = setTimeout(resolve, 600);
            });

            // Phase 3: Click animation
            setPhase('clicking');
            setIsClicking(true);
            await new Promise(resolve => {
                timeout = setTimeout(resolve, 150);
            });
            setIsClicking(false);

            // Phase 4: Send message
            setPhase('sending');
            setSentMessage(userMessage);
            setInputText('');
            await new Promise(resolve => {
                timeout = setTimeout(resolve, 500);
            });

            // Phase 5: AI typing response
            setPhase('ai-typing');
            for (let i = 0; i <= aiMessage.length; i++) {
                await new Promise(resolve => {
                    timeout = setTimeout(resolve, 15);
                });
                setAiResponse(aiMessage.substring(0, i));
            }

            // Phase 6: Complete - wait before restart
            setPhase('complete');
            await new Promise(resolve => {
                timeout = setTimeout(resolve, 2000);
            });

            // Restart animation
            runAnimation();
        };

        runAnimation();

        return () => {
            clearTimeout(timeout);
        };
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Background gradient accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-coffee/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl font-bold text-white md:text-5xl mb-4">
                        Powering Frontier AI
                    </h2>
                    <p className="text-text-muted text-lg">
                        Next Generation AI powered by world-class data.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Animated Chatbot */}
                    <div className="relative group">
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coffee via-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

                        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-bg-secondary/95 to-bg-primary/95 backdrop-blur-2xl overflow-hidden shadow-2xl">
                            {/* Glossy overlay - enhanced */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-accent-coffee/5 via-transparent to-purple-500/5 pointer-events-none"></div>
                            {/* Animated border glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-coffee/20 via-purple-500/20 to-blue-500/20 opacity-50 blur-sm pointer-events-none"></div>

                            {/* Browser Chrome - enhanced glass */}
                            <div className="relative flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/50 ring-1 ring-red-400/30"></div>
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50 ring-1 ring-yellow-400/30"></div>
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/50 ring-1 ring-green-400/30"></div>
                                </div>
                            </div>

                            {/* Chat Header - more premium */}
                            <div className="relative px-6 py-4 border-b border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                                <h3 className="relative text-white font-semibold text-center tracking-wide">AI Text Generator</h3>
                            </div>

                            {/* Chat Messages Area */}
                            <div className="relative p-6 min-h-[320px] space-y-4 bg-gradient-to-b from-transparent to-bg-primary/30">
                                {/* Sent User Message */}
                                {sentMessage && (
                                    <div className="flex justify-end animate-slide-up">
                                        <div className="flex items-start gap-3 max-w-[85%]">
                                            <div className="relative">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coffee to-accent-cinnamon rounded-2xl blur opacity-40"></div>
                                                <div className="relative bg-gradient-to-br from-accent-coffee/30 to-accent-cinnamon/20 rounded-2xl rounded-tr-sm px-4 py-3 backdrop-blur-sm border border-accent-coffee/30">
                                                    <p className="text-sm text-white">{sentMessage}</p>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-coffee to-accent-cinnamon flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-coffee/50">
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* AI Response */}
                                {aiResponse && (
                                    <div className="flex items-start gap-3 animate-fade-in">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="relative max-w-[85%]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur"></div>
                                            <div className="relative bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/10 backdrop-blur-sm">
                                                <p className="text-sm text-text-muted">
                                                    {aiResponse}
                                                    {phase === 'ai-typing' && (
                                                        <span className="inline-block w-0.5 h-4 bg-accent-coffee ml-0.5 animate-pulse"></span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* AI Typing Indicator (before response starts) */}
                                {phase === 'sending' && (
                                    <div className="flex items-start gap-3 animate-fade-in">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur"></div>
                                            <div className="relative bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/10 backdrop-blur-sm">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-accent-coffee rounded-full animate-bounce shadow-lg shadow-accent-coffee/50" style={{ animationDelay: '0ms' }}></div>
                                                    <div className="w-2 h-2 bg-accent-coffee rounded-full animate-bounce shadow-lg shadow-accent-coffee/50" style={{ animationDelay: '150ms' }}></div>
                                                    <div className="w-2 h-2 bg-accent-coffee rounded-full animate-bounce shadow-lg shadow-accent-coffee/50" style={{ animationDelay: '300ms' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Area - enhanced glass effect */}
                            <div className="relative px-4 py-4 border-t border-white/10 bg-gradient-to-t from-white/10 via-white/5 to-transparent backdrop-blur-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent pointer-events-none"></div>
                                <div className="relative flex items-center gap-3">
                                    <div className="flex-1 relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coffee/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                        <div className="relative w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white min-h-[48px] flex items-center backdrop-blur-sm shadow-inner shadow-black/20">
                                            {inputText}
                                            {(phase === 'typing' || phase === 'idle') && (
                                                <span className="inline-block w-0.5 h-4 bg-accent-coffee ml-0.5 animate-pulse"></span>
                                            )}
                                            {!inputText && phase !== 'typing' && !sentMessage && (
                                                <span className="text-text-muted/60">Type your message...</span>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        ref={sendButtonRef}
                                        className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-150 group ${isClicking
                                            ? 'bg-gradient-to-r from-accent-coffee to-accent-coffee/80 scale-90 shadow-xl shadow-accent-coffee/50'
                                            : 'bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/10'
                                            }`}
                                    >
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/10 pointer-events-none"></div>
                                        <svg className="relative w-5 h-5 text-white transition-transform" style={{ transform: 'rotate(90deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Animated Cursor */}
                                {(phase === 'cursor-move' || phase === 'clicking') && (
                                    <div
                                        className="absolute pointer-events-none z-50 transition-all duration-500 ease-out"
                                        style={{
                                            right: phase === 'cursor-move' || phase === 'clicking' ? '28px' : '50%',
                                            top: phase === 'cursor-move' || phase === 'clicking' ? '50%' : '50%',
                                            transform: `translate(50%, -50%) scale(${isClicking ? 0.8 : 1})`,
                                        }}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ transform: 'rotate(-90deg)' }}
                                        >
                                            <path
                                                d="M2.5 12.5L21.5 3L12.5 21.5L10.5 13.5L2.5 12.5Z"
                                                stroke="#FFFFFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                            />
                                            <path
                                                d="M21.5 3L10.5 13.5"
                                                stroke="#FFFFFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.5 13.5L12.5 21.5"
                                                stroke="#FFFFFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Bottom glossy bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-coffee/50 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white bg-clip-text">
                            Generative AI
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Powering the next generation of Generative AI
                        </p>
                        <p className="text-text-muted leading-relaxed">
                            Scale Generative AI Data Engine powers many of the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.
                        </p>


                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.4s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.4s ease-out;
                }
            `}</style>
        </section>
    );
}
