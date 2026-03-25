import { getAllServices } from "@/app/data/services";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Volta Solar",
  description: "Comprehensive solar solutions for residential and commercial needs",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden md:h-[28rem]">
        <img
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80"
          alt="Our Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1260px]">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-cyan-200">
              Complete solar energy solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <main className="mx-auto w-full max-w-[1260px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            What We Offer
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            From residential installations to commercial solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="group h-full cursor-pointer">
                {/* Image Container with Name Overlay */}
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition group-hover:scale-110 duration-300"
                  />
                  
                  {/* Dark Overlay at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-24 flex items-end">
                    <h3 className="w-full text-center text-white font-bold text-lg pb-4 group-hover:text-emerald-300 transition">
                      {service.shortTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose Volta Solar
            </h2>
            <p className="mt-4 text-lg text-slate-700">As a leading solar partner in Lucknow, we deliver end-to-end, future-ready systems backed by performance warranties and 24/7 support.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✔</span>
                <span className="text-slate-700">Local licensed team & quick permits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✔</span>
                <span className="text-slate-700">Tier-1 panels, hybrid inverters, high-capacity batteries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✔</span>
                <span className="text-slate-700">Managed installation, commissioning, and monitoring according to Volta Solar</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-20">
          <div className="mb-12 text-center">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Pricing & Plan</p>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Our Solar Panels Prices
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* 3 KVA Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-slate-900">3 KVA</h3>
              <p className="text-slate-600 text-sm mt-1">1 Home</p>
              <p className="text-4xl font-bold text-slate-900 mt-6">₹195000</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
                Get Started
              </button>
            </div>

            {/* 4 KVA Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-slate-900">4 KVA</h3>
              <p className="text-slate-600 text-sm mt-1">2 Family Home</p>
              <p className="text-4xl font-bold text-slate-900 mt-6">₹240000</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
                Get Started
              </button>
            </div>

            {/* 5 KVA Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-slate-900">5 KVA</h3>
              <p className="text-slate-600 text-sm mt-1">3 Family Home</p>
              <p className="text-4xl font-bold text-slate-900 mt-6">₹300000</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white">
            Ready to Go Solar?
          </h2>
          <p className="mt-4 text-lg text-emerald-50">
            Contact us today for a free consultation and quote
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition hover:shadow-xl"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+918700459880"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </section>
      </main>

   
         


        
          
          
    </>
  );
}
