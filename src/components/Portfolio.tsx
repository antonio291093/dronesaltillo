"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const shots = [
  {
    src: "/portafolio/campo.jpg",
    alt: "Campos de béisbol y fútbol rodeados de árboles",
    caption: "Campos deportivos",
    w: 4000,
    h: 2250,
    cls: "col-span-2 row-span-1 md:col-span-8 md:row-span-2",
  },
  {
    src: "/portafolio/catedraldia.jpg",
    alt: "Catedral de Santiago y el centro histórico de Saltillo",
    caption: "Catedral de Santiago",
    w: 2250,
    h: 4000,
    cls: "row-span-2 md:col-span-4",
  },
  {
    src: "/portafolio/cristodelasgaleras.jpg",
    alt: "Cristo de las Galeras sobre la loma",
    caption: "Cristo de las Galeras",
    w: 2250,
    h: 4000,
    cls: "row-span-2 md:col-span-4",
  },
  {
    src: "/portafolio/aereaatardecer.jpg",
    alt: "Saltillo al anochecer con la sierra iluminada por el atardecer",
    caption: "Saltillo al anochecer",
    w: 2250,
    h: 4000,
    cls: "row-span-2 md:col-span-4",
  },
  {
    src: "/portafolio/campofutbol.jpg",
    alt: "Cancha de fútbol con nubes y la sierra al fondo",
    caption: "Saltillo bajo las nubes",
    w: 2250,
    h: 4000,
    cls: "row-span-2 md:col-span-4",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) =>
      setActive((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="portafolio" className="pb-24 pt-4 md:pb-36 md:pt-8">
      <div className="mx-auto max-w-[88rem] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="display text-[clamp(3rem,7vw,6rem)] uppercase md:col-span-8">
            Saltillo desde nuestro dron
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-niebla md:col-span-4 md:justify-self-end">
            Tomas reales de nuestros vuelos. Toca cualquier foto para verla
            completa.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 auto-rows-[10.5rem] md:mt-20 md:grid-cols-12 md:gap-4 md:auto-rows-[15rem] lg:auto-rows-[17rem]">
          {shots.map((s, i) => (
            <li key={s.src} className={s.cls}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden text-left"
                aria-label={`Ver foto: ${s.caption}`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-vuelo)] group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noche/85 to-transparent px-4 pb-4 pt-12 text-base font-medium md:px-5 md:pb-5">
                  {s.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={shots[active].caption}
            className="fixed inset-0 z-[60] flex flex-col bg-noche/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10">
              <p className="osd text-sm text-niebla">
                {active + 1} de {shots.length}
              </p>
              <button
                type="button"
                onClick={close}
                autoFocus
                className="rounded-full border border-cal/30 px-4 py-2 text-sm hover:bg-cal/10"
              >
                Cerrar
              </button>
            </div>

            <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0 mx-4 md:mx-24"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={shots[active].src}
                    alt={shots[active].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cal/30 bg-noche/60 hover:bg-cal/10 md:left-8"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Foto siguiente"
                className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cal/30 bg-noche/60 hover:bg-cal/10 md:right-8"
              >
                <Chevron dir="right" />
              </button>
            </div>

            <p className="px-5 py-5 text-center text-lg md:px-10">
              {shots[active].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
