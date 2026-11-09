import Image from "next/image";
import Viewfinder from "./Viewfinder";

const items = [
  {
    title: "Foto 4K y video Full HD",
    text: "Cada detalle de tu evento con una nitidez que te hará revivir el momento.",
  },
  {
    title: "Pilotos certificados",
    text: "Vuelo seguro, cumpliendo con las normativas locales y federales.",
  },
  {
    title: "Entrega rápida",
    text: "Tu material listo para compartir en tiempo récord, sin semanas de espera.",
  },
  {
    title: "Conocemos la zona",
    text: "Saltillo, Ramos Arizpe y Arteaga: sabemos desde dónde se ve mejor cada lugar.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[32rem]">
            <Image
              src="/beneficios/saltillo.jpg"
              alt="Vista aérea de un mirador de Saltillo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <Viewfinder className="inset-4" size={24} />
            <span className="osd absolute bottom-6 left-6 text-sm text-cal/90">
              Saltillo, Coahuila
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 lg:py-6">
          <h2 className="display text-[clamp(3rem,6vw,5.25rem)] uppercase">
            Confía tus mejores recuerdos a quien sabe volar
          </h2>

          <dl className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="border-t border-cal/15 py-6">
                <dt className="wide text-xl font-semibold">{it.title}</dt>
                <dd className="mt-2 leading-relaxed text-cal/75">{it.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
