import BannerPPDB from "@/components/marketing/BannerPPDB";
import MarketingCarousel from "@/components/MarketingCarousel";
import { BookOpen, Users, Award, Heart, ArrowRight, Quote } from "lucide-react";

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
            {/* Hero Section - Large & Impactful */}
            <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                        MA Ma'arif 14 Sukorame
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-emerald-100 mb-4 font-light">
                        Unggul dalam Imtaq, Terampil dalam Iptek
                    </p>
                    <p className="text-lg sm:text-xl text-emerald-200 mb-12 max-w-3xl mx-auto">
                        Lembaga pendidikan Islam yang berkomitmen mencetak generasi muslim berakhlak mulia,
                        berwawasan luas, dan siap menghadapi tantangan era digital
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/pendaftaran"
                            className="group px-8 py-4 bg-gold hover:bg-gold-light text-emerald-950 font-bold text-lg rounded-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
                        >
                            Daftar Sekarang
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/profil"
                            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>
                </div>
            </section>

            {/* Marketing Carousel - Activity Gallery */}
            <MarketingCarousel />

            {/* Quote Section - Harvard Style */}
            <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Quote className="w-96 h-96 absolute top-10 left-10" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-16 h-16 text-gold mx-auto mb-8" />
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-light italic leading-relaxed mb-8">
                        "Pendidikan bukan hanya transfer ilmu, tetapi pembentukan karakter.
                        Kami mencetak lulusan yang cerdas intelektual, matang emosional, dan kuat spiritual."
                    </blockquote>
                    <div className="text-emerald-300 font-semibold text-lg">
                        — Kepala Madrasah MA Ma'arif 14 Sukorame
                    </div>
                </div>
            </section>

            {/* Features Section - Image-Rich Cards */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
                            Keunggulan Kami
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Memadukan tradisi pesantren dengan pendidikan modern untuk menghasilkan generasi unggul
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-deep transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-emerald-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <feature.icon className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="font-display font-bold text-2xl text-emerald-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Deep Background */}
            <section className="py-24 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div className="group">
                            <div className="text-6xl lg:text-7xl font-bold mb-3 group-hover:scale-110 transition-transform">25+</div>
                            <div className="text-emerald-300 font-semibold text-lg">Tahun Berdiri</div>
                        </div>
                        <div className="group">
                            <div className="text-6xl lg:text-7xl font-bold mb-3 group-hover:scale-110 transition-transform">500+</div>
                            <div className="text-emerald-300 font-semibold text-lg">Alumni Sukses</div>
                        </div>
                        <div className="group">
                            <div className="text-6xl lg:text-7xl font-bold mb-3 group-hover:scale-110 transition-transform">50+</div>
                            <div className="text-emerald-300 font-semibold text-lg">Tenaga Pendidik</div>
                        </div>
                        <div className="group">
                            <div className="text-6xl lg:text-7xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform">B</div>
                            <div className="text-emerald-300 font-semibold text-lg">Akreditasi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Engaging */}
            <section className="py-24 lg:py-32 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
                        Bergabunglah Bersama Kami
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Wujudkan masa depan cemerlang putra-putri Anda bersama MA Ma'arif 14 Sukorame.
                        Pendaftaran tahun ajaran 2026/2027 telah dibuka!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="/pendaftaran"
                            className="group px-10 py-5 bg-emerald-900 text-white font-bold text-lg rounded-xl hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Daftar Sekarang
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/profil"
                            className="px-10 py-5 border-2 border-emerald-900 text-emerald-900 font-bold text-lg rounded-xl hover:bg-emerald-50 transition-all"
                        >
                            Lihat Profil Sekolah
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
