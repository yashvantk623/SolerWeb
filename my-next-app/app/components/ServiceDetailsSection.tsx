"use client";

interface ServiceDetail {
  id: number;
  heading: string;
  content: string;
  image: string;
}

interface ServiceDetailsSectionProps {
  services: ServiceDetail[];
}

export default function ServiceDetailsSection({ services }: ServiceDetailsSectionProps) {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => {
          const isEvenIndex = index % 2 === 0;

          return (
            <div
              key={service.id}
              className={`flex flex-col ${
                isEvenIndex ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center mb-20`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative h-80 sm:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.heading}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {service.content}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-teal-500 text-white font-bold rounded-md transition hover:bg-teal-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
