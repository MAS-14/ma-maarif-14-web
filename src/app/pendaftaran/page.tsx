
import React from 'react';
import { Calendar, CheckCircle2, Phone, FileText } from 'lucide-react';

export default function PendaftaranPage() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="inline-block px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm mb-4">
                    Tahun Ajaran 2026/2027
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-6">
                    Penerimaan Peserta Didik Baru
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Mari bergabung menjadi bagian dari keluarga besar MA Ma'arif 14 Sukorame. Siapkan masa depan gemilang dengan pendidikan berkualitas.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Timeline */}
                    <div className="bg-white p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display font-bold text-2xl text-emerald-900 mb-6 flex items-center gap-3">
                            <Calendar className="text-emerald-600 w-6 h-6" />
                            Jadwal Pendaftaran
                        </h3>
                        <div className="space-y-6 border-l-2 border-gray-200 pl-6 ml-3">
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white"></span>
                                <h4 className="font-bold text-emerald-900">Gelombang 1</h4>
                                <p className="text-emerald-600 font-medium text-sm mb-1">Januari - Maret 2026</p>
                                <p className="text-gray-600 text-sm">Pendaftaran jalur prestasi dan reguler awal. Dapatkan fasilitas khusus seragam gratis.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></span>
                                <h4 className="font-bold text-emerald-900">Gelombang 2</h4>
                                <p className="text-emerald-600 font-medium text-sm mb-1">April - Juni 2026</p>
                                <p className="text-gray-600 text-sm">Pendaftaran jalur reguler. Kuota terbatas.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></span>
                                <h4 className="font-bold text-emerald-900">Masa Ta'aruf Siswa (MATSAMA)</h4>
                                <p className="text-emerald-600 font-medium text-sm mb-1">Juli 2026</p>
                                <p className="text-gray-600 text-sm">Kegiatan pengenalan lingkungan madrasah.</p>
                            </div>
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display font-bold text-2xl text-emerald-900 mb-6 flex items-center gap-3">
                            <FileText className="text-emerald-600 w-6 h-6" />
                            Syarat Pendaftaran
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Mengisi Formulir Pendaftaran",
                                "Fotokopi Ijazah / SKL (Legalisir)",
                                "Fotokopi Kartu Keluarga (KK)",
                                "Fotokopi Akta Kelahiran",
                                "Fotokopi KTP Orang Tua",
                                "Pas Foto 3x4 (4 Lembar)"
                            ].map((req, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-sm font-medium">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: CTA & Contact */}
                <div className="space-y-6">
                    <div className="bg-emerald-900 p-8 rounded-xl text-white">
                        <h3 className="font-display font-bold text-2xl mb-4">Daftar Sekarang?</h3>
                        <p className="text-emerald-200 mb-8 text-sm">
                            Anda dapat mendaftar secara online melalui formulir di bawah ini atau datang langsung ke madrasah.
                        </p>
                        <button className="w-full py-3 bg-gold hover:bg-gold-light text-emerald-950 font-semibold rounded-lg transition-colors mb-4">
                            Isi Formulir Online
                        </button>
                        <button className="w-full py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-colors">
                            Download Brosur
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-100">
                        <h3 className="font-display font-bold text-xl text-emerald-900 mb-4">Butuh Bantuan?</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-emerald-800 uppercase">Hubungi Panitia</div>
                                    <div className="font-medium">085755259164 (Pak Mad)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
