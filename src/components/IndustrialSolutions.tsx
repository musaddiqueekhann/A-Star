import { Factory, Warehouse, Car, Lightbulb, Home, Zap, Building2, Hotel } from 'lucide-react';

const solutions = [
  {
    name: 'Factories',
    image: 'https://images.unsplash.com/photo-1760460678002-1d47f0414fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Highbay, Floodlights, Panel Lights',
    icon: Factory
  },
  {
    name: 'Warehouses',
    image: 'https://images.unsplash.com/photo-1763593125189-af57705b6583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTg2MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Highbay Lights, Industrial Strips',
    icon: Warehouse
  },
  {
    name: 'Parking Areas',
    image: 'https://images.unsplash.com/photo-1762506168880-098e12ed58d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwYXJlYSUyMGxpZ2h0aW5nJTIwbmlnaHR8ZW58MXx8fHwxNzY1MTkyODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Street Lights, Floodlights, Pole Lights',
    icon: Car
  },
  {
    name: 'Streets',
    image: 'https://images.unsplash.com/photo-1763235851965-9efe071e8bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzdHJlZXQlMjBsaWdodCUyMG1vZGVybnxlbnwxfHx8fDE3NjUxOTI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'LED Street Lights, Solar Street Lights',
    icon: Lightbulb
  },
  {
    name: 'Villas',
    image: 'https://images.unsplash.com/photo-1757439402375-2f2a4ab0dc75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9uJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Garden Lights, Wall Lights, Spotlights',
    icon: Home
  },
  {
    name: 'Stadiums',
    image: 'https://images.unsplash.com/photo-1762445964939-123200d655ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'High-Power Floodlights, Sports Lights',
    icon: Zap
  },
  {
    name: 'Shopping Malls',
    image: 'https://images.unsplash.com/photo-1601661862050-3186484ca3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxOTI4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Panel Lights, Downlights, Strip Lights',
    icon: Building2
  },
  {
    name: 'Hotels & Hospitality',
    image: 'https://images.unsplash.com/photo-1758194090785-8e09b7288199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MzU4NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lights: 'Chandeliers, Downlights, Accent Lights',
    icon: Hotel
  },
];

export function IndustrialSolutions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">Industrial & Commercial Solutions</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Specialized lighting solutions for every industry sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.name}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={solution.image}
                  alt={solution.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors shadow-lg mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">{solution.name}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{solution.lights}</p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors rounded-3xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}