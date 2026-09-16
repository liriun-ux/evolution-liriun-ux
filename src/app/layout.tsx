import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.liriun-ux.tecnologia.bo"),

  title: {
    default: "LIRIUN-UX | Sitios web para negocios en Bolivia",
    template: "%s | LIRIUN-UX",
  },

  description:
    "Creamos sitios web para negocios en Bolivia con SEO y AEO para mejorar su presencia digital y facilitar que sus clientes los encuentren.",

  applicationName: "LIRIUN-UX",

  authors: [
    {
      name: "LIRIUN-UX",
      url: "https://www.liriun-ux.tecnologia.bo",
    },
  ],

  creator: "LIRIUN-UX",
  publisher: "LIRIUN-UX",

  keywords: [
    "diseño web",
    "diseño de sitios web",
    "sitios web para negocios",
    "páginas web Bolivia",
    "diseño web Bolivia",
    "SEO",
    "AEO",
    "presencia digital",
  ],

  alternates: {
    canonical: "https://www.liriun-ux.tecnologia.bo/",
    languages: {
      "es-BO": "https://www.liriun-ux.tecnologia.bo/",
    },
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_BO",

    url: "https://www.liriun-ux.tecnologia.bo/",

    siteName: "LIRIUN-UX",

    title: "LIRIUN-UX | Sitios web para negocios en Bolivia",

    description:
      "Creamos sitios web para negocios en Bolivia con SEO y AEO para mejorar su presencia digital.",

    images: [
      {
        url: "/img/og-liriun-ux.png",
        width: 1200,
        height: 630,
        alt: "LIRIUN-UX — Sitios web para negocios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LIRIUN-UX | Sitios web para negocios en Bolivia",

    description:
      "Sitios web para negocios con SEO y AEO.",

    images: ["/img/og-liriun-ux.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.liriun-ux.tecnologia.bo/#organization",

      name: "LIRIUN-UX",

      url: "https://www.liriun-ux.tecnologia.bo/",

      logo: {
        "@type": "ImageObject",
        url: "https://www.liriun-ux.tecnologia.bo/img/logo.png",
      },

      description:
        "LIRIUN-UX crea sitios web para negocios con SEO y AEO para mejorar su presencia digital.",

      areaServed: {
        "@type": "Country",
        name: "Bolivia",
      },

      knowsAbout: [
        "Diseño web",
        "Desarrollo web",
        "SEO",
        "AEO",
        "Experiencia de usuario",
        "Accesibilidad web",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.liriun-ux.tecnologia.bo/#website",

      url: "https://www.liriun-ux.tecnologia.bo/",

      name: "LIRIUN-UX",

      description:
        "Sitios web para negocios con SEO y AEO.",

      publisher: {
        "@id":
          "https://www.liriun-ux.tecnologia.bo/#organization",
      },

      inLanguage: "es-BO",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.liriun-ux.tecnologia.bo/#webpage",

      url: "https://www.liriun-ux.tecnologia.bo/",

      name: "LIRIUN-UX | Sitios web para negocios en Bolivia",

      description:
        "Creamos sitios web para negocios en Bolivia con SEO y AEO para mejorar su presencia digital.",

      isPartOf: {
        "@id":
          "https://www.liriun-ux.tecnologia.bo/#website",
      },

      about: {
        "@id":
          "https://www.liriun-ux.tecnologia.bo/#organization",
      },

      inLanguage: "es-BO",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <head>
<script  type="application/ld+json"  dangerouslySetInnerHTML={{    __html: JSON.stringify(jsonLd),  }}/>
    </head>
      <body className="">
        <Header/>
      {children}
      </body>
    </html>
  );
}
