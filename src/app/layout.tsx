import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "MA Ma'arif 14 Sukorame | Official Website",
    description: "Website resmi Madrasah Aliyah Ma'arif 14 Sukorame - Lembaga pendidikan Islam berbasis Ahlussunnah Wal Jama'ah",
    keywords: ["MA Ma'arif 14", "Sukorame", "Madrasah Aliyah", "Pendidikan Islam", "Ahlussunnah Wal Jama'ah"],
    icons: {
        icon: '/logo-sekolah.png',
    },
    verification: {
        google: 'ORj8UScodGi7faybsOd5oMbbPgxv198CvJEA3832ysg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
            <body className="min-h-screen flex flex-col bg-white font-sans">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
