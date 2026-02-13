export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Servicios <span className="text-primary">Especializados</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-dark p-8 rounded-custom border border-white/5 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4">Magia y Emoción</h3>

            <p className="text-gray-400">
              Bodas y celebraciones transformadas en recuerdos eternos.
              Capturamos la esencia y la alegría de tu gran día desde
              ángulos que solo un dron puede alcanzar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-dark p-8 rounded-custom border border-white/5 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4">Perspectiva Estratégica</h3>

            <p className="text-gray-400">
              Ventas más rápidas con impacto visual garantizado.
              Mostramos el valor real de tus propiedades industriales
              y residenciales con claridad absoluta.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-dark p-8 rounded-custom border border-white/5 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4">Eventos Deportivos</h3>

            <p className="text-gray-400">
              Seguimiento de alta velocidad para carreras, fútbol y torneos.
              Vídeo dinámico que transmite la emoción del juego.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
