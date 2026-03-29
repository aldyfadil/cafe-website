import { motion } from "motion/react";
import { Coffee, Menu as MenuIcon, X, Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-cafe-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Coffee className="text-cafe-clay w-8 h-8" />
          <span className="font-serif text-2xl font-bold tracking-tight">Aura & Bean</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium uppercase tracking-widest hover:text-cafe-clay transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cafe-clay text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            Book a Table
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-cafe-cream border-t border-cafe-clay/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif italic hover:text-cafe-clay"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cafe-clay font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Est. 2024</span>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8">
            Where Every <br />
            <span className="italic text-cafe-olive">Bean</span> Tells <br />
            A Story.
          </h1>
          <p className="text-lg text-cafe-espresso/70 max-w-md mb-10 leading-relaxed">
            Experience the art of slow-brewed coffee and artisanal pastries in a space designed for connection and quiet moments.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cafe-espresso text-white px-8 py-4 rounded-full font-medium hover:bg-cafe-clay transition-colors">
              Explore Menu
            </button>
            <button className="border border-cafe-espresso px-8 py-4 rounded-full font-medium hover:bg-cafe-espresso hover:text-white transition-all">
              Our Story
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee Pour" 
              className="pill-image w-full shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-cafe-olive/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cafe-clay/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = ["Coffee", "Tea", "Pastries", "Brunch"];
  const [activeTab, setActiveTab] = useState("Coffee");

  const menuItems = {
    Coffee: [
      { name: "Signature Latte", price: "$5.50", desc: "House blend with oat milk and honey." },
      { name: "Ethiopian Pour Over", price: "$6.00", desc: "Bright, floral notes with a citrus finish." },
      { name: "Cortado", price: "$4.50", desc: "Equal parts espresso and steamed milk." },
      { name: "Cold Brew", price: "$5.00", desc: "Steeped for 18 hours for maximum smoothness." },
    ],
    Tea: [
      { name: "Matcha Ceremonial", price: "$6.50", desc: "Premium grade matcha with whisked milk." },
      { name: "Earl Grey Lavender", price: "$4.50", desc: "Classic tea with a floral twist." },
      { name: "Hibiscus Rose", price: "$5.00", desc: "Caffeine-free herbal infusion." },
    ],
    Pastries: [
      { name: "Almond Croissant", price: "$4.75", desc: "Flaky, buttery, and filled with almond cream." },
      { name: "Cardamom Bun", price: "$4.25", desc: "Swedish style bun with fresh cardamom." },
      { name: "Sourdough Tartine", price: "$8.00", desc: "Seasonal fruits on house-made sourdough." },
    ],
    Brunch: [
      { name: "Avocado Smash", price: "$14.00", desc: "Poached egg, chili flakes, and radish." },
      { name: "Shakshuka", price: "$16.00", desc: "Spiced tomato sauce with eggs and feta." },
      { name: "Granola Bowl", price: "$12.00", desc: "Greek yogurt, seasonal berries, and honey." },
    ]
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">The Curated Menu</h2>
          <p className="text-cafe-espresso/60 italic">Sourced ethically, prepared with intention.</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === cat ? "bg-cafe-espresso text-white" : "bg-cafe-cream text-cafe-espresso hover:bg-cafe-clay/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-8"
        >
          {menuItems[activeTab as keyof typeof menuItems].map((item, i) => (
            <div key={i} className="flex justify-between items-start border-b border-cafe-clay/10 pb-4 group">
              <div>
                <h3 className="text-xl font-serif group-hover:text-cafe-clay transition-colors">{item.name}</h3>
                <p className="text-sm text-cafe-espresso/60">{item.desc}</p>
              </div>
              <span className="font-serif font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cafe-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400" 
              alt="Cafe Interior" 
              className="rounded-3xl shadow-lg mt-12"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400" 
              alt="Coffee Beans" 
              className="rounded-3xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cafe-clay/20 rounded-full scale-125" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-5xl mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-cafe-espresso/70 leading-relaxed">
            <p>
              Founded on the belief that coffee is more than just a morning ritual, Aura & Bean was born from a passion for quality and community.
            </p>
            <p>
              We partner directly with small-batch farmers to ensure every bean is ethically sourced and roasted to perfection. Our space is designed to be your second home—a sanctuary from the bustle of the city.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <span className="block text-3xl font-serif text-cafe-clay">100%</span>
                <span className="text-xs uppercase tracking-widest font-bold">Organic</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-cafe-clay">Direct</span>
                <span className="text-xs uppercase tracking-widest font-bold">Trade</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-cafe-clay">Local</span>
                <span className="text-xs uppercase tracking-widest font-bold">Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl">Moments at Aura</h2>
          <a href="#" className="text-cafe-clay font-medium border-b border-cafe-clay pb-1 hover:text-cafe-espresso hover:border-cafe-espresso transition-all">
            Follow @auraandbean
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-2xl aspect-square"
            >
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-cafe-espresso text-cafe-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-cafe-clay w-8 h-8" />
              <span className="font-serif text-3xl font-bold tracking-tight">Aura & Bean</span>
            </div>
            <p className="text-cafe-cream/60 max-w-sm mb-8 leading-relaxed">
              Crafting exceptional coffee experiences and fostering community in the heart of the city. Join us for a cup of intention.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cafe-cream/20 flex items-center justify-center hover:bg-cafe-clay transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cafe-cream/20 flex items-center justify-center hover:bg-cafe-clay transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Visit Us</h4>
            <ul className="space-y-4 text-cafe-cream/60">
              <li className="flex gap-3">
                <MapPin size={18} className="text-cafe-clay shrink-0" />
                <span>123 Artisan Lane, <br />Brew District, CA 90210</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-cafe-clay shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Hours</h4>
            <ul className="space-y-4 text-cafe-cream/60">
              <li className="flex gap-3">
                <Clock size={18} className="text-cafe-clay shrink-0" />
                <div>
                  <span className="block">Mon - Fri: 7am - 6pm</span>
                  <span className="block">Sat - Sun: 8am - 8pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cafe-cream/10 pt-8 text-center text-sm text-cafe-cream/40">
          <p>&copy; 2024 Aura & Bean Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function CafeWebsite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <Gallery />
      <Footer />
    </div>
  );
}
