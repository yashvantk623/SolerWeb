"use client";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-emerald-100 mt-2">Last Updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Volta Solar ("we", "our", "us") is committed to protecting the privacy and personal data of our customers, website visitors, and business partners. As a solar energy solutions provider operating across Haryana and Uttar Pradesh, we ensure that all data handling practices comply with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDPA).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy applies to all users accessing our platforms:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>https://voltasolar.in</li>
            <li>https://voltasolar.com</li>
            <li>https://soler-web-f2fj.vercel.app</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            By using our website or services, you agree to the terms outlined in this policy.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We collect personal and technical data in the following ways:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Information You Provide (Voluntary Data)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            When you interact with our services, including solar consultation or enquiry forms, we may collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Installation Site Address</li>
            <li>Energy consumption details</li>
            <li>Electricity bill information (submitted via solar calculator or consultation forms)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Automatically Collected Information (Technical Data)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            When you access our website, we may automatically collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Website usage behavior and page interactions</li>
            <li>Cookies and analytics data (via Google Analytics and Vercel platform logs)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose of Data Usage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your data is used strictly for legitimate business purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Providing solar rooftop installation and consulting services</li>
            <li>Designing on-grid and off-grid solar solutions</li>
            <li>Calculating system size, ROI, and energy savings</li>
            <li>Processing government subsidies and net-metering applications</li>
            <li>Coordinating installation, logistics, and AMC (maintenance services)</li>
            <li>Providing customer support and service updates</li>
            <li>Improving website performance and user experience</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
            We maintain a strict no-sale policy for personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We do not sell, rent, or trade your personal information to any third party.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            However, data may be shared in the following limited scenarios:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Government Authorities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>NEDA (New and Renewable Energy Development Agency)</li>
            <li>UPPCL (Uttar Pradesh Power Corporation Limited)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm bg-emerald-50 p-3 rounded">
            👉 For processing solar subsidies, approvals, and net-metering applications
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Operational & Logistics Partners</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
            <li>Installation teams</li>
            <li>Equipment suppliers</li>
            <li>Maintenance and AMC service providers</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-sm bg-emerald-50 p-3 rounded">
            👉 Only the necessary data required for service execution is shared
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Monitor website performance (Next.js / Vercel infrastructure)</li>
            <li>Analyze visitor behavior via Google Analytics</li>
            <li>Enhance user experience and service delivery</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Users can manage or disable cookies through browser settings, though certain features may be affected.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take appropriate technical and organizational measures to safeguard your data:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>SSL (Secure Socket Layer) encryption for all data transmission</li>
            <li>Secure cloud hosting environment (Vercel)</li>
            <li>Controlled access to sensitive information</li>
            <li>Regular monitoring and system updates</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal data only for as long as necessary to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fulfill service requirements</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Maintain operational and business records</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights Under DPDPA 2023</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a user, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, please contact us using the details below.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Grievance Officer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In compliance with Indian data protection laws, we have designated a Grievance Officer:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> team@voltasolar.com</p>
            <p className="text-gray-700"><strong>Phone:</strong> 9311757497</p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            All grievances will be acknowledged and addressed within the timelines prescribed under applicable laws.
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Volta Solar reserves the right to update this Privacy Policy as required by legal, operational, or technological changes. Updates will be reflected with a revised "Last Updated" date.
          </p>
        </div>

        {/* Section 11 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For any queries regarding this Privacy Policy or your data:
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
            <p className="text-gray-800 font-semibold mb-3">Volta Solar</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>📧 Email:</strong> team@voltasolar.com</li>
              <li><strong>📞 Phone:</strong> 9311757497</li>
              <li><strong>🌐 Website:</strong> https://voltasolar.in</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-600 text-white p-8 rounded-lg text-center mt-16">
          <h3 className="text-2xl font-bold mb-3">Have Questions?</h3>
          <p className="mb-4">Contact us anytime - we're here to help!</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
