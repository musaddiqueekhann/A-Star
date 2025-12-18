import { 
  Lightbulb, 
  Lamp, 
  Warehouse, 
  PanelTop, 
  Circle, 
  CircleDot,
  Disc,
  Layers,
  Sun,
  Zap,
  Settings,
  Wind,
  ToggleLeft
} from 'lucide-react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: 'Floodlights', icon: Lightbulb, description: 'High-power outdoor illumination', productCount: 10, image: '/images/products/FloodLight.png' },
  { name: 'High Bay Lights', icon: Warehouse, description: 'Industrial ceiling solutions', productCount: 5, image: '/images/products/HighBay.png' },
  { name: 'Street Lights', icon: Lamp, description: 'Road & municipal lighting', productCount: 6, image: '/images/products/StreetLights.png' },
  { name: 'Downlights', icon: CircleDot, description: 'Recessed ceiling lights', productCount: 8, image: '/images/products/Downlights.png' },
  { name: 'LED Panels', icon: PanelTop, description: 'Slim panel solutions', productCount: 7, image: '/images/products/LedPanels.png' },
  { name: 'LED Bulbs', icon: Circle, description: 'Energy efficient bulbs', productCount: 13, image: '/images/products/LedBulbs.png' },
  { name: 'LED Tube Light', icon: Disc, description: 'Tube light solutions', productCount: 4, image: '/images/products/LedTubeLights.png' },
  { name: 'Tube Light Diffuser', icon: Layers, description: 'Diffuser accessories', productCount: 7, image: '/images/products/LedDiffuser.png' },
  { name: 'Solar Floodlights', icon: Sun, description: 'Solar powered floodlights', productCount: 9, image: '/images/products/SolarFloodLight.png' },
  { name: 'Solar Street Lights', icon: Sun, description: 'Eco-friendly street lights', productCount: 6, image: '/images/products/SolarStreetLight.png' },
  { name: 'Solar Emergency Lights', icon: Zap, description: 'Emergency backup lighting', productCount: 3, image: '/images/products/SolarEmergencyLight.png' },
  { name: 'Portable Outdoor Lights', icon: Lightbulb, description: 'Mobile outdoor lighting', productCount: 3, image: '/images/products/PortableOutdoorLight.png' },
  { name: 'Standing Industrial Fan', icon: Wind, description: 'Heavy duty floor fans', productCount: 1, image: '/images/products/StandingFan.png' },
  { name: 'Mist Industrial Fan', icon: Wind, description: 'Mist cooling fans', productCount: 1, image: '/images/products/MistFan.png' },
  { name: 'Switches', icon: ToggleLeft, description: 'Modern electrical switches', productCount: 8, image: '/images/products/Switches.png' },
  { name: 'Sockets', icon: Circle, description: 'Power outlets & sockets', productCount: 5, image: '/images/products/Sockets.png' },
];

export function CategoryGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 font-bold">Explore Our Product Categories</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Professional LED lighting solutions for every application</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, expanded ? categories.length : 8).map((category, index) => {
            const Icon = category.icon;
            const productCount = category.productCount;
            const isNewlyRevealed = index >= 8 && expanded;
            return (
              <div
                key={category.name}
                className={`group relative h-64 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isNewlyRevealed ? 'animate-slideDown' : ''
                }`}
                style={{ 
                  animationDelay: isNewlyRevealed ? `${(index - 8) * 100}ms` : `${index * 50}ms`
                }}
              >
                {/* Background Image */}
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay - Gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                
                {/* Colored Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Icon Badge - Top Left */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Text Content - Bottom */}
                  <div className="space-y-2">
                    <h3 className="text-white text-2xl group-hover:text-blue-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">{productCount} Products</p>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mt-8">
          <button
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{expanded ? 'Show Less Categories' : 'Show More Categories'}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}