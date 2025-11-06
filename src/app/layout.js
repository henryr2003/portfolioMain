import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "Henry Rodas | Front-end Developer",
        template: "%s | Henry Rodas",
    },
    description:
        "Portfolio of Henry Rodas - A Front-end Developer who specializes in React, Next.js, and Framer Motion",

    alternates: { canonical: "https://henryrodas.com" },

    openGraph: {
        title: "Henry Rodas — Front-End Developer",
        url: "https://henryrodas.com",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Henry Rodas — Front-End Developer",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
