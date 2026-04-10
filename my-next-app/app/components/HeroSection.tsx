// "use client";

// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const features = [
//     "Lifetime Support",
//     "E2ES Solution",
//     "Price Match Guarantee",
//     "Performance Warranty",
//     "25 Years Warranty",
//     "Customized Solution",
//     "Sensible Pay Terms"
//   ];

//   const [currentFeature, setCurrentFeature] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length);
//     }, 1300);
//     return () => clearInterval(interval);
//   }, [features.length]);

//   return (
//     <section className="w-full relative">
//       <div 
//         className="relative min-h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/my-hero.png')`
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20" />
        
//         {/* Content */}
//         <div className="relative flex items-center justify-start min-h-screen px-6 sm:px-12 lg:px-20">
//           <div className="max-w-lg">
//             {/* <h1 className="text-10xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-14">
//               Best Solar Company in India – Volta Solar
//             </h1> */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 
// font-extrabold tracking-tight 
// bg-gradient-to-r from-gray-900 via-black to-gray-800 
// bg-clip-text text-transparent 
// leading-tight mt-14 drop-shadow-lg">
//   Best Solar Company in India – Volta Solar
// </h1>
            
//             {/* <h2 className="text-2xl sm:text-3xl font-bold text-teal-500 mb-8 h-12 flex items-center">
//               {features[currentFeature]}
//             </h2> */}
//             <h2 className="text-3xl sm:text-4xl font-extrabold 
// text-transparent bg-clip-text 
// bg-gradient-to-r from-teal-400 to-emerald-500 
// mb-8 h-14 flex items-center 
// tracking-wide">
//   {features[currentFeature]}
// </h2>
            
//             <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
//               At Volta Solar, we provide reliable and high-quality solar energy solutions designed to meet your needs. Our focus on sustainable energy and efficient systems makes us a trusted choice across India. With strong expertise and a customer-first approach, we ensure smooth installation, long-term performance, and complete satisfaction for every project.
//             </p>
            
//             <a 
//               href="#contact" 
//               className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-md transition hover:bg-teal-600"
//             >
//               Get a Free Quote
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const features = [
    "Lifetime Support",
    "E2ES Solution",
    "Price Match Guarantee",
    "Performance Warranty",
    "25 Years Warranty",
    "Customized Solution",
    "Sensible Pay Terms"
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative">
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/my-hero.png')` }}
      >
        {/* 🔥 Strong Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 🔥 Content */}
        <div className="relative flex min-h-screen items-center justify-start px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-[1280px]">
            {/* Content Box */}
            <div className="max-w-2xl backdrop-blur-sm bg-white/5 p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              Powering India with{" "}
              <span className="text-teal-400">Smart Solar Solutions</span>
            </h1>

            {/* Animated Feature */}
            <div className="mt-6 mb-6 h-10 flex items-center">
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-500">
                {features[currentFeature]}
              </span>
            </div>

            {/* Service Area Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-200 rounded-full text-xs sm:text-sm font-semibold">
                🌍 Serving Uttar Pradesh & Haryana
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              Volta Solar delivers reliable, high-performance solar energy
              solutions across India. From installation to long-term support,
              we ensure efficiency, sustainability, and complete customer
              satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition"
              >
                Get Free Quote
              </a>

              <a
                href="#services"
                className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
