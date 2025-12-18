import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { AboutSection } from './components/AboutSection';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductFinder } from './components/ProductFinder';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { IndustrialSolutions } from './components/IndustrialSolutions';
import { Innovation } from './components/Innovation';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { Testimonials } from './components/Testimonials';
import { WattageSlider } from './components/WattageSlider';
import { AccessoriesSection } from './components/AccessoriesSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors closeButton />
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <Innovation />
      <CategoryGrid />
      <FeaturedProducts />
      <ProductFinder />
      <WattageSlider />
      <TechnicalSpecs />
      <IndustrialSolutions />
      <AccessoriesSection />
      <ProjectPortfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}