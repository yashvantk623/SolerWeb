"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type MenuLink = { label: string; badge?: "trending" | "new" };
type MenuGroup = { title: string; links: MenuLink[] };

const menuData: MenuGroup[] = [
  {
    title: "Off Grid Solar",
    links: [
      { label: "Off Grid Solar Installation" },
      { label: "Off Grid Solar Dealer", badge: "trending" },
      { label: "Off Grid Solar Parts" },
      { label: "Off Grid Solar Planning", badge: "new" },
      { label: "Off Grid Solar Panel Prices" },
    ],
  },
  {
    title: "On Grid Solar",
    links: [
      { label: "On Grid Solar Installation" },
      { label: "On Grid Solar Dealer" },
      { label: "On Grid Solar Parts", badge: "trending" },
      { label: "On Grid Solar Planning" },
      { label: "On Grid Solar Panel Price" },
    ],
  },
  {
    title: "Hybrid Solar",
    links: [
      { label: "Hybrid Inverter", badge: "trending" },
      { label: "Solar Panel" },
      { label: "DCDB" },
      { label: "Basic Hybrid Solar Inverter", badge: "trending" },
      { label: "Multimode Hybrid Solar Inverter" },
      { label: "All-in-one Battery Energy Storage System (BESS)" },
      { label: "Advanced AC Coupled System" },
    ],
  },
];

const servicesLinks = [
  { name: "Off Grid", href: "/services/off-grid" },
  { name: "On Grid", href: "/services/on-grid" },
  { name: "Installation", href: "/services/installation" },
  { name: "Commercial Installation", href: "/services/commercial" },
  { name: "Hybrid Solar", href: "/services/hybrid" },
  { name: "Solar AMC", href: "/services/amc" },
];

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
  variant?: "home" | "services";
  mobileMode?: boolean;
};

export default function MegaMenu({ open, onClose, variant = "home", mobileMode }: MegaMenuProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!open) setActiveGroup(null);
  }, [open]);

  if (!open) return null;

  return (
    <div className={mobileMode ? "md:hidden" : "hidden md:block"}>
      <div className={`rounded-2xl border border-slate-200 bg-white shadow-2xl ${mobileMode ? "p-4" : "mx-auto mt-2 max-w-[1260px] p-8 animate-fade-down"}`}>
        {mobileMode ? (
          <div className="space-y-2">
            {variant === "services" ? (
              <ul className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                {servicesLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-50"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              menuData.map((group) => (
                <div key={group.title} className="rounded-xl border border-slate-100 bg-slate-50">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-slate-800"
                    onClick={() => setActiveGroup(activeGroup === group.title ? null : group.title)}
                  >
                    <span>{group.title}</span>
                    <span className="text-slate-500">{activeGroup === group.title ? "−" : "+"}</span>
                  </button>
                  <div className={`${activeGroup === group.title ? "block" : "hidden"} px-4 pb-3`}>
                    <ul className="space-y-2">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <a
                            href="#"
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-cyan-50"
                            onClick={onClose}
                          >
                            <span>{item.label}</span>
                            {item.badge ? (
                              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${item.badge === "trending" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"}`}>
                                {item.badge === "trending" ? "Trending" : "New"}
                              </span>
                            ) : null}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {variant === "services" ? (
              <div className="md:col-span-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                  {servicesLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-50"
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <div className="md:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {menuData.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">{group.title}</h3>
                      <ul className="space-y-2">
                        {group.links.map((item) => (
                          <li key={item.label}>
                            <a
                              href="#"
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-50"
                              onClick={onClose}
                            >
                              <span>{item.label}</span>
                              {item.badge ? (
                                <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${item.badge === "trending" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}>
                                  {item.badge === "trending" ? "Trending" : "New"}
                                </span>
                              ) : null}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <img
                    src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80"
                    alt="Solar power system"
                    className="h-56 w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 text-sm text-slate-600">Premium solar solutions crafted for reliability and efficiency.</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
