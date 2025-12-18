import { Battery, Zap, Cpu, Shield, Droplets, Boxes, Award, Clock } from 'lucide-react';

const specs = [
  { icon: Battery, title: 'Power Factor', value: '&gt;0.95', description: 'High efficiency' },
  { icon: Zap, title: 'Lumens/Watt', value: '130-150', description: 'Industry leading' },
  { icon: Cpu, title: 'LED Chip Type', value: 'SMD/COB', description: 'Premium chips' },
  { icon: Shield, title: 'Surge Protection', value: '4-10kV', description: 'Lightning safe' },
  { icon: Droplets, title: 'IP Rating', value: 'IP65-IP67', description: 'Weatherproof' },
  { icon: Boxes, title: 'Material Build', value: 'Aluminium', description: 'Corrosion resistant' },
  { icon: Award, title: 'Warranty', value: '3-5 Years', description: 'Extended coverage' },
  { icon: Clock, title: 'Lifespan', value: '50,000hrs', description: 'Long lasting' },
];

export function TechnicalSpecs() {
  return (
    <section id="innovations" className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl text-white mb-5 font-bold text-[48px]">Engineering Precision</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">Superior performance backed by cutting-edge technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="text-3xl text-white mb-2" dangerouslySetInnerHTML={{ __html: spec.value }} />
                  <h3 className="text-white mb-2 text-sm uppercase tracking-wide">{spec.title}</h3>
                  <p className="text-gray-400 text-xs">{spec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}