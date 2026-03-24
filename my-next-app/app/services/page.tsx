import { getAllServices } from "@/app/data/services";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Golden Orchid",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-slate-600 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold">
                    <span>Learn More</span>
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Golden Orchid?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Team",
                description: "10+ years of solar industry experience",
              },
              {
                title: "Quality Products",
                description: "Premium panels and components",
              },
              {
                title: "Fast Installation",
                description: "Quick turnaround without compromising quality",
              },
              {
                title: "24/7 Support",
                description: "Always available for your assistance",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
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
