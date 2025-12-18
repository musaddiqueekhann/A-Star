import { Fan, Droplets, Battery, Box, Eye, Zap, Shield, Sun, Lightbulb, Wrench, FileCheck, MapPin } from 'lucide-react';

const technologies = [
  {
    icon: Shield,
    title: 'Saudi-Optimized Power Protection',
    description: 'Built-in OVP, UVP & surge protection (6kV–10kV) designed to handle Saudi power fluctuations and ensure long product life.',
  },
  {
    icon: Sun,
    title: 'Extreme Climate Ready Design',
    description: 'Engineered to operate reliably up to 55°C, with IP66/IP67 protection against dust, sand storms, rain, and UV exposure.',
  },
  {
    icon: Lightbulb,
    title: 'High-Efficiency LED Technology',
    description: 'Advanced LED chips delivering up to 200 lm/W, reducing energy consumption and supporting Saudi Vision 2030 sustainability goals.',
  },
  {
    icon: Wrench,
    title: 'Modular & Service-Friendly Construction',
    description: 'Replaceable driver and LED modules for easy maintenance, reduced downtime, and lower lifecycle cost in large projects.',
  },
  {
    icon: FileCheck,
    title: 'Compliance-Ready Manufacturing',
    description: 'Designed to meet SASO / SALEEM / IECEE requirements with RoHS-compliant materials for smooth Saudi market approvals.',
  },
  {
    icon: MapPin,
    title: 'Saudi Brand with Local Support',
    description: 'Saudi-registered brand offering local warranty, after-sales support, and Arabic/English documentation for customer confidence.',
  },
];

export function Innovation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 font-bold">Innovation & Technology</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Engineering excellence that powers our products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 text-xl mb-3 font-bold group-hover:text-blue-600 transition-colors">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}