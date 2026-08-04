import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leandrobalbian.com"),
  title: {
    default: "Leandro Balbian — Senior Product Designer",
    template: "%s — Leandro Balbian",
  },
  description:
    "Diseño plataformas complejas para que decisiones críticas tomen segundos, no minutos.",
  keywords: [
    "UX",
    "UI",
    "Product Design",
    "Diseño de producto",
    "SaaS",
    "PropTech",
    "FinTech",
    "Enterprise Software",
    "Design Engineering",
    "Argentina",
  ],
  authors: [{ name: "Leandro Balbian" }],
  creator: "Leandro Balbian",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://leandrobalbian.com",
    siteName: "Leandro Balbian",
    title: "Leandro Balbian — Senior Product Designer",
    description:
      "Diseño plataformas complejas para que decisiones críticas tomen segundos, no minutos.",
    images: [
      {
        url: "/HERO.png",
        width: 1200,
        height: 630,
        alt: "Leandro Balbian — Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Balbian — Senior Product Designer",
    description:
      "Diseño plataformas complejas para que decisiones críticas tomen segundos, no minutos.",
    images: ["/HERO.png"],
  },
  verification: {
    google: "QGg_v50E57iG2OfX_6MNjXqgPbzkUnEYPBl0wPho3Jc",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-bg"
        >
          Saltar al contenido principal
        </a>
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
