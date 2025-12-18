import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Highway Road Lighting',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1763235851965-9efe071e8bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzdHJlZXQlMjBsaWdodCUyMG1vZGVybnxlbnwxfHx8fDE3NjUxOTI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '15km highway illumination with 200W street lights',
  },
  {
    title: 'Shopping Mall Exterior',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1601661862050-3186484ca3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxOTI4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Façade lighting with RGB flood lights and spotlights',
  },
  {
    title: 'Luxury Garden Lighting',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1763865454720-1c0c35badbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Smart solar garden lights with motion sensors',
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1763593125189-af57705b6583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTg2MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '200+ highbay lights for 50,000 sq ft warehouse',
  },
  {
    title: 'Stadium Sports Complex',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1762445964939-123200d655ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-power floodlights for professional sports arena',
  },
  {
    title: 'Corporate Building Facade',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1757439402375-2f2a4ab0dc75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1MTkyODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Architectural lighting with smart control systems',
  },
];

export function ProjectPortfolio() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="w-full bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4 font-bold text-[48px]">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how A-STAR lighting solutions have transformed spaces across diverse industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}