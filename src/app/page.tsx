import BannerPPDB from "@/components/marketing/BannerPPDB";
import MarketingCarousel from "@/components/MarketingCarousel";
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
            <section className="w-full">
                <BannerPPDB />
            </section>

            {/* Marketing Carousel - Activity Gallery */}
            <MarketingCarousel />

            {/* Welcome Section */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-block px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 font-medium text-sm mb-6">
                            Selamat Datang
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 tracking-tight">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-hover transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                                    <feature.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold text-xl text-emerald-900 mb-3">
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
            <section className="py-20 bg-emerald-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">25+</div>
                            <div className="text-emerald-300 font-medium">Tahun Berdiri</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">500+</div>
                            <div className="text-emerald-300 font-medium">Alumni Sukses</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">50+</div>
                            <div className="text-emerald-300 font-medium">Tenaga Pendidik</div>
                        </div>
                        <div>
                            <div className="text-5xl lg:text-6xl font-bold text-gold mb-2">B</div>
                            <div className="text-emerald-300 font-medium">Akreditasi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
                        Bergabunglah Bersama Kami
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        Wujudkan masa depan cemerlang putra-putri Anda bersama MA Ma'arif 14 Sukorame.
                        Pendaftaran tahun ajaran 2026/2027 telah dibuka!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/pendaftaran"
                            className="px-8 py-4 bg-emerald-900 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors"
                        >
                            Daftar Sekarang
                        </a>
                        <a
                            href="/profil"
                            className="px-8 py-4 border-2 border-emerald-900 text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
                        >
                            Lihat Profil Sekolah
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
