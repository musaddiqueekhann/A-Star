import { ArrowRight, Award, Zap, Shield, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const products = [
  { 
    id: 1,
    category: 'Floodlights',
    name: 'Professional Floodlights',
    wattages: [50, 100, 150, 200, 300, 400, 600, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow', 'RGB', 'Green', 'Blue', 'Pink', 'Red'],
    locations: ['outdoor', 'factory', 'warehouse', 'garden'],
    image: 'https://images.unsplash.com/photo-1711721176205-eb8678885f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBmbG9vZCUyMGxpZ2h0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjUxOTIwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: 'Maximum Illumination',
    mainWattage: '50-2000W'
  },
  { 
    id: 3,
    category: 'Street Lights',
    name: 'LED Street Lights',
    wattages: [100, 150, 200, 250, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
    locations: ['outdoor'],
    image: 'https://images.unsplash.com/photo-1763235851965-9efe071e8bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzdHJlZXQlMjBsaWdodCUyMG1vZGVybnxlbnwxfHx8fDE3NjUxOTI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: 'Smart City Solution',
    mainWattage: '100-400W'
  },
  { 
    id: 5,
    category: 'LED Panels',
    name: 'Ultra Slim LED Panels',
    wattages: [5, 7, 10, 12, 15, 20, 24],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['office', 'home'],
    image: 'https://images.unsplash.com/photo-1731567387449-ca62ad06831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBwYW5lbCUyMGxpZ2h0JTIwb2ZmaWNlfGVufDF8fHx8MTc2NTE5Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: 'Ultra Slim Design',
    mainWattage: '5-24W'
  },
  { 
    id: 9,
    category: 'Solar Floodlights',
    name: 'Solar Powered Floodlights',
    wattages: [100, 200, 300, 400, 600, 800, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White'],
    locations: ['outdoor', 'garden'],
    image: 'https://images.unsplash.com/photo-1759244565958-6a4f485108a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMExFRCUyMG91dGRvb3IlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxOTI4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: 'Eco-Friendly Power',
    mainWattage: '100-2000W'
  },
  { 
    id: 2,
    category: 'High Bay Lights',
    name: 'Industrial High Bay Lights',
    wattages: [100, 150, 200, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
    locations: ['factory', 'warehouse'],
    image: 'https://images.unsplash.com/photo-1720036236697-018370867320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGlnaCUyMGJheSUyMGxpZ2h0JTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2NTMxNTgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: 'Industrial Grade Power',
    mainWattage: '100-400W'
  },
];

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Award Badge - Compact */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/40 rounded-full px-4 py-2 shadow-lg shadow-blue-500/20">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-yellow-900" />
              </div>
              <span className="text-sm text-blue-100">Award-Winning LED Solutions</span>
            </div>
            
            {/* Main Heading - Optimized for Laptop */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl leading-tight font-bold">
                Experience
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  Brilliance
                </span>
                <br />
                with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]">A-STAR</span>
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-xl">
                Professional LED lights for homes, industries & outdoor environments.
              </p>
            </div>

            {/* CTA Buttons - Compact */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/70 hover:scale-105 flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-white/40 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm hover:scale-105">
                Download Catalogue
              </button>
            </div>

            {/* Trust Indicators - Compact */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-gray-400 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>SASO Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>Saudi Arabia Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>Made In China</span>
              </div>
            </div>
          </div>

          {/* Right Side - Optimized Product Showcase */}
          <div className="relative h-[450px] lg:h-[500px]">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              {products.map((_, index) => (
                <div
                  key={index}
                  className={`absolute w-72 h-72 rounded-full blur-3xl transition-all duration-1000 ${
                    index === currentIndex
                      ? 'opacity-40 scale-150'
                      : 'opacity-0 scale-100'
                  }`}
                  style={{
                    background: `radial-gradient(circle, ${
                      index % 2 === 0 ? 'rgba(59,130,246,0.6)' : 'rgba(147,51,234,0.6)'
                    }, transparent)`
                  }}
                />
              ))}
            </div>

            {/* Main Product Display */}
            <div className="relative h-full flex items-center justify-center">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 z-10'
                      : index === (currentIndex - 1 + products.length) % products.length
                      ? 'opacity-0 scale-90 -translate-x-20'
                      : 'opacity-0 scale-90 translate-x-20'
                  }`}
                >
                  {/* Product Image with Enhanced Effects */}
                  <div className="relative h-full flex items-center justify-center">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[380px] h-[380px] rounded-full border-2 border-blue-400/30 animate-pulse" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[340px] h-[340px] rounded-full border border-blue-300/20" />
                    </div>

                    {/* Main Product Card */}
                    <div className="relative w-[320px] lg:w-[360px] h-[400px] lg:h-[440px] group">
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                        />
                        {/* Gradient Overlays for Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
                        
                        {/* Animated Light Beam */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400/50 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-purple-400/30 via-transparent to-transparent opacity-40" />
                      </div>

                      {/* Floating Info Cards */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl shadow-xl border border-blue-400/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-xl">{product.mainWattage}</span>
                        </div>
                      </div>

                      {/* Content at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="space-y-3">
                          {/* Product Name */}
                          <div>
                            <div className="text-blue-300 text-xs mb-1">{product.tagline}</div>
                            <h3 className="text-white text-2xl">{product.name}</h3>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1.5">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full text-xs flex items-center gap-1">
                              <div className="w-1 h-1 bg-blue-400 rounded-full" />
                              {product.ipRatings.join('/')}
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full text-xs flex items-center gap-1">
                              <div className="w-1 h-1 bg-green-400 rounded-full" />
                              {product.colors.length} {product.colors.length === 1 ? 'Color' : 'Colors'}
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full text-xs flex items-center gap-1">
                              <div className="w-1 h-1 bg-purple-400 rounded-full" />
                              {product.wattages.length} Options
                            </div>
                          </div>

                          {/* Quick Action */}
                          <button
                            onClick={() => {
                              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm group"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Premium Border Effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500" />
                    </div>

                    {/* Floating Icons - Smaller */}
                    <div className="absolute top-16 -left-6 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-400/30 animate-bounce">
                      <Zap className="w-6 h-6 text-blue-300" />
                    </div>
                    <div className="absolute bottom-24 -right-6 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <Shield className="w-6 h-6 text-purple-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Slider Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-10 h-2.5 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/30 w-2.5 h-2.5 hover:bg-white/50'
                  }`}
                  aria-label={`View ${product.name}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Smaller */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-all group"
            >
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-all group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}