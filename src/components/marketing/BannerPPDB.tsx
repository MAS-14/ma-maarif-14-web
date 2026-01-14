"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BannerPPDB() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
            {/* Background Decorations - Adjusted for Light Mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
                {/* Decorative Pattern - Darker for visibility on white */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-gold" />
                            <span className="text-sm font-medium text-gold">PPDB 2026/2027 Dibuka!</span>
                        </motion.div>

                        {/* Headline - Serif Font */}
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-emerald-950 leading-tight mb-6">
                            Membentuk Generasi{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                                Digital
                            </span>
                            , Merawat Tradisi{" "}
                            <span className="text-gold">Ahlussunnah Wal Jama'ah</span>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-emerald-900/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Bergabunglah bersama MA Ma'arif 14 Sukorame. Pendidikan berkualitas
                            dengan nilai-nilai Islam yang kuat untuk masa depan yang gemilang.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link
                                href="/pendaftaran"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-emerald-950 font-bold rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
                            >
                                <span>Daftar Sekarang</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/profil"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-950/20 text-emerald-900 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300"
                            >
                                Pelajari Lebih Lanjut
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-emerald-950/10">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl lg:text-4xl font-bold text-emerald-950">25+</div>
                                <div className="text-emerald-800/70 text-sm">Tahun Pengalaman</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl lg:text-4xl font-bold text-emerald-950">500+</div>
                                <div className="text-emerald-800/70 text-sm">Alumni Sukses</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl lg:text-4xl font-bold text-emerald-950">A</div>
                                <div className="text-emerald-800/70 text-sm">Akreditasi</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Elegant Photo Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Decorative Elements Behind Frame */}
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold/30 rounded-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-emerald-600/20 to-transparent rounded-2xl" />

                        {/* Main Photo Frame */}
                        <div className="relative z-10 w-full max-w-md lg:max-w-lg">
                            {/* Elegant Frame Border */}
                            <div className="relative p-3 bg-gradient-to-br from-gold via-gold-light to-gold rounded-2xl shadow-2xl">
                                {/* Inner Frame */}
                                <div className="relative overflow-hidden rounded-xl bg-emerald-900">
                                    {/* Placeholder / Actual Image Container */}
                                    <div className="relative aspect-[4/5] w-full">
                                        {/* Image - Will show when file exists */}
                                        <Image
                                            src="/projects/ma-maarif/marketing-flyer.jpg"
                                            alt="PPDB MA Ma'arif 14 Sukorame - Flyer Pendaftaran"
                                            fill
                                            className="object-cover"
                                            priority
                                            onError={(e) => {
                                                // Hide image on error, show placeholder
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />

                                        {/* Placeholder - Shows when image doesn't exist yet */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 text-center p-8">
                                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                                <svg
                                                    className="w-10 h-10 text-emerald-300"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="font-serif text-xl text-white mb-2">
                                                Marketing Flyer
                                            </h3>
                                            <p className="text-emerald-300/70 text-sm max-w-[200px]">
                                                Letakkan aset grafis Anda di: <br />
                                                <code className="text-xs text-gold bg-white/10 px-2 py-1 rounded mt-2 inline-block">
                                                    public/projects/ma-maarif/marketing-flyer.jpg
                                                </code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 z-20 px-5 py-3 bg-white rounded-xl shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <span className="text-emerald-700 font-bold text-lg">🎓</span>
                                    </div>
                                    <div>
                                        <div className="text-emerald-900 font-bold text-sm">Pendaftaran Dibuka</div>
                                        <div className="text-emerald-600 text-xs">Tahun Ajaran 2026/2027</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Accent */}
                            <div className="absolute -top-3 -right-3 z-20 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-emerald-950 font-bold text-xl">NEW</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
