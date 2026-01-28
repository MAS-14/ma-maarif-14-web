
import React from 'react';
import { Quote, Award, Users } from 'lucide-react';

export default function ProfilPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
                        Profil Sekolah
                    </h1>
                    <p className="text-xl sm:text-2xl text-emerald-200 max-w-3xl mx-auto">
                        Mengenal lebih dekat MA Ma'arif 14 Sukorame
                    </p>
                </div>
            </section>

            {/* Visi & Misi Section */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Visi */}
                        <div className="relative bg-gradient-to-br from-emerald-50 to-white p-10 lg:p-12 rounded-3xl border border-emerald-100 shadow-deep">
                            <div className="absolute top-6 right-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                                <span className="text-3xl font-bold text-emerald-700">V</span>
                            </div>
                            <h2 className="font-display font-bold text-3xl lg:text-4xl text-emerald-900 mb-6">
                                Visi
                            </h2>
                            <div className="relative pl-6 border-l-4 border-gold">
                                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic font-light">
                                    "Unggul dalam imtaq, Terampil dalam iptek, Berdayaguna bagi umat"
                                </p>
                            </div>
                        </div>

                        {/* Misi */}
                        <div className="relative bg-gradient-to-br from-gold/10 to-white p-10 lg:p-12 rounded-3xl border border-gold/30 shadow-deep">
                            <div className="absolute top-6 right-6 w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
                                <span className="text-3xl font-bold text-emerald-900">M</span>
                            </div>
                            <h2 className="font-display font-bold text-3xl lg:text-4xl text-emerald-900 mb-6">
                                Misi
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                                "Mewujudkan mutu lulusan madrasah yang berakhlakul karimah, berdaya saing, dan siap berkolaborasi di masyarakat"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Quote className="w-96 h-96 absolute bottom-0 right-0" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-light italic leading-relaxed mb-6">
                        "Kami tidak hanya mengajar, tetapi membimbing. Tidak hanya mendidik, tetapi menginspirasi."
                    </blockquote>
                    <div className="text-emerald-300 font-semibold">
                        — Visi Pendidikan MA Ma'arif 14
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 lg:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
                                Selayang Pandang
                            </h2>
                            <div className="prose prose-lg text-gray-700 space-y-4">
                                <p className="text-lg leading-relaxed">
                                    MA Ma'arif 14 Sukorame adalah lembaga pendidikan menengah atas yang berada di bawah naungan Lembaga Pendidikan Ma'arif NU. Sejak didirikan, madrasah ini berkomitmen untuk memadukan kurikulum nasional dengan nilai-nilai pesantren.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Kami percaya bahwa pendidikan tidak hanya soal transfer ilmu pengetahuan, tetapi juga pembentukan karakter. Di era digital ini, kami berupaya mencetak lulusan yang tidak hanya cerdas secara intelektual (IQ), tetapi juga matang secara emosional (EQ) dan spiritual (SQ).
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Dengan fasilitas yang terus dikembangkan dan tenaga pendidik yang kompeten, MA Ma'arif 14 Sukorame siap menjadi gerbang masa depan bagi putra-putri bangsa.
                                </p>
                            </div>
                        </div>

                        {/* Highlight Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-emerald-900 p-8 rounded-2xl text-center text-white shadow-xl">
                                <Award className="w-12 h-12 mx-auto mb-4 text-gold" />
                                <div className="text-5xl font-bold mb-2">B</div>
                                <div className="text-emerald-200">Terakreditasi</div>
                            </div>
                            <div className="bg-gold p-8 rounded-2xl text-center text-emerald-950 shadow-xl">
                                <Users className="w-12 h-12 mx-auto mb-4" />
                                <div className="text-5xl font-bold mb-2">NU</div>
                                <div className="text-emerald-900/80">Ma'arif</div>
                            </div>
                            <div className="col-span-2 bg-white p-8 rounded-2xl text-center border-2 border-emerald-200 shadow-lg">
                                <div className="text-4xl font-bold text-emerald-900 mb-2">25+ Tahun</div>
                                <div className="text-gray-600">Pengalaman Mendidik</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
