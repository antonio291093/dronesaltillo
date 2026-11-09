import Image from "next/image";

const services = [
  {
    title: "Bodas y celebraciones",
    text: "La llegada de los invitados, la salida de la iglesia, el baile bajo las luces. Capturamos tu gran día desde ángulos que solo un dron puede alcanzar.",
    ideal: ["Bodas", "XV años", "Aniversarios", "Eventos corporativos"],
    img: "/portafolio/aereaatardecer.jpg",
    alt: "Saltillo iluminado al anochecer visto desde el aire",
  },
  {
    title: "Inmobiliaria e industria",
    text: "Mostramos el terreno completo, sus accesos y su entorno con claridad. Tus propiedades residenciales e industriales se entienden de un vistazo y se venden más rápido.",
    ideal: ["Casas y terrenos", "Naves industriales", "Desarrollos", "Avance de obra"],
    img: "/images/hero2.jpg",
    alt: "Vista panorámica de Saltillo y la sierra",
  },
  {
    title: "Eventos deportivos",
    text: "Seguimiento a alta velocidad para carreras, partidos y torneos. Video dinámico que transmite la energía del juego y el tamaño del evento.",
    ideal: ["Torneos", "Carreras", "Ligas locales", "Inauguraciones"],
    img: "/portafolio/campofutbol.jpg",
    alt: "Cancha de fútbol con nubes y la sierra al fondo",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[88rem] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="display text-[clamp(3rem,7vw,6rem)] uppercase md:col-span-7">
            Lo que volamos
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-niebla md:col-span-5 md:justify-self-end">
            Tres tipos de trabajo, el mismo equipo. Cada vuelo se planea según el
            lugar, la hora de luz y lo que necesitas mostrar.
          </p>
        </div>

        <ul className="mt-16 border-t border-cal/15 md:mt-24">
          {services.map((s) => (
            <li
              key={s.title}
              className="group grid gap-8 border-b border-cal/15 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <h3 className="display text-[clamp(2.4rem,4.6vw,4.25rem)] uppercase transition-colors duration-300 group-hover:text-atardecer md:col-span-5">
                {s.title}
              </h3>

              <div className="md:col-span-4">
                <p className="text-lg leading-relaxed text-cal/85">{s.text}</p>
                <p className="mt-6 text-sm text-niebla">Ideal para</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.ideal.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-cal/20 px-3 py-1 text-sm text-cal/85"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden md:col-span-3 md:aspect-[4/5]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-vuelo)] group-hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
