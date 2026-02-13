import Image from "next/image";

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-24 bg-surface/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              La tranquilidad de confiar{" "}
              <span className="text-primary">
                tus mejores recuerdos
              </span>
            </h2>

            <div className="space-y-6">

              {[
                {
                  title: "Fotografía 4K & Video 1080p",
                  text: "Cada detalle de tu evento capturado con una nitidez que te hará revivir el momento.",
                },
                {
                  title: "Pilotos Certificados",
                  text: "Vuelo seguro cumpliendo con todas las normativas locales y federales.",
                },
                {
                  title: "Entrega Rápida",
                  text: "No esperes para compartir tu alegría. Tu material estará listo para emocionar en tiempo récord.",
                },
                {
                  title: "Cobertura Local",
                  text: "Conocemos Saltillo, Ramos Arizpe y Arteaga mejor que nadie.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 text-accent pt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 
                           8a1 1 0 01-1.414 0l-4-4a1 1 
                           0 011.414-1.414L8 12.586l7.293-7.293a1 
                           1 0 011.414 0z"
                      />
                    </svg>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-dark p-2 rounded-[var(--radius-custom)] border border-white/10">
            <div className="relative w-full h-96">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmyhKD1pkVfclVQ1zaTY7faEg1eHPmhXjx0FERza2eb6K40z2G9lnikyAQPn5mYEMs0FOGCt7Ytl_-CYd4qmo1VyGxCDlJUvFYehk6z5gbMSmpb0DKJNr0tZu6fO8qfg-BJX-H27JwKWBveZQmtV5-s3Rq7RF7zQ_1fUx60jmVwV_YYf-3PZvyE81mOV-aHioypCWzBc6SAkMLrb-PF0Y1feTaS02AB1O82CoRbBx0EdEDZtblcRZvQsuyfEoQ4NuLaE0KOBQJZhE"
                alt="Equipamiento profesional"
                fill
                className="object-cover rounded-[var(--radius-custom)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
