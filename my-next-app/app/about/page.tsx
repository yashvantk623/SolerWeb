"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid min-h-screen gap-0 md:grid-cols-2">
        {/* Left Section - Light Blue Background with Content */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 px-8 py-16 sm:px-12 lg:px-16">
          <div className="w-full">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-8">
              About Us
            </h1>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Volta Solar is one of the most experienced players in India relatively young and fast-growing solar industry. We provide a full suite of solar photovoltaic (PV) services for the commercial and wholesale distributed generation markets: development, design, engineering, procurement, and construction (EPC) and operations and maintenance (O&M). At Volta Solar, we aim to make clean, reliable solar energy accessible to everyone. We are committed to protecting the environment and spearheading industry-wide changes with groundbreaking and innovative research and development.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <span className="text-slate-700">
                  <strong>Volta Solar</strong> Group of Companies With almost four years in the solar industry, Volta Solar's experience, high-quality products, and technological innovations have propelled us to be the leading photovoltaic module manufacturer in the world.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <span className="text-slate-700">
                  <strong>Volta Solar</strong> is your source for high-quality residential, commercial, and industrial off-grid and grid-tied solar power systems and solar panels for your home and business.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-xl">•</span>
                <span className="text-slate-700">
                  We offer complete turnkey solar solutions including system design, installation, commissioning, and comprehensive aftermarket support.
                </span>
              </li>
            </ul>

            <p className="text-lg text-slate-700 leading-relaxed">
              With our team of certified professionals, we ensure that every project is executed to the highest standards, delivering exceptional value and long-term performance for our customers.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-100">
          <img
            src="/aboutus.png"
            alt="Solar energy - lightbulb and solar panels"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </section>

      {/* Values & Mission Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Mission */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 border border-slate-200">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To make clean, reliable, and affordable solar energy accessible to everyone while spearheading industry-wide innovations and environmental protection.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 p-8 border border-slate-200">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be the leading solar energy provider in India, transforming every rooftop into a renewable energy asset and creating a sustainable future for generations to come.
            </p>
          </div>

          {/* Values */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-slate-200">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Values</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Integrity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Sustainability
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Excellence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left - Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/mores.png"
              alt="Solar panel installation"
              className="h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-xl font-semibold bg-black/50 px-6 py-4 rounded-lg">
                  Best Solar Panels<br />Installation Services In<br />Pan India
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-teal-600 font-semibold mb-2">Why Us</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How are we more than<br />just a solar energy<br />company in Pan India?
            </h2>
            
            <p className="text-slate-700 mb-6 leading-relaxed">
              Volta Solar has been an integral player in the solar industry for over Five years in Pan India. Since the infancy of the solar market in India, Volta Solar has continued to strive towards making world-class solar energy services accessible to everyone. The culmination of our dedication towards creating value for our Clients has placed us in the best possible position in solar energy services with over 150MWac of large-scale solar capacity in our pipeline.
            </p>

            {/* Circular Progress Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {/* Hybrid Solar */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      strokeDasharray="247.5 550"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-500">55%</span>
                  </div>
                </div>
                <p className="font-semibold text-slate-900">Hybrid Solar</p>
              </div>

              {/* Off Grid */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      strokeDasharray="501.75 550"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-500">91%</span>
                  </div>
                </div>
                <p className="font-semibold text-slate-900">Off Grid</p>
              </div>

              {/* On Grid */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      strokeDasharray="418 550"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-500">76%</span>
                  </div>
                </div>
                <p className="font-semibold text-slate-900">On Grid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center text-white">
              <div className="text-4xl font-bold">350+</div>
              <div className="mt-2 text-lg text-emerald-50">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">280+</div>
              <div className="mt-2 text-lg text-emerald-50">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">7+</div>
              <div className="mt-2 text-lg text-emerald-50">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">1,250+</div>
              <div className="mt-2 text-lg text-emerald-50">CO₂ Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ADDRESS Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-slate-900">OUR ADDRESS</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5185639804126!2d80.9282!3d26.8551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37065af6971%3A0x7f5bf87c4c6e8d8!2sOffice%20No.345%2C%201st%20Floor%20B-Block%20Chauroha%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Business Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Business Name</h3>
              <p className="text-slate-700 text-lg">Volta Solar</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Address</h3>
              <p className="text-slate-700">
Pan India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Contact No</h3>
              <p className="text-slate-700">
                <a href="tel:+919335935751" className="text-teal-600 hover:text-teal-700 font-semibold">
                  +91 9335935751
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Email</h3>
              <p className="text-slate-700">
                <a href="mailto:team@voltasolar.com" className="text-teal-600 hover:text-teal-700 font-semibold">
                  team@voltasolar.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-slate-900">Business Hours</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50 w-1/3">Saturday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Sunday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Monday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Tuesday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Wednesday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Thursday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-left font-semibold text-slate-700 bg-slate-50">Friday</td>
                <td className="px-6 py-4 text-left text-slate-700">10 am – 7 pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <p className="text-slate-700">
            Map Link: <a href="https://www.google.com/maps/search/Office+No.345,+1st+Floor+B-Block+Chauroha,+Lucknow" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 hover:underline font-semibold">Open Google Map</a>
          </p>
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
              href="tel:+918700459880"
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
  
