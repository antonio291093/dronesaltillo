import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drone Saltillo | Filmación y Fotografía Aérea Profesional",
  description:
    "Servicio profesional de drones en Saltillo, Coahuila. Capturamos eventos sociales, inmobiliaria y deportes en 4K.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
