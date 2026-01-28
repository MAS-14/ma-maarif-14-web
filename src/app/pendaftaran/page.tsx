
import React from 'react';
import { Calendar, CheckCircle2, Phone, FileText, ArrowRight } from 'lucide-react';

export default function PendaftaranPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <span className="inline-block px-6 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold font-bold text-sm mb-6">
                        Tahun Ajaran 2026/2027
                    </span>
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
                        Penerimaan Peserta Didik Baru
                    </h1>
                    <p className="text-xl sm:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
                        Mari bergabung menjadi bagian dari keluarga besar MA Ma'arif 14 Sukorame
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Info */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Timeline */}
                            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 shadow-deep">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center">
                                        <Calendar className="text-gold w-7 h-7" />
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-emerald-900">
                                        Jadwal Pendaftaran
                                    </h3>
                                </div>

                                <div className="space-y-8 border-l-4 border-emerald-100 pl-8 ml-6">
                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-2 w-6 h-6 rounded-full bg-emerald-600 ring-4 ring-white shadow-lg"></span>
                                        <h4 className="font-bold text-xl text-emerald-900 mb-2">Gelombang 1</h4>
                                        <p className="text-emerald-600 font-semibold mb-2">Januari - Maret 2026</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            Pendaftaran jalur prestasi dan reguler awal. Dapatkan fasilitas khusus seragam gratis.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-2 w-6 h-6 rounded-full bg-gray-300 ring-4 ring-white shadow-lg"></span>
                                        <h4 className="font-bold text-xl text-emerald-900 mb-2">Gelombang 2</h4>
                                        <p className="text-emerald-600 font-semibold mb-2">April - Juni 2026</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            Pendaftaran jalur reguler. Kuota terbatas.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[42px] top-2 w-6 h-6 rounded-full bg-gray-300 ring-4 ring-white shadow-lg"></span>
                                        <h4 className="font-bold text-xl text-emerald-900 mb-2">Masa Ta'aruf Siswa (MATSAMA)</h4>
                                        <p className="text-emerald-600 font-semibold mb-2">Juli 2026</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            Kegiatan pengenalan lingkungan madrasah.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl border border-emerald-100 shadow-deep">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center">
                                        <FileText className="text-gold w-7 h-7" />
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-emerald-900">
                                        Syarat Pendaftaran
                                    </h3>
                                </div>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Mengisi Formulir Pendaftaran",
                                        "Fotokopi Ijazah / SKL (Legalisir)",
                                        "Fotokopi Kartu Keluarga (KK)",
                                        "Fotokopi Akta Kelahiran",
                                        "Fotokopi KTP Orang Tua",
                                        "Pas Foto 3x4 (4 Lembar)"
                                    ].map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700 bg-white p-5 rounded-xl border border-emerald-100">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span className="font-medium">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: CTA & Contact */}
                        <div className="space-y-8">
                            {/* CTA Card */}
                            <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 p-10 rounded-3xl text-white shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
                                <div className="relative z-10">
                                    <h3 className="font-display font-bold text-3xl mb-4">Daftar Sekarang?</h3>
                                    <p className="text-emerald-200 mb-8 leading-relaxed">
                                        Anda dapat mendaftar secara online melalui formulir di bawah ini atau datang langsung ke madrasah.
                                    </p>
                                    <button className="w-full py-4 bg-gold hover:bg-gold-light text-emerald-950 font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl mb-4 flex items-center justify-center gap-2 group">
                                        Isi Formulir Online
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-full py-4 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all">
                                        Download Brosur
                                    </button>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-deep">
                                <h3 className="font-display font-bold text-2xl text-emerald-900 mb-6">Butuh Bantuan?</h3>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-emerald-800 uppercase mb-1">Hubungi Panitia</div>
                                        <div className="font-bold text-xl text-emerald-900">085755259164</div>
                                        <div className="text-gray-600">(Pak Mad)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
                        Siap Memulai Perjalanan Anda?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Wujudkan masa depan cemerlang bersama MA Ma'arif 14 Sukorame
                    </p>
                </div>
            </section>
        </div>
    );
}
