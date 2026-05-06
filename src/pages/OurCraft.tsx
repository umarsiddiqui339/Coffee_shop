import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, Clock, Heart, Sparkles, Shield, Star, ChevronRight } from 'lucide-react';

const OurCraft = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const craftSteps = [
    {
      number: "01",
      title: "Sourcing",
      description: "We travel to the world's most renowned growing regions, building direct relationships with farmers who share our obsession with quality.",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&auto=format",
      color: "from-amber-900/40"
    },
    {
      number: "02",
      title: "Roasting",
      description: "Each batch is meticulously roasted to highlight the bean's unique character. Our master roasters spend years perfecting the craft.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&auto=format",
      color: "from-orange-900/40"
    },
    {
      number: "03",
      title: "Brewing",
      description: "Precision extraction methods tailored to each bean's profile, ensuring every cup reaches its full potential.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format",
      color: "from-amber-800/40"
    },
    {
      number: "04",
      title: "Service",
      description: "Trained baristas who understand the science and soul behind every extraction, delivering an unforgettable experience.",
      image: "https://images.unsplash.com/photo-1507133750040-4a6f5701d771?w=1200&auto=format",
      color: "from-yellow-900/40"
    }
  ];

  const values = [
    { icon: Award, title: "Excellence", description: "Never compromise on quality" },
    { icon: Clock, title: "Patience", description: "Good coffee takes time" },
    { icon: Heart, title: "Passion", description: "Made with genuine dedication" },
    { icon: Sparkles, title: "Innovation", description: "Pushing boundaries daily" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: `translateY(${y})` }}
        >
          <source src="https://cdn.pixabay.com/video/2023/03/01/152467-804993750_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        <div className="relative h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block"
            >
              Our Craft
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-light mb-6 leading-[1.1]">
              The Art of<br />
              <span className="font-serif italic text-accent">Extraordinary Coffee</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-primary/70 max-w-2xl mx-auto"
            >
              Where science meets artistry in every single cup
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Statement */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <p className="text-accent text-sm tracking-[0.2em] mb-6">OUR PHILOSOPHY</p>
          <h2 className="text-4xl md:text-6xl font-light leading-[1.2] max-w-4xl mx-auto">
            Coffee is not a commodity.
            <span className="font-serif italic text-accent block mt-4">It's a craft.</span>
          </h2>
        </motion.div>

        {/* Craft Journey */}
        <div className="space-y-32">
          {craftSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative group rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <span className="text-6xl font-light text-accent/50">{step.number}</span>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-4xl font-light mb-6">{step.title}</h3>
                  <p className="text-primary/70 leading-relaxed mb-8 text-lg">
                    {step.description}
                  </p>
                  <button className="group flex items-center gap-2 text-accent hover:gap-4 transition-all">
                    Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-3xl font-light text-center mb-16">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#101010] p-8 rounded-2xl text-center group cursor-pointer"
              >
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                <p className="text-primary/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurCraft;