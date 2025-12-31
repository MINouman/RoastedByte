import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-bg-primary pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="mb-6 flex items-center gap-3">
                            <Image
                                src="/rb_logo.png"
                                alt="RoastedByte Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain"
                            />
                            <span className="font-heading text-2xl font-bold tracking-tight text-white/90">
                                RoastedByte
                            </span>
                        </Link>
                        <p className="mb-6 max-w-sm text-sm text-text-muted">
                            Custom Software Development • Automation Systems • AI Solutions • Data Engineering • Cloud Architecture
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-sm font-semibold text-text-primary">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#why-us"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-sm font-semibold text-text-primary">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#services"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Automation Systems
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    API Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Data Engineering
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Web Development
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-heading text-sm font-semibold text-text-primary">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                >
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
                    <p className="text-xs text-text-muted">
                        &copy; {new Date().getFullYear()} RoastedByte. All rights reserved.
                    </p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
