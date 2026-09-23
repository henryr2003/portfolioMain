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
        default: "Henry Rodas | IT Support & CompTIA A+",
        template: "%s | Henry Rodas",
    },
    description:
        "An IT Support portfolio featuring hands-on experience with Active Directory, Windows Server, Proxmox, networking, troubleshooting, and homelab projects.",

    alternates: { canonical: "https://henryrodas.com" },

    openGraph: {
        title: "Henry Rodas — IT Support & CompTIA A+",
        url: "https://henryrodas.com",
        type: "website",
        description:
        "An IT Support portfolio featuring hands-on experience with Active Directory, Windows Server, Proxmox, networking, troubleshooting, and homelab projects.",

    },

    twitter: {
        card: "summary_large_image",
        title: "Henry Rodas — IT Support & CompTIA A+",
        description:
        "An IT Support portfolio featuring hands-on experience with Active Directory, Windows Server, Proxmox, networking, troubleshooting, and homelab projects.",

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
