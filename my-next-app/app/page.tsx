"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import ServiceDetailsSection from "./components/ServiceDetailsSection";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `City/Area: ${formData.city}\n\nProject Details:\n${formData.message}`,
          position: ''
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you for your inquiry! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      } else {
        const errorDetail = data.error || data.message || "Unknown error";
        alert(`Failed to send message: ${errorDetail}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };
  const benefits = [
    {
      id: 1,
      title: "Less Power Cuts",
      description: "Areas with low power blackouts like metropolitan cities or EEZ industries",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Big Power Bill",
      description: "If your electricity consumption is very high with inflated utility bills, you should contact us. We can help you save money.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Excessive Operational Costs",
      description: "Many enterprises or businesses that are trying to reduce the cost of running their operation often find that High operational costs is a common problem.",
      icon: "💼"
    },
    {
      id: 4,
      title: "A Safe and Secure Investment",
      description: "If you're looking to invest for the long term and are seeking guaranteed returns,",
      icon: "🔒"
    },
    {
      id: 5,
      title: "Addition Income",
      description: "Sell your excess Solar Units (kWh) to earn passive income.",
      icon: "💰"
    },
    {
      id: 6,
      title: "Being Eco-friendly",
      description: "If you have an area on your roof that gets direct sunlight and are eco-conscious,",
      icon: "🌱"
    }
  ];

  const serviceDetails = [
    {
      id: 1,
      heading: "Harness the Sun's Power with Volta Solar",
      content: "At Volta Solar, we believe in unlocking the true potential of solar energy to power a brighter and more sustainable future. As the best solar company, we deliver advanced and reliable solar solutions tailored for homes, businesses, and communities. From solar panel installations to solar water heating systems, our commitment to excellence ensures superior performance, long-term savings, and complete customer satisfaction.",
      image: "/harness.png"
    },
    {
      id: 2,
      heading: "Trusted Solar Solutions Provider – Volta Solar",
      content: "Choosing the right solar partner is crucial, and Volta Solar stands as a symbol of trust and reliability. Our team of experienced professionals ensures that every project is executed with precision and expertise. We focus on delivering high-quality solutions, maximizing efficiency, and maintaining strong customer relationships, making us the preferred choice for solar solutions.",
      image: "/Trusted-solar.png"
    },
    {
      id: 3,
      heading: "Customized Residential & Commercial Solar Solutions",
      content: "Whether you're a homeowner looking to reduce electricity bills or a business aiming for sustainable growth, Volta Solar offers customized solar solutions to meet your exact needs. Our expert team designs and installs systems that optimize energy production while minimizing costs, helping you achieve maximum returns on your solar investment.",
      image: "/customize.png"
    },
    {
      id: 4,
      heading: "Service & Support That Goes Beyond Expectations",
      content: "At Volta Solar, we don't just install solar systems—we build long-term relationships. Our dedicated support team is always available to guide you at every step of your solar journey. From consultation to maintenance, we ensure a smooth and hassle-free experience, delivering service that truly exceeds expectations.",
      image: "/support-Services.png"
    },
    {
      id: 5,
      heading: "Top-Quality Solar Panels for Every Need",
      content: "Volta Solar is committed to providing premium-quality solar panels and equipment. With cutting-edge technology and expert installation, we guarantee optimal performance, durability, and efficiency. Whether residential or commercial, our solutions are designed to deliver the best results and long-term value.",
      image: "/Top-Quality.png"
    },
    {
      id: 6,
      heading: "Affordable Solar Solutions for Everyone",
      content: "We understand that switching to solar is an important investment. That's why Volta Solar offers cost-effective solutions with flexible pricing and payment options. Our goal is to make solar energy accessible to everyone, ensuring maximum value without compromising on quality or performance.",
      image: "/affordable.png"
    },
    {
      id: 7,
      heading: "Environmentally Friendly Energy Solutions",
      content: "Volta Solar is dedicated to creating a greener future. By adopting our solar solutions, you reduce your carbon footprint and contribute to environmental protection. Our high-efficiency solar panels allow you to enjoy clean energy while minimizing your environmental impact.",
      image: "/environmental.png"
    },
    {
      id: 8,
      heading: "Volta Solar – The Best Solar Company You Can Trust",
      content: "With a proven track record and unwavering commitment to excellence, Volta Solar stands as a leader in the solar industry. We deliver top-tier products, seamless installation, and unmatched service. When it comes to reliability, performance, and customer satisfaction, Volta Solar is the name you can trust.",
      image: "/The-best-solar.png"
    },
    {
      id: 9,
      heading: "Switch to Clean Energy with Volta Solar",
      content: "Make the smart move towards renewable energy with Volta Solar. We provide end-to-end solar solutions, including consultation, installation, and maintenance. Our systems are designed for maximum efficiency, helping you harness the full power of solar energy while reducing costs and ensuring sustainability.",
      image: "/switch-to-green.png"
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      <main className="w-full">
        <HeroSection />
        
        <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-0 max-w-full relative z-10 bg-slate-50">
          <div className="mx-auto w-full max-w-[1260px]">
            <OurServices />
            <ServiceDetailsSection services={serviceDetails} />
            <BenefitsSection 
              title="For whom is Solar System the best option?" 
              benefits={benefits}
              backgroundColor="bg-blue-600"
            />

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
                <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Volta Solar</h2>
                <p className="mt-4 text-lg text-slate-700">As a leading solar partner in Haryana and Uttar Pradesh, we deliver end-to-end, future-ready systems backed by performance warranties and 24/7 support.</p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Local licensed team & quick permits</li>
                  <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Tier-1 panels, hybrid inverters, high-capacity batteries</li>
                  <li className="rounded-lg bg-emerald-50 px-4 py-3">✔ Managed installation, commissioning, and monitoring according to Volta Solar</li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Solar installation" className="h-80 w-full object-cover" />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mt-16">
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
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <a href="/contact" className="block w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Get Started
              </a>
            </div>

            {/* 4 KVA Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-slate-900">4 KVA</h3>
              <p className="text-slate-600 text-sm mt-1">2 Family Home</p>
              <p className="text-4xl font-bold text-slate-900 mt-6">₹240000</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <a href="/contact" className="block w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Get Started
              </a>
            </div>

            {/* 5 KVA Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-slate-900">5 KVA</h3>
              <p className="text-slate-600 text-sm mt-1">3 Family Home</p>
              <p className="text-4xl font-bold text-slate-900 mt-6">₹300000</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">25 Years Warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Subsidy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">Approval By UPPCL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-slate-700">New Meter + Savings</span>
                </li>
              </ul>

              <a href="/contact" className="block w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition text-center">
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mt-14 px-6 sm:px-12 lg:px-20">
          {/* This section is now handled by the OurServices component above */}
        </section>

        <section id="contact" className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900">Ready to go solar?</h3>
          <p className="mt-2 text-slate-600">Request free site evaluation and personalized ROI report.</p>
          <p className="mt-2 text-sm text-slate-500">WhatsApp: <a href="https://wa.me/918700459880" className="text-emerald-600 hover:underline">+91 8700459880</a> • Email: <a href="mailto:Email-voltasolar93@gmail.com" className="text-emerald-600 hover:underline">Email-voltasolar93@gmail.com</a></p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" 
            />
            <input 
              type="text" 
              name="city"
              placeholder="City / Area" 
              value={formData.city}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500" 
            />
            <textarea 
              name="message"
              placeholder="Project details" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              required
              className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500">
            </textarea>
            <button 
              type="submit"
              className="md:col-span-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500"
            >
              Submit Request
            </button>
          </form>
        </section>
        </div>
      </div>
    </main>
  </div>
  );
}
