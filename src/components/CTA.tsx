export default function CTA() {
  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-primary/20 to-dark border-t border-primary/20"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          ¿Hacemos tu momento inolvidable?
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          No dejes que tus recuerdos se desvanezcan. Asegura hoy la
          perspectiva que tu evento merece. Estamos listos para volar
          contigo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://wa.me/528440000000"
            className="bg-primary hover:opacity-90 text-white font-bold py-5 px-10 
                       rounded-[var(--radius-custom)] transition-all text-xl 
                       shadow-lg shadow-primary/25"
          >
            WhatsApp Directo
          </a>

          <a
            href="tel:+528440000000"
            className="bg-white hover:bg-gray-100 text-dark font-bold py-5 px-10 
                       rounded-[var(--radius-custom)] transition-all text-xl"
          >
            Llamar al Equipo
          </a>
        </div>
      </div>
    </section>
  );
}
