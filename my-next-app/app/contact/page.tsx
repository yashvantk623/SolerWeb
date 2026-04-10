"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: "contact",
    name: "",
    email: "",
    phone: "",
    message: "",
    position: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you for your inquiry! We will get back to you soon.");
        setFormData({ type: "contact", name: "", email: "", phone: "", message: "", position: "" });
      } else {
        const errorDetail = data.error || data.message || "Unknown error";
        alert(`Failed to send message: ${errorDetail}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid min-h-screen gap-0 md:grid-cols-2">
        {/* Left Section - Content */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 px-8 py-16 sm:px-12 lg:px-16">
          <div className="w-full">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-8">
              Contact Us
            </h1>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Have questions about our solar solutions? We're here to help! Get in touch with our team of solar experts to discuss your energy needs and find the perfect solution for your home or business across Uttar Pradesh and Haryana.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">� WhatsApp Us</h3>
                <p className="text-slate-700">
                  <a href="https://wa.me/919335935751" className="text-teal-600 hover:text-teal-700 font-semibold">
                    +91 9335935751
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">📧 Email Us</h3>
                <p className="text-slate-700">
                  <a href="mailto:team@voltasolar.com" className="text-teal-600 hover:text-teal-700 font-semibold">
                    team@voltasolar.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">📍 Service Coverage</h3>
                <p className="text-slate-700 font-semibold mb-2">
                  We proudly serve <strong>Uttar Pradesh</strong> & <strong>Haryana</strong>
                </p>
                <p className="text-sm text-slate-600">
                  Including major cities and regions across both states
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">🌍 Service Coverage</h3>
                <p className="text-slate-700 font-semibold mb-2">
                  We serve <strong>Uttar Pradesh</strong> & <strong>Haryana</strong>
                </p>
                <p className="text-sm text-slate-600">
                  Including: Major cities, towns, and surrounding areas in both states
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              We respond to all inquiries within 24 hours. Let's discuss how we can help you transition to clean, renewable solar energy.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col justify-center bg-white px-8 py-16 sm:px-12 lg:px-16">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Looking for a solar panel quotation?
            </h2>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              We believe in providing the best possible solar panel installation to our clients and welcome new clients daily.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type Field */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-teal-300 bg-teal-50 text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400"
                >
                  <option value="contact" className="bg-white text-slate-900">Contact / Quotation</option>
                  <option value="job" className="bg-white text-slate-900">Job Application</option>
                </select>
              </div>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Your phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Position Field - only for job applications */}
              {formData.type === "job" && (
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                    Position Applied For
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required={formData.type === "job"}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter the position you're applying for"
                  />
                </div>
              )}

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your solar needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-slate-900">Our Location</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5185639804126!2d80.9282!3d26.8551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37065af6971%3A0x7f5bf87c4c6e8d8!2sOffice%20No.345%2C%201st%20Floor%20B-Block%20Chauroha%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-16 text-center shadow-lg">
          <h2 className="mb-4 text-4xl font-bold text-white">Ready to Go Solar?</h2>
          <p className="mb-8 text-lg text-emerald-50">
            Contact us today for a free consultation and site evaluation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition hover:shadow-xl"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+919335935751"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
