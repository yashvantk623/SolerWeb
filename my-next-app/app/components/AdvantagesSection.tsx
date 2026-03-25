"use client";

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface AdvantagesSectionProps {
  title: string;
  subtitle?: string;
  advantages: Advantage[];
}

export default function AdvantagesSection({
  title,
  subtitle,
  advantages
}: AdvantagesSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1260px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Advantages Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="group bg-blue-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              {advantage.icon && (
                <div className="mb-6 flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                    <span className="text-3xl">{advantage.icon}</span>
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-base text-blue-50 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
