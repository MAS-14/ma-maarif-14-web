
import React from 'react';
import { Quote } from 'lucide-react';

export default function EkstrakurikulerPage() {
    const ekskul = [
        { name: "Pramuka", category: "Wajib", desc: "Membentuk jiwa korsa, kemandirian, dan survival skill." },
        { name: "Paskibra", category: "Unggulan", desc: "Melatih kedisiplinan baris-berbaris dan fisik." },
        { name: "Bola Voli", category: "Olahraga", desc: "Mengembangkan bakat olahraga dan kerja sama tim." },
        { name: "Futsal", category: "Olahraga", desc: "Saluran hobi dan prestasi bidang olahraga bola." },
        { name: "Seni Baca Al-Qur'an", category: "Keagamaan", desc: "Mendalami seni tilawah dan tahsin." },
        { name: "Kajian Kitab Kuning", category: "Keagamaan", desc: "Memperdalam khazanah keilmuan pesantren." },
        { name: "Hadrah Banjari", category: "Seni", desc: "Melestarikan seni Islam dan sholawat nabi." },
        { name: "Multimedia & Jurnalistik", category: "Skill", desc: "Pelatihan desain grafis, fotografi, dan penulisan berita." },
    ];

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-4">
                    Ekstrakurikuler
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Wadah pengembangan bakat dan minat siswa di luar jam pelajaran akademik.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ekskul.map((item, idx) => (
                    <div key={idx} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-emerald-200 hover:shadow-hover transition-all">
                        <div className="h-40 bg-gray-100 relative overflow-hidden">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center text-emerald-900/20 font-bold text-5xl">
                                {item.name.charAt(0)}
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                                {item.category}
                            </span>
                            <h3 className="font-display font-bold text-xl text-emerald-900 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote Section */}
            <div className="mt-20 bg-gray-50 rounded-2xl p-10 text-center relative">
                <Quote className="w-12 h-12 text-emerald-100 absolute top-6 left-6" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="font-display italic text-2xl text-emerald-900 mb-6">
                        "Bakat bukan hanya anugerah, tapi benih yang harus disiram dengan latihan dan disiplin. Di sini, kami membantu menumbuhkannya."
                    </p>
                    <div className="font-semibold text-gray-600">- Kesiswaan MA Ma'arif 14</div>
                </div>
            </div>
        </div>
    );
}
