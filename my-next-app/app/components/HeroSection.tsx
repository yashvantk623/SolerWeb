"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[1000px] w-full">
        <img
          src="/my-hero.png"
          alt="Hero image"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Volta Solar</h1>
            <p className="mt-4 text-lg sm:text-2xl">Renewable energy for every home and business.</p>
            <a href="#contact" className="mt-6 inline-block rounded-full bg-emerald-500 px-8 py-3 font-bold text-white transition hover:bg-emerald-400">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
