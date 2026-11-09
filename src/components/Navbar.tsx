"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#testimonios", label: "Clientes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-noche/85 backdrop-blur-md border-b border-cal/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[88rem] items-center justify-between px-5 md:px-10">
        <a href="#inicio" aria-label="Drone Saltillo, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-9 text-[0.95rem] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cal/80 transition-colors hover:text-atardecer"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-atardecer px-5 py-2.5 font-semibold text-noche transition-transform hover:-translate-y-0.5"
          >
            Cotizar
          </a>
        </div>

        <button
          type="button"
          className="relative -mr-2 grid h-11 w-11 place-items-center lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-cal transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-cal transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[calc(100svh-4.5rem)] overflow-y-auto bg-noche px-5 pb-10 pt-6 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block py-2 text-5xl text-cal"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-atardecer py-4 text-center text-lg font-semibold text-noche"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="rounded-full border border-cal/30 py-4 text-center text-lg"
              >
                Llamar al {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
