
import React from 'react';
import { Users, Star, HeartHandshake, Quote } from 'lucide-react';

export default function KesiswaanPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
                        Kesiswaan
                    </h1>
                    <p className="text-xl sm:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
                        Membentuk karakter pemimpin masa depan yang berhaluan Ahlussunnah Wal Jama'ah
                    </p>
                </div>
            </section>

            {/* IPNU-IPPNU Section - Rich & Engaging */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6">
                                Organisasi Induk
                            </span>
                            <h2 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-6 leading-tight">
                                PK IPNU - IPPNU
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Pimpinan Komisariat Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) adalah wadah utama kaderisasi siswa di MA Ma'arif 14.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Kami belajar berorganisasi, bermasyarakat, dan berdakwah santun dengan nilai-nilai Ahlussunnah Wal Jama'ah.
                            </p>

                            {/* Pillars */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-emerald-50 p-6 rounded-xl text-center border border-emerald-100">
                                    <Users className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                                    <div className="font-bold text-emerald-900">Kaderisasi</div>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-xl text-center border border-emerald-100">
                                    <HeartHandshake className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                                    <div className="font-bold text-emerald-900">Sosial</div>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-xl text-center border border-emerald-100">
                                    <Star className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                                    <div className="font-bold text-emerald-900">Religi</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-3xl flex items-center justify-center shadow-2xl">
                                <span className="text-9xl font-display font-bold text-emerald-800/30 select-none">NU</span>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full blur-2xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Quote className="w-96 h-96 absolute top-0 left-0" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-light italic leading-relaxed mb-6">
                        "Organisasi adalah sekolah kepemimpinan. Di sini kami belajar memimpin diri sendiri sebelum memimpin orang lain."
                    </blockquote>
                    <div className="text-emerald-300 font-semibold">
                        — Filosofi PK IPNU-IPPNU
                    </div>
                </div>
            </section>

            {/* Program Pembiasaan */}
            <section className="py-24 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
                            Program Pembiasaan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Kegiatan rutin yang membentuk karakter dan kedisiplinan siswa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Sholat Dhuha & Dhuhur Berjamaah", desc: "Membentuk kedisiplinan ibadah setiap hari." },
                            { title: "Istighosah Rutin", desc: "Mendekatkan diri kepada Allah dan memohon kelancaran belajar." },
                            { title: "Yasin & Tahlil", desc: "Melestarikan tradisi Amaliyah NU setiap Jumat pagi." },
                            { title: "Upacara Bendera", desc: "Menanamkan rasa cinta tanah air dan kedisiplinan." },
                            { title: "Bakti Sosial", desc: "Melatih kepekaan sosial terhadap masyarakat sekitar." },
                            { title: "PHBI & PHBN", desc: "Peringatan Hari Besar Islam dan Nasional yang meriah." },
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-deep transition-all">
                                <div className="w-12 h-12 rounded-xl bg-emerald-900 text-gold flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
