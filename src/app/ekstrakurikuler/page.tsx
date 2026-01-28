
import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function EkstrakurikulerPage() {
    const ekskul = [
        { name: "Pramuka", category: "Wajib", desc: "Membentuk jiwa korsa, kemandirian, dan survival skill.", color: "emerald" },
        { name: "Paskibra", category: "Unggulan", desc: "Melatih kedisiplinan baris-berbaris dan fisik.", color: "emerald" },
        { name: "Bola Voli", category: "Olahraga", desc: "Mengembangkan bakat olahraga dan kerja sama tim.", color: "blue" },
        { name: "Futsal", category: "Olahraga", desc: "Saluran hobi dan prestasi bidang olahraga bola.", color: "blue" },
        { name: "Seni Baca Al-Qur'an", category: "Keagamaan", desc: "Mendalami seni tilawah dan tahsin.", color: "purple" },
        { name: "Kajian Kitab Kuning", category: "Keagamaan", desc: "Memperdalam khazanah keilmuan pesantren.", color: "purple" },
        { name: "Hadrah Banjari", category: "Seni", desc: "Melestarikan seni Islam dan sholawat nabi.", color: "amber" },
        { name: "Multimedia & Jurnalistik", category: "Skill", desc: "Pelatihan desain grafis, fotografi, dan penulisan berita.", color: "rose" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <Sparkles className="w-96 h-96 absolute top-10 right-10" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
                        Ekstrakurikuler
                    </h1>
                    <p className="text-xl sm:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
                        Wadah pengembangan bakat dan minat siswa di luar jam pelajaran akademik
                    </p>
                </div>
            </section>

            {/* Ekstrakurikuler Grid */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
                            Pilihan Ekstrakurikuler
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Temukan passion Anda dan kembangkan potensi terbaik
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ekskul.map((item, idx) => (
                            <div key={idx} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden hover:border-emerald-200 hover:shadow-deep transition-all">
                                {/* Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-emerald-900/10 group-hover:scale-110 transition-transform">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold mb-3">
                                        {item.category}
                                    </span>
                                    <h3 className="font-display font-bold text-xl text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Quote className="w-96 h-96 absolute bottom-0 left-1/2 -translate-x-1/2" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-light italic leading-relaxed mb-6">
                        "Bakat bukan hanya anugerah, tapi benih yang harus disiram dengan latihan dan disiplin. Di sini, kami membantu menumbuhkannya."
                    </blockquote>
                    <div className="text-emerald-300 font-semibold">
                        — Kesiswaan MA Ma'arif 14
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-6">
                        Siap Mengembangkan Bakat Anda?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Bergabunglah dengan ekstrakurikuler pilihan Anda dan raih prestasi gemilang
                    </p>
                    <a
                        href="/pendaftaran"
                        className="inline-block px-10 py-4 bg-emerald-900 text-white font-bold text-lg rounded-xl hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </section>
        </div>
    );
}
