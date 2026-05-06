
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Coffee, 
  Zap, 
  Music,
  ChevronRight,
} from 'lucide-react';

// --- Custom Hooks & Utilities ---
const useScrollReveal = (ref: React.RefObject<HTMLElement>, offset: string = "0px") => {
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return isInView;
};

// --- Animation Components ---

// Word-by-word pull-up animation
const WordsPullUp = ({ 
  text, 
  className = "", 
  staggerDelay = 0.08,
  once = true 
}: { 
  text: string; 
  className?: string; 
  staggerDelay?: number;
  once?: boolean;
}) => {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Multi-style pull-up with mixed typography
const WordsPullUpMultiStyle = ({ segments }: { segments: { text: string; style?: string }[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const wordsArray = segments.flatMap(segment => 
    segment.text.split(' ').map(word => ({ word, style: segment.style }))
  );

  return (
    <div ref={ref} className="flex flex-wrap">
      {wordsArray.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.06,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={`mr-[0.25em] inline-block ${item.style === 'serif' ? 'font-serif italic' : ''}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};

// Character-by-character scroll reveal
const ScrollTextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={`${className} leading-relaxed`}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          style={{
            opacity: useTransform(scrollYProgress, [0.2 + i * 0.002, 0.4 + i * 0.002], [0, 1])
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </p>
  );
};

// Staggered card container
const StaggeredCards = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {children}
    </motion.div>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      className={`bg-[#101010] rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- Main Component ---
function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-primary min-h-screen">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30 mix-blend-overlay">
        <div className="w-full h-full bg-noise" />
      </div>

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-screen w-full p-4 md:p-6">
        <div className="relative h-full w-full rounded-3xl overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format"
          >
            <source src="https://cdn.pixabay.com/video/2020/01/28/31799-390439020_large.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
          
          {/* Noise Overlay for Hero */}
          <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay">
            <div className="w-full h-full bg-noise" />
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.9] tracking-tighter">
                  <WordsPullUp text="Noir Brew" staggerDelay={0.12} />
                  <span className="text-accent ml-2"></span>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col gap-6">
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-primary/80 text-lg leading-relaxed font-light"
                >
                  An elevated coffee experience crafted for those who appreciate depth, ritual, and the art of extraction.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-primary text-black w-fit rounded-full px-6 py-3 flex items-center gap-3 text-sm font-medium"
                >
                  Reserve a tasting
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/10 transition-all group-hover:translate-x-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section ref={philosophyRef} className="py-24 px-6 md:px-12 flex justify-center">
        <div className="max-w-6xl w-full bg-[#101010] rounded-3xl p-8 md:p-16">
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] uppercase text-accent/70">Craft & Ritual</span>
          </div>
          
          <div className="text-4xl md:text-6xl leading-[1.2] mb-12">
            <WordsPullUpMultiStyle segments={[
              { text: "Coffee is not a drink,", style: "normal" },
              { text: "it is an experience.", style: "serif" },
              { text: "Every cup tells a story of origin, process, and intention.", style: "normal" }
            ]} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-primary/70">
            <ScrollTextReveal 
              text="Our philosophy is rooted in the belief that exceptional coffee is a confluence of artistry and science. We travel to the world's most renowned growing regions—from the highlands of Ethiopia to the volcanic soils of Guatemala—forging direct relationships with farmers who share our obsession with quality."
              className="text-base leading-relaxed"
            />
            <ScrollTextReveal 
              text="Each bean is meticulously evaluated, roasted to highlight its unique character, and brewed using methods that respect its journey. This is not fast coffee. This is an invitation to slow down, to observe, and to savor the profound depth within every single cup."
              className="text-base leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section ref={experienceRef} className="relative py-24 px-6 md:px-12 min-h-screen overflow-hidden">
        {/* Background Noise Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full bg-noise" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-3xl md:text-5xl font-light mb-2">
              <WordsPullUp text="Precision brewing for refined palates." />
            </div>
            <div className="text-2xl md:text-3xl text-primary/60 font-serif italic">
              <WordsPullUp text="Where craft meets sensory design." staggerDelay={0.05} />
            </div>
          </div>

          <StaggeredCards>
            {/* Card 1: Video */}
            <Card className="relative h-[400px] group overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="https://cdn.pixabay.com/video/2023/03/01/152467-804993750_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <p className="text-white text-xl font-light tracking-wide">Every detail matters.</p>
              </div>
            </Card>

            {/* Card 2: Origin Selection */}
            <Card className="p-6 flex flex-col justify-between h-[400px]">
              <div>
                <span className="text-4xl font-light text-accent/40">01</span>
                <h3 className="text-2xl font-medium mt-4 mb-6">Origin Selection</h3>
                <ul className="space-y-3">
                  {["Single-origin beans", "Ethical sourcing", "Seasonal rotations", "Farm transparency"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-primary/70 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="group flex items-center gap-2 text-accent/70 hover:text-accent transition-colors mt-6">
                Learn More 
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
            </Card>

            {/* Card 3: Brew Intelligence */}
            <Card className="p-6 flex flex-col justify-between h-[400px]">
              <div>
                <span className="text-4xl font-light text-accent/40">02</span>
                <h3 className="text-2xl font-medium mt-4 mb-6">Brew Intelligence</h3>
                <ul className="space-y-3">
                  {["Precision temperature control", "AI-assisted extraction timing", "Flavor profile tuning", "Automated calibration"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-primary/70 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="group flex items-center gap-2 text-accent/70 hover:text-accent transition-colors mt-6">
                Learn More 
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
            </Card>

            {/* Card 4: Atmosphere Design */}
            <Card className="p-6 flex flex-col justify-between h-[400px]">
              <div>
                <span className="text-4xl font-light text-accent/40">03</span>
                <h3 className="text-2xl font-medium mt-4 mb-6">Atmosphere Design</h3>
                <ul className="space-y-3">
                  {["Ambient soundscapes", "Minimalist interiors", "Lighting synced to time of day", "Sensory-first layout"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-primary/70 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="group flex items-center gap-2 text-accent/70 hover:text-accent transition-colors mt-6">
                Learn More 
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
            </Card>
          </StaggeredCards>
        </div>
      </section>
    </div>
  );
}

export default Home;