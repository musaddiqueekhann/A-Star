import { useState } from 'react';
import { Home, Building2, Factory, Warehouse, Trees, Sun as SunIcon, Search, Zap, Shield, Timer, Check } from 'lucide-react';

const locations = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'office', name: 'Office', icon: Building2 },
  { id: 'factory', name: 'Factory', icon: Factory },
  { id: 'warehouse', name: 'Warehouse', icon: Warehouse },
  { id: 'garden', name: 'Garden', icon: Trees },
  { id: 'outdoor', name: 'Outdoor', icon: SunIcon },
];

const purposes = [
  'Waterproof',
  'High Brightness',
  'Wide Beam',
  'Energy Saving',
];

const colors = [
  { id: 'white', name: 'White', hex: '#FFFFFF', border: '#E5E7EB' },
  { id: 'off-white', name: 'Off-White', hex: '#F5F5DC' },
  { id: 'yellow', name: 'Yellow', hex: '#FCD34D' },
  { id: 'rgb', name: 'RGB', gradient: 'linear-gradient(90deg, #FF0000, #00FF00, #0000FF)' },
  { id: 'green', name: 'Green', hex: '#10B981' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6' },
  { id: 'pink', name: 'Pink', hex: '#EC4899' },
  { id: 'red', name: 'Red', hex: '#EF4444' },
];

// Discrete wattage stops
const WATTAGE_STOPS = [
  5, 7, 9, 10, 12, 15, 18, 20, 24, 25, 30, 40, 50, 60, 80, 100, 
  120, 150, 200, 250, 300, 400, 600, 800, 1000, 1500, 2000
];

const products = [
  {
    id: 1,
    category: 'Floodlights',
    wattages: [50, 100, 150, 200, 300, 400, 600, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow', 'RGB', 'Green', 'Blue', 'Pink', 'Red'],
    locations: ['outdoor', 'factory', 'warehouse', 'garden'],
    choosePurpose: ['Waterproof', 'High Brightness', 'Wide Beam', 'Energy Saving'],
    image: '/images/products/FloodLight.png'
  },
  {
    id: 2,
    category: 'High Bay Lights',
    wattages: [100, 150, 200, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
    locations: ['factory', 'warehouse'],
    choosePurpose: ['High Brightness', 'Wide Beam', 'Energy Saving'],
    image: '/images/products/HighBay.png'
  },
  {
    id: 3,
    category: 'Street Lights',
    wattages: [100, 150, 200, 250, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
    locations: ['outdoor'],
    choosePurpose: ['Waterproof', 'High Brightness', 'Energy Saving'],
    image: '/images/products/StreetLights.png'
  },
  {
    id: 4,
    category: 'Downlights',
    wattages: [7, 10, 12, 15, 20, 30, 40, 50],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['home', 'office'],
    choosePurpose: ['Energy Saving', 'Wide Beam'],
    image: '/images/products/Downlights.png'
  },
  {
    id: 5,
    category: 'LED Panels',
    wattages: [5, 7, 10, 12, 15, 20, 24],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['office', 'home'],
    choosePurpose: ['Energy Saving', 'Wide Beam'],
    image: '/images/products/LedPanels.png'
  },
  {
    id: 6,
    category: 'LED Bulbs',
    wattages: [5, 9, 12, 15, 18, 20, 30, 40, 50, 60, 100, 150, 200],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Yellow', 'RGB', 'Green', 'Blue', 'Pink', 'Red'],
    locations: ['home', 'office', 'garden', 'outdoor'],
    choosePurpose: ['Energy Saving', 'High Brightness'],
    image: '/images/products/LedBulbs.png'
  },
  {
    id: 7,
    category: 'LED Tube Lights',
    wattages: [10, 12, 20, 25],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['home', 'office', 'factory'],
    choosePurpose: ['Energy Saving', 'High Brightness'],
    image: '/images/products/LedTubeLights.png'
  },
  {
    id: 8,
    category: 'Tube Light Diffusers',
    sizes: [30, 40, 50, 60, 80, 120, 150],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['home', 'office'],
    choosePurpose: ['Wide Beam'],
    image: '/images/products/LedDiffuser.png'
  },
  {
    id: 9,
    category: 'Solar Floodlights',
    wattages: [100, 200, 300, 400, 600, 800, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White'],
    locations: ['outdoor', 'garden'],
    choosePurpose: ['Waterproof', 'High Brightness', 'Energy Saving'],
    image: '/images/products/SolarFloodLight.png'
  },
  {
    id: 10,
    category: 'Solar Street Lights',
    wattages: [400, 600, 800, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White'],
    locations: ['outdoor'],
    choosePurpose: ['Waterproof', 'High Brightness', 'Energy Saving'],
    image: '/images/products/SolarStreetLight.png'
  },
  {
    id: 11,
    category: 'Solar Emergency Lights',
    wattages: [200, 400, 800],
    ipRatings: ['IP65'],
    colors: ['White', 'Off-White', 'Yellow'],
    locations: ['home', 'outdoor'],
    choosePurpose: ['Energy Saving', 'High Brightness'],
    image: '/images/products/SolarEmergencyLight.png'
  },
  {
    id: 12,
    category: 'Portable Outdoor Lights',
    wattages: [100, 200, 300],
    ipRatings: ['IP65', 'IP67'],
    colors: ['White'],
    locations: ['outdoor', 'garden'],
    choosePurpose: ['Waterproof', 'High Brightness'],
    image: '/images/products/PortableOutdoorLight.png'
  }
];


export function ProductFinder() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [wattageIndex, setWattageIndex] = useState(15); // Default to 100W (index 15)
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const wattage = WATTAGE_STOPS[wattageIndex];

  // Get available wattages based on selected location
  const getAvailableWattages = () => {
    if (!selectedLocation) return WATTAGE_STOPS;
    
    const matchingProducts = products.filter(p => p.locations.includes(selectedLocation));
    const allWattages = new Set<number>();
    
    matchingProducts.forEach(product => {
      if (product.wattages) {
        product.wattages.forEach(w => allWattages.add(w));
      }
      if (product.sizes) {
        product.sizes.forEach(s => allWattages.add(s));
      }
    });
    
    // Filter WATTAGE_STOPS to only include available wattages
    return WATTAGE_STOPS.filter(w => allWattages.has(w));
  };

  // Get available purposes based on location and wattage
  const getAvailablePurposes = () => {
    const matchingProducts = products.filter(product => {
      const locationMatch = !selectedLocation || product.locations.includes(selectedLocation);
      const wattageMatch = !product.wattages || product.wattages.includes(wattage) || 
        (product.sizes && product.sizes.includes(wattage)) ||
        product.wattages.some(w => Math.abs(w - wattage) <= 50);
      return locationMatch && wattageMatch;
    });
    
    const allPurposes = new Set<string>();
    matchingProducts.forEach(product => {
      product.choosePurpose.forEach(p => allPurposes.add(p));
    });
    
    return purposes.filter(p => allPurposes.has(p));
  };

  // Get available colors based on location, wattage, and purposes
  const getAvailableColors = () => {
    const matchingProducts = products.filter(product => {
      const locationMatch = !selectedLocation || product.locations.includes(selectedLocation);
      const wattageMatch = !product.wattages || product.wattages.includes(wattage) || 
        (product.sizes && product.sizes.includes(wattage)) ||
        product.wattages.some(w => Math.abs(w - wattage) <= 50);
      const purposeMatch = selectedPurposes.length === 0 || 
        selectedPurposes.some(purpose => product.choosePurpose.includes(purpose));
      return locationMatch && wattageMatch && purposeMatch;
    });
    
    const allColors = new Set<string>();
    matchingProducts.forEach(product => {
      product.colors.forEach(c => allColors.add(c));
    });
    
    return colors.filter(color => 
      Array.from(allColors).some(c => 
        c.toLowerCase().replace('-', '') === color.name.toLowerCase().replace('-', '')
      )
    );
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    // Reset subsequent selections when location changes
    // Find a valid wattage index for the new location
    const newAvailableWattages = getAvailableWattagesForLocation(locationId);
    const defaultWattageIndex = Math.floor(newAvailableWattages.length / 2);
    setWattageIndex(WATTAGE_STOPS.indexOf(newAvailableWattages[defaultWattageIndex]));
    setSelectedPurposes([]);
    setSelectedColor('');
    setCurrentStep(2); // Auto advance to step 2
  };

  // Helper to get available wattages for a specific location
  const getAvailableWattagesForLocation = (locationId: string) => {
    const matchingProducts = products.filter(p => p.locations.includes(locationId));
    const allWattages = new Set<number>();
    
    matchingProducts.forEach(product => {
      if (product.wattages) {
        product.wattages.forEach(w => allWattages.add(w));
      }
      if (product.sizes) {
        product.sizes.forEach(s => allWattages.add(s));
      }
    });
    
    return WATTAGE_STOPS.filter(w => allWattages.has(w));
  };

  const handleWattageSelect = (index: number) => {
    setWattageIndex(index);
    // Reset subsequent selections when wattage changes
    setSelectedPurposes([]);
    setSelectedColor('');
    setCurrentStep(3); // Auto advance to step 3
  };

  const togglePurpose = (purpose: string) => {
    const newPurposes = selectedPurposes.includes(purpose)
      ? selectedPurposes.filter(p => p !== purpose)
      : [...selectedPurposes, purpose];
    setSelectedPurposes(newPurposes);
    // Reset color when purposes change
    setSelectedColor('');
    if (newPurposes.length > 0 && currentStep === 3) {
      setCurrentStep(4); // Auto advance to step 4
    }
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    setCurrentStep(5); // Auto advance to show button
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
    setShowResults(false);
    // Reset subsequent selections when editing a step
    if (step === 1) {
      setWattageIndex(15);
      setSelectedPurposes([]);
      setSelectedColor('');
    } else if (step === 2) {
      setSelectedPurposes([]);
      setSelectedColor('');
    } else if (step === 3) {
      setSelectedColor('');
    }
  };

  const handleShowProducts = () => {
    setShowResults(true);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('product-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Filter products based on selections
  const filteredProducts = products.filter(product => {
    // Location filter
    const locationMatch = !selectedLocation || product.locations.includes(selectedLocation);
    
    // Wattage filter - check if selected wattage is in product's wattages array
    const wattageMatch = !product.wattages || product.wattages.includes(wattage) || 
      product.wattages.some(w => Math.abs(w - wattage) <= 50);
    
    // Color filter - check if selected color is available
    const colorMatch = !selectedColor || product.colors.some(c => 
      c.toLowerCase().replace('-', '') === selectedColor.toLowerCase().replace('-', '')
    );
    
    // Purpose filter - check if any selected purpose matches the product's choosePurpose array
    const purposeMatch = selectedPurposes.length === 0 || 
      selectedPurposes.some(purpose => product.choosePurpose.includes(purpose));
    
    return locationMatch && wattageMatch && colorMatch && purposeMatch;
  });

  // Helper function to get color config
  const getColorConfig = (colorName: string) => {
    return colors.find(c => c.name === colorName);
  };

  const availableWattages = getAvailableWattages();
  const availablePurposes = getAvailablePurposes();
  const availableColors = getAvailableColors();

  return (
    <section id="product-finder" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-gray-900 mb-4 font-bold">Product Finder</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Discover the perfect LED solution tailored to your requirements</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 lg:p-8 space-y-8">
          {/* Step 1: Location */}
          <div className={`transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                  selectedLocation
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  {selectedLocation ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <h3 className="text-gray-900 text-lg">Choose Location</h3>
              </div>
              {selectedLocation && currentStep > 1 && (
                <button
                  onClick={() => handleEditStep(1)}
                  className="text-blue-600 hover:text-blue-700 text-xs transition-colors"
                >
                  Edit
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {locations.map((location) => {
                const Icon = location.icon;
                return (
                  <button
                    key={location.id}
                    onClick={() => handleLocationSelect(location.id)}
                    className={`group p-3 rounded-xl transition-all ${
                      selectedLocation === location.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 transition-transform group-hover:scale-110 ${
                      selectedLocation === location.id ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                    }`} />
                    <div className="text-[10px]">{location.name}</div>
                  </button>
                );
              })}</div>
          </div>

          {/* Step 2: Wattage */}
          {currentStep >= 2 && (
            <div className="animate-fadeIn transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                    currentStep > 2
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {currentStep > 2 ? <Check className="w-4 h-4" /> : '2'}
                  </div>
                  <h3 className="text-gray-900 text-lg">Select Wattage</h3>
                </div>
                {currentStep > 2 && (
                  <button
                    onClick={() => handleEditStep(2)}
                    className="text-blue-600 hover:text-blue-700 text-xs transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl text-2xl shadow-lg">
                    {wattage}W
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-xs text-blue-900 mb-2 text-center">Quick Select:</div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {availableWattages.map((w) => (
                      <button
                        key={w}
                        onClick={() => handleWattageSelect(WATTAGE_STOPS.indexOf(w))}
                        className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                          WATTAGE_STOPS[wattageIndex] === w
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                            : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {w}W
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Purpose */}
          {currentStep >= 3 && (
            <div className="animate-fadeIn transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                    selectedPurposes.length > 0 && currentStep > 3
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {selectedPurposes.length > 0 && currentStep > 3 ? <Check className="w-4 h-4" /> : '3'}
                  </div>
                  <h3 className="text-gray-900 text-lg">Choose Purpose</h3>
                  {selectedPurposes.length > 0 && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px]">
                      {selectedPurposes.length} selected
                    </span>
                  )}
                </div>
                {currentStep > 3 && (
                  <button
                    onClick={() => handleEditStep(3)}
                    className="text-blue-600 hover:text-blue-700 text-xs transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {availablePurposes.map((purpose) => (
                  <button
                    key={purpose}
                    onClick={() => togglePurpose(purpose)}
                    className={`p-3 rounded-xl transition-all text-xs ${
                      selectedPurposes.includes(purpose)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    {purpose}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Select Color */}
          {currentStep >= 4 && (
            <div className="animate-fadeIn transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                    selectedColor && currentStep > 4
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {selectedColor && currentStep > 4 ? <Check className="w-4 h-4" /> : '4'}
                  </div>
                  <h3 className="text-gray-900 text-lg">Select Color</h3>
                </div>
                {currentStep > 4 && (
                  <button
                    onClick={() => handleEditStep(4)}
                    className="text-blue-600 hover:text-blue-700 text-xs transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {availableColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorSelect(color.id)}
                    className={`group p-3 rounded-xl transition-all ${
                      selectedColor === color.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <div 
                        className="w-6 h-6 rounded-full shadow-md ring-2 ring-white"
                        style={{
                          background: color.gradient || color.hex,
                          border: color.border ? `2px solid ${color.border}` : 'none'
                        }}
                      />
                      <span className="text-xs">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {currentStep >= 5 && (
            <div className="pt-2 animate-fadeIn transition-all duration-500">
              <button 
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 font-medium group" 
                onClick={handleShowProducts}
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Show Suitable Products ({filteredProducts.length})
              </button>
            </div>
          )}
        </div>

        {/* Product Results */}
        {showResults && (
          <div id="product-results" className="mt-16 animate-fadeIn">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl text-gray-900">Suitable Products</h3>
                <p className="text-gray-500 mt-2">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found matching your criteria</p>
              </div>
              <button 
                onClick={() => setShowResults(false)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Modify Search
              </button>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-blue-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.category} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {product.wattages ? `${product.wattages.length} Wattages` : `${product.sizes?.length || 0} Sizes`}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl text-gray-900 mb-4">{product.category}</h4>
                      
                      <div className="space-y-3 mb-4">
                        {/* Wattage Range */}
                        {product.wattages && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>{product.wattages[0]}W - {product.wattages[product.wattages.length - 1]}W</span>
                          </div>
                        )}
                        {/* Size Range for diffusers */}
                        {product.sizes && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>{product.sizes[0]}cm - {product.sizes[product.sizes.length - 1]}cm</span>
                          </div>
                        )}
                        {/* IP Ratings */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Shield className="w-4 h-4 text-blue-500" />
                          <span>{product.ipRatings.join(', ')}</span>
                        </div>
                        {/* Available Colors */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="flex gap-1.5">
                            {product.colors.slice(0, 5).map((colorName, idx) => {
                              const colorConfig = getColorConfig(colorName);
                              return (
                                <div 
                                  key={idx}
                                  className="w-5 h-5 rounded-full shadow-sm"
                                  style={{
                                    background: colorConfig?.gradient || colorConfig?.hex || '#E5E7EB',
                                    border: colorConfig?.border ? `1px solid ${colorConfig.border}` : '1px solid #E5E7EB'
                                  }}
                                  title={colorName}
                                />
                              );
                            })}
                            {product.colors.length > 5 && (
                              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-600">
                                +{product.colors.length - 5}
                              </div>
                            )}
                          </div>
                          <span className="ml-1">{product.colors.length} Color{product.colors.length !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="text-xl text-gray-900 mb-2">No products found</h4>
                <p className="text-gray-500 mb-6">Try adjusting your search criteria</p>
                <button 
                  onClick={() => setShowResults(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Modify Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}