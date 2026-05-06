import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Sun, Droplets, Mountain, Globe, Coffee, Award, ChevronRight } from 'lucide-react';

const Origins = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const origins = [
    {
      name: "Ethiopia Yirgacheffe",
      region: "Yirgacheffe, Ethiopia",
      altitude: "1,700 - 2,200m",
      process: "Washed",
      flavor: "Jasmine, bergamot, honey, lemon zest",
      description: "The birthplace of coffee. Our beans come from smallholder farms where coffee has been cultivated for centuries using traditional methods.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&auto=format",
      mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format",
      stats: { altitude: "1,900m", rainfall: "1,500mm", temp: "18-25°C" }
    },
    {
      name: "Colombia Geisha",
      region: "Cauca, Colombia",
      altitude: "1,800 - 2,100m",
      process: "Natural",
      flavor: "Orange blossom, chocolate, caramel, cherry",
      description: "Grown in the volcanic soils of the Cauca region, these rare Geisha beans are hand-picked and carefully processed to preserve their delicate floral notes.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&auto=format",
      mapImage: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&auto=format",
      stats: { altitude: "2,000m", rainfall: "1,800mm", temp: "16-22°C" }
    },
    {
      name: "Guatemala Antigua",
      region: "Antigua, Guatemala",
      altitude: "1,500 - 1,800m",
      process: "Washed",
      flavor: "Cocoa, butterscotch, cherry, tobacco",
      description: "Surrounded by three volcanoes, the Antigua region produces beans with exceptional complexity and a distinctive smoky sweetness.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format",
      mapImage: "https://images.unsplash.com/photo-1546387903-6d82d07a3d8d?w=800&auto=format",
      stats: { altitude: "1,600m", rainfall: "1,200mm", temp: "19-23°C" }
    },
    {
      name: "Kenya AA",
      region: "Nyeri, Kenya",
      altitude: "1,600 - 2,000m",
      process: "Washed",
      flavor: "Blackcurrant, grapefruit, tomato, spice",
      description: "Bright, complex, and intensely flavorful. These high-altitude beans are known for their wine-like acidity and bold fruit notes.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&auto=format",
      mapImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format",
      stats: { altitude: "1,800m", rainfall: "1,600mm", temp: "15-24°C" }
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${y})` }}
        >
          <source src="https://cdn.pixabay.com/video/2020/10/19/53062-471199630_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
        
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-light mb-4">Global Origins</h1>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              From the world's most coveted growing regions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#0a0a0a] border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Countries", value: "12+" },
              { label: "Farm Partners", value: "47" },
              { label: "Years Sourcing", value: "15" },
              { label: "Direct Trade", value: "100%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-light text-accent">{stat.value}</div>
                <div className="text-xs text-primary/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Origin Stories */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {origins.map((origin, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`mb-32 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={origin.image} 
                    alt={origin.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-accent text-sm font-medium">{origin.region}</span>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-accent text-sm tracking-[0.2em] block mb-4">FEATURED ORIGIN</span>
                <h2 className="text-4xl md:text-5xl font-light mb-4">{origin.name}</h2>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#101010] p-3 rounded-lg">
                    <Mountain className="w-4 h-4 text-accent mb-1" />
                    <p className="text-xs text-primary/50">Altitude</p>
                    <p className="text-sm font-medium">{origin.altitude}</p>
                  </div>
                  <div className="bg-[#101010] p-3 rounded-lg">
                    <Droplets className="w-4 h-4 text-accent mb-1" />
                    <p className="text-xs text-primary/50">Process</p>
                    <p className="text-sm font-medium">{origin.process}</p>
                  </div>
                  <div className="bg-[#101010] p-3 rounded-lg">
                    <Sun className="w-4 h-4 text-accent mb-1" />
                    <p className="text-xs text-primary/50">Temp</p>
                    <p className="text-sm font-medium">{origin.stats.temp}</p>
                  </div>
                </div>

                <p className="text-primary/70 leading-relaxed mb-6">{origin.description}</p>
                
                <div className="mb-6">
                  <p className="text-accent text-sm mb-2">Flavor Notes</p>
                  <div className="flex flex-wrap gap-2">
                    {origin.flavor.split(', ').map((note, i) => (
                      <span key={i} className="bg-white/5 px-3 py-1 rounded-full text-sm">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group flex items-center gap-2 text-accent hover:gap-4 transition-all">
                  Explore this origin <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sustainability Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ethical Sourcing</h2>
            <p className="text-xl text-primary/60 max-w-3xl mx-auto">
              We pay above fair-trade prices, invest in farming communities, 
              and practice sustainable agriculture to protect our planet's future.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Origins;