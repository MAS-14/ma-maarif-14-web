
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
            <div className="text-center mb-12">
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-4">
                    Ekstrakurikuler
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Wadah pengembangan bakat dan minat siswa di luar jam pelajaran akademik.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ekskul.map((item, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl shadow-card border border-emerald-50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-40 bg-gray-200 relative overflow-hidden">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center text-emerald-900/20 font-bold text-4xl group-hover:scale-110 transition-transform duration-500">
                                {item.name.charAt(0)}
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
                                {item.category}
                            </span>
                            <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
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
            <div className="mt-20 bg-cream rounded-3xl p-10 text-center relative overflow-hidden">
                <Quote className="w-16 h-16 text-emerald-100 absolute top-4 left-4" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="font-display italic text-2xl text-emerald-900 mb-6">
                        "Bakat bukan hanya anugerah, tapi benih yang harus disiram dengan latihan dan disiplin. Di sini, kami membantu menumbuhkannya."
                    </p>
                    <div className="font-bold text-gray-600">- Kesiswaan MA Ma'arif 14</div>
                </div>
            </div>
        </div>
    );
}
