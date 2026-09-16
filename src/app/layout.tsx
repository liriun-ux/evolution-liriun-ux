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

const SITE_URL = "https://www.liriun-ux.tecnologia.bo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "LIRIUN-UX | Sitios web para negocios",
    template: "%s | LIRIUN-UX",
  },

  description:
    "Diseño y creación de sitios web para negocios, con SEO y AEO para mejorar su presencia digital y ayudar a que sus clientes los encuentren.",

  applicationName: "LIRIUN-UX",

  authors: [
    {
      name: "LIRIUN-UX",
      url: SITE_URL,
    },
  ],

  creator: "LIRIUN-UX",
  publisher: "LIRIUN-UX",

  keywords: [
    "diseño web",
    "diseño de sitios web",
    "sitios web",
    "páginas web",
    "sitios web para negocios",
    "diseño web Bolivia",
    "páginas web Bolivia",
    "SEO",
    "AEO",
    "presencia digital",
  ],

  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-BO": SITE_URL,
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
    url: SITE_URL,
    siteName: "LIRIUN-UX",

    title: "LIRIUN-UX | Sitios web para negocios",

    description:
      "Diseño y creación de sitios web para negocios, con SEO y AEO para mejorar su presencia digital.",

    images: [
      {
        url: "/img/og-liriun-ux.png",
        width: 1136,
        height: 190,
        alt: "LIRIUN-UX — Diseño y creación de sitios web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LIRIUN-UX | Sitios web para negocios",

    description:
      "Diseño y creación de sitios web para negocios, con SEO y AEO.",

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

      "@id": `${SITE_URL}/#organization`,

      name: "LIRIUN-UX",

      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logo.png`,
      },

      email: "liriun.ux@gmail.com",

      description:
        "LIRIUN-UX se dedica al diseño y creación de sitios web para negocios, incorporando buenas prácticas de SEO y AEO para mejorar su presencia digital.",

      areaServed: [
        {
          "@type": "City",
          name: "La Paz",
          containedInPlace: {
            "@type": "Country",
            name: "Bolivia",
          },
        },
        {
          "@type": "City",
          name: "El Alto",
          containedInPlace: {
            "@type": "Country",
            name: "Bolivia",
          },
        },
      ],

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

      "@id": `${SITE_URL}/#website`,

      url: SITE_URL,

      name: "LIRIUN-UX",

      description:
        "Diseño y creación de sitios web para negocios con SEO y AEO.",

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },

      inLanguage: "es-BO",
    },

    {
      "@type": "WebPage",

      "@id": `${SITE_URL}/#webpage`,

      url: SITE_URL,

      name: "LIRIUN-UX | Sitios web para negocios",

      description:
        "Diseño y creación de sitios web para negocios, con SEO y AEO para mejorar su presencia digital.",

      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },

      about: {
        "@id": `${SITE_URL}/#organization`,
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
