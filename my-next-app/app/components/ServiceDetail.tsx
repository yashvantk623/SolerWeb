"use client";

import { Service } from "@/app/data/services";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden md:h-[28rem]">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1260px]">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-cyan-200">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1260px] px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        {service.sections[0] && (
          <section className="mb-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              {service.sections[0].title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {service.sections[0].content}
            </p>
          </section>
        )}

        {/* Features/Details Section */}
        {service.sections.slice(1).map((section, idx) => (
          <section key={idx} className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                {section.title}
              </h2>
              <p className="mb-6 text-lg text-slate-700">{section.content}</p>
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                        ✓
                      </span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section.image && (
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </section>
        ))}

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Key Benefits</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-12 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-white">{service.cta}</h2>
          <p className="mb-8 text-lg text-emerald-50">
            Contact us today for a free consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
