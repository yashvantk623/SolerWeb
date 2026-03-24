"use client";

import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto w-full max-w-[1260px] px-4 pb-16 pt-6 sm:px-6 md:px-8">
        <HeroSection />

        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Projects Completed", value: "350+" },
            { label: "Happy Clients", value: "280+" },
            { label: "Years Experience", value: "7+" },
            { label: "CO₂ Saved", value: "1,250+ t" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-3xl font-extrabold text-emerald-600">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-14 grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Golden Orchid</h2>
            <p className="mt-4 text-lg text-slate-700">As a leading solar partner in Lucknow, we deliver end-to-end, future-ready systems backed by performance warranties and 24/7 support.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Local licensed team & quick permits</li>
              <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Tier-1 panels, hybrid inverters, high-capacity batteries</li>
              <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Managed installation, commissioning, and monitoring</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Solar installation" className="h-80 w-full object-cover" />
          </div>
        </section>

        <section id="services" className="mt-14">
          <h3 className="text-3xl font-bold text-slate-900">Our Services</h3>
          <p className="mt-2 text-slate-600">Complete solar offerings from design to maintenance.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Off Grid Systems", "On Grid Systems", "Hybrid Solar", "BESS & Monitoring"].map((service) => (
              <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-semibold text-slate-900">{service}</h4>
                <p className="mt-2 text-sm text-slate-600">Premium solution for residential and commercial demand.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900">Ready to go solar?</h3>
          <p className="mt-2 text-slate-600">Request free site evaluation and personalized ROI report.</p>
          <p className="mt-2 text-sm text-slate-500">Phone: <a href="tel:+918700459880" className="text-emerald-600 hover:underline">+91 8700459880</a> • Email: <a href="mailto:Email-voltasolar93@gmail.com" className="text-emerald-600 hover:underline">Email-voltasolar93@gmail.com</a></p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" />
            <input type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" />
            <input type="tel" placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" />
            <input type="text" placeholder="City / Area" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" />
            <textarea placeholder="Project details" rows={4} className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"></textarea>
            <button className="md:col-span-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500">Submit Request</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between md:px-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Golden Orchid</h4>
            <p className="mt-2 text-sm text-slate-600">Turning every rooftop into a renewable asset.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h5 className="text-sm font-semibold text-slate-900">Company</h5>
              <ul className="mt-2 space-y-2 text-sm text-slate-600"><li>About</li><li>Careers</li><li>Blog</li></ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-900">Support</h5>
              <ul className="mt-2 space-y-2 text-sm text-slate-600"><li>FAQ</li><li>Help</li><li>Contact</li></ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-900">Legal</h5>
              <ul className="mt-2 space-y-2 text-sm text-slate-600"><li>Terms</li><li>Privacy</li><li>Sustainability</li></ul>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>Phone: <a href="tel:+918700459880" className="text-emerald-600 hover:underline">+91 8700459880</a></p>
            <p>Email: <a href="mailto:Email-voltasolar93@gmail.com" className="text-emerald-600 hover:underline">Email-voltasolar93@gmail.com</a></p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Volta Solar. All rights reserved.</p>
      </footer>
    </div>
  );
}
