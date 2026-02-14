"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.jpg"
          alt="Vista aérea de Saltillo"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay (AJUSTA AQUÍ LA OPACIDAD) */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Blur Glass Effect */}
      <div className="absolute inset-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-4 pt-32"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight text-white text-stroke-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Inmortaliza tu gran día <br />
          <span className="text-primary ">
            con una perspectiva única
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Cinematografía aérea profesional en Saltillo para eventos,
          inmobiliaria y deportes en calidad 4K.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Glow Button */}
          <a
            href="https://wa.me/528444529997"
            className="relative bg-green-600 text-white font-bold py-4 px-8 rounded-[var(--radius-custom)] transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-[var(--radius-custom)] bg-green-500 blur-xl opacity-40 animate-pulse"></span>
            <span className="relative z-10">Cotiza por WhatsApp</span>
          </a>

          <a
            href="tel:+528444529997"
            className="border-2 border-primary text-white py-4 px-8 rounded-[var(--radius-custom)] hover:bg-primary/10 transition-all duration-300"
          >
            Llámanos ahora
          </a>

        </div>
      </motion.div>     
    </section>
  );
}
