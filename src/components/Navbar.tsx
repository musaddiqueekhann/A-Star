import { Search, Heart, Lightbulb, X, Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  categoryKey: string;
  wattage?: number;
  ipRating?: string;
  color: string;
  image: string;
  features: string[];
  type?: string;
  switchType?: string;
  socketType?: string;
  acSwitchType?: string;
}

// Complete product catalog - Expanded to cover all specifications
const products: Product[] = [
  // Floodlights - All wattages and colors
  { id: 1, name: 'A-STAR Pro Floodlight 50W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 50, ipRating: 'IP65', color: 'White', image: '/images/products/FloodLight.png', features: ['High Brightness', 'Wide Beam'] },

  { id: 2, name: 'A-STAR Pro Floodlight 100W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 100, ipRating: 'IP66', color: 'White', image: '/images/products/FloodLight.png', features: ['Waterproof', 'Energy Efficient'] },

  { id: 3, name: 'A-STAR Pro Floodlight 150W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 150, ipRating: 'IP67', color: 'Yellow', image: '/images/products/FloodLight.png', features: ['Industrial Grade', 'Long Life'] },

  { id: 4, name: 'A-STAR Pro Floodlight 200W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 200, ipRating: 'IP65', color: 'White', image: '/images/products/FloodLight.png', features: ['Stadium Grade', 'Ultra Bright'] },

  { id: 5, name: 'A-STAR RGB Floodlight 100W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 100, ipRating: 'IP66', color: 'RGB', image: '/images/products/FloodLight.png', features: ['Color Changing', 'Smart Control'] },

  { id: 6, name: 'A-STAR Ultra Floodlight 300W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 300, ipRating: 'IP67', color: 'White', image: '/images/products/FloodLight.png', features: ['Industrial', 'Extreme Power'] },

  { id: 7, name: 'A-STAR Ultra Floodlight 400W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 400, ipRating: 'IP66', color: 'Yellow', image: '/images/products/FloodLight.png', features: ['Heavy Duty', 'Wide Coverage'] },

  { id: 8, name: 'A-STAR Mega Floodlight 600W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 600, ipRating: 'IP67', color: 'White', image: '/images/products/FloodLight.png', features: ['Professional Grade', 'Maximum Output'] },

  { id: 9, name: 'A-STAR Mega Floodlight 1000W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 1000, ipRating: 'IP65', color: 'White', image: '/images/products/FloodLight.png', features: ['Stadium Class', 'Ultra Power'] },

  { id: 10, name: 'A-STAR Mega Floodlight 1500W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 1500, ipRating: 'IP66', color: 'Yellow', image: '/images/products/FloodLight.png', features: ['Industrial Extreme', 'Premium'] },

  { id: 11, name: 'A-STAR Mega Floodlight 2000W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 2000, ipRating: 'IP67', color: 'White', image: '/images/products/FloodLight.png', features: ['Maximum Power', 'Professional'] },

  { id: 12, name: 'A-STAR Green Floodlight 200W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 200, ipRating: 'IP65', color: 'Green', image: '/images/products/FloodLight.png', features: ['Decorative', 'Energy Efficient'] },

  { id: 13, name: 'A-STAR Blue Floodlight 200W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 200, ipRating: 'IP66', color: 'Blue', image: '/images/products/FloodLight.png', features: ['Accent Lighting', 'Modern'] },

  { id: 14, name: 'A-STAR Pink Floodlight 150W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 150, ipRating: 'IP65', color: 'Pink', image: '/images/products/FloodLight.png', features: ['Event Lighting', 'Decorative'] },

  { id: 15, name: 'A-STAR Red Floodlight 200W', category: 'Floodlights', categoryKey: 'floodlights', wattage: 200, ipRating: 'IP67', color: 'Red', image: '/images/products/FloodLight.png', features: ['Safety Lighting', 'High Visibility'] },

  // High Bay Lights
  { id: 20, name: 'A-STAR Industrial High Bay 100W', category: 'High Bay Lights', categoryKey: 'highBayLights', wattage: 100, ipRating: 'IP65', color: 'White', image: '/images/products/HighBay.png', features: ['Warehouse Grade', 'Energy Saving'] },
  { id: 21, name: 'A-STAR Industrial High Bay 150W', category: 'High Bay Lights', categoryKey: 'highBayLights', wattage: 150, ipRating: 'IP66', color: 'White', image: '/images/products/HighBay.png', features: ['High Output', 'Wide Beam'] },
  { id: 22, name: 'A-STAR Industrial High Bay 200W', category: 'High Bay Lights', categoryKey: 'highBayLights', wattage: 200, ipRating: 'IP67', color: 'Yellow', image: '/images/products/HighBay.png', features: ['Industrial', 'Heavy Duty'] },
  { id: 23, name: 'A-STAR Industrial High Bay 300W', category: 'High Bay Lights', categoryKey: 'highBayLights', wattage: 300, ipRating: 'IP65', color: 'White', image: '/images/products/HighBay.png', features: ['Ultra Power', 'Long Life'] },
  { id: 24, name: 'A-STAR Industrial High Bay 400W', category: 'High Bay Lights', categoryKey: 'highBayLights', wattage: 400, ipRating: 'IP66', color: 'Yellow', image: '/images/products/HighBay.png', features: ['Maximum Output', 'Premium Quality'] },

  // Street Lights
  { id: 30, name: 'A-STAR Street Light 100W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 100, ipRating: 'IP65', color: 'White', image: '/images/products/StreetLights.png', features: ['Highway Grade', 'Long Life'] },
  { id: 31, name: 'A-STAR Street Light 150W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 150, ipRating: 'IP66', color: 'Yellow', image: '/images/products/StreetLights.png', features: ['Urban', 'Weather Resistant'] },
  { id: 32, name: 'A-STAR Street Light 200W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 200, ipRating: 'IP67', color: 'White', image: '/images/products/StreetLights.png', features: ['High Performance', 'Smart Control'] },
  { id: 33, name: 'A-STAR Street Light 250W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 250, ipRating: 'IP65', color: 'Yellow', image: '/images/products/StreetLights.png', features: ['Industrial', 'Ultra Bright'] },
  { id: 34, name: 'A-STAR Street Light 300W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 300, ipRating: 'IP66', color: 'White', image: '/images/products/StreetLights.png', features: ['Professional', 'High Power'] },
  { id: 35, name: 'A-STAR Street Light 400W', category: 'Street Lights', categoryKey: 'streetLights', wattage: 400, ipRating: 'IP67', color: 'Yellow', image: '/images/products/StreetLights.png', features: ['Maximum Power', 'Premium'] },
  
  // Downlights
  { id: 40, name: 'A-STAR COB Downlight 7W', category: 'Downlights', categoryKey: 'downlights', wattage: 7, ipRating: 'IP65', color: 'White', image: '/images/products/Downlights.png', features: ['Slim Design', 'Energy Efficient'] },
  { id: 41, name: 'A-STAR COB Downlight 10W', category: 'Downlights', categoryKey: 'downlights', wattage: 10, ipRating: 'IP66', color: 'Off-White', image: '/images/products/Downlights.png', features: ['Focused Beam', 'Modern'] },
  { id: 42, name: 'A-STAR COB Downlight 12W', category: 'Downlights', categoryKey: 'downlights', wattage: 12, ipRating: 'IP67', color: 'Yellow', image: '/images/products/Downlights.png', features: ['Premium', 'High CRI'] },
  { id: 43, name: 'A-STAR COB Downlight 15W', category: 'Downlights', categoryKey: 'downlights', wattage: 15, ipRating: 'IP65', color: 'White', image: '/images/products/Downlights.png', features: ['Bright', 'Long Lasting'] },
  { id: 44, name: 'A-STAR COB Downlight 20W', category: 'Downlights', categoryKey: 'downlights', wattage: 20, ipRating: 'IP66', color: 'Off-White', image: '/images/products/Downlights.png', features: ['Commercial Grade', 'Dimmable'] },
  { id: 45, name: 'A-STAR COB Downlight 30W', category: 'Downlights', categoryKey: 'downlights', wattage: 30, ipRating: 'IP67', color: 'White', image: '/images/products/Downlights.png', features: ['High Output', 'Premium'] },
  { id: 46, name: 'A-STAR COB Downlight 40W', category: 'Downlights', categoryKey: 'downlights', wattage: 40, ipRating: 'IP65', color: 'Yellow', image: '/images/products/Downlights.png', features: ['Industrial', 'Powerful'] },
  { id: 47, name: 'A-STAR COB Downlight 50W', category: 'Downlights', categoryKey: 'downlights', wattage: 50, ipRating: 'IP66', color: 'Off-White', image: '/images/products/Downlights.png', features: ['Maximum Power', 'Professional'] },

  // LED Panels
  { id: 50, name: 'A-STAR LED Panel 5W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 5, ipRating: 'IP20', color: 'White', image: '/images/products/LedPanels.png', features: ['Slim', 'Office Grade'] },
  { id: 51, name: 'A-STAR LED Panel 7W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 7, ipRating: 'IP25', color: 'Off-White', image: '/images/products/LedPanels.png', features: ['Compact', 'Energy Efficient'] },
  { id: 52, name: 'A-STAR LED Panel 10W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 10, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedPanels.png', features: ['Warm Light', 'Modern'] },
  { id: 53, name: 'A-STAR LED Panel 12W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 12, ipRating: 'IP25', color: 'White', image: '/images/products/LedPanels.png', features: ['Bright', 'Uniform Light'] },
  { id: 54, name: 'A-STAR LED Panel 15W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 15, ipRating: 'IP20', color: 'Off-White', image: '/images/products/LedPanels.png', features: ['Premium', 'High Output'] },
  { id: 55, name: 'A-STAR LED Panel 20W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 20, ipRating: 'IP25', color: 'Yellow', image: '/images/products/LedPanels.png', features: ['Commercial', 'Bright'] },
  { id: 56, name: 'A-STAR LED Panel 24W', category: 'LED Panels', categoryKey: 'ledPanels', wattage: 24, ipRating: 'IP20', color: 'White', image: '/images/products/LedPanels.png', features: ['Maximum Power', 'Professional'] },

  // LED Bulbs
  { id: 60, name: 'A-STAR LED Bulb 5W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 5, ipRating: 'IP20', color: 'White', image: '/images/products/LedBulbs.png', features: ['Energy Saving', 'Standard Base'] },
  { id: 61, name: 'A-STAR LED Bulb 9W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 9, ipRating: 'IP25', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['Warm Light', 'E27 Base'] },
  { id: 62, name: 'A-STAR LED Bulb 12W RGB', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 12, ipRating: 'IP20', color: 'RGB', image: '/images/products/LedBulbs.png', features: ['Color Changing', 'Smart'] },
  { id: 63, name: 'A-STAR LED Bulb 15W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 15, ipRating: 'IP25', color: 'White', image: '/images/products/LedBulbs.png', features: ['Bright', 'Long Life'] },
  { id: 64, name: 'A-STAR LED Bulb 18W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 18, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['High Output', 'Dimmable'] },
  { id: 65, name: 'A-STAR LED Bulb 20W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 20, ipRating: 'IP25', color: 'White', image: '/images/products/LedBulbs.png', features: ['Premium', 'Energy Efficient'] },
  { id: 66, name: 'A-STAR LED Bulb 30W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 30, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['Powerful', 'Commercial'] },
  { id: 67, name: 'A-STAR LED Bulb 40W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 40, ipRating: 'IP25', color: 'White', image: '/images/products/LedBulbs.png', features: ['Ultra Bright', 'Industrial'] },
  { id: 68, name: 'A-STAR LED Bulb 50W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 50, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['High Power', 'Premium'] },
  { id: 69, name: 'A-STAR LED Bulb 60W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 60, ipRating: 'IP25', color: 'White', image: '/images/products/LedBulbs.png', features: ['Maximum Output', 'Long Life'] },
  { id: 70, name: 'A-STAR LED Bulb 100W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 100, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['Industrial Grade', 'Extreme Brightness'] },
  { id: 71, name: 'A-STAR LED Bulb 150W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 150, ipRating: 'IP25', color: 'White', image: '/images/products/LedBulbs.png', features: ['Professional', 'Ultra Power'] },
  { id: 72, name: 'A-STAR LED Bulb 200W', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 200, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedBulbs.png', features: ['Maximum Power', 'Heavy Duty'] },
  { id: 73, name: 'A-STAR LED Bulb 15W Green', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 15, ipRating: 'IP20', color: 'Green', image: '/images/products/LedBulbs.png', features: ['Decorative', 'Energy Efficient'] },
  { id: 74, name: 'A-STAR LED Bulb 15W Blue', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 15, ipRating: 'IP25', color: 'Blue', image: '/images/products/LedBulbs.png', features: ['Accent Lighting', 'Modern'] },
  { id: 75, name: 'A-STAR LED Bulb 15W Pink', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 15, ipRating: 'IP20', color: 'Pink', image: '/images/products/LedBulbs.png', features: ['Party Lighting', 'Fun'] },
  { id: 76, name: 'A-STAR LED Bulb 15W Red', category: 'LED Bulbs', categoryKey: 'ledBulbs', wattage: 15, ipRating: 'IP25', color: 'Red', image: '/images/products/LedBulbs.png', features: ['Safety Light', 'High Visibility'] },

  // LED Tube Lights
  { id: 80, name: 'A-STAR LED Tube 10W', category: 'LED Tube Lights', categoryKey: 'ledTubeLights', wattage: 10, ipRating: 'IP20', color: 'White', image: '/images/products/LedTubeLights.png', features: ['T8 Compatible', 'Energy Efficient'] },
  { id: 81, name: 'A-STAR LED Tube 12W', category: 'LED Tube Lights', categoryKey: 'ledTubeLights', wattage: 12, ipRating: 'IP25', color: 'Off-White', image: '/images/products/LedTubeLights.png', features: ['Direct Fit', 'Uniform Light'] },
  { id: 82, name: 'A-STAR LED Tube 20W', category: 'LED Tube Lights', categoryKey: 'ledTubeLights', wattage: 20, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedTubeLights.png', features: ['Warm Light', 'Commercial'] },
  { id: 83, name: 'A-STAR LED Tube 25W', category: 'LED Tube Lights', categoryKey: 'ledTubeLights', wattage: 25, ipRating: 'IP25', color: 'White', image: '/images/products/LedTubeLights.png', features: ['High Output', 'Premium'] },

  // Solar Floodlights
  { id: 90, name: 'A-STAR Solar Floodlight 100W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 100, ipRating: 'IP65', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Solar Powered', 'Motion Sensor'] },
  { id: 91, name: 'A-STAR Solar Floodlight 200W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 200, ipRating: 'IP66', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['High Capacity', 'Smart Control'] },
  { id: 92, name: 'A-STAR Solar Floodlight 300W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 300, ipRating: 'IP67', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Premium Solar', 'All Weather'] },
  { id: 93, name: 'A-STAR Solar Floodlight 400W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 400, ipRating: 'IP65', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Ultra Bright', 'Long Runtime'] },
  { id: 94, name: 'A-STAR Solar Floodlight 600W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 600, ipRating: 'IP66', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Professional Grade', 'Extended Runtime'] },
  { id: 95, name: 'A-STAR Solar Floodlight 800W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 800, ipRating: 'IP67', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Industrial Solar', 'Maximum Power'] },
  { id: 96, name: 'A-STAR Solar Floodlight 1000W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 1000, ipRating: 'IP65', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Ultra Power', 'Premium'] },
  { id: 97, name: 'A-STAR Solar Floodlight 1500W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 1500, ipRating: 'IP66', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Extreme Power', 'Professional'] },
  { id: 98, name: 'A-STAR Solar Floodlight 2000W', category: 'Solar Floodlights', categoryKey: 'solarFloodlights', wattage: 2000, ipRating: 'IP67', color: 'White', image: '/images/products/SolarFloodLight.png', features: ['Maximum Solar Power', 'Heavy Duty'] },

  // Solar Street Lights
  { id: 100, name: 'A-STAR Solar Street Light 400W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 400, ipRating: 'IP65', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['Solar Powered', 'Auto Dim'] },
  { id: 101, name: 'A-STAR Solar Street Light 600W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 600, ipRating: 'IP66', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['High Capacity', 'Smart'] },
  { id: 102, name: 'A-STAR Solar Street Light 800W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 800, ipRating: 'IP67', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['Premium', 'All Weather'] },
  { id: 103, name: 'A-STAR Solar Street Light 1000W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 1000, ipRating: 'IP65', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['Ultra Power', 'Professional'] },
  { id: 104, name: 'A-STAR Solar Street Light 1500W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 1500, ipRating: 'IP66', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['Extreme Power', 'Heavy Duty'] },
  { id: 105, name: 'A-STAR Solar Street Light 2000W', category: 'Solar Street Lights', categoryKey: 'solarStreetLights', wattage: 2000, ipRating: 'IP67', color: 'White', image: '/images/products/SolarStreetLight.png', features: ['Maximum Power', 'Premium'] },
  
  // Industrial Fans
  { id: 110, name: 'A-STAR Standing Fan', category: 'Industrial Fans', categoryKey: 'industrialFans', color: 'Black', type: 'Standing Industrial Fan', image: '/images/products/StandingFan.png', features: ['Heavy Duty', 'Adjustable'] },
  { id: 111, name: 'A-STAR Mist Fan', category: 'Industrial Fans', categoryKey: 'industrialFans', color: 'Black', type: 'Mist Industrial Fan', image: '/images/products/StandingFan.png', features: ['Cooling Mist', 'Industrial'] },
  { id: 112, name: 'A-STAR Wall Fan', category: 'Industrial Fans', categoryKey: 'industrialFans', color: 'Black', type: 'Wall Industrial Fan', image: '/images/products/StandingFan.png', features: ['Space Saving', 'Powerful'] },

  // Switches & Sockets - Complete combinations with all colors
  // 1️⃣ SWITCHES
  { id: 120, name: 'A-STAR 1 Gang 1 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '1 Gang 1 Way', image: '/images/products/Switches.png', features: ['Modern Design', 'Premium Quality', 'Single Control'] },
  { id: 121, name: 'A-STAR 1 Gang 1 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '1 Gang 1 Way', image: '/images/products/Switches.png', features: ['Modern Design', 'Premium Quality', 'Single Control'] },
  { id: 122, name: 'A-STAR 1 Gang 1 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '1 Gang 1 Way', image: '/images/products/Switches.png', features: ['Modern Design', 'Premium Quality', 'Single Control'] },
  { id: 123, name: 'A-STAR 1 Gang 2 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '1 Gang 2 Way', image: '/images/products/Switches.png', features: ['Two-Way Control', 'Durable', 'Versatile'] },
  { id: 124, name: 'A-STAR 1 Gang 2 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '1 Gang 2 Way', image: '/images/products/Switches.png', features: ['Two-Way Control', 'Durable', 'Versatile'] },
  { id: 125, name: 'A-STAR 1 Gang 2 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '1 Gang 2 Way', image: '/images/products/Switches.png', features: ['Two-Way Control', 'Durable', 'Versatile'] },
  { id: 126, name: 'A-STAR 2 Gang 1 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '2 Gang 1 Way', image: '/images/products/Switches.png', features: ['Dual Control', 'Premium', 'Modern'] },
  { id: 127, name: 'A-STAR 2 Gang 1 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '2 Gang 1 Way', image: '/images/products/Switches.png', features: ['Dual Control', 'Premium', 'Modern'] },
  { id: 128, name: 'A-STAR 2 Gang 1 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '2 Gang 1 Way', image: '/images/products/Switches.png', features: ['Dual Control', 'Premium', 'Modern'] },
  { id: 129, name: 'A-STAR 2 Gang 2 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '2 Gang 2 Way', image: '/images/products/Switches.png', features: ['Versatile', 'High Quality', 'Dual Two-Way'] },
  { id: 130, name: 'A-STAR 2 Gang 2 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '2 Gang 2 Way', image: '/images/products/Switches.png', features: ['Versatile', 'High Quality', 'Dual Two-Way'] },
  { id: 131, name: 'A-STAR 2 Gang 2 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '2 Gang 2 Way', image: '/images/products/Switches.png', features: ['Versatile', 'High Quality', 'Dual Two-Way'] },
  { id: 132, name: 'A-STAR 3 Gang 1 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '3 Gang 1 Way', image: '/images/products/Switches.png', features: ['Triple Control', 'Modern', 'Premium'] },
  { id: 133, name: 'A-STAR 3 Gang 1 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '3 Gang 1 Way', image: '/images/products/Switches.png', features: ['Triple Control', 'Modern', 'Premium'] },
  { id: 134, name: 'A-STAR 3 Gang 1 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '3 Gang 1 Way', image: '/images/products/Switches.png', features: ['Triple Control', 'Modern', 'Premium'] },
  { id: 135, name: 'A-STAR 4 Gang 1 Way Switch White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', switchType: '4 Gang 1 Way', image: '/images/products/Switches.png', features: ['Quad Control', 'Premium Build', 'Professional'] },
  { id: 136, name: 'A-STAR 4 Gang 1 Way Switch Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', switchType: '4 Gang 1 Way', image: '/images/products/Switches.png', features: ['Quad Control', 'Premium Build', 'Professional'] },
  { id: 137, name: 'A-STAR 4 Gang 1 Way Switch Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', switchType: '4 Gang 1 Way', image: '/images/products/Switches.png', features: ['Quad Control', 'Premium Build', 'Professional'] },

  // 2️⃣ SOCKETS
  { id: 140, name: 'A-STAR Single Socket 3x3 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', socketType: 'Single Socket 3x3', image: '/images/products/Sockets.png', features: ['Compact', '3x3 Size', 'Standard'] },
  { id: 141, name: 'A-STAR Single Socket 3x3 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', socketType: 'Single Socket 3x3', image: '/images/products/Sockets.png', features: ['Compact', '3x3 Size', 'Standard'] },
  { id: 142, name: 'A-STAR Single Socket 3x3 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', socketType: 'Single Socket 3x3', image: '/images/products/Sockets.png', features: ['Compact', '3x3 Size', 'Standard'] },
  { id: 143, name: 'A-STAR Double Socket 3x6 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', socketType: 'Double Socket 3x6', image: '/images/products/Sockets.png', features: ['Dual Outlet', '3x6 Size', 'Premium'] },
  { id: 144, name: 'A-STAR Double Socket 3x6 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', socketType: 'Double Socket 3x6', image: '/images/products/Sockets.png', features: ['Dual Outlet', '3x6 Size', 'Premium'] },
  { id: 145, name: 'A-STAR Double Socket 3x6 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', socketType: 'Double Socket 3x6', image: '/images/products/Sockets.png', features: ['Dual Outlet', '3x6 Size', 'Premium'] },
  { id: 146, name: 'A-STAR Satellite Socket 3x3 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', socketType: 'Satellite Socket 3x3', image: '/images/products/Sockets.png', features: ['Satellite Connection', 'Modern', 'TV'] },
  { id: 147, name: 'A-STAR Satellite Socket 3x3 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', socketType: 'Satellite Socket 3x3', image: '/images/products/Sockets.png', features: ['Satellite Connection', 'Modern', 'TV'] },
  { id: 148, name: 'A-STAR Satellite Socket 3x3 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', socketType: 'Satellite Socket 3x3', image: '/images/products/Sockets.png', features: ['Satellite Connection', 'Modern', 'TV'] },
  { id: 149, name: 'A-STAR Telephone Socket 3x3 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', socketType: 'Telephone Socket 3x3', image: '/images/products/Sockets.png', features: ['Phone Connection', 'Standard', 'RJ11'] },
  { id: 150, name: 'A-STAR Telephone Socket 3x3 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', socketType: 'Telephone Socket 3x3', image: '/images/products/Sockets.png', features: ['Phone Connection', 'Standard', 'RJ11'] },
  { id: 151, name: 'A-STAR Telephone Socket 3x3 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', socketType: 'Telephone Socket 3x3', image: '/images/products/Sockets.png', features: ['Phone Connection', 'Standard', 'RJ11'] },
  { id: 152, name: 'A-STAR Internet Socket 3x3 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', socketType: 'Internet Socket 3x3', image: '/images/products/Sockets.png', features: ['Network Connection', 'Fast', 'RJ45'] },
  { id: 153, name: 'A-STAR Internet Socket 3x3 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', socketType: 'Internet Socket 3x3', image: '/images/products/Sockets.png', features: ['Network Connection', 'Fast', 'RJ45'] },
  { id: 154, name: 'A-STAR Internet Socket 3x3 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', socketType: 'Internet Socket 3x3', image: '/images/products/Sockets.png', features: ['Network Connection', 'Fast', 'RJ45'] },
  
  // 3️⃣ AC SWITCHES
 { id: 160, name: 'A-STAR AC Switch 45A 3x3 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', acSwitchType: 'AC Switch 45A 3x3', image: '/images/products/AcSwitch.png', features: ['Heavy Duty', '45A Rating', '3x3', 'Air Conditioner'] },
  { id: 161, name: 'A-STAR AC Switch 45A 3x3 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', acSwitchType: 'AC Switch 45A 3x3', image: '/images/products/AcSwitch.png', features: ['Heavy Duty', '45A Rating', '3x3', 'Air Conditioner'] },
  { id: 162, name: 'A-STAR AC Switch 45A 3x3 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', acSwitchType: 'AC Switch 45A 3x3', image: '/images/products/AcSwitch.png', features: ['Heavy Duty', '45A Rating', '3x3', 'Air Conditioner'] },

  { id: 163, name: 'A-STAR AC Switch 45A 6x6 White', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'White', acSwitchType: 'AC Switch 45A 6x6', image: '/images/products/AcSwitch.png', features: ['Industrial Grade', '45A Rating', '6x6', 'Heavy Load'] },
  { id: 164, name: 'A-STAR AC Switch 45A 6x6 Black', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Black', acSwitchType: 'AC Switch 45A 6x6', image: '/images/products/AcSwitch.png', features: ['Industrial Grade', '45A Rating', '6x6', 'Heavy Load'] },
  { id: 165, name: 'A-STAR AC Switch 45A 6x6 Grey', category: 'Switches & Sockets', categoryKey: 'switchesAndSockets', color: 'Grey', acSwitchType: 'AC Switch 45A 6x6', image: '/images/products/AcSwitch.png', features: ['Industrial Grade', '45A Rating', '6x6', 'Heavy Load'] },

  // Portable Outdoor Lights
  { id: 170, name: 'A-STAR Portable Light 100W', category: 'Portable Outdoor Lights', categoryKey: 'portableOutdoorLights', wattage: 100, ipRating: 'IP65', color: 'White', image: '/images/products/PortableOutdoorLight.png', features: ['Rechargeable', 'Portable'] },
  { id: 171, name: 'A-STAR Portable Light 200W', category: 'Portable Outdoor Lights', categoryKey: 'portableOutdoorLights', wattage: 200, ipRating: 'IP67', color: 'White', image: '/images/products/PortableOutdoorLight.png', features: ['High Power', 'Work Light'] },
  { id: 172, name: 'A-STAR Portable Light 300W', category: 'Portable Outdoor Lights', categoryKey: 'portableOutdoorLights', wattage: 300, ipRating: 'IP65', color: 'White', image: '/images/products/PortableOutdoorLight.png', features: ['Ultra Bright', 'Emergency'] },

  // Solar Emergency Lights
  { id: 180, name: 'A-STAR Solar Emergency Light 200W', category: 'Solar Emergency Lights', categoryKey: 'solarEmergencyLights', wattage: 200, ipRating: 'IP65', color: 'White', image: '/images/products/SolarEmergencyLight.png', features: ['Solar Powered', 'Emergency Backup'] },
  { id: 181, name: 'A-STAR Solar Emergency Light 400W', category: 'Solar Emergency Lights', categoryKey: 'solarEmergencyLights', wattage: 400, ipRating: 'IP65', color: 'Off-White', image: '/images/products/SolarEmergencyLight.png', features: ['High Capacity', 'Long Runtime'] },
  { id: 182, name: 'A-STAR Solar Emergency Light 800W', category: 'Solar Emergency Lights', categoryKey: 'solarEmergencyLights', wattage: 800, ipRating: 'IP65', color: 'Yellow', image: '/images/products/SolarEmergencyLight.png', features: ['Ultra Power', 'Weather Resistant'] },

  // Tube Light Diffusers
  { id: 190, name: 'A-STAR Tube Light Diffuser 30cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 30, ipRating: 'IP20', color: 'White', image: '/images/products/LedDiffuser.png', features: ['Diffused Light', 'Easy Install'] },
  { id: 191, name: 'A-STAR Tube Light Diffuser 40cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 40, ipRating: 'IP25', color: 'Off-White', image: '/images/products/LedDiffuser.png', features: ['Premium Quality', 'Uniform Light'] },
  { id: 192, name: 'A-STAR Tube Light Diffuser 50cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 50, ipRating: 'IP20', color: 'Yellow', image: '/images/products/LedDiffuser.png', features: ['Long Lasting', 'Energy Saving'] },
  { id: 193, name: 'A-STAR Tube Light Diffuser 60cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 60, ipRating: 'IP25', color: 'White', image: '/images/products/LedDiffuser.png', features: ['Commercial Grade', 'High Output'] },
  { id: 194, name: 'A-STAR Tube Light Diffuser 80cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 80, ipRating: 'IP20', color: 'Off-White', image: '/images/products/LedDiffuser.png', features: ['Industrial', 'Bright'] },
  { id: 195, name: 'A-STAR Tube Light Diffuser 120cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 120, ipRating: 'IP25', color: 'Yellow', image: '/images/products/LedDiffuser.png', features: ['Extended Length', 'Premium'] },
  { id: 196, name: 'A-STAR Tube Light Diffuser 150cm', category: 'Tube Light Diffusers', categoryKey: 'tubeLightDiffusers', wattage: 150, ipRating: 'IP20', color: 'White', image: '/images/products/LedDiffuser.png', features: ['Maximum Length', 'Professional'] },

 ];

// Comprehensive product database - EXACT match to provided specifications
const productsDatabase = {
  floodlights: {
    name: 'Floodlights',
    wattages: [50, 100, 150, 200, 300, 400, 600, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow', 'RGB', 'Green', 'Blue', 'Pink', 'Red'],
  },
  highBayLights: {
    name: 'High Bay Lights',
    wattages: [100, 150, 200, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
  },
  streetLights: {
    name: 'Street Lights',
    wattages: [100, 150, 200, 250, 300, 400],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Yellow'],
  },
  downlights: {
    name: 'Downlights',
    wattages: [7, 10, 12, 15, 20, 30, 40, 50],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White', 'Off-White', 'Yellow'],
  },
  ledPanels: {
    name: 'LED Panels',
    wattages: [5, 7, 10, 12, 15, 20, 24],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
  },
  ledBulbs: {
    name: 'LED Bulbs',
    wattages: [5, 9, 12, 15, 18, 20, 30, 40, 50, 60, 100, 150, 200],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Yellow', 'RGB', 'Green', 'Blue', 'Pink', 'Red'],
  },
  ledTubeLights: {
    name: 'LED Tube Lights',
    wattages: [10, 12, 20, 25],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
  },
  tubeLightDiffusers: {
    name: 'Tube Light Diffusers',
    wattages: [30, 40, 50, 60, 80, 120, 150],
    ipRatings: ['IP20', 'IP25'],
    colors: ['White', 'Off-White', 'Yellow'],
  },
  solarFloodlights: {
    name: 'Solar Floodlights',
    wattages: [100, 200, 300, 400, 600, 800, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White'],
  },
  solarStreetLights: {
    name: 'Solar Street Lights',
    wattages: [400, 600, 800, 1000, 1500, 2000],
    ipRatings: ['IP65', 'IP66', 'IP67'],
    colors: ['White'],
  },
  solarEmergencyLights: {
    name: 'Solar Emergency Lights',
    wattages: [200, 400, 800],
    ipRatings: ['IP65'],
    colors: ['White', 'Off-White', 'Yellow'],
  },
  portableOutdoorLights: {
    name: 'Portable Outdoor Lights',
    wattages: [100, 200, 300],
    ipRatings: ['IP65', 'IP67'],
    colors: ['White'],
  },
  industrialFans: {
    name: 'Industrial Fans',
    types: ['Standing Industrial Fan', 'Mist Industrial Fan', 'Wall Industrial Fan'],
    colors: ['Black'],
  },
  switchesAndSockets: {
    name: 'Switches & Sockets',
    switches: ['1 Gang 1 Way', '1 Gang 2 Way', '2 Gang 1 Way', '2 Gang 2 Way', '3 Gang 1 Way', '4 Gang 1 Way'],
    sockets: ['Single Socket 3x3', 'Double Socket 3x6', 'Satellite Socket 3x3', 'Telephone Socket 3x3', 'Internet Socket 3x3'],
    acSwitches: ['AC Switch 45A 3x3', 'AC Switch 45A 6x6'],
    colors: ['White', 'Black', 'Grey'],
  },
};

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWattages, setSelectedWattages] = useState<number[]>([]);
  const [selectedIpRatings, setSelectedIpRatings] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSwitches, setSelectedSwitches] = useState<string[]>([]);
  const [selectedSockets, setSelectedSockets] = useState<string[]>([]);
  const [selectedAcSwitches, setSelectedAcSwitches] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedWattages([]);
    setSelectedIpRatings([]);
    setSelectedColors([]);
    setSelectedTypes([]);
    setSelectedSwitches([]);
    setSelectedSockets([]);
    setSelectedAcSwitches([]);
    setSearchQuery('');
  };

  const toggleWattage = (wattage: number) => {
    setSelectedWattages(prev =>
      prev.includes(wattage) ? prev.filter(w => w !== wattage) : [...prev, wattage]
    );
  };

  const toggleIpRating = (rating: string) => {
    setSelectedIpRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleSwitch = (switchType: string) => {
    setSelectedSwitches(prev =>
      prev.includes(switchType) ? prev.filter(s => s !== switchType) : [...prev, switchType]
    );
  };

  const toggleSocket = (socket: string) => {
    setSelectedSockets(prev =>
      prev.includes(socket) ? prev.filter(s => s !== socket) : [...prev, socket]
    );
  };

  const toggleAcSwitch = (acSwitch: string) => {
    setSelectedAcSwitches(prev =>
      prev.includes(acSwitch) ? prev.filter(a => a !== acSwitch) : [...prev, acSwitch]
    );
  };

  const getCurrentCategoryData = () => {
    if (!selectedCategory) return null;
    const key = selectedCategory as keyof typeof productsDatabase;
    return productsDatabase[key];
  };

  const categoryData = getCurrentCategoryData();

  const hasActiveFilters = selectedCategory || selectedWattages.length > 0 || selectedIpRatings.length > 0 || selectedColors.length > 0 || selectedTypes.length > 0 || selectedSwitches.length > 0 || selectedSockets.length > 0 || selectedAcSwitches.length > 0;

  // Filter products based on selected criteria
  const filteredProducts = products.filter(product => {
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
      if (!matchesName && !matchesCategory && !matchesFeatures) {
        return false;
      }
    }
    
    // Filter by category
    if (selectedCategory && product.categoryKey !== selectedCategory) {
      return false;
    }
    
    // Filter by wattage
    if (selectedWattages.length > 0 && product.wattage && !selectedWattages.includes(product.wattage)) {
      return false;
    }
    
    // Filter by IP rating
    if (selectedIpRatings.length > 0 && product.ipRating && !selectedIpRatings.includes(product.ipRating)) {
      return false;
    }
    
    // Filter by color
    if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
      return false;
    }
    
    // Filter by type (for Industrial Fans)
    if (selectedTypes.length > 0 && product.type && !selectedTypes.includes(product.type)) {
      return false;
    }
    
    // Smart filtering for Switches & Sockets category
    if (selectedCategory === 'switchesAndSockets') {
      // If any switch/socket/AC filter is selected, at least one must match
      const hasAnyFilter = selectedSwitches.length > 0 || selectedSockets.length > 0 || selectedAcSwitches.length > 0;
      
      if (hasAnyFilter) {
        const matchesSwitch = selectedSwitches.length > 0 && product.switchType && selectedSwitches.includes(product.switchType);
        const matchesSocket = selectedSockets.length > 0 && product.socketType && selectedSockets.includes(product.socketType);
        const matchesAcSwitch = selectedAcSwitches.length > 0 && product.acSwitchType && selectedAcSwitches.includes(product.acSwitchType);
        
        // Product must match at least one selected filter type
        if (!matchesSwitch && !matchesSocket && !matchesAcSwitch) {
          return false;
        }
      }
    }
    
    return true;
  });

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
      
              <img
                src="/images/logo/AStarLogo.png"
                alt="A-Star Logo"
                className="w-12 h-12 object-contain"
              />

              <div>
                <div className="text-gray-900 tracking-wider font-bold">A-STAR</div>
                <div className="text-[10px] text-gray-500 tracking-wide">
                  LIGHTING SOLUTIONS
                </div>
              </div>
            </div>

            {/* Center Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">HOME</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">ABOUT US</a>
              <a href="#categories" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">CATEGORIES</a>
              <a href="#product-finder" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">PRODUCT FINDER</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">CONTACT</a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 hover:bg-gray-50 rounded-xl transition-all hover:shadow-sm border border-gray-200"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-105" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Advanced Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-start justify-center p-4 pt-10">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl">
                {/* Search Header */}
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                        <Search className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl text-gray-900 font-bold">Product Search</h2>
                        <p className="text-sm text-gray-600">Find the perfect lighting solution</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        handleReset();
                      }}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Quick Search Input */}
                  <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Quick search by product name or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
                    />
                    {hasActiveFilters && (
                      <button
                        onClick={handleReset}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Section */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <h3 className="text-gray-900 font-medium">Filters</h3>
                  </div>

                  {/* Category Selection */}
                  <div className="mb-6">
                    <label className="text-sm text-gray-600 mb-2 block">Product Category</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {Object.entries(productsDatabase).map(([key, data]) => {
                        const isActive = selectedCategory === key;
                        return (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedCategory(isActive ? '' : key);
                              if (!isActive) {
                                setSelectedWattages([]);
                                setSelectedIpRatings([]);
                                setSelectedColors([]);
                                setSelectedTypes([]);
                                setSelectedSwitches([]);
                                setSelectedSockets([]);
                                setSelectedAcSwitches([]);
                              }
                            }}
                            className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                              isActive
                                ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                                : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                            }`}
                          >
                            {data.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Filters based on Category */}
                  {categoryData && (
                    <div className="space-y-6">
                      {/* Wattages */}
                      {'wattages' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            Wattages {selectedWattages.length > 0 && <span className="text-blue-600">({selectedWattages.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.wattages.map((wattage) => {
                              const isSelected = selectedWattages.includes(wattage);
                              return (
                                <button
                                  key={wattage}
                                  onClick={() => toggleWattage(wattage)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {wattage}W
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Types (for Industrial Fans) */}
                      {'types' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            Fan Types {selectedTypes.length > 0 && <span className="text-blue-600">({selectedTypes.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.types.map((type) => {
                              const isSelected = selectedTypes.includes(type);
                              return (
                                <button
                                  key={type}
                                  onClick={() => toggleType(type)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Switches (for Switches & Sockets) */}
                      {'switches' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            Switch Configurations {selectedSwitches.length > 0 && <span className="text-blue-600">({selectedSwitches.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.switches.map((switchType) => {
                              const isSelected = selectedSwitches.includes(switchType);
                              return (
                                <button
                                  key={switchType}
                                  onClick={() => toggleSwitch(switchType)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {switchType}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Sockets (for Switches & Sockets) */}
                      {'sockets' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            Socket Configurations {selectedSockets.length > 0 && <span className="text-blue-600">({selectedSockets.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.sockets.map((socket) => {
                              const isSelected = selectedSockets.includes(socket);
                              return (
                                <button
                                  key={socket}
                                  onClick={() => toggleSocket(socket)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {socket}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* AC Switches (for Switches & Sockets) */}
                      {'acSwitches' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            AC Switch Configurations {selectedAcSwitches.length > 0 && <span className="text-blue-600">({selectedAcSwitches.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.acSwitches.map((acSwitch) => {
                              const isSelected = selectedAcSwitches.includes(acSwitch);
                              return (
                                <button
                                  key={acSwitch}
                                  onClick={() => toggleAcSwitch(acSwitch)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {acSwitch}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* IP Ratings */}
                      {'ipRatings' in categoryData && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            IP Ratings {selectedIpRatings.length > 0 && <span className="text-blue-600">({selectedIpRatings.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.ipRatings.map((rating) => {
                              const isSelected = selectedIpRatings.includes(rating);
                              return (
                                <button
                                  key={rating}
                                  onClick={() => toggleIpRating(rating)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {rating}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Colors */}
                      {categoryData.colors && (
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-3 block">
                            Colors {selectedColors.length > 0 && <span className="text-blue-600">({selectedColors.length} selected)</span>}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {categoryData.colors.map((color) => {
                              const isSelected = selectedColors.includes(color);
                              return (
                                <button
                                  key={color}
                                  onClick={() => toggleColor(color)}
                                  className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                    isSelected
                                      ? 'border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:border-blue-700'
                                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                                  }`}
                                >
                                  {color}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Results Section */}
                <div className="p-6">
                  {!selectedCategory ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Filter className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-gray-900 mb-2 font-medium">Select a Category to Begin</h3>
                      <p className="text-gray-500 text-sm">Choose a product category above to see available options</p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-900 font-medium">
                          {categoryData?.name}
                          {hasActiveFilters && ' - Filtered Results'}
                        </h3>
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all text-sm" onClick={() => { setIsSearchOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                          Get Quote
                        </button>
                      </div>

                      {/* Active Filters Summary */}
                      {(selectedWattages.length > 0 || selectedIpRatings.length > 0 || selectedColors.length > 0 || selectedTypes.length > 0 || selectedSwitches.length > 0 || selectedSockets.length > 0 || selectedAcSwitches.length > 0) && (
                        <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-blue-900 font-medium">Active Filters:</span>
                            {selectedWattages.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedWattages.length} Wattage{selectedWattages.length > 1 ? 's' : ''}
                              </span>
                            )}
                            {selectedIpRatings.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedIpRatings.length} IP Rating{selectedIpRatings.length > 1 ? 's' : ''}
                              </span>
                            )}
                            {selectedColors.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedColors.length} Color{selectedColors.length > 1 ? 's' : ''}
                              </span>
                            )}
                            {selectedTypes.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedTypes.length} Type{selectedTypes.length > 1 ? 's' : ''}
                              </span>
                            )}
                            {selectedSwitches.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedSwitches.length} Switch{selectedSwitches.length > 1 ? 'es' : ''}
                              </span>
                            )}
                            {selectedSockets.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedSockets.length} Socket{selectedSockets.length > 1 ? 's' : ''}
                              </span>
                            )}
                            {selectedAcSwitches.length > 0 && (
                              <span className="px-3 py-1 bg-white text-blue-700 rounded-lg text-sm border border-blue-200">
                                {selectedAcSwitches.length} AC Switch{selectedAcSwitches.length > 1 ? 'es' : ''}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Results Display */}
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 border-2 border-gray-200">
                        {filteredProducts.length === 0 ? (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h4 className="text-gray-900 font-medium mb-2">No Products Match Your Filters</h4>
                            <p className="text-gray-500 text-sm mb-4">Try adjusting your filter selection</p>
                            <button 
                              onClick={handleReset}
                              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                              Clear Filters
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="mb-4 text-sm text-gray-600">
                              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
                              {filteredProducts.map((product) => (
                                <div
                                  key={product.id}
                                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all group overflow-hidden"
                                >
                                  <div className="relative overflow-hidden">
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs">
                                      {product.color}
                                    </div>
                                  </div>
                                  <div className="p-4">
                                    <h4 className="text-gray-900 font-medium mb-2 group-hover:text-blue-600 transition-colors">
                                      {product.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {product.wattage && (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                          {product.wattage}W
                                        </span>
                                      )}
                                      {product.ipRating && (
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                          {product.ipRating}
                                        </span>
                                      )}
                                      {product.type && (
                                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                          {product.type}
                                        </span>
                                      )}
                                      {product.switchType && (
                                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                                          {product.switchType}
                                        </span>
                                      )}
                                      {product.socketType && (
                                        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs">
                                          {product.socketType}
                                        </span>
                                      )}
                                      {product.acSwitchType && (
                                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                                          {product.acSwitchType}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                      {product.features.map((feature, idx) => (
                                        <span
                                          key={idx}
                                          className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
                                        >
                                          {feature}
                                        </span>
                                      ))}
                                    </div>
                                    <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all text-sm" onClick={() => { setIsSearchOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                      Get Quote
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
