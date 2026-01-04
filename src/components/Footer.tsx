import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

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
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
];

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                                <GraduationCap className="w-8 h-8 text-emerald-300" />
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
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
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
                                    Jl. Raya Sukorame No. 14, Kec. Sukorame, Kab. Lamongan, Jawa Timur
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <a href="tel:+62322123456" className="text-emerald-200/80 hover:text-white text-sm transition-colors">
                                    (0322) 123-456
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <a href="mailto:info@mamaarif14.sch.id" className="text-emerald-200/80 hover:text-white text-sm transition-colors">
                                    info@mamaarif14.sch.id
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
