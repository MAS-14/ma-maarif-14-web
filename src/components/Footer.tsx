import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Music } from "lucide-react";

const footerLinks = {
    navigasi: [
        { name: "Beranda", href: "/" },
        { name: "Profil Sekolah", href: "/profil" },
        { name: "Kesiswaan", href: "/kesiswaan" },
        { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
    ],
    informasi: [
        { name: "Pendaftaran", href: "/pendaftaran" },
        { name: "Kalender Akademik", href: "/kalender" },
        { name: "Berita & Kegiatan", href: "/berita" },
        { name: "Galeri", href: "/galeri" },
    ],
};

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mamaarif14sukorame/" },
    { name: "Facebook", icon: Facebook, href: "https://web.facebook.com/people/MA-Maarif-Sukorame/100077599161271/" },
    { name: "TikTok", icon: Music, href: "https://www.tiktok.com/@maarif14sukorameofficial?_r=1&_t=ZS-93R3F6sUNVv" },
];

export default function Footer() {
    return (
        <footer className="bg-emerald-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                <GraduationCap className="w-7 h-7 text-emerald-300" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl">MA Ma'arif 14</h2>
                                <p className="text-emerald-300 text-sm">Sukorame</p>
                            </div>
                        </Link>
                        <p className="text-emerald-200/80 text-sm leading-relaxed mb-6">
                            Lembaga pendidikan Islam berbasis Ahlussunnah Wal Jama'ah yang
                            berkomitmen mencetak generasi berakhlak mulia, cerdas, dan berwawasan global.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-5">Navigasi</h3>
                        <ul className="space-y-3">
                            {footerLinks.navigasi.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-emerald-200/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-5">Informasi</h3>
                        <ul className="space-y-3">
                            {footerLinks.informasi.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-emerald-200/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display font-semibold text-lg mb-5">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-emerald-200/80 text-sm">
                                    Jalan Raya Sukorame – Babat No. 99 Lamongan 62276
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <a href="tel:+62085755259164" className="text-emerald-200/80 hover:text-white text-sm transition-colors">
                                    085755259164
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <a href="mailto:maarif14.sukorame@gmail.com" className="text-emerald-200/80 hover:text-white text-sm transition-colors">
                                    maarif14.sukorame@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-emerald-300/60 text-sm text-center md:text-left">
                            © 2026 MA Ma'arif 14 Sukorame. Hak Cipta Dilindungi.
                        </p>
                        <p className="text-emerald-300/60 text-sm flex items-center gap-2">
                            <span>Ahlussunnah Wal Jama'ah</span>
                            <span className="text-gold">•</span>
                            <span>PK IPNU-IPPNU</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
