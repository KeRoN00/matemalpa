import type { Metadata } from "next";
import { Geist, Geist_Mono, Ranchers } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const ranchers = Ranchers({
  variable: "--font-ranchers-regular",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mate@",
  description: "Matematyczne wyzwania na każdy dzień",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ranchers.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
