"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

const servicesLinks = [
  { name: "Off Grid", href: "/services/off-grid" },
  { name: "On Grid", href: "/services/on-grid" },
  { name: "Installation", href: "/services/installation" },
  { name: "Commercial Installation", href: "/services/commercial" },
  { name: "Hybrid Solar", href: "/services/hybrid" },
  { name: "Solar AMC", href: "/services/amc" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"none" | "home" | "services">("none");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu("none");
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" scroll={false}>
          <div className="h-24 w-44 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/volta-logo.png"
              alt="Volta Solar logo"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => setOpenMenu(openMenu === "home" ? "none" : "home")}
            onMouseEnter={() => setOpenMenu("home")}
            className={`text-sm font-semibold ${openMenu === "home" ? "text-emerald-600" : "text-slate-700"} transition ${openMenu === "home" ? "border-b-2 pb-1 border-emerald-500" : "hover:text-emerald-600"}`}
          >
            Home {openMenu === "home" ? "▴" : "▾"}
          </button>

          <a href="/about" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">About Us</a>

          <div className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu("none")}
          >
            <button
              type="button"
              className={`text-sm font-semibold ${openMenu === "services" ? "text-emerald-600" : "text-slate-700"} transition ${openMenu === "services" ? "border-b-2 pb-1 border-emerald-500" : "hover:text-emerald-600"}`}
              onClick={() => setOpenMenu(openMenu === "services" ? "none" : "services")}
              aria-expanded={openMenu === "services"}
              aria-controls="services-menu"
            >
              Services {openMenu === "services" ? "▴" : "▾"}
            </button>

            {openMenu === "services" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg" onMouseLeave={() => setOpenMenu("none")}>
                <ul className="divide-y divide-slate-100">
                  {servicesLinks.map((item, idx) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpenMenu("none")}
                        className={`block px-4 py-3 text-sm font-medium ${
                          idx === 0
                            ? "bg-blue-600 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="/contact" className="text-sm font-semibold text-slate-700 transition hover:text-emerald-600">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918700459880"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-500"
          >
            Call Us
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {openMenu === "home" && (
        <div className="hidden md:block" onMouseLeave={() => setOpenMenu("none")}>
          <div className="absolute inset-x-0 top-full z-40 border-y border-slate-200 bg-white shadow-xl">
            <MegaMenu open={true} onClose={() => setOpenMenu("none")} variant="home" />
          </div>
        </div>
      )}

      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} border-t border-slate-200 bg-white`}>
        <div className="space-y-1 px-4 py-4">
          <a href="#" className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50">Home</a>
          <a href="/about" className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50">2</a>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50"
          >
            <span>Services</span>
            <span>{mobileServicesOpen ? "▴" : "▾"}</span>
          </button>

          {mobileServicesOpen && (
            <MegaMenu open={mobileServicesOpen} onClose={() => setMobileServicesOpen(false)} variant="services" mobileMode />
          )}

          <a href="/contact" className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50">Contact</a>
        </div>
      </div>
    </header>
  );
}
