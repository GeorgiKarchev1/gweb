import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gweb.bg"),
  title: {
    default: "Gweb – Професионално изграждане на уебсайтове и онлайн магазини",
    template: "%s | Gweb",
  },
  description:
    "Изграждане на модерни Shopify магазини и уебсайтове от нулата. SEO оптимизация, персонализиран дизайн и бърза доставка за 3-7 дни. Прозрачни цени без скрити такси.",
  keywords: [
    "уеб дизайн",
    "Shopify магазин",
    "изработка на сайт",
    "онлайн магазин",
    "SEO оптимизация",
    "уеб разработка",
    "България",
    "Gweb",
  ],
  authors: [{ name: "Gweb" }],
  creator: "Gweb",
  publisher: "Gweb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://gweb.bg",
    siteName: "Gweb",
    title: "Gweb – Професионално изграждане на уебсайтове",
    description:
      "Модерни Shopify магазини и уебсайтове. SEO оптимизация, персонализиран дизайн, бърза доставка.",
    images: [
      {
        url: "/imgs/Untitled design.png",
        width: 1200,
        height: 630,
        alt: "Gweb - Уеб разработка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gweb – Професионално изграждане на уебсайтове",
    description:
      "Модерни Shopify магазини и уебсайтове. SEO оптимизация, персонализиран дизайн.",
    images: ["/imgs/Untitled design.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gweb.bg",
  },
};

export const viewport = {
  themeColor: "#5e8e3e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
