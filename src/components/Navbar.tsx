"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
                    ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
                    : "bg-white border-b border-gray-100"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/logo-sekolah.png"
                                alt="MA Ma'arif 14 Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-display font-bold text-emerald-900 text-lg leading-tight">
                                MA Ma'arif 14
                            </h1>
                            <p className="text-xs text-gray-600 font-medium">Sukorame</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 font-medium text-sm transition-colors ${pathname === link.href
                                        ? "text-emerald-900"
                                        : "text-gray-600 hover:text-emerald-700"
                                    }`}
                            >
                                <span>{link.name}</span>
                                {link.badge && (
                                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-bold bg-gold text-white rounded-full">
                                        PK
                                    </span>
                                )}
                                {/* Active Indicator */}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-emerald-900 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            href="/pendaftaran"
                            className="px-6 py-2.5 bg-emerald-900 text-white font-semibold text-sm rounded-lg hover:bg-emerald-800 transition-colors"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col p-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-colors ${pathname === link.href
                                    ? "bg-emerald-50 text-emerald-900"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            <span>{link.name}</span>
                            {link.badge && (
                                <span className="px-2 py-1 text-xs font-bold bg-gold text-white rounded-full">
                                    {link.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                        <Link
                            href="/pendaftaran"
                            onClick={() => setIsOpen(false)}
                            className="block text-center px-6 py-3 bg-emerald-900 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
