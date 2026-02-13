import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dronesaltillo.com"),
  title: {
    default: "Drone Saltillo | Filmación y Fotografía Aérea Profesional",
    template: "%s | Drone Saltillo",
  },
  description:
    "Servicio profesional de drones en Saltillo, Coahuila. Filmación aérea en 4K para eventos, inmobiliaria, empresas y deportes.",

  keywords: [
    "drones en Saltillo",
    "fotografía aérea Saltillo",
    "filmación con drones Coahuila",
    "video con drone 4K",
    "servicio de drones en Saltillo",
  ],

  openGraph: {
    title: "Drone Saltillo | Filmación y Fotografía Aérea Profesional",
    description:
      "Capturamos eventos, inmobiliaria y deportes con drones 4K en Saltillo, Coahuila.",
    url: "https://dronesaltillo.com",
    siteName: "Drone Saltillo",
    locale: "es_MX",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
