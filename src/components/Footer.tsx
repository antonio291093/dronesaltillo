import Logo from "./Logo";
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, TIKTOK_URL } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noche pb-10 pt-16">
      <div className="mx-auto max-w-[88rem] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm leading-relaxed text-niebla">
              Fotografía y video aéreo en el norte de México. Elevamos la calidad
              visual de Saltillo, un vuelo a la vez.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm text-niebla">Zona de servicio</h3>
            <p className="mt-3 leading-relaxed">
              Saltillo, Ramos Arizpe y Arteaga
              <br />
              Coahuila, México
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm text-niebla">Contacto</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-atardecer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="hover:text-atardecer">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-atardecer">
                  TikTok @saltillobonito
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cal/10 pt-8 text-sm text-niebla md:flex-row md:justify-between">
          <p>© {year} Drone Saltillo. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cal">Aviso de privacidad</a>
            <a href="#" className="hover:text-cal">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
