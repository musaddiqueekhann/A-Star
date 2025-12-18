import { useState } from 'react';
import { Phone, MessageCircle, Mail, Shield, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_n00h9o3';
      const templateId = 'template_qrjpkxj';
      const publicKey = 'ZPxxFx-gapogN1Xvw';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: formData.product || 'Not specified',
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success notification
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you within 24 hours.',
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly via phone/email.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4 font-bold text-[48px]">Contact & Support</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Connect with our lighting experts and transform your space with premium LED solutions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Contact Info */}
          <div className="space-y-4 h-full flex flex-col">
            {/* Trust Stats Section */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-5 md:p-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden mb-4 md:mb-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">We're Here to Help</h3>
                  <p className="text-blue-100 text-sm md:text-base">Trusted by 500+ businesses across Saudi Arabia</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt;2hrs</div>
                    <div className="text-blue-100 text-xs md:text-sm">Avg. Response Time</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-blue-100 text-xs md:text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-blue-100 text-xs md:text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-blue-200/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-3 md:gap-4 relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs md:text-sm mb-1 font-medium">24/7 Hotline</div>
                  <a href="tel:+966123456789" className="text-blue-600 text-lg md:text-2xl font-bold mb-1 block hover:text-blue-700 transition-colors break-words">+966 59 985 8845</a>
                  <div className="text-gray-600 text-xs md:text-sm">Expert support • Sun-Thu, 9AM-6PM</div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-gradient-to-br from-purple-50/80 via-white/80 to-purple-50/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-purple-200/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-3 md:gap-4 relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs md:text-sm mb-1 font-medium">Email Us</div>
                  <a href="mailto:info@astar-led.com" className="text-purple-600 text-base md:text-lg font-semibold mb-0.5 block hover:text-purple-700 transition-colors break-words">info@astarlighting@gmail.com</a>
                  <a href="mailto:sales@astar-led.com" className="text-purple-500 text-xs md:text-sm block hover:text-purple-600 transition-colors break-words">naqeebnoorali28@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Location/Map Card */}
            <div className="group bg-gradient-to-br from-orange-50/80 via-white/80 to-orange-50/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-orange-200/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-3 md:gap-4 relative z-10 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs md:text-sm mb-1 font-medium">Our Location</div>
                  <a 
                    href="https://maps.google.com/?q=Dammam,Saudi+Arabia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 text-base md:text-lg font-semibold mb-1 block hover:text-orange-700 transition-colors"
                  >
                    Dammam, Saudi Arabia
                  </a>
                  <div className="text-gray-600 text-xs md:text-sm">Visit our showroom • Eastern Province</div>
                </div>
              </div>
              {/* Embedded Map */}
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-orange-200/50 shadow-md h-48 md:h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228882.2654934468!2d49.93829!3d26.43442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361be6a3f6b7a1%3A0x1c1b1e1e1e1e1e1e!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dammam Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-white/95 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-2xl h-full flex flex-col">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 font-bold mb-2">Send Your Inquiry</h3>
              <p className="text-gray-600">We'll respond within 24 hours</p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold text-sm">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white hover:border-blue-300 placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold text-sm">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+966 XXXXX-XXXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white hover:border-blue-300 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold text-sm">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white hover:border-blue-300 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold text-sm">Product Interest</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all bg-white hover:border-blue-300 cursor-pointer"
                >
                  <option>Select product category</option>
                  <option>Floodlights</option>
                  <option>High Bay Lights</option>
                  <option>Street Lights</option>
                  <option>Downlights</option>
                  <option>LED Panels</option>
                  <option>LED Bulbs</option>
                  <option>LED Tube Lights</option>
                  <option>Tube Light Diffusers</option>
                  <option>Solar Floodlights</option>
                  <option>Solar Street Lights</option>
                  <option>Solar Emergency Lights</option>
                  <option>Portable Outdoor Lights</option>
                  <option>Standing Industrial Fan</option>
                  <option>Mist Industrial Fan</option>
                  <option>Switches</option>
                  <option>Sockets</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold text-sm">Message *</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project requirements, quantity needed, and timeline..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none bg-white hover:border-blue-300 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-[1.02] font-semibold text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry →'}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-4 bg-gray-50 rounded-lg py-2 px-4">
                <span className="text-green-500">🔒</span>
                <span>Your information is secure and will never be shared</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}