import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yannick Zutter - Full Stack Developer",
  description: "Portfolio of Yannick Zutter - Full Stack Developer specializing in Java, Clean Code, and Energy Trading Solutions",
  keywords: ["Full Stack Developer", "Java", "Clean Code", "Energy Trading", "Software Engineer", "Backend Developer"],
  authors: [{ name: "Yannick Zutter" }],
  openGraph: {
    title: "Yannick Zutter - Full Stack Developer",
    description: "Portfolio of Yannick Zutter - Full Stack Developer specializing in Java and Clean Code",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen pt-16 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
