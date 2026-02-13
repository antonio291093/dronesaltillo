export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <span className="text-primary font-extrabold text-2xl tracking-tighter">
          DRONE<span className="text-white">SALTILLO</span>
        </span>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#servicios" className="hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#portafolio" className="hover:text-primary transition-colors">
            Portafolio
          </a>
          <a href="#beneficios" className="hover:text-primary transition-colors">
            Beneficios
          </a>
          <a
            href="#contacto"
            className="bg-primary hover:opacity-90 px-5 py-2 rounded-[var(--radius-custom)] transition-all"
          >
            Cotizar
          </a>
        </div>
      </div>
    </nav>
  );
}
