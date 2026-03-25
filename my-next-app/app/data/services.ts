export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  heroImage: string;
  highlights: string[];
  sections: {
    title: string;
    content: string;
    image?: string;
    items?: string[];
  }[];
  advantages?: {
    title: string;
    subtitle?: string;
    items: {
      id: number;
      title: string;
      description: string;
      icon?: string;
    }[];
  };
  benefits: {
    title: string;
    description: string;
    icon?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: string;
}

export const services: Record<string, Service> = {
  "off-grid": {
    id: "1",
    slug: "off-grid",
    title: "Off-Grid Solar Panels in Pan India",
    shortTitle: "Off Grid Solar",
    description: "Standalone photovoltaic systems that generate electricity independently",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Solar panels: Primary source of electricity",
      "Battery storage: 24/7 power availability",
      "Charge controller: Manages power flow",
      "Inverter: Converts DC to AC power"
    ],
    sections: [
      {
        title: "What are Off-Grid Solar Panels?",
        content: "Off-grid solar panel systems offer a practical way to generate electricity from the sun and are not connected to the electrical grid. They are designed to provide a reliable source of electricity in remote or rural areas, or as a backup power during outages."
      },
      {
        title: "Key Features",
        content: "Our off-grid solar solutions include complete installation and maintenance support.",
        items: [
          "High efficiency solar panels",
          "Advanced battery storage systems",
          "Professional installation service",
          "24/7 monitoring and support",
          "Customized solutions for your needs"
        ]
      }
    ],
    benefits: [
      { title: "Energy Independence", description: "Generate your own power without grid connection" },
      { title: "Low Maintenance", description: "Minimal moving parts ensure reliable operation" },
      { title: "Eco-Friendly", description: "Zero emissions and sustainable energy solution" },
      { title: "Cost Savings", description: "Eliminate monthly electricity bills over time" }
    ],
    faqs: [
      { question: "What is off-grid solar system?", answer: "An off-grid solar system is an independent power generation system that doesn't connect to the main electrical grid." },
      { question: "How long does installation take?", answer: "Typical installation takes 5-7 days depending on system size and requirements." }
    ],
    cta: "Get Your Off-Grid System Today"
  },
  "on-grid": {
    id: "2",
    slug: "on-grid",
    title: "On Grid Solar Panels In Pan India",
    shortTitle: "On Grid Solar",
    description: "Connected solar systems that feed excess power back to the electrical grid",
    image: "https://images.unsplash.com/photo-1523792069685-4b4dcd0f9664?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1523792069685-4b4dcd0f9664?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Grid-connected solar panels for homes and businesses",
      "Net metering to reduce electricity costs",
      "Government incentives and subsidies available",
      "Professional installation and maintenance"
    ],
    sections: [
      {
        title: "On-Grid Solar Panel Systems",
        content: "On-grid solar panels are directly connected to the main electrical grid, allowing homeowners and businesses to reduce electricity costs while contributing to renewable energy production."
      },
      {
        title: "How On-Grid Systems Work",
        content: "Your solar panels generate electricity during the day, which is first used to power your home. Excess electricity is sent to the grid, and you receive credits. At night or cloudy days, you draw power from the grid."
      },
      {
        title: "For Whom is On-Grid Solar System the Best Option?",
        content: "On-grid solar systems are ideal for homeowners and businesses looking to reduce electricity costs while maintaining grid connection."
      }
    ],
    advantages: {
      title: "Advantages Of On Grid Solar Panels",
      subtitle: "You Can Save Your Money & Earth By Using Solar Panels. Golden ACS Provides Best Solar Panel Installation In Pan India At Affordable Prices.",
      items: [
        {
          id: 1,
          title: "Experiencing Zero",
          description: "Reduce monthly Electricity bills to Zero.\nProtect against future electricity price hikes,",
          icon: "⚡"
        },
        {
          id: 2,
          title: "Earn Money",
          description: "Low-Cost Investment & quick payback period.\nExport excess solar power generated back to the utility grid to earn passive income.",
          icon: "💰"
        },
        {
          id: 3,
          title: "Fit and Forget system",
          description: "Minimum Maintenance with nearly Zero Recurring Cost.\nSolar panels act as an umbrella to lower the building temperature & keep the environment cool.",
          icon: "🔧"
        },
        {
          id: 4,
          title: "Tax Benefits",
          description: "Accelerated Depreciation Tax Relief for Industries.\nSupportive & proactive Government Policy for Renewable Green Energy Sector.",
          icon: "📊"
        }
      ]
    },
    benefits: [
      { title: "Reduced Electricity Bills", description: "Lower your monthly power consumption costs significantly" },
      { title: "Government Benefits", description: "Avail of tax credits and government subsidies" },
      { title: "Net Metering", description: "Earn credits for excess power generated" },
      { title: "Easy Maintenance", description: "Simpler system with no battery maintenance required" }
    ],
    faqs: [
      { question: "What happens at night?", answer: "At night, you automatically draw power from the grid seamlessly." },
      { question: "Do I need batteries?", answer: "No, on-grid systems don't require batteries as the grid acts as backup." }
    ],
    cta: "Start Your On-Grid Journey"
  },
  "installation": {
    id: "3",
    slug: "installation",
    title: "Solar Panel Installation In Lucknow",
    shortTitle: "Installation",
    description: "Professional solar panel installation services for residential and commercial properties",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Expert installation team with 10+ years experience",
      "Quality materials and equipment",
      "Fast and professional service",
      "Lifetime support and maintenance"
    ],
    sections: [
      {
        title: "We Provide All Types Of Solar Panel Installation In Lucknow",
        content: "Our experienced team specializes in both on-grid and off-grid solar panel installation services. We handle everything from site assessment to commissioning."
      },
      {
        title: "Installation Process",
        content: "Our comprehensive installation process ensures quality and reliability.",
        items: [
          "Site survey and assessment",
          "System design and planning",
          "Material procurement",
          "Professional installation",
          "Testing and commissioning",
          "Training and handover"
        ]
      }
    ],
    benefits: [
      { title: "Certified Installers", description: "Trained professionals with industry certifications" },
      { title: "Quality Guarantee", description: "All installations backed by comprehensive warranty" },
      { title: "Fast Service", description: "Complete installation within agreed timeline" },
      { title: "24/7 Support", description: "Available for any assistance after installation" }
    ],
    faqs: [
      { question: "How long does installation take?", answer: "Average installation time is 3-5 days depending on system capacity and roof complexity." },
      { question: "Do you provide warranty?", answer: "Yes, we provide 25 years warranty on panels and 10 years on other components." }
    ],
    cta: "Schedule Installation Now"
  },
  "commercial": {
    id: "4",
    slug: "commercial",
    title: "Commercial Solar Panel in Lucknow",
    shortTitle: "Commercial Solar",
    description: "Large-scale solar solutions for businesses, industries and commercial establishments",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Custom solutions for industrial rooftops",
      "High-capacity systems for commercial use",
      "ROI optimization and analysis",
      "Specialized installation for metal/sheet roofs"
    ],
    sections: [
      {
        title: "Commercial Solar Panel Installation",
        content: "As a leading provider of commercial solar panels in Lucknow, we deliver customized solutions for your business needs with professional installation and ongoing support."
      },
      {
        title: "Benefits of Commercial Solar",
        content: "Installing commercial solar panels offers significant advantages for businesses.",
        items: [
          "Significant cost savings on electricity",
          "Enhanced brand image and CSR",
          "Long-term investment with good ROI",
          "Energy independence and security",
          "Government incentives and tax benefits"
        ]
      }
    ],
    benefits: [
      { title: "Cost Reduction", description: "Reduce operational costs significantly" },
      { title: "ROI", description: "Achieve positive returns within 5-7 years" },
      { title: "Scalability", description: "Easily expandable systems as needs grow" },
      { title: "Professional Support", description: "Expert team for implementation and maintenance" }
    ],
    faqs: [
      { question: "What is the investment for commercial solar?", answer: "Investment varies based on your power requirements. We provide detailed ROI analysis." },
      { question: "How long is the payback period?", answer: "Average payback period is 5-7 years with continuous savings thereafter." }
    ],
    cta: "Get Commercial Solar Quote"
  },
  "hybrid": {
    id: "5",
    slug: "hybrid",
    title: "Hybrid Solar Plants in Lucknow",
    shortTitle: "Hybrid Solar",
    description: "Advanced solar systems combining grid connection with battery backup for uninterrupted power",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Hybrid inverter technology for best performance",
      "Battery backup for continuous power supply",
      "Smart energy management system",
      "Flexibility to use grid or solar at any time"
    ],
    sections: [
      {
        title: "What Are Hybrid Solar Systems?",
        content: "Hybrid solar systems combine the benefits of on-grid and off-grid systems. They are connected to the grid but also have battery backup for continuous power supply during outages."
      },
      {
        title: "How Hybrid Systems Work",
        content: "The system intelligently manages power from multiple sources.",
        items: [
          "Solar panels generate electricity during day",
          "Excess power charges batteries",
          "Batteries provide backup during night or outages",
          "Grid power used when solar and batteries insufficient",
          "Smart controller optimizes between all three sources"
        ]
      }
    ],
    benefits: [
      { title: "Backup Power", description: "Never worry about power cuts with battery backup" },
      { title: "Savings", description: "Reduce electricity bills while maintaining grid connection" },
      { title: "Flexibility", description: "Choose between solar, battery, or grid power" },
      { title: "Reliability", description: "Multiple power sources ensure uninterrupted supply" }
    ],
    faqs: [
      { question: "What is a hybrid solar system?", answer: "A system that combines on-grid and off-grid capabilities with battery storage for optimal power management." },
      { question: "How much battery backup is available?", answer: "Backup duration depends on battery capacity and power consumption - typically 4-8 hours." }
    ],
    cta: "Switch to Hybrid Solar Today"
  },
  "amc": {
    id: "6",
    slug: "amc",
    title: "Reliable Solar Panel AMC Services in Lucknow",
    shortTitle: "Solar AMC",
    description: "Comprehensive Annual Maintenance Contract services for solar systems",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
    heroImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=2100&q=80",
    highlights: [
      "Preventive maintenance services",
      "Performance monitoring and optimization",
      "Expert technician support",
      "Spare parts guarantee"
    ],
    sections: [
      {
        title: "Expert Solar Panel AMC Services in Lucknow",
        content: "Our expert technical team provides comprehensive maintenance and repair services to ensure your solar system operates at peak performance with maximum lifespan."
      },
      {
        title: "What's Included in Our AMC",
        content: "Comprehensive maintenance for maximum system efficiency.",
        items: [
          "Regular system inspections",
          "Cleaning and maintenance of panels",
          "Inverter and battery health checks",
          "Performance monitoring and reporting",
          "Priority technical support",
          "Spare parts replacement (if needed)",
          "Emergency repair service"
        ]
      }
    ],
    benefits: [
      { title: "Maximum Efficiency", description: "Keep your system performing at peak capacity" },
      { title: "Extended Lifespan", description: "Proper maintenance extends system life significantly" },
      { title: "Priority Support", description: "Get quick response to any issues or concerns" },
      { title: "Peace of Mind", description: "Complete coverage for all maintenance needs" }
    ],
    faqs: [
      { question: "When should I get AMC service?", answer: "We recommend starting AMC after warranty period ends, typically after the first 5 years." },
      { question: "What is the cost of AMC?", answer: "AMC costs vary based on system size and type. We provide competitive pricing." }
    ],
    cta: "Subscribe to AMC Service"
  }
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services[slug];
}

export function getAllServices(): Service[] {
  return Object.values(services);
}
