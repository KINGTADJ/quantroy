import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantroy - Secure Your Future with Smart Investments",
  description: "Professional crypto investment platform with AI-powered strategies, transparent tracking, and monthly returns. Join thousands of investors building wealth.",
  keywords: "crypto investment, bitcoin, ethereum, wealth management, investment platform, crypto trading",
  openGraph: {
    title: "Quantroy - Secure Your Future with Smart Investments",
    description: "Professional crypto investment platform with AI-powered strategies and monthly returns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen bg-[#faf8f3] font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
