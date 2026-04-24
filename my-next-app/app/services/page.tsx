// import { getAllServices } from "@/app/data/services";
// import Link from "next/link";

// export const metadata = {
//   title: "Our Services | Volta Solar",
//   description: "Comprehensive solar solutions for residential and commercial needs",
// };

// export default function ServicesPage() {
//   const services = getAllServices();

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative h-96 w-full overflow-hidden md:h-[28rem]">
//         <img
//           src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80"
//           alt="Our Services"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
//         <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto w-full max-w-[1260px]">
//             <h1 className="text-4xl font-extrabold text-white md:text-5xl">
//               Our Services
//             </h1>
//             <p className="mt-4 text-lg text-cyan-200">
//               Complete solar energy solutions tailored to your needs
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <main className="mx-auto w-full max-w-[1260px] px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold text-slate-900">
//             What We Offer
//           </h2>
//           <p className="mt-3 text-lg text-slate-600">
//             From residential installations to commercial solutions
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((service) => (
//             <Link key={service.slug} href={`/services/${service.slug}`}>
//               <div className="group h-full cursor-pointer">
//                 {/* Image Container with Name Overlay */}
//                 <div className="relative h-64 overflow-hidden rounded-xl">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="h-full w-full object-cover transition group-hover:scale-110 duration-300"
//                   />
                  
//                   {/* Dark Overlay at Bottom */}
//                   <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-24 flex items-end">
//                     <h3 className="w-full text-center text-white font-bold text-lg pb-4 group-hover:text-emerald-300 transition">
//                       {service.shortTitle}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Why Choose Us */}
//         <section className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 md:p-12">
//           <div className="max-w-3xl">
//             <h2 className="text-3xl font-bold text-slate-900">
//               Why Choose Volta Solar
//             </h2>
//             <p className="mt-4 text-lg text-slate-700">As a leading solar partner in Haryana & Uttar Pradesh, we deliver end-to-end, future-ready systems backed by performance warranties and 24/7 support.</p>
//             <ul className="mt-6 space-y-3">
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold">✔</span>
//                 <span className="text-slate-700">Local licensed team & quick permits</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold">✔</span>
//                 <span className="text-slate-700">Tier-1 panels, hybrid inverters, high-capacity batteries</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold">✔</span>
//                 <span className="text-slate-700">Managed installation, commissioning, and monitoring according to Volta Solar</span>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Pricing Section */}
//         <section className="mt-20">
//           <div className="mb-12 text-center">
//             <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Pricing & Plan</p>
//             <h2 className="text-4xl font-bold text-slate-900 mt-2">
//               Our Solar Panels Prices
//             </h2>
//           </div>

//           <div className="grid gap-8 md:grid-cols-3">
//             {/* 3 KVA Plan */}
//             <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
//               <h3 className="text-2xl font-bold text-slate-900">3 KVA</h3>
//               <p className="text-slate-600 text-sm mt-1">1 Home</p>
//               <p className="text-4xl font-bold text-slate-900 mt-6">₹195000</p>
              
//               <ul className="mt-8 space-y-4">
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Maintenance</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">25 Years Warranty</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Installation</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Subsidy</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Approval By UPPCL</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">New Meter + Savings</span>
//                 </li>
//               </ul>

//               <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
//                 Get Started
//               </button>
//             </div>

//             {/* 4 KVA Plan */}
//             <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
//               <h3 className="text-2xl font-bold text-slate-900">4 KVA</h3>
//               <p className="text-slate-600 text-sm mt-1">2 Family Home</p>
//               <p className="text-4xl font-bold text-slate-900 mt-6">₹240000</p>
              
//               <ul className="mt-8 space-y-4">
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Maintenance</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">25 Years Warranty</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Installation</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Subsidy</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Approval By UPPCL</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">New Meter + Savings</span>
//                 </li>
//               </ul>

//               <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
//                 Get Started
//               </button>
//             </div>

//             {/* 5 KVA Plan */}
//             <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
//               <h3 className="text-2xl font-bold text-slate-900">5 KVA</h3>
//               <p className="text-slate-600 text-sm mt-1">3 Family Home</p>
//               <p className="text-4xl font-bold text-slate-900 mt-6">₹300000</p>
              
//               <ul className="mt-8 space-y-4">
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Maintenance</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">25 Years Warranty</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Installation</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Subsidy</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">Approval By UPPCL</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <span className="text-teal-500 font-bold">✔</span>
//                   <span className="text-slate-700">New Meter + Savings</span>
//                 </li>
//               </ul>

//               <button className="w-full mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-12 text-center shadow-lg">
//           <h2 className="text-3xl font-bold text-white">
//             Ready to Go Solar?
//           </h2>
//           <p className="mt-4 text-lg text-emerald-50">
//             Contact us today for a free consultation and quote
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//               href="#contact"
//               className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition hover:shadow-xl"
//             >
//               Get Free Quote
//             </a>
//             <a
//               href="tel:+918700459880"
//               className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
//             >
//               Call Now
//             </a>
//           </div>
//         </section>
//       </main>

   
         


        
          
          
//     </>
//   );
// }



import { getAllServices } from "@/app/data/services";
import Link from "next/link";
import type { Metadata } from "next";

// ─────────────────────────────────────────────
// 1. METADATA — keyword-rich + CTR-optimised
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Solar Panel Installation in Noida, Gurugram & Uttar Pradesh | Volta Solar",
  description:
    "Volta Solar — #1 solar installation company in Noida, Gurugram & Uttar Pradesh. Get ₹78,000 PM subsidy, 25-yr warranty & UPPCL approval. Free site survey. Call now!",
  keywords: [
    "solar panel installation Noida",
    "solar installation Gurugram",
    "solar company Uttar Pradesh",
    "rooftop solar installation near me",
    "residential solar installation India",
    "commercial solar solutions India",
    "solar panel price Noida",
    "solar subsidy UP 2025",
    "on-grid solar system Ghaziabad",
    "solar panel installation Greater Noida",
    "best solar company Haryana",
    "UPPCL approved solar installer",
    "solar EPC company UP",
    "hybrid solar system India",
    "off-grid solar Noida",
  ],

   icons: {
    icon: "/public/volta-solar.png",
  },
  alternates: {
    canonical: "https://voltasolar.in/services",
  },
  openGraph: {
    title:
      "Solar Panel Installation in Noida, Gurugram & UP | Volta Solar",
    description:
      "Trusted solar EPC company serving Noida, Greater Noida, Ghaziabad, Gurugram & across Uttar Pradesh. Government-approved, UPPCL certified. Get a free quote today.",
    url: "https://voltasolar.in/services",
    siteName: "Volta Solar",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rooftop solar panel installation in Noida and Gurugram by Volta Solar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation in Noida, Gurugram & UP | Volta Solar",
    description:
      "India's trusted solar partner — serving Noida, Gurugram & all of UP. 25-yr warranty, government subsidy, UPPCL approved. Get a free quote!",
    images: [
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

// ─────────────────────────────────────────────
// 2. JSON-LD SCHEMA — LocalBusiness + Service + FAQ
// ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://voltasolar.in/#organization",
  name: "Volta Solar",
  description:
    "Volta Solar is a leading solar panel installation company serving Noida, Gurugram, Greater Noida, Ghaziabad and all of Uttar Pradesh & Haryana with residential and commercial solar solutions.",
  url: "https://voltasolar.in",
  telephone: "+919335935751",
  areaServed: [
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "State", name: "Haryana" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Solar Panel Installation",
          description:
            "On-grid, off-grid and hybrid solar panel installation for homes in Noida, Gurugram and Uttar Pradesh.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Solar Solutions",
          description:
            "Large-scale rooftop and ground-mount solar EPC solutions for factories, offices and institutions across UP and Haryana.",
        },
      },
    ],
  },
  sameAs: ["https://voltasolar.in"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Solar Panel Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Volta Solar",
    url: "https://voltasolar.in",
  },
  areaServed: ["Noida", "Greater Noida", "Ghaziabad", "Gurugram", "Uttar Pradesh", "Haryana"],
  description:
    "Complete solar energy solutions including on-grid, off-grid, and hybrid systems for residential and commercial customers across Noida, Gurugram and Uttar Pradesh.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Volta Solar provide solar installation in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Volta Solar is an active solar installation provider in Gurugram (Gurgaon), Haryana. We handle everything from site survey and system design to installation, net-metering approval, and after-sales support.",
      },
    },
    {
      "@type": "Question",
      name: "What government subsidy is available for solar in Uttar Pradesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the PM Surya Ghar Muft Bijli Yojana, UP residents can receive up to ₹78,000 as a direct-benefit subsidy for a 3 kW system. Subsidies scale with system size. Volta Solar handles all subsidy documentation and UPPCL approvals on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a solar system in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3 kW on-grid solar system in Noida starts at approximately ₹1,95,000 after subsidy. A 4 kW system is priced at ₹2,40,000 and a 5 kW system at ₹3,00,000. Prices include panels, inverter, mounting structure, wiring, and installation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does solar installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard residential rooftop solar installation by Volta Solar is completed within 2–5 working days after permit approval. The entire process from survey to grid connection typically takes 2–4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How much maintenance does a solar system require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar panels require very little maintenance. We recommend a panel cleaning every 2–3 months (especially during summer dust season in UP/NCR) and a free annual check-up. Volta Solar offers AMC (Annual Maintenance Contracts) for complete peace of mind.",
      },
    },
    {
      "@type": "Question",
      name: "What is the return on investment (ROI) for solar in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential customers in UP and Haryana recover their solar investment within 4–6 years, after which electricity is effectively free for the remaining 19+ years of the system's life. With rising electricity tariffs, the payback period is getting shorter every year.",
      },
    },
    {
      "@type": "Question",
      name: "Does Volta Solar install solar in Greater Noida and Ghaziabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire NCR region including Greater Noida, Ghaziabad, Noida Extension, and surrounding areas in Uttar Pradesh. Our local team ensures fast permits and same-district support.",
      },
    },
    {
      "@type": "Question",
      name: "Is net metering available for solar in UP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, net metering is available and actively promoted by UPPCL (Uttar Pradesh Power Corporation Limited). Surplus energy your system generates is exported to the grid and credited to your electricity bill. Volta Solar manages the entire net-metering application and approval process.",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// 3. PAGE COMPONENT
// ─────────────────────────────────────────────
export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* ── JSON-LD SCHEMA INJECTION ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative h-96 w-full overflow-hidden md:h-[28rem]">
        <img
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80"
          alt="Rooftop solar panel installation by Volta Solar in Noida, Gurugram and Uttar Pradesh"
          width={2100}
          height={1400}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1260px]">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
              UPPCL Approved · Government Subsidy Available
            </p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Solar Panel Installation in<br className="hidden md:block" />{" "}
              Noida, Gurugram &amp; Uttar Pradesh
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cyan-200">
              Complete rooftop &amp; commercial solar energy solutions — from
              site survey to UPPCL net-metering, all under one roof.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
              >
                Get Free Site Survey
              </a>
              <a
                href="tel:+919335935751"
                className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                📞 +91 93359 35751
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1260px] px-4 py-16 sm:px-6 lg:px-8">

        {/* ── TRUST SIGNALS BAR ── */}
        <div className="mb-16 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-6 text-center sm:grid-cols-4">
          {[
            { stat: "500+", label: "Installations Completed" },
            { stat: "25 Yr", label: "Panel Warranty" },
            { stat: "₹78K", label: "Max PM Subsidy Available" },
            { stat: "UPPCL", label: "Approved Installer" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-extrabold text-emerald-600">{item.stat}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
          <p className="mt-3 text-lg text-slate-600">
            From residential rooftop solar in Noida to large commercial installations
            across Uttar Pradesh &amp; Haryana
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="group h-full cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={`${service.title} — Volta Solar, serving Noida, Gurugram & UP`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex h-24 items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="w-full pb-4 text-center text-lg font-bold text-white transition group-hover:text-emerald-300">
                      {service.shortTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            SEO SECTION A — Location-Based Authority
        ══════════════════════════════════════════════ */}
        <section
          id="solar-installation-gurugram-up"
          className="mt-20 scroll-mt-20"
          aria-labelledby="location-heading"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Serving NCR &amp; Entire UP
              </p>
              <h2
                id="location-heading"
                className="mt-2 text-3xl font-bold text-slate-900"
              >
                Solar Installation in Gurugram, Noida &amp; Uttar Pradesh
              </h2>
              <div className="mt-5 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Whether you own a home in Sector 62, Noida, a factory in
                  Greater Noida's industrial belt, or a commercial complex in
                  Gurugram's Cyber Hub neighbourhood — Volta Solar brings
                  world-class solar energy to your doorstep. We are one of the
                  few UPPCL-approved solar installation companies that actively
                  works across{" "}
                  <Link
                    href="/solar-installation-noida"
                    className="font-semibold text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Noida
                  </Link>
                  ,{" "}
                  <Link
                    href="/solar-installation-gurugram"
                    className="font-semibold text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Gurugram
                  </Link>
                  , Ghaziabad, and the wider{" "}
                  <Link
                    href="/solar-company-uttar-pradesh"
                    className="font-semibold text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Uttar Pradesh
                  </Link>{" "}
                  region.
                </p>
                <p>
                  <strong>Noida &amp; Greater Noida:</strong> Our Noida team
                  handles net-metering applications with DVVNL (Dakshinanchal
                  Vidyut Vitaran Nigam Ltd.) for sectors across Noida and
                  Greater Noida. We've completed 150+ residential and
                  commercial installations in this corridor alone, helping
                  homeowners cut electricity bills by 80–95%.
                </p>
                <p>
                  <strong>Ghaziabad:</strong> Ghaziabad's rapid urban growth
                  means soaring electricity demand. Volta Solar's Tier-1 panels
                  and hybrid inverter systems give Ghaziabad residents energy
                  independence — even during summer grid failures.
                </p>
                <p>
                  <strong>Gurugram (Gurgaon), Haryana:</strong> Gurugram's
                  commercial skyline makes it ideal for large-scale rooftop
                  solar. We work directly with DHBVN (Dakshin Haryana Bijli
                  Vitran Nigam) for net-metering, ensuring your system is
                  grid-compliant from day one. Our clients in sectors like
                  DLF Phase 1–5, Sohna Road, and IMT Manesar are already
                  generating free electricity from their rooftops.
                </p>
                <p>
                  Every project comes with a dedicated local project manager,
                  real-time monitoring via app, and a 5-year workmanship
                  guarantee on top of the 25-year panel warranty.
                </p>
              </div>

              {/* Internal links to future city pages */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/solar-installation-noida"
                  className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  Solar in Noida →
                </Link>
                <Link
                  href="/solar-installation-gurugram"
                  className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  Solar in Gurugram →
                </Link>
                <Link
                  href="/solar-company-uttar-pradesh"
                  className="rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  Solar in UP →
                </Link>
              </div>
            </div>

            {/* Stat Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-white">
              <h3 className="text-xl font-bold">Cities We Serve</h3>
              <ul className="mt-6 space-y-3">
                {[
                  ["Noida & Greater Noida", "DVVNL net-metering approved"],
                  ["Ghaziabad", "PVVNL approved installations"],
                  ["Gurugram (Gurgaon)", "DHBVN net-metering approved"],
                  ["Lucknow", "LESA approved projects"],
                  ["Agra, Mathura, Aligarh", "DVVNL coverage"],
                  ["Meerut, Muzaffarnagar", "PVVNL coverage"],
                ].map(([city, note]) => (
                  <li key={city} className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-200">✔</span>
                    <span>
                      <span className="font-semibold">{city}</span>
                      <span className="block text-sm text-emerald-100">{note}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919335935751"
                className="mt-8 block rounded-xl bg-white py-3 text-center font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                Check Your City — Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SEO SECTION B — ROI & Investment Case
        ══════════════════════════════════════════════ */}
        <section
          id="solar-investment-india"
          className="mt-20 scroll-mt-20"
          aria-labelledby="roi-heading"
        >
          <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              Smart Money
            </p>
            <h2
              id="roi-heading"
              className="mt-2 text-3xl font-bold"
            >
              Why Solar is the Best Investment You Can Make in India Right Now
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: "💡",
                  title: "Cut Bills by 80–95%",
                  body: "The average UP household pays ₹3,000–₹8,000 per month on electricity. A 3–5 kW solar system eliminates most of that cost, saving you ₹36,000–₹96,000 per year — for 25+ years.",
                },
                {
                  icon: "🏦",
                  title: "₹78,000 Government Subsidy",
                  body: "The PM Surya Ghar Muft Bijli Yojana provides up to ₹78,000 direct bank subsidy for a 3 kW system. Volta Solar handles all paperwork, making subsidy access effortless.",
                },
                {
                  icon: "📈",
                  title: "4–6 Year Payback, 25 Years of Free Power",
                  body: "After recovering your investment, you generate virtually free electricity for the remaining life of the system. With rising grid tariffs, that payback window is shrinking every year.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl bg-white/10 p-6">
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="mt-3 text-lg font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-emerald-700/40 p-6">
              <h3 className="font-bold text-emerald-300">Sample Savings Calculator — 4 kW System in Noida</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-4 text-center">
                {[
                  { label: "System Cost (after subsidy)", value: "~₹1.62 Lakh" },
                  { label: "Monthly Bill Savings", value: "₹4,500–₹6,000" },
                  { label: "Annual Savings", value: "₹54,000–₹72,000" },
                  { label: "Payback Period", value: "~3–4 Years" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-4">
                    <p className="text-lg font-extrabold text-white">{item.value}</p>
                    <p className="mt-1 text-xs text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">
                *Estimates based on avg. UP tariff of ₹6.50/unit and 4.5 peak sun hours/day. Actual
                savings vary by location and consumption.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SEO SECTION C — Residential vs Commercial
        ══════════════════════════════════════════════ */}
        <section
          id="residential-vs-commercial-solar"
          className="mt-20 scroll-mt-20"
          aria-labelledby="comparison-heading"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              For Every Need
            </p>
            <h2
              id="comparison-heading"
              className="mt-2 text-3xl font-bold text-slate-900"
            >
              Residential vs Commercial Solar Solutions — Which is Right for You?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
              Volta Solar designs systems for both homeowners and businesses
              across Noida, Gurugram, and Uttar Pradesh.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Residential */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏠</span>
                <h3 className="text-2xl font-bold text-slate-900">Residential Solar</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Designed for independent houses, builder-floor apartments, and
                gated society homes in Noida, Greater Noida, Ghaziabad, Gurugram,
                and across UP. Ideal system size: <strong>2 kW – 10 kW</strong>.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "On-grid, off-grid & hybrid options",
                  "Government subsidy up to ₹78,000 (PM Surya Ghar)",
                  "Net-metering: sell surplus power back to grid",
                  "Single-phase & three-phase systems",
                  "App-based production monitoring",
                  "Ideal for: bungalows, villas, individual floors",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-1 font-bold text-emerald-600">✔</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/solar-installation-noida"
                className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Explore Residential Solar →
              </Link>
            </div>

            {/* Commercial */}
            <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏭</span>
                <h3 className="text-2xl font-bold text-slate-900">Commercial Solar</h3>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Engineered for factories, warehouses, schools, hospitals, hotels, and
                office complexes across Uttar Pradesh, Haryana, and Delhi-NCR. Ideal
                system size: <strong>10 kW – 1 MW+</strong>.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Large-capacity rooftop & ground-mount systems",
                  "Accelerated depreciation (40%) tax benefit",
                  "OPEX (zero capex) &amp; CAPEX models available",
                  "C&I net-metering &amp; open-access solutions",
                  "Real-time SCADA monitoring",
                  "Ideal for: factories, warehouses, institutions",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-1 font-bold text-cyan-600">✔</span>
                    <span dangerouslySetInnerHTML={{ __html: pt }} />
                  </li>
                ))}
              </ul>
              <Link
                href="/solar-company-uttar-pradesh"
                className="mt-6 inline-block rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Explore Commercial Solar →
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Volta Solar</h2>
            <p className="mt-4 text-lg text-slate-700">
              As a leading solar installation partner in Haryana &amp; Uttar Pradesh, we deliver
              end-to-end, future-ready systems backed by performance warranties and 24/7 support.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">✔</span>
                <span className="text-slate-700">Local licensed team with fast permit processing (UPPCL, DVVNL, DHBVN)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">✔</span>
                <span className="text-slate-700">Tier-1 panels (Jinko, Waaree, Adani), hybrid inverters, high-capacity batteries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">✔</span>
                <span className="text-slate-700">Complete EPC — design, supply, installation, commissioning &amp; monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">✔</span>
                <span className="text-slate-700">25-year panel warranty + 5-year workmanship guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-600">✔</span>
                <span className="text-slate-700">Full subsidy claim support under PM Surya Ghar &amp; other state schemes</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section className="mt-20" id="pricing">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Pricing &amp; Plans
            </p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">Solar Panel Prices in Noida &amp; Gurugram</h2>
            <p className="mt-3 text-slate-600">
              Transparent, all-inclusive pricing — no hidden charges. Government subsidy applied at source.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                kva: "3 KVA",
                label: "1 Home",
                price: "₹1,95,000",
                popular: false,
              },
              {
                kva: "4 KVA",
                label: "2 Family Home",
                price: "₹2,40,000",
                popular: true,
              },
              {
                kva: "5 KVA",
                label: "3 Family Home",
                price: "₹3,00,000",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.kva}
                className={`relative rounded-2xl border p-8 shadow-sm transition hover:shadow-lg ${
                  plan.popular
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{plan.kva}</h3>
                <p className="mt-1 text-sm text-slate-600">{plan.label}</p>
                <p className="mt-6 text-4xl font-bold text-slate-900">{plan.price}</p>
                <p className="mt-1 text-xs text-slate-500">*Inclusive of GST. Subsidy reduces effective cost.</p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Free AMC for 1st Year",
                    "25 Years Panel Warranty",
                    "Expert Installation",
                    "Govt. Subsidy Processing",
                    "UPPCL / DVVNL Approval",
                    "Net Meter + Lifetime Savings",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="font-bold text-teal-500">✔</span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+919335935751"
                  className={`mt-8 block w-full rounded-lg py-3 text-center font-semibold transition ${
                    plan.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-teal-500 text-white hover:bg-teal-600"
                  }`}
                >
                  Get Free Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SEO SECTION D — FAQ (Featured Snippet Bait)
        ══════════════════════════════════════════════ */}
        <section
          id="faq"
          className="mt-20 scroll-mt-20"
          aria-labelledby="faq-heading"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Got Questions?</p>
            <h2
              id="faq-heading"
              className="mt-2 text-3xl font-bold text-slate-900"
            >
              Frequently Asked Questions — Solar Installation in UP &amp; Gurugram
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {[
              {
                q: "Does Volta Solar provide solar installation in Gurugram?",
                a: "Yes! Volta Solar is a fully active solar installation provider in Gurugram (Gurgaon), Haryana. We manage everything — from a free rooftop site survey and system design to installation, DHBVN net-metering approval, and post-installation monitoring. We've completed projects in DLF Phase 1–5, Sohna Road, Sector 56–57, IMT Manesar and more.",
              },
              {
                q: "What government subsidy is available for solar in Uttar Pradesh?",
                a: "Under the PM Surya Ghar Muft Bijli Yojana, UP homeowners can receive a central subsidy of ₹30,000/kW for the first 2 kW and ₹18,000/kW for the 3rd kW — up to a maximum of ₹78,000 for a 3 kW system. Volta Solar handles all paperwork, portal registration, and subsidy disbursal follow-up with UPPCL on your behalf.",
              },
              {
                q: "What is the cost of a solar system in Noida?",
                a: "A 3 kW on-grid solar system in Noida starts from approximately ₹1,95,000 (all-inclusive, before subsidy). After PM Surya Ghar subsidy, your effective out-of-pocket cost can drop to around ₹1.17 lakh. A 4 kW system is priced at ₹2,40,000 and a 5 kW system at ₹3,00,000. All prices include panels, inverter, mounting structure, wiring, and labour.",
              },
              {
                q: "How long does a solar installation take?",
                a: "A standard residential rooftop solar installation takes 2–5 working days once we receive the installation permit. The end-to-end process — from your free site survey to final grid connection and net-meter installation — typically takes 2–4 weeks, depending on local utility processing time.",
              },
              {
                q: "Does Volta Solar install in Greater Noida and Ghaziabad?",
                a: "Absolutely. We serve the entire NCR region — Noida, Greater Noida, Ghaziabad, Noida Extension (GB Nagar), and all surrounding districts. Our local Noida team handles DVVNL and PVVNL approvals, ensuring you never have to visit a government office.",
              },
              {
                q: "How much maintenance does a solar system require?",
                a: "Solar panels are largely maintenance-free. We recommend a simple water rinse every 2–3 months to clear dust (especially in UP summers). Volta Solar offers affordable Annual Maintenance Contracts (AMC) covering panel cleaning, inverter health checks, wiring inspection, and performance reports.",
              },
              {
                q: "What is the return on investment (ROI) for solar in India?",
                a: "Most of our customers in UP and Haryana recover their investment within 4–6 years (3–4 years after subsidy). After that, you generate electricity at near-zero cost for the next 19+ years. As grid electricity prices rise, your savings — and your ROI — only get better.",
              },
              {
                q: "Is net metering available for solar in Uttar Pradesh?",
                a: "Yes. Net metering is actively supported by UPPCL, DVVNL, PVVNL, and MVVNL in Uttar Pradesh. Any surplus solar power you generate is exported to the grid and credited to your next electricity bill — effectively making your meter run backwards. Volta Solar manages the entire net-meter application and approval process.",
              },
            ].map((faq, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-slate-900 marker:content-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-emerald-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-12 text-center shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">
            Limited Time — Free Site Survey
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Ready to Switch to Solar in Noida, Gurugram or UP?
          </h2>
          <p className="mt-4 text-lg text-emerald-50">
            Join 500+ happy customers already saving on electricity bills.
            Get your free quote &amp; subsidy assessment today.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span>✔ UPPCL Approved</span>
            <span>✔ 25-Year Warranty</span>
            <span>✔ Govt. Subsidy Support</span>
            <span>✔ No Hidden Charges</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition hover:shadow-xl"
            >
              Get Free Quote &amp; Subsidy Check
            </a>
            <a
              href="tel:+919335935751"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              📞 Call: +91 93359 35751
            </a>
          </div>
        </section>
      </main>
    </>
  );
}