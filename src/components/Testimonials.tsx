export default function Testimonials() {
  const testimonials = [
    {
      text: `"Se me saltaron las lágrimas al ver el video de nuestra entrada. Capturaron momentos que ni nosotros mismos vimos. ¡Gracias por este regalo eterno!"`,
      author: "— María J., Saltillo",
    },
    {
      text: `"Profesionalismo puro. Lograron que nuestro terreno luciera espectacular, facilitando una venta que llevábamos meses buscando. Una inversión que vale cada centavo."`,
      author: "— Arq. Roberto G.",
    },
    {
      text: `"Increíble trato y equipo. Lograron transmitir toda la energía del evento deportivo. Ver a la comunidad desde el cielo fue algo verdaderamente inspirador."`,
      author: "— Comité Deportivo Coahuila",
    },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-16 italic text-gray-400">
          "Calidad que eleva tus proyectos"
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-[var(--radius-custom)] border border-white/5"
            >
              <p className="text-gray-300 italic mb-4">
                {item.text}
              </p>
              <p className="font-bold text-primary">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
