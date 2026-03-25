import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-m-plus-rounded",
});

export const metadata: Metadata = {
  title: "わたしの部屋 - Blog",
  description: "まったり、のんびり、いつもの毎日に彩りを",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${mPlusRounded.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-sans" style={{ fontFamily: 'var(--font-m-plus-rounded), sans-serif', backgroundColor: '#f8f1e9', color: '#5d4a44' }}>
        {children}
      </body>
    </html>
  );
}
