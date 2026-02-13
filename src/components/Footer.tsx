export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-primary font-extrabold text-2xl tracking-tighter mb-4 block">
              DRONE<span className="text-white">SALTILLO</span>
            </span>

            <p className="text-gray-400 max-w-sm">
              Expertos en filmación aérea y producción visual en el norte de México.
              Elevando la calidad visual de Saltillo.
            </p>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="text-lg font-bold mb-4">Ubicación</h4>

            <p className="text-gray-400 text-sm">
              Saltillo, Coahuila <br />
              Zona Metropolitana (Saltillo, Ramos Arizpe, Arteaga) <br />
              CP 25000, México
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-bold mb-4">Redes</h4>

            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors block mb-2 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {currentYear} Drone Saltillo. Todos los derechos reservados.</p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
