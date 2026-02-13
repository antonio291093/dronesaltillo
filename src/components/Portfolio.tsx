import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-accent">Portafolio</span>
            </h2>
            <p className="text-gray-400">
              Calidad cinematográfica en cada cuadro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          
          {/* Imagen horizontal grande */}
          <div className="col-span-2 bg-surface rounded-custom overflow-hidden group relative">
            <Image
              src="/portafolio/campo.jpg"
              alt="Campo Beisbol Saltillo"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Imagen vertical */}
          <div className="row-span-2 bg-surface rounded-custom overflow-hidden group relative">
            <Image
              src="/portafolio/cristodelasgaleras.jpg"
              alt="Cristo de las galeras"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {[
            {
              src: "/portafolio/catedraldia.jpg",
              alt: "Catedral de dia",
            },
            {
              src: "/portafolio/aereaatardecer.jpg",
              alt: "Atardecer",
            },
            {
              src: "/portafolio/campofutbol.jpg",
              alt: "Acción Deportiva",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-surface rounded-custom overflow-hidden group relative"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
