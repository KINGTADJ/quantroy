import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Quantroy - Professional Crypto Investment Platform",
  description: "AI-powered crypto investment strategies with transparent tracking and monthly returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0a1612]">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
