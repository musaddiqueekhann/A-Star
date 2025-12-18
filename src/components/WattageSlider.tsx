import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap, Package, Star } from 'lucide-react';

const wattages = [
  { value: '5W', products: ['LED Panel', 'LED Bulb'] },
  { value: '7W', products: ['Downlight', 'LED Panel'] },
  { value: '9W', products: ['LED Bulb'] },
  { value: '10W', products: ['Downlight', 'LED Panel', 'LED Tube Light'] },
  { value: '12W', products: ['Downlight', 'LED Panel', 'LED Bulb', 'LED Tube Light'] },
  { value: '15W', products: ['Downlight', 'LED Panel', 'LED Bulb'] },
  { value: '18W', products: ['LED Bulb'] },
  { value: '20W', products: ['Downlight', 'LED Panel', 'LED Bulb', 'LED Tube Light'] },
  { value: '24W', products: ['LED Panel'] },
  { value: '25W', products: ['LED Tube Light'] },
  { value: '30W', products: ['Downlight', 'LED Bulb', 'Tube Light Diffuser'] },
  { value: '40W', products: ['Downlight', 'LED Bulb', 'Tube Light Diffuser'] },
  { value: '50W', products: ['Floodlight', 'Downlight', 'LED Bulb', 'Tube Light Diffuser'] },
  { value: '60W', products: ['LED Bulb', 'Tube Light Diffuser'] },
  { value: '80W', products: ['Tube Light Diffuser'] },
  { value: '100W', products: ['Floodlight', 'High Bay Light', 'Street Light', 'LED Bulb', 'Solar Floodlight', 'Portable Outdoor Light'] },
  { value: '120W', products: ['Tube Light Diffuser'] },
  { value: '150W', products: ['Floodlight', 'High Bay Light', 'Street Light', 'LED Bulb', 'Tube Light Diffuser'] },
  { value: '200W', products: ['Floodlight', 'High Bay Light', 'Street Light', 'LED Bulb', 'Solar Floodlight', 'Solar Emergency Light', 'Portable Outdoor Light'] },
  { value: '250W', products: ['Street Light'] },
  { value: '300W', products: ['Floodlight', 'High Bay Light', 'Street Light', 'Solar Floodlight', 'Portable Outdoor Light'] },
  { value: '400W', products: ['Floodlight', 'High Bay Light', 'Street Light', 'Solar Floodlight', 'Solar Street Light', 'Solar Emergency Light'] },
  { value: '600W', products: ['Floodlight', 'Solar Floodlight', 'Solar Street Light'] },
  { value: '800W', products: ['Floodlight', 'Solar Floodlight', 'Solar Street Light', 'Solar Emergency Light'] },
  { value: '1000W', products: ['Floodlight', 'Solar Floodlight', 'Solar Street Light'] },
  { value: '1500W', products: ['Floodlight', 'Solar Floodlight', 'Solar Street Light'] },
  { value: '2000W', products: ['Floodlight', 'Solar Floodlight', 'Solar Street Light'] },
];

export function WattageSlider() {
  const [selectedWattage, setSelectedWattage] = useState('50W');
  const sliderRef = useRef<HTMLDivElement>(null);

  const selectedProducts = wattages.find(w => w.value === selectedWattage)?.products || [];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">Choose Your Wattage</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Find the perfect power rating for your lighting needs
          </p>
        </div>

        {/* Wattage Selector - Enhanced */}
        <div className="mb-16">
          <div className="relative bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <button className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all flex-shrink-0 border border-blue-100" onClick={scrollLeft}>
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </button>

              <div className="flex gap-3 flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={sliderRef}>
                {wattages.map((watt) => (
                  <button
                    key={watt.value}
                    onClick={() => setSelectedWattage(watt.value)}
                    className={`group relative px-5 py-3 rounded-xl transition-all duration-300 flex-shrink-0 overflow-hidden ${
                      selectedWattage === watt.value
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-500/30 scale-105'
                        : 'bg-gradient-to-br from-gray-50 to-white text-gray-700 hover:from-blue-50 hover:to-white hover:text-blue-600 shadow-md hover:shadow-lg hover:scale-102 border border-gray-200'
                    }`}
                  >
                    {selectedWattage === watt.value && (
                      <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                    )}
                    <div className="relative flex items-center gap-2">
                      <Zap className={`w-4 h-4 ${selectedWattage === watt.value ? 'text-yellow-300' : 'text-gray-400 group-hover:text-blue-500'}`} />
                      <span className="font-semibold text-sm">{watt.value}</span>
                    </div>
                    {selectedWattage === watt.value && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-blue-700 fill-blue-700" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all flex-shrink-0 border border-blue-100" onClick={scrollRight}>
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products - Enhanced */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl text-gray-900">
                  Recommended Products
                </h3>
                <p className="text-gray-500">
                  Perfect solutions for <span className="text-blue-600 font-semibold">{selectedWattage}</span> power rating
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedProducts.map((product, index) => (
                <div
                  key={product}
                  className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                      {selectedWattage}
                    </div>
                    <h4 className="text-xl text-gray-900">{product}</h4>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                    <span className="text-sm text-gray-500">View Details</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedProducts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">No products available for this wattage</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}