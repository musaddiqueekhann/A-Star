import { Shield, Clock, Zap, Droplets, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRef } from 'react';
import Slider from 'react-slick';

const products = [
  { 
    name: 'Flood Light', 
    category: 'Flood Lights', 
    productCount: 10, 
    availableWattages: [50, 100, 150, 200, 300, 400, 600, 1000, 1500, 2000], 
    rating: 4.9,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/FloodLight.png'
  },
  
  { 
    name: 'High Bay Light', 
    category: 'High Bay Lights', 
    productCount: 5, 
    availableWattages: [100, 150, 200, 300, 400], 
    rating: 4.9,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/HighBay.png'
  },
  
  { 
    name: 'Street Light', 
    category: 'Street Lights', 
    productCount: 6, 
    availableWattages: [100, 150, 200, 250, 300, 400], 
    rating: 4.8,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/StreetLights.png' 
  },
  
  { 
    name: 'Downlight', 
    category: 'Downlights', 
    productCount: 8, 
    availableWattages: [7, 10, 12, 15, 20, 30, 40, 50], 
    rating: 4.7,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/Downlights.png' 
  },
  
  { 
    name: 'Round Insider Panel', 
    category: 'Panel Lights', 
    productCount: 7, 
    availableWattages: [5, 7, 10, 12, 15, 20, 24], 
    rating: 4.8,
    specs: { ip: 'IP20/IP25' },
    image: '/images/products/LedPanels.png'
  },
  
  { 
    name: 'LED Bulb', 
    category: 'LED Bulbs', 
    productCount: 14, 
    availableWattages: [5, 9, 12, 15, 18, 20, 30, 40, 50, 60, 100, 150, 200], 
    rating: 4.7,
    specs: { ip: 'IP20/IP25' },
    image: '/images/products/LedBulbs.png' 
  },
  
  { 
    name: 'LED Tube Light', 
    category: 'LED Tube Lights', 
    productCount: 4, 
    availableWattages: [10, 12, 20, 25], 
    rating: 4.7,
    specs: { ip: 'IP20/IP25' },
    image: '/images/products/LedTubeLights.png'  
  },
  
  { 
    name: 'Tube Light Diffuser', 
    category: 'Tube Light Diffusers', 
    productCount: 7, 
    availableWattages: [30, 40, 50, 60, 80, 120, 150], 
    rating: 4.7,
    specs: { ip: 'IP20/IP25' },
    image: '/images/products/LedDiffuser.png'  
  },
  
  { 
    name: 'Solar Flood Light', 
    category: 'Solar Flood Lights', 
    productCount: 9, 
    availableWattages: [100, 200, 300, 400, 600, 800, 1000, 1500, 2000], 
    rating: 4.6,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/SolarFloodLight.png'
  },
  
  { 
    name: 'Solar Street Light', 
    category: 'Solar Street Lights', 
    productCount: 6, 
    availableWattages: [400, 600, 800, 1000, 1500, 2000], 
    rating: 4.7,
    specs: { ip: 'IP65/IP66/IP67' },
    image: '/images/products/SolarStreetLight.png'
  },
  
  { 
    name: 'Solar Emergency Light', 
    category: 'Solar Emergency Lights', 
    productCount: 3, 
    availableWattages: [200, 400, 800], 
    rating: 4.5,
    specs: { ip: 'IP65' },
    image: '/images/products/SolarEmergencyLight.png'
  },
  
  { 
    name: 'Portable Outdoor Light', 
    category: 'Portable Outdoor Lights', 
    productCount: 3, 
    availableWattages: [100, 200, 300], 
    rating: 4.6,
    specs: { ip: 'IP65/IP67' },
    image: '/images/products/PortableOutdoorLight.png'
  }
];

export function FeaturedProducts() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
        @import url('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');
        
        .featured-products-slider .slick-dots {
          bottom: -50px;
        }
        
        .featured-products-slider .slick-dots li button:before {
          font-size: 12px;
          color: #cbd5e1;
          opacity: 1;
        }
        
        .featured-products-slider .slick-dots li.slick-active button:before {
          color: #2563eb;
          opacity: 1;
        }
        
        .featured-products-slider .slick-slide {
          padding: 10px 0;
        }
      `}</style>
      
      <section id="products" className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-5 font-bold">Featured Products</h2>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Premium LED solutions engineered for excellence and efficiency
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group border border-gray-700"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white" />
            </button>
            
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group border border-gray-700"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white" />
            </button>

            {/* Carousel */}
            <Slider ref={sliderRef} {...settings} className="featured-products-slider">
              {products.map((product) => (
                <div key={product.name} className="px-2 md:px-4">
                  <div className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Wattage Badge */}
                      <div className="absolute top-3 right-3 md:top-5 md:right-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg backdrop-blur-sm">
                        <span className="text-xs md:text-sm font-semibold">{product.productCount} Products</span>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm">
                        {product.category}
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg">
                        <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs md:text-sm text-gray-700">{product.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 lg:p-7">
                      <h3 className="text-gray-900 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Specs Grid */}
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-7">
                        <div className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl hover:bg-blue-50 transition-colors group/spec">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-7 h-7 md:w-9 md:h-9 bg-blue-100 rounded-lg flex items-center justify-center group-hover/spec:bg-blue-600 transition-colors">
                              <Droplets className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover/spec:text-white" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-500">Rating</span>
                          </div>
                          <span className="text-xs md:text-sm text-gray-900">{product.specs.ip}</span>
                        </div>

                        <div className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl hover:bg-blue-50 transition-colors group/spec">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-7 h-7 md:w-9 md:h-9 bg-blue-100 rounded-lg flex items-center justify-center group-hover/spec:bg-blue-600 transition-colors">
                              <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover/spec:text-white" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-500">Wattage</span>
                          </div>
                          <span className="text-xs md:text-sm text-gray-900">
                            {product.availableWattages[0]}W - {product.availableWattages[product.availableWattages.length - 1]}W
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}