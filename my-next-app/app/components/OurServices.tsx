
"use client";

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "On Grid Solar Panels",
      image: "/OnGrid.png"
    },
    {
      id: 2,
      title: "Off Grid Solar Panels",
      image: "/OffGrid.png"
    },
    {
      id: 3,
      title: "Hybrid Solar Plants",
      image: "/Hybrid.png"
    },
    {
      id: 4,
      title: "Utility Scale",
      image: "/Utility.png"
    },
    {
      id: 5,
      title: "Industrial Solar Panels",
      image: "/Industrial.png"
    },
    {
      id: 6,
      title: "Commercial Solar Panels",
      image: "/Commercial.png"
    },
    {
      id: 7,
      title: "Residential Solar Plants",
      image: "/Residential.png"
    },
    {
      id: 8,
      title: "Solar AMC & Maintenance",
      image: "/AMC.png"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-14">
          Our Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title BELOW image (IMPORTANT FIX) */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center group-hover:text-teal-600 transition">
                {service.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}