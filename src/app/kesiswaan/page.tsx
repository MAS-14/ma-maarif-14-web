
import React from 'react';
import { Users, Star, HeartHandshake } from 'lucide-react';

export default function KesiswaanPage() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-4">
                    Kesiswaan
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Membentuk karakter pemimpin masa depan yang berhaluan Ahlussunnah Wal Jama'ah melalui organisasi dan pembiasaan positif.
                </p>
            </div>

            {/* Main Focus: IPNU IPPNU */}
            <div className="bg-emerald-900 rounded-2xl overflow-hidden mb-20 text-white">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <span className="inline-block px-4 py-2 rounded-full bg-emerald-800 text-emerald-100 font-medium text-sm mb-6">
                            Organisasi Induk
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                            PK IPNU - IPPNU <br />
                            <span className="text-emerald-200">MA Ma'arif 14 Sukorame</span>
                        </h2>
                        <p className="text-emerald-100 text-lg leading-relaxed mb-8">
                            Pimpinan Komisariat Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) adalah wadah utama kaderisasi siswa di MA Ma'arif 14. Kami belajar berorganisasi, bermasyarakat, dan berdakwah santun.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                <Users className="w-5 h-5 text-gold" />
                                <span className="font-medium">Kaderisasi</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                <HeartHandshake className="w-5 h-5 text-gold" />
                                <span className="font-medium">Sosial</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                <Star className="w-5 h-5 text-gold" />
                                <span className="font-medium">Religi</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        {/* Placeholder for Logo or Photo */}
                        <div className="w-64 h-64 bg-emerald-800 rounded-full flex items-center justify-center">
                            <span className="text-emerald-700 font-display font-bold text-8xl select-none">NU</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Unggulan Kesiswaan */}
            <h3 className="font-display font-bold text-2xl text-emerald-900 mb-8 pl-4 border-l-2 border-emerald-200">
                Program Pembiasaan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Sholat Dhuha & Dhuhur Berjamaah", desc: "Membentuk kedisiplinan ibadah setiap hari." },
                    { title: "Istighosah Rutin", desc: "Mendekatkan diri kepada Allah dan memohon kelancaran belajar." },
                    { title: "Yasin & Tahlil", desc: "Melestarikan tradisi Amaliyah NU setiap Jumat pagi." },
                    { title: "Upacara Bendera", desc: "Menanamkan rasa cinta tanah air dan kedisiplinan." },
                    { title: "Bakti Sosial", desc: "Melatih kepekaan sosial terhadap masyarakat sekitar." },
                    { title: "PHBI & PHBN", desc: "Peringatan Hari Besar Islam dan Nasional yang meriah." },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-hover transition-all">
                        <h4 className="font-bold text-lg text-emerald-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
