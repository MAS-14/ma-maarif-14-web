import BannerPPDB from "@/components/marketing/BannerPPDB";
import { BookOpen, Users, Award, Heart } from "lucide-react";

// Feature highlights data
const features = [
    {
        icon: BookOpen,
        title: "Kurikulum Terintegrasi",
        description: "Perpaduan kurikulum nasional dengan pendidikan agama Islam berbasis Ahlussunnah Wal Jama'ah",
    },
    {
        icon: Users,
        title: "PK IPNU-IPPNU",
        description: "Organisasi kesiswaan yang membentuk jiwa kepemimpinan dan keislaman santri",
    },
    {
        icon: Award,
        title: "Prestasi Gemilang",
        description: "Ratusan prestasi akademik dan non-akademik di tingkat kabupaten hingga nasional",
    },
    {
        icon: Heart,
        title: "Lingkungan Islami",
        description: "Suasana belajar yang kondusif dengan nilai-nilai Islam yang kuat",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero Section - Full Width Banner PPDB */}
            {/* Hero Section - Full Width Banner PPDB */}
            <section className="w-full">
                <BannerPPDB />
            </section>

            {/* Welcome Section */}
            <section className="py-20 lg:py-28 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-4">
                            Selamat Datang
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
                            MA Ma'arif 14 Sukorame
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Lembaga pendidikan Islam di bawah naungan LP Ma'arif NU yang berkomitmen
                            mencetak generasi muslim yang berakhlak mulia, berwawasan luas, dan siap
                            menghadapi tantangan era digital dengan tetap berpegang teguh pada nilai-nilai
                            <span className="font-semibold text-emerald-700"> Ahlussunnah Wal Jama'ah</span>.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 lg:p-8 bg-white rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-50"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-emerald-700" />
                                </div>
                                <h3 className="font-display font-semibold text-xl text-emerald-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25+</div>
                            <div className="text-emerald-300 font-medium">Tahun Berdiri</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
                            <div className="text-emerald-300 font-medium">Alumni Sukses</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                            <div className="text-emerald-300 font-medium">Tenaga Pendidik</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">A</div>
                            <div className="text-emerald-300 font-medium">Akreditasi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-6">
                        Bergabunglah Bersama Kami
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Wujudkan masa depan cemerlang putra-putri Anda bersama MA Ma'arif 14 Sukorame.
                        Pendaftaran tahun ajaran 2026/2027 telah dibuka!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/pendaftaran"
                            className="px-8 py-4 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white font-bold rounded-full hover:shadow-emerald-glow transition-all duration-300"
                        >
                            Daftar Sekarang
                        </a>
                        <a
                            href="/profil"
                            className="px-8 py-4 border-2 border-emerald-800 text-emerald-800 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300"
                        >
                            Lihat Profil Sekolah
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
