
import React from 'react';

export default function ProfilPage() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-emerald-900 mb-4">
                    Profil Sekolah
                </h1>
                <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Visi & Misi */}
                <div className="space-y-10">
                    <div className="bg-white p-8 rounded-2xl shadow-card border border-emerald-50">
                        <h2 className="font-display font-bold text-2xl text-emerald-800 mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3 text-emerald-700">V</span>
                            Visi
                        </h2>
                        <p className="text-gray-700 leading-relaxed italic border-l-4 border-gold pl-4">
                            "Unggul dalam imtaq, Terampil dalam iptek, Berdayaguna bagi umat"
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-card border border-emerald-50">
                        <h2 className="font-display font-bold text-2xl text-emerald-800 mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3 text-emerald-700">M</span>
                            Misi
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            "Mewujudkan mutu lulusan madrasah yang berakhlakul karimah, berdaya saing, dan siap berkolaborasi di masyarakat"
                        </p>
                    </div>
                </div>

                {/* Sejarah / Overview */}
                <div className="space-y-8">
                    <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed">
                        <h3 className="text-2xl font-bold text-emerald-900 font-display mb-4">Selayang Pandang</h3>
                        <p className="mb-4">
                            MA Ma'arif 14 Sukorame adalah lembaga pendidikan menengah atas yang berada di bawah naungan Lembaga Pendidikan Ma'arif NU. Sejak didirikan, madrasah ini berkomitmen untuk memadukan kurikulum nasional dengan nilai-nilai pesantren.
                        </p>
                        <p className="mb-4">
                            Kami percaya bahwa pendidikan tidak hanya soal transfer ilmu pengetahuan, tetapi juga pembentukan karakter. Di era digital ini, kami berupaya mencetak lulusan yang tidak hanya cerdas secara intelektual (IQ), tetapi juga matang secara emosional (EQ) dan spiritual (SQ).
                        </p>
                        <p>
                            Dengan fasilitas yang terus dikembangkan dan tenaga pendidik yang kompeten, MA Ma'arif 14 Sukorame siap menjadi gerbang masa depan bagi putra-putri bangsa.
                        </p>
                    </div>

                    {/* Stats Tiny */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-emerald-900 p-6 rounded-xl text-center text-white">
                            <div className="text-3xl font-bold mb-1">B</div>
                            <div className="text-emerald-200 text-sm">Terakreditasi</div>
                        </div>
                        <div className="bg-gold p-6 rounded-xl text-center text-emerald-950">
                            <div className="text-3xl font-bold mb-1">NU</div>
                            <div className="text-emerald-900/80 text-sm">Ma'arif</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
