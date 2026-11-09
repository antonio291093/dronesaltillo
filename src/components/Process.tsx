import { WHATSAPP_URL } from "@/lib/contact";

const steps = [
  {
    title: "Escríbenos",
    text: "Cuéntanos por WhatsApp la fecha, el lugar y qué quieres capturar. Te respondemos con una cotización clara.",
  },
  {
    title: "Planeamos y volamos",
    text: "Revisamos el sitio, el clima y la mejor hora de luz. Volamos con pilotos certificados y respetando la normativa.",
  },
  {
    title: "Recibe tu material",
    text: "Fotos en 4K y video editado, listos para compartir. Sin esperas largas para revivir el momento.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-pizarra py-24 md:py-32">
      <div className="mx-auto max-w-[88rem] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-[clamp(3rem,7vw,6rem)] uppercase">
            Plan de vuelo
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-niebla">
            De tu primer mensaje a tu video terminado, en tres pasos.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {/* Ruta punteada entre waypoints */}
          <span
            aria-hidden
            className="absolute left-[1.375rem] top-0 h-full border-l-2 border-dashed border-cal/25 md:left-0 md:right-0 md:top-[1.375rem] md:h-0 md:w-full md:border-l-0 md:border-t-2"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative pl-16 md:pl-0">
              <span className="osd absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border-2 border-atardecer bg-pizarra text-lg font-semibold text-atardecer md:relative">
                {i + 1}
              </span>
              <h3 className="wide mt-0 text-2xl font-semibold md:mt-7">{s.title}</h3>
              <p className="mt-3 max-w-sm text-lg leading-relaxed text-cal/80">{s.text}</p>
            </li>
          ))}
        </ol>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-flex rounded-full border border-atardecer px-7 py-3.5 font-semibold text-atardecer transition-colors hover:bg-atardecer hover:text-noche"
        >
          Empezar por WhatsApp
        </a>
      </div>
    </section>
  );
}
