import { Lightbulb, Mail, Phone, MapPin, Download } from 'lucide-react';

export function Footer() {
  return (
    <footer id="support" className="bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* About Column - Takes more space */}
          <div className="lg:col-span-4">
           
           <div className="flex items-center gap-2 mb-4">
              <img
                src="images/logo/AStarLogo.jpg"
                alt="A-STAR Logo"
                className="w-9 h-9 object-contain"
              />

              <div>
                <div className="text-white font-bold">A-STAR</div>
                <div className="text-[10px] text-blue-300 tracking-wide">
                  LIGHTING TECHNOLOGIES
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Leading manufacturer of premium LED lighting solutions for residential, commercial, and industrial applications.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+966 59 985 8845</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@astarlighting@gmail.com</span>
              </div>
            </div>
          </div>

          {/* All Products Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-3 text-sm">All Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">LED Flood Lights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LED Street Lights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Highbay Lights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Panel Lights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Downlights</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tech Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dealers</a></li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="group flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  <span>Product Catalogue</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  <span>Price List 2025</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  <span>Technical Specs</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  <span>Installation Manual</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <div className="text-gray-400">
            © 2025 <span className="text-white font-semibold">A-STAR</span> Lighting Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}