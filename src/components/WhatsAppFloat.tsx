"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";
import { WhatsAppIcon } from "./Hero";

/** Botón fijo solo en móvil; aparece al salir del hero para no tapar sus botones. */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.75;
      const nearEnd =
        window.innerHeight + window.scrollY >
        document.body.scrollHeight - window.innerHeight * 0.9;
      setShow(pastHero && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2.5 rounded-full bg-whatsapp py-3.5 font-semibold text-noche shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      Cotizar por WhatsApp
    </a>
  );
}
