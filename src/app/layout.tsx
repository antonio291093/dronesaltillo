import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/big-shoulders-display";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dronesaltillo.com"),
  title: {
    default: "Drone Saltillo | Filmación y Fotografía Aérea Profesional",
    template: "%s | Drone Saltillo",
  },
  description:
    "Servicio profesional de drones en Saltillo, Coahuila. Fotografía y video aéreo en 4K para bodas, eventos, inmobiliarias, empresas y deportes.",
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
      "Capturamos bodas, inmobiliarias y deportes con drones 4K en Saltillo, Coahuila.",
    url: "https://dronesaltillo.com",
    siteName: "Drone Saltillo",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/images/hero1.jpg", width: 4000, height: 2250 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1a2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
