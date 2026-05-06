import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabbir Hossain Evan | Mobile App & Web Developer",
  description:
    "Portfolio of Md. Sabbir Hossain Evan — Mobile App Developer & Web Developer specializing in React Native, Next.js, and TypeScript. Building fast, scalable, user-friendly web & mobile apps with clean code.",
  keywords: [
    "Sabbir Hossain Evan",
    "Mobile App Developer",
    "Web Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Md. Sabbir Hossain Evan" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
  openGraph: {
    title: "Sabbir Hossain Evan | Mobile App & Web Developer",
    description:
      "Building fast, scalable, user-friendly web & mobile apps with clean code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Hossain Evan | Mobile App & Web Developer",
    description:
      "Building fast, scalable, user-friendly web & mobile apps with clean code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
