import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadersend.io"),
  title: "LeaderSend — Email Marketing for Leaders",
  description: "Transactional and broadcast email built for field leaders. One dashboard to onboard new teammates, blast event recaps, and keep your whole organization in the loop.",
  applicationName: "LeaderSend",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderSend",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderSend",
    title: "LeaderSend — Email Marketing for Leaders",
    description: "Transactional and broadcast email built for field leaders. One dashboard to onboard new teammates, blast event recaps, and keep your whole organization in the loop.",
    url: "https://leadersend.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderSend — Email Marketing for Leaders",
    description: "Transactional and broadcast email built for field leaders. One dashboard to onboard new teammates, blast event recaps, and keep your whole organization in the loop.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
