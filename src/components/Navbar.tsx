"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Kesiswaan", href: "/kesiswaan", badge: "PK IPNU-IPPNU" },
    { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${scrolled
                ? "bg-emerald-950/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
                : "bg-emerald-950 py-4 border-b border-white/10"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center shadow-emerald-glow group-hover:scale-105 transition-transform border border-white/10">
                            <Image
                                src="/logo-sekolah.png"
                                alt="MA Ma'arif 14 Logo"
                                width={40}
                                height={40}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-display font-bold text-white text-lg leading-tight">
                                MA Ma'arif 14
                            </h1>
                            <p className="text-xs text-emerald-100/80 font-medium">Sukorame</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 font-medium transition-colors group ${pathname === link.href
                                    ? "text-yellow-500 border-b-2 border-yellow-500"
                                    : "text-white hover:text-emerald-200"
                                    }`}
                            >
                                <span>{link.name}</span>
                                {link.badge && (
                                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-bold bg-gold text-white rounded-full shadow-sm">
                                        PK
                                    </span>
                                )}
                                {/* Underline Decoration - Only show hover effect if not active */}
                                {pathname !== link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-3/4 transition-all duration-300" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/pendaftaran"
                            className="px-6 py-2.5 bg-gold hover:bg-gold-light text-emerald-950 font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-emerald-950 border-b border-white/10 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col p-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <span>{link.name}</span>
                            {link.badge && (
                                <span className="px-2 py-1 text-xs font-bold bg-gold text-emerald-950 rounded-full">
                                    {link.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-white/10">
                        <Link
                            href="/pendaftaran"
                            onClick={() => setIsOpen(false)}
                            className="block text-center px-6 py-3 bg-gold text-emerald-950 font-bold rounded-xl hover:bg-gold-light"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
