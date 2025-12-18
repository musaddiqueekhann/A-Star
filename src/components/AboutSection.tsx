import { Award, Users, Zap, Globe, TrendingUp, Shield, Factory, Lightbulb, CheckCircle, MapPin } from 'lucide-react';

const stats = [
  { number: '2017', label: 'Founded in', icon: Award },
  { number: '2000+', label: 'Products Delivered', icon: Factory },
  { number: '98%', label: 'Client Satisfaction', icon: Users },
  { number: '100+', label: 'Products', icon: Lightbulb },
];

const features = [
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Advanced LED technology delivering up to 80% energy savings compared to traditional lighting solutions.'
  },
  {
    icon: Shield,
    title: 'SASO Certified',
    description: 'Certified by Saudi Standards, Metrology and Quality Organization ensuring compliance with Saudi Arabian regulations.'
  },
  {
    icon: CheckCircle,
    title: 'Saudi Approved',
    description: 'All products approved for use in Saudi Arabia, meeting strict quality and safety standards.'
  },
  {
    icon: MapPin,
    title: 'Made in China',
    description: 'Manufactured in state-of-the-art facilities with advanced production technology and quality control.'
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300 via-blue-200 to-purple-200 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full filter blur-2xl opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full filter blur-2xl opacity-50"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Geometric Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(0deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          {/* Dot Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0.5px, transparent 0.5px)',
            backgroundSize: '80px 80px'
          }}></div>
          {/* Diagonal Lines */}
          <div className="absolute top-0 -left-1/4 w-1/2 h-full rotate-12 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full -rotate-12 bg-gradient-to-l from-transparent via-indigo-500/30 to-transparent blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold mb-4">About A-STAR</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A-STAR Lighting Technologies is a leading manufacturer and supplier of premium LED lighting solutions, 
            serving residential, commercial, and industrial sectors across the nation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 md:p-8 border-2 border-blue-100 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Glowing Orb Effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}></div>
                
                <div className="relative">
                  {/* Icon Container with Pulse Effect */}
                  <div className="relative w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-5">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 bg-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm"></div>
                    <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/60">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Number with Gradient Text */}
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-blue-700 group-hover:to-indigo-700 transition-all duration-500 mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label with Enhanced Styling */}
                  <div className="text-gray-600 text-xs md:text-sm font-semibold tracking-wide group-hover:text-blue-700 transition-colors duration-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1693932038683-7c35401f5307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eSUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc2NTkxNjMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="A-STAR Manufacturing Facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                {/* Light beam effects */}
                <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-sm"></div>
                <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-sm" style={{ animationDelay: '0.5s' }}></div>
                {/* Glowing spots */}
                <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/30 rounded-full blur-2xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <h3 className="text-2xl text-gray-900 font-bold mb-2">
                    State-of-the-Art Manufacturing
                  </h3>
                  <p className="text-gray-600">
                    Advanced production facilities with automated quality control systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl text-gray-900 font-bold mb-4">
                Engineering Tomorrow&apos;s Lighting Solutions
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 15 years of expertise in LED technology, A-STAR has established itself as a 
                trusted partner for businesses and homeowners seeking reliable, energy-efficient lighting solutions. 
                Our commitment to innovation and quality has made us a preferred choice across India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From powerful industrial floodlights to elegant residential fixtures, our comprehensive 
                product range is designed to meet diverse lighting requirements while ensuring exceptional 
                performance and longevity.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-3xl text-gray-900 font-bold text-center mb-12">
            Why Choose A-STAR?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md shadow-blue-500/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg text-gray-900 font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}