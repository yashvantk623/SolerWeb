// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Company Info */}
          
//               <div className="mb-12 flex flex-col items-center gap-6 md:flex-row md:justify-between">
//             <div className="flex items-center gap-4">
//               <input
//                 type="email"
//                 placeholder="sample@mail.com"
//                 className="rounded-l-full bg-white px-6 py-3 text-slate-900 placeholder-slate-400 outline-none"
//               />
//               <button className="rounded-r-full bg-teal-500 px-8 py-3 font-semibold text-white transition hover:bg-teal-600">
//                 Subscribe
//               </button>
//             </div>
//             <div className="flex gap-4">
//               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white transition hover:bg-teal-600">
//                 f
//               </a>
//               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white transition hover:bg-teal-600">
//                 𝕏
//               </a>
//               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white transition hover:bg-teal-600">
//                 T
//               </a>
//             </div>
//           </div>

//           <div className="col-span-1">
//             <h3 className="text-white text-lg font-bold mb-4">Volta Solar</h3>
//             <p className="text-sm text-gray-400">
//               Providing sustainable solar solutions for a brighter future.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-sm hover:text-white transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-sm hover:text-white transition">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-sm hover:text-white transition">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-sm hover:text-white transition">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Services</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/services/on-grid" className="text-sm hover:text-white transition">
//                   On Grid
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/off-grid" className="text-sm hover:text-white transition">
//                   Off Grid
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/hybrid" className="text-sm hover:text-white transition">
//                   Hybrid Solar
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/installation" className="text-sm hover:text-white transition">
//                   Installation
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="tel:+919335935751" className="hover:text-white transition">
//                   📞 +91 9335935751
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:team@voltasolar.com" className="hover:text-white transition">
//                   ✉️ team@voltasolar.com
//                 </a>
//               </li>
//               <li className="text-gray-400">
//                 📍 Lucknow, Uttar Pradesh
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-gray-400">
//               &copy; 2024 Volta Solar. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link href="#" className="text-sm text-gray-400 hover:text-white transition">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="text-sm text-gray-400 hover:text-white transition">
//                 Terms of Service
//               </Link>
//               <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 🔹 Newsletter + Social (Separate Section - FIXED) */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto rounded-l-full bg-white px-6 py-3 text-slate-900 placeholder-slate-400 outline-none"
            />
            <button className="rounded-r-full bg-teal-500 px-8 py-3 font-semibold text-white transition hover:bg-teal-600">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600">f</a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600">𝕏</a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600">T</a>
          </div>
        </div>

        {/* 🔹 Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Volta Solar</h3>
            <p className="text-sm text-gray-400">
              Providing sustainable solar solutions for a brighter future.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/on-grid" className="text-sm hover:text-white">On Grid</Link></li>
              <li><Link href="/services/off-grid" className="text-sm hover:text-white">Off Grid</Link></li>
              <li><Link href="/services/hybrid" className="text-sm hover:text-white">Hybrid Solar</Link></li>
              <li><Link href="/services/installation" className="text-sm hover:text-white">Installation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+919335935751">📞 +91 9335935751</a></li>
              <li><a href="mailto:team@voltasolar.com">✉️ team@voltasolar.com</a></li>
              <li>📍 Pan India</li>
            </ul>
          </div>

        </div>

        {/* 🔹 Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Volta Solar. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-white">Terms</Link>
            <Link href="#" className="text-sm hover:text-white">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}