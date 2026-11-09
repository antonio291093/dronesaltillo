"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    text: "Se me saltaron las lágrimas al ver el video de nuestra entrada. Capturaron momentos que ni nosotros mismos vimos. ¡Gracias por este regalo eterno!",
    author: "María J.",
    context: "Boda en Saltillo",
  },
  {
    text: "Profesionalismo puro. Lograron que nuestro terreno luciera espectacular, facilitando una venta que llevábamos meses buscando. Una inversión que vale cada centavo.",
    author: "Arq. Roberto G.",
    context: "Venta de terreno",
  },
  {
    text: "Increíble trato y equipo. Lograron transmitir toda la energía del evento deportivo. Ver a la comunidad desde el cielo fue algo verdaderamente inspirador.",
    author: "Comité Deportivo Coahuila",
    context: "Torneo regional",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section id="testimonios" className="border-y border-cal/10 bg-pizarra py-24 md:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-[clamp(2.8rem,5vw,4.5rem)] uppercase">
            Lo que dicen nuestros clientes
          </h2>
          <div role="tablist" aria-label="Testimonios" className="mt-10 flex flex-col">
            {testimonials.map((x, idx) => (
              <button
                key={x.author}
                role="tab"
                id={`tab-${idx}`}
                aria-selected={idx === i}
                aria-controls="testimonio-activo"
                onClick={() => setI(idx)}
                className={`border-l-2 py-3 pl-5 text-left transition-colors ${
                  idx === i
                    ? "border-atardecer text-cal"
                    : "border-cal/15 text-niebla hover:text-cal"
                }`}
              >
                <span className="block text-lg font-semibold">{x.author}</span>
                <span className="block text-sm opacity-80">{x.context}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          id="testimonio-activo"
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
          className="relative min-h-[18rem] lg:col-span-8 lg:pl-10"
        >
          <svg viewBox="0 0 48 36" className="h-10 w-14 text-atardecer" fill="currentColor" aria-hidden>
            <path d="M0 36V22C0 9.6 6.4 2.3 19.2 0l2 4.6C14 6.6 10.5 10.6 10.2 16.8H20V36H0zm27.6 0V22c0-12.4 6.4-19.7 19.2-22l2 4.6c-7.2 2-10.7 6-11 12.2h9.8V36h-20z" />
          </svg>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <p className="max-w-[30ch] text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-snug tracking-tight">
                {t.text}
              </p>
              <footer className="mt-8">
                <span className="block font-semibold">{t.author}</span>
                <span className="block text-niebla">{t.context}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
