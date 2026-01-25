"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: "PPDB 2026/2027",
        desc: "Penerimaan Peserta Didik Baru telah dibuka. Segera daftarkan diri Anda!",
        image: "/marketing-flyer.jpg",
    },
    {
        id: 2,
        title: "Kegiatan IPNU IPPNU",
        desc: "Membangun karakter kepemimpinan yang berakhlakul karimah.",
        image: "/diklat-administrasi.jpg",
    },
    {
        id: 3,
        title: "Fasilitas Sekolah",
        desc: "Sarana pembelajaran modern untuk menunjang skill digital santri.",
        image: "/ramadhan 25-Recovered.jpg",
    },
];

export default function MarketingCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4">
                        Galeri Kegiatan
                    </span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-900">
                        Dokumentasi & Informasi
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Main Slide Card */}
                    <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 relative aspect-video md:aspect-[21/9]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col md:flex-row"
                            >


                                <div className="w-full md:w-3/5 h-64 md:h-full relative">
                                    <Image
                                        src={slides[currentIndex].image}
                                        alt={slides[currentIndex].title}
                                        fill
                                        className="object-cover rounded-xl"
                                        priority={currentIndex === 0}
                                        onError={(e) => {
                                            // Hide image on error to show fallback
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent md:bg-gradient-to-r" />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-2/5 p-8 flex flex-col justify-center relative z-10">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-2xl font-display font-bold text-white mb-4"
                                    >
                                        {slides[currentIndex].title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-emerald-100 mb-8"
                                    >
                                        {slides[currentIndex].desc}
                                    </motion.p>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="self-start px-6 py-2 bg-yellow-500 text-emerald-950 font-bold rounded-full hover:bg-yellow-400 transition-colors"
                                    >
                                        Lihat Detail
                                    </motion.button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/10"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/10"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-yellow-500' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Scrolling Thumbnails (Mobile-Friendly) */}
                    <div className="mt-8 overflow-x-auto scrollbar-hide pb-4">
                        <div className="flex gap-4 px-1 min-w-max">
                            {slides.map((slide, idx) => (
                                <motion.div
                                    key={slide.id}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative w-64 h-40 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${currentIndex === idx ? 'border-yellow-500 shadow-lg scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-emerald-900/20 z-10 hover:bg-transparent transition-colors" />
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-20">
                                        <p className="text-white text-sm font-bold truncate">{slide.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
