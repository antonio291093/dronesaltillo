import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";
import { WhatsAppIcon } from "./Hero";

export default function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-atardecer text-noche">
      <Contours />
      <div className="relative mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-36">
        <h2 className="display max-w-[12ch] text-[clamp(3.4rem,9vw,8.5rem)] uppercase">
          ¿Volamos en tu próximo evento?
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="max-w-lg text-xl leading-relaxed md:col-span-6">
            Escríbenos con la fecha y el lugar. Te respondemos con disponibilidad
            y una cotización el mismo día.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-noche px-8 py-4 text-lg font-semibold text-cal transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center rounded-full border-2 border-noche px-8 py-4 text-lg font-semibold transition-colors hover:bg-noche/10"
            >
              Llamar al {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Curvas de nivel, como en un mapa topográfico de la sierra. */
function Contours() {
  const rings = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 600"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
    >
      <g fill="none" stroke="#0f1a2e" strokeWidth="1.5">
        {rings.map((i) => {
          const k = 1 + i * 0.32;
          return (
            <path
              key={i}
              vectorEffect="non-scaling-stroke"
              transform={`translate(640 300) scale(${k}) translate(-640 -300)`}
              d="M640 238c38 4 70 22 74 52 5 34-22 66-58 72-30 5-46-10-74-8-30 2-52-14-54-42-3-34 30-50 50-60 20-10 36-16 62-14z"
            />
          );
        })}
      </g>
    </svg>
  );
}
