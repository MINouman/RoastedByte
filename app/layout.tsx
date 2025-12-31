import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RoastedByte | Engineering That Removes Friction",
  description:
    "A premium engineering studio specializing in automation, APIs, machine learning, and data systems. We build systems that scale.",
  keywords: [
    "automation",
    "API development",
    "machine learning",
    "data engineering",
    "web platforms",
    "backend systems",
  ],
  authors: [{ name: "RoastedByte" }],
  openGraph: {
    title: "RoastedByte | Engineering That Removes Friction",
    description:
      "A premium engineering studio specializing in automation, APIs, machine learning, and data systems.",
    type: "website",
    locale: "en_US",
    siteName: "RoastedByte",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoastedByte | Engineering That Removes Friction",
    description:
      "A premium engineering studio specializing in automation, APIs, machine learning, and data systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

