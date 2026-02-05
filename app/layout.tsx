import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Skill4Africa | The Africa-First Job Platform",
  description: "Skill4Africa bridges the gap between African talent and global employers through verified skill-first hiring. Fast, better, and Africa-focused.",
  keywords: ["Jobs in Africa", "Skill verification", "African Talent", "Hire in Nigeria", "Hire in Africa", "Skills-first hiring"],
  openGraph: {
    title: "Skill4Africa | Reimagining Modern Hiring for Africa",
    description: "Verified talent, skills-first hiring, and world-class opportunities for Africans.",
    type: "website",
    locale: "en_NG",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
