import { Fan, ToggleLeft, Plug, Zap } from 'lucide-react';
import { useState } from 'react';

const industrialFans = [
  {
    name: 'Standing Industrial Fan',
    color: 'Black',
    image: '/images/products/StandingFan.png' 
  },
  {
    name: 'Mist Industrial Fan',
    color: 'Black',
    image: '/images/products/MistFan.png' 
  },
  {
    name: 'Wall Industrial Fan',
    color: 'Black',
    image: '/images/products/IndistrialWallFan.png' 
  },
];

const switches = [
  { name: '1 Gang  1 Way', colors: ['White', 'Black', 'Grey'] },
  { name: '1 Gang 2 Way', colors: ['White', 'Black', 'Grey'] },
  { name: '2 Gang 1 Way', colors: ['White', 'Black', 'Grey'] },
  { name: '2 Gang 2 Way', colors: ['White', 'Black', 'Grey'] },
  { name: '3 Gang 1 Way', colors: ['White', 'Black', 'Grey'] },
  { name: '4 Gang 1 Way', colors: ['White', 'Black', 'Grey'] },
];

const sockets = [
  { name: 'Single Socket 3x3', colors: ['White', 'Black', 'Grey'] },
  { name: 'Double Socket 3x6', colors: ['White', 'Black', 'Grey'] },
  { name: 'Satellite Socket 3x3', colors: ['White', 'Black', 'Grey'] },
  { name: 'Telephone Socket 3x3', colors: ['White', 'Black', 'Grey'] },
  { name: 'Internet Socket 3x3', colors: ['White', 'Black', 'Grey'] },
  { name: 'USB Socket 3x3', colors: ['White', 'Black', 'Grey'] },
];

const acSwitches = [
  { name: 'AC Switch 45A 3x3', colors: ['White', 'Black', 'Grey'] },
  { name: 'AC Switch 45A 6x6', colors: ['White', 'Black', 'Grey'] },
];

export function AccessoriesSection() {
  const [showAllSwitches, setShowAllSwitches] = useState(false);
  const [showAllSockets, setShowAllSockets] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">Electrical Accessories</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Complete your installation with premium industrial fans, switches, and sockets
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Fan className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl text-gray-900">Industrial Fans</h3>
              <p className="text-gray-500">High-performance cooling solutions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industrialFans.map((fan) => (
              <div
                key={fan.name}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  src={fan.image}
                  alt={fan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-blue-900/80 transition-all duration-500"></div>
                
                <div className="absolute top-3 right-3 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Fan className="w-4 h-4 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">{fan.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 text-sm">Available in</span>
                      <div className="w-5 h-5 bg-black rounded-full border-2 border-white"></div>
                      <span className="text-white text-sm font-medium">{fan.color}</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <ToggleLeft className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900">Switches</h3>
                <p className="text-gray-500 text-sm">Multiple gang configurations</p>
              </div>
            </div>

            <div className="space-y-4">
              {switches.slice(0, showAllSwitches ? switches.length : 2).map((item) => (
                <div
                  key={item.name}
                  className="group bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow group-hover:bg-blue-50 transition-colors">
                        <ToggleLeft className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg text-gray-900 font-medium">{item.name}</h4>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Get Quote
                    </button>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-600 text-sm font-medium">Colors:</span>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-white rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="White"></div>
                      <div className="w-7 h-7 bg-black rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Black"></div>
                      <div className="w-7 h-7 bg-gray-500 rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Grey"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAllSwitches && switches.length > 2 && (
              <div className="mt-5 pt-5 border-t border-gray-200">
                <button
                  onClick={() => setShowAllSwitches(true)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg font-medium"
                >
                  Load More ({switches.length - 2} more)
                </button>
              </div>
            )}

            {showAllSwitches && (
              <div className="mt-5 pt-5 border-t border-gray-200">
                <button
                  onClick={() => setShowAllSwitches(false)}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                >
                  Show Less
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Plug className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900">Sockets</h3>
                <p className="text-gray-500 text-sm">Complete socket range</p>
              </div>
            </div>

            <div className="space-y-4">
              {sockets.slice(0, showAllSockets ? sockets.length : 2).map((item) => (
                <div
                  key={item.name}
                  className="group bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow group-hover:bg-blue-50 transition-colors">
                        <Plug className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg text-gray-900 font-medium">{item.name}</h4>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors shadow" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Get Quote
                    </button>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-600 text-sm font-medium">Colors:</span>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-white rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="White"></div>
                      <div className="w-7 h-7 bg-black rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Black"></div>
                      <div className="w-7 h-7 bg-gray-500 rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Grey"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAllSockets && sockets.length > 2 && (
              <div className="mt-5 pt-5 border-t border-gray-200">
                <button
                  onClick={() => setShowAllSockets(true)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg font-medium"
                >
                  Load More ({sockets.length - 2} more)
                </button>
              </div>
            )}

            {showAllSockets && (
              <div className="mt-5 pt-5 border-t border-gray-200">
                <button
                  onClick={() => setShowAllSockets(false)}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-50/20 to-white rounded-2xl p-7 shadow-xl border border-gray-100">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-gray-900">AC Switches</h3>
              <p className="text-gray-500 text-sm">Heavy-duty 45A capacity for air conditioning units</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {acSwitches.map((item) => (
              <div
                key={item.name}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg text-gray-900 font-medium">{item.name}</h4>
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow">
                    <span className="text-sm font-bold">45A</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-600 text-sm font-medium">Colors:</span>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-white rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="White"></div>
                    <div className="w-7 h-7 bg-black rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Black"></div>
                    <div className="w-7 h-7 bg-gray-500 rounded-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer" title="Grey"></div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Request Quote
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}