"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Viewfinder from "./Viewfinder";
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";

const ALTITUD = 120; // metros, el límite habitual de vuelo recreativo
const ESCALA = 150; // tope de la regla del altímetro
const DESPEGUE = 2.4; // segundos

function Timecode() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return <>00:{mm}:{ss}</>;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const alt = useMotionValue(0);
  const altRounded = useTransform(alt, (v) => Math.round(v));
  const markerBottom = useTransform(alt, (v) => `${(v / ESCALA) * 100}%`);

  useEffect(() => {
    if (reduce) {
      alt.set(ALTITUD);
      return;
    }
    const c = animate(alt, ALTITUD, {
      duration: DESPEGUE,
      ease: [0.33, 0, 0.15, 1],
      delay: 0.3,
    });
    return () => c.stop();
  }, [alt, reduce]);

  const ticks = Array.from({ length: ESCALA / 10 + 1 }, (_, i) => i * 10);

  const line = (delay: number) => ({
    initial: reduce ? false : { y: "105%" },
    animate: { y: "0%" },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[640px] h-[100svh] overflow-hidden"
      aria-label="Drone Saltillo"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: DESPEGUE + 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero1.jpg"
          alt="Vista aérea de Saltillo con la sierra al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/45 to-noche/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-noche/70 via-noche/10 to-transparent" />

      {/* Visor de cámara */}
      <div className="absolute inset-x-4 bottom-4 top-22 md:inset-x-8 md:bottom-8 md:top-24">
        <Viewfinder className="inset-0" size={36} />

        {/* Barra superior del visor */}
        <div className="osd absolute inset-x-5 top-4 flex items-center justify-between text-[0.8rem] text-cal/85 md:inset-x-7 md:text-sm">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 motion-safe:animate-pulse" />
            Rec <Timecode />
          </span>
          <span className="hidden sm:inline">4K 30 fps</span>
          <span className="hidden md:inline">25.4232° N 101.0053° O</span>
        </div>

        {/* Mira central */}
        <div aria-hidden className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 md:block">
          <span className="absolute left-1/2 top-0 h-full w-px bg-cal/40" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-cal/40" />
        </div>

        {/* Altímetro */}
        <div
          aria-hidden
          className="osd absolute bottom-16 right-6 top-20 hidden w-24 md:block lg:right-10"
        >
          <div className="relative h-full">
            {ticks.map((t) => (
              <div
                key={t}
                className="absolute right-0 flex items-center gap-2 text-xs text-cal/55"
                style={{ bottom: `${(t / ESCALA) * 100}%`, transform: "translateY(50%)" }}
              >
                {t % 50 === 0 && <span>{t}</span>}
                <span className={`h-px bg-cal/50 ${t % 50 === 0 ? "w-5" : "w-2.5"}`} />
              </div>
            ))}
            <motion.div
              className="absolute right-0 flex translate-y-1/2 items-center gap-2"
              style={{ bottom: markerBottom }}
            >
              <span className="whitespace-nowrap rounded-sm bg-atardecer px-2 py-1 text-sm font-semibold text-noche">
                <motion.span>{altRounded}</motion.span> m
              </span>
              <span className="h-0.5 w-7 bg-atardecer" />
            </motion.div>
          </div>
        </div>

        {/* Lectura de altitud en móvil */}
        <div className="osd absolute bottom-4 right-5 text-sm text-cal/85 md:hidden" aria-hidden>
          Alt. <motion.span>{altRounded}</motion.span> m
        </div>
      </div>

      {/* Contenido */}
      <div className="relative mx-auto flex w-full max-w-[88rem] flex-col justify-end px-8 pb-16 md:px-16 md:pb-20 lg:pb-24">
        <h1 className="display max-w-[11ch] text-[clamp(3.8rem,14vw,9.5rem)] uppercase">
          <span className="-mt-[0.14em] block overflow-hidden pb-[0.04em] pt-[0.14em]">
            <motion.span className="block" {...line(0.5)}>
              Tu gran día,
            </motion.span>
          </span>
          <span className="-mt-[0.14em] block overflow-hidden pb-[0.04em] pt-[0.14em]">
            <motion.span className="block text-atardecer" {...line(0.65)}>
              visto desde arriba.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-cal/85 md:text-xl">
            Fotografía y video aéreo en 4K para bodas, inmobiliarias, empresas
            y eventos deportivos en Saltillo, Ramos Arizpe y Arteaga.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-atardecer px-7 py-4 text-lg font-semibold text-noche transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center rounded-full border border-cal/40 px-7 py-4 text-lg backdrop-blur-sm transition-colors hover:border-cal hover:bg-cal/10"
            >
              Llamar al {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.47-9.47 9.47zm8.06-17.53A11.32 11.32 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2 .52 3.97 1.52 5.7L.55 23.63l6.05-1.59a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.34-8.06z" />
    </svg>
  );
}
