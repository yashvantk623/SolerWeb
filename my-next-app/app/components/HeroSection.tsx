"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-emerald-50 via-cyan-100 to-white py-16">
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/90 to-white" />

      <div className="mx-auto grid w-full max-w-[1260px] items-stretch gap-8 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="z-10 flex flex-col justify-center gap-6 rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur sm:p-10 lg:max-w-lg">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
            Premium Solar Solutions
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Best Solar Company in Lucknow Golden ACS</h1>
          <h2 className="text-3xl font-bold text-emerald-600 sm:text-4xl">E2ES Solution</h2>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">Golden Orchid empowers homes and businesses with clean, reliable solar systems backed by local expertise and complete lifecycle service. Experience high-efficiency panels, smart monitoring, and premium support.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500">Get a Free Quote</a>
            <a href="#services" className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">Explore Services</a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-tr-[90px] rounded-br-[90px] md:rounded-tr-none md:rounded-br-none md:rounded-l-none md:rounded-r-[120px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#a5f3fc,_transparent_55%)]" />
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80"
            alt="Solar panel array"
            className="relative h-full min-h-[420px] w-full object-cover"
          />
          <div className="from-right absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top_left,_#ffffff,_transparent_45%)]" />
    </section>
  );
}
