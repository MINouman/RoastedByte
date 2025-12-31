"use client";

export default function FeatureHighlight() {
    return (
        <section className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Gradient background effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-emerald-400/30 to-red-600/30 blur-3xl opacity-60" />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center">
                    <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        Build and deploy on the Cloud.
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl">
                        RoastedByte provides the developer tools and cloud infrastructure
                        <br className="hidden sm:block" />
                        to build, scale, and secure a faster, more personalized web.
                    </p>


                </div>


            </div>
        </section>
    );
}
