import { Star, Quote, MapPin, Phone, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Facility Manager',
    company: 'TechCorp Industries',
    rating: 5,
    text: 'A-STAR LED lights transformed our warehouse. Excellent brightness, energy savings, and the quality is outstanding. Highly recommended for industrial use.',
  },
  {
    name: 'Priya Sharma',
    role: 'Architect',
    company: 'Urban Designs Ltd',
    rating: 5,
    text: 'We use A-STAR products in all our commercial projects. The variety, quality, and after-sales support are exceptional. Perfect for modern architecture.',
  },
  {
    name: 'Mohammed Ali',
    role: 'Contractor',
    company: 'BuildRight Construction',
    rating: 5,
    text: 'Reliable products with great warranty. We have installed over 2000 A-STAR lights across multiple projects. Zero complaints from clients.',
  },
  {
    name: 'Anita Desai',
    role: 'Operations Head',
    company: 'RetailMart Chain',
    rating: 5,
    text: 'Switched to A-STAR LED panels for all our stores. The ambiance improved dramatically and our electricity bills dropped by 60%. Exceptional ROI!',
  },
  {
    name: 'Vikram Singh',
    role: 'Project Manager',
    company: 'Smart Infrastructure Pvt Ltd',
    rating: 5,
    text: 'Their street lights are top-notch. We\'ve deployed them across 3 townships. Excellent illumination, weatherproof, and the solar options are brilliant.',
  },
  {
    name: 'Lakshmi Narayan',
    role: 'Hotel Manager',
    company: 'Grand Palace Hotels',
    rating: 5,
    text: 'A-STAR lights gave our hotel a premium look. The warm white options create perfect ambiance. Guests frequently compliment our lighting design.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Factory Owner',
    company: 'Precision Auto Parts',
    rating: 5,
    text: 'Their highbay lights are a game-changer. Our factory floor is now brighter, safer, and more productive. The durability is impressive even in harsh conditions.',
  },
  {
    name: 'Deepa Krishnan',
    role: 'Interior Designer',
    company: 'Elite Interiors Studio',
    rating: 5,
    text: 'I specify A-STAR products for all luxury projects. The color rendering is perfect, and their downlights blend seamlessly into any design theme.',
  },
  {
    name: 'Sanjay Patel',
    role: 'Maintenance Head',
    company: 'Metro Shopping Complex',
    rating: 5,
    text: 'Five years with A-STAR flood lights and zero maintenance issues. The best investment we made. Their technical support team is always responsive.',
  },
  {
    name: 'Kavita Reddy',
    role: 'Real Estate Developer',
    company: 'Skyline Properties',
    rating: 5,
    text: 'We exclusively use A-STAR for all our residential and commercial projects. Buyers appreciate the quality, and warranty claims are practically zero.',
  },
  {
    name: 'Harish Chandra',
    role: 'Electrical Consultant',
    company: 'PowerTech Solutions',
    rating: 5,
    text: 'Recommended A-STAR to over 50 clients. Every single one is satisfied. The technical specs are accurate, installation is smooth, and performance is consistent.',
  },
  {
    name: 'Neha Agarwal',
    role: 'School Principal',
    company: 'Bright Future Academy',
    rating: 5,
    text: 'Our classrooms are brighter and more energy-efficient with A-STAR panel lights. Students can see better, and our power bills reduced by half!',
  },
];

const partners = [
  'TechCorp', 'BuildMart', 'MegaMall', 'GreenVilla', 'UrbanHub', 'Industrial Plus'
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Reset to first slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonials.slice(start, end);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">What Our Customers Say</h2>
            <p className="text-gray-600 text-xl">Trusted by thousands of satisfied clients</p>
          </div>

          <div 
            className="relative px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testimonials
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((testimonial, index) => (
                          <div
                            key={`${testimonial.name}-${index}`}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 relative"
                          >
                            <Quote className="w-12 h-12 text-blue-200 absolute top-6 right-6" />
                            
                            <div className="flex gap-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>

                            <p className="text-gray-700 mb-6">{testimonial.text}</p>

                            <div>
                              <div className="text-gray-900">{testimonial.name}</div>
                              <div className="text-sm text-gray-500">{testimonial.role}</div>
                              <div className="text-sm text-blue-600">{testimonial.company}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              className="-ml-6 absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              className="-mr-6 absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-110"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">Our Partners</h2>
            <p className="text-gray-600 text-xl">Trusted by leading organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mannar Lighting Card */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-white mb-8">Mannar Lighting</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Address</p>
                      <p className="text-white">King Faisal St. Cross 2-3 Al-Khobar<br />Kingdom of Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Phone</p>
                      <p className="text-white">+966 59 985 8845</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ateer Lighting Card */}
            <div className="group relative bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-white mb-8">Atheer Lighting</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-indigo-100 text-sm mb-1">Address</p>
                      <p className="text-white">Al Khobar Commercial Center<br />Eastern Province, Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-indigo-100 text-sm mb-1">Phone</p>
                      <p className="text-white">+966 59 882 2996</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dammam Lighting Card */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl text-white mb-8">Dammam Lighting</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-purple-100 text-sm mb-1">Address</p>
                      <p className="text-white">King Fahd Road, Dammam<br />Eastern Province, Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-200 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-purple-100 text-sm mb-1">Phone</p>
                      <p className="text-white">+966 59 985 8845</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}