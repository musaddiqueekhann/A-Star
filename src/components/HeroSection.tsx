import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const products = [
  {
    name: '600W Flood Light',
    image: 'https://images.unsplash.com/photo-1711721176205-eb8678885f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBmbG9vZCUyMGxpZ2h0JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjUxOTIwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '200W Street Light',
    image: 'https://images.unsplash.com/photo-1763098844800-641758570d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHJlZXQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxOTIwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: '36W Panel Light',
    image: 'https://images.unsplash.com/photo-1648355046055-6ec3a5493888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBwYW5lbCUyMGNlaWxpbmd8ZW58MXx8fHwxNzY1MTkyMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Solar Flood Light',
    image: 'https://images.unsplash.com/photo-1707218528291-a4dcb9a2fffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMG91dGRvb3IlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxOTIwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'COB Spotlight',
    image: 'https://images.unsplash.com/photo-1758306120745-a2fb7b34b6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzcG90bGlnaHQlMjBtb2Rlcm58ZW58MXx8fHwxNzY1MTkyMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-100">Award-Winning LED Solutions</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl text-white">
                Experience Brilliance<br />with <span className="text-blue-400">A-STAR</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Professional LED lights for homes, industries & outdoor environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Explore Products
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                Download Catalogue
              </button>
            </div>
          </div>

          {/* Right Side - Product Slider */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm border border-white/10">
              <img 
                src={products[currentSlide].image} 
                alt={products[currentSlide].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl text-white">{products[currentSlide].name}</h3>
              </div>
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
