"use client";

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
  backgroundColor?: string;
}

export default function BenefitsSection({
  title,
  benefits,
  backgroundColor = "bg-blue-600"
}: BenefitsSectionProps) {
  return (
    <section className={`w-full ${backgroundColor} py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-teal-500"
            >
              {/* Icon Container with 360 rotation */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-white transition-all duration-300 transform group-hover:rotate-360"
                  style={{
                    animation: 'group-hover:spin 0.6s ease-in-out'
                  }}
                >
                  <span className="text-3xl group-hover:text-teal-500 transition-colors duration-300">
                    {benefit.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3 text-center">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300 text-center leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }

        .group:hover .group-hover\\:rotate-360 {
          animation: spin 0.6s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
