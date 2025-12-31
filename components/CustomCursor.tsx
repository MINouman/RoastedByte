"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseDown = () => {
            setIsClicking(true);
        };

        const handleMouseUp = () => {
            setIsClicking(false);
        };

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.style.cursor === 'pointer' ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 1024; // Treat tablet and below as mobile for cursor
            setIsMobile(isTouch || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Hide default cursor globally */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* Custom cursor */}
            <div
                className={`fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-4px, -4px) scale(${isClicking ? 0.8 : isHovering ? 1.3 : 1})`,
                }}
            >
                {/* Paper Airplane SVG */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-200 ${isHovering ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : ''}`}
                    style={{
                        transform: 'rotate(-90deg)',
                        filter: isHovering ? 'brightness(1.2)' : 'none'
                    }}
                >
                    {/* Main paper airplane outline */}
                    <path
                        d="M2.5 12.5L21.5 3L12.5 21.5L10.5 13.5L2.5 12.5Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className="transition-colors duration-200"
                    />
                    {/* Inner fold line 1 */}
                    <path
                        d="M21.5 3L10.5 13.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-200"
                    />
                    {/* Inner fold line 2 */}
                    <path
                        d="M10.5 13.5L12.5 21.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-200"
                    />
                </svg>
            </div>
        </>
    );
}
