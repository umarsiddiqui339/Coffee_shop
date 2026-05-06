import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Users, Wifi, Music, Coffee, Clock, Calendar, ChevronRight, Maximize2 } from 'lucide-react';

const Spaces = () => {
  const [selectedSpace, setSelectedSpace] = useState<any>(null);

  const spaces = [
    {
      id: 1,
      name: "The Main Lounge",
      capacity: "Up to 50 guests",
      area: "2,500 sq ft",
      features: ["Marble bar", "Floor-to-ceiling windows", "Acoustic sound system", "Custom lighting"],
      description: "Our flagship space features a stunning marble bar, floor-to-ceiling windows overlooking Mercer Street, and a custom acoustic system that creates the perfect ambient atmosphere for conversation or deep work.",
      image: "https://images.unsplash.com/photo-1534088568595-a310f6492f81?w=1200&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1534088568595-a310f6492f81?w=800",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
      ],
      amenities: ["Free WiFi", "Power outlets", "Premium seating", "Coffee bar access"]
    },
    {
      id: 2,
      name: "The Tasting Room",
      capacity: "Up to 12 guests",
      area: "800 sq ft",
      features: ["Private cupping lab", "Sommelier service", "Projector for events", "Soundproofed"],
      description: "An intimate space designed for our flight tastings and private events. Features a professional cupping lab where our head roaster guides you through the nuances of single-origin coffees.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800"
      ],
      amenities: ["Private booking", "Expert guide", "Custom playlist", "Wifi & projector"]
    },
    {
      id: 3,
      name: "The Rooftop Terrace",
      capacity: "Up to 80 guests",
      area: "3,200 sq ft",
      features: ["Fire pits", "Retractable roof", "City views", "Outdoor bar"],
      description: "Seasonal outdoor space with panoramic city views. Heated during winter, shaded in summer. Perfect for evening events or weekend afternoon coffee with a view.",
      image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=1200&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=800",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800"
      ],
      amenities: ["Heated seating", "Weather protected", "City views", "Full bar"]
    },
    {
      id: 4,
      name: "The Library",
      capacity: "Up to 20 guests",
      area: "1,200 sq ft",
      features: ["Curated book collection", "Fireplace", "Leather seating", "Low lighting"],
      description: "A quiet sanctuary inspired by private libraries. Dark wood, leather armchairs, and a curated collection of coffee literature and art books. The perfect escape for focused work or quiet reading.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format",
      gallery: [
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800"
      ],
      amenities: ["Quiet zone", "Free reading", "Fireplace", "USB ports"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Video Section */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/02/27/32679-395576114_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-accent text-sm tracking-[0.3em] block mb-6">OUR SPACES</span>
            <h1 className="text-6xl md:text-8xl font-light mb-6">Where Atmosphere<br />Meets Artistry</h1>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              Each space designed for a unique coffee experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spaces Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="relative group cursor-pointer" onClick={() => setSelectedSpace(space)}>
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={space.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md rounded-full px-3 py-1">
                  <span className="text-accent text-xs">{space.capacity}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-accent text-sm tracking-[0.2em]">SPACE 0{space.id}</span>
                <h2 className="text-4xl md:text-5xl font-light mt-2 mb-4">{space.name}</h2>
                <p className="text-primary/70 leading-relaxed mb-6">{space.description}</p>
                
                <div className="flex gap-6 mb-6">
                  <div>
                    <Users className="w-4 h-4 text-accent mb-1" />
                    <p className="text-xs text-primary/50">Capacity</p>
                    <p className="text-sm">{space.capacity}</p>
                  </div>
                  <div>
                    <Maximize2 className="w-4 h-4 text-accent mb-1" />
                    <p className="text-xs text-primary/50">Area</p>
                    <p className="text-sm">{space.area}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {space.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="bg-[#101010] px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedSpace(space)}
                  className="group flex items-center gap-2 text-accent hover:gap-4 transition-all"
                >
                  Explore space <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking CTA */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format"
            alt="Booking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-4">Book Your Experience</h2>
            <p className="text-xl text-primary/60 mb-8">
              Reserve a table, book a private tasting, or host your next event with us.
            </p>
            <button className="bg-accent text-black px-8 py-3 rounded-full hover:scale-105 transition-transform">
              Reserve Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Space Detail Modal */}
      <AnimatePresence>
        {selectedSpace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpace(null)}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl mx-auto bg-[#0a0a0a] rounded-2xl overflow-hidden"
            >
              <img src={selectedSpace.image} alt={selectedSpace.name} className="w-full h-[400px] object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-light mb-2">{selectedSpace.name}</h3>
                <p className="text-accent mb-4">{selectedSpace.capacity}</p>
                <p className="text-primary/70 mb-6">{selectedSpace.description}</p>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-medium mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSpace.features.map((feature: string, i: number) => (
                      <span key={i} className="bg-[#101010] px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-medium mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedSpace.amenities.map((amenity: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-primary/60">
                        <Coffee className="w-3 h-3 text-accent" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSpace(null)}
                  className="mt-8 w-full py-3 bg-accent text-black rounded-full hover:scale-105 transition-transform"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Spaces;