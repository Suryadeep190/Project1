import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  Heart,
  Search,
  Home,
  UtensilsCrossed,
  User,
  Sparkles,
  MessageCircle,
  Flame,
  Zap,
  ShieldCheck,
  Navigation,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  BRAND_NAME, 
  TAGLINE,
  PHONE,
  ADDRESS,
  WHATSAPP_LINK,
  CALL_LINK,
  MAP_LINK,
  CATEGORIES, 
  MENU_ITEMS, 
  SIGNATURE_HIGHLIGHTS,
  TESTIMONIALS, 
  GALLERY_IMAGES,
  USPs
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 253, 245, 0)', 'rgba(255, 253, 245, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMenuItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-khaugali-cream font-sans text-khaugali-ink selection:bg-khaugali-saffron selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'border-khaugali-saffron/10 py-3' : 'border-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-11 h-11 bg-khaugali-red rounded-2xl flex items-center justify-center shadow-xl shadow-khaugali-red/20"
            >
              <Flame className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-2xl md:text-3xl font-display tracking-tighter text-khaugali-ink leading-none font-black">{BRAND_NAME}</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-widest hover:text-khaugali-red transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-khaugali-red transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-khaugali-green text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-khaugali-green/20"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
            <button 
              className="lg:hidden p-2 hover:bg-khaugali-saffron/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-khaugali-cream pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-grow">
              {['Home', 'Menu', 'About', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display tracking-tight text-khaugali-ink hover:text-khaugali-red transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pb-12 space-y-4">
              <a 
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-3 w-full py-5 bg-khaugali-green text-white rounded-3xl font-bold text-lg shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
              <a 
                href={CALL_LINK}
                className="flex items-center justify-center gap-3 w-full py-5 bg-khaugali-ink text-white rounded-3xl font-bold text-lg shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-khaugali-saffron/10 via-transparent to-khaugali-red/5 -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-khaugali-yellow/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-khaugali-red/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-khaugali-saffron/10 text-khaugali-saffron rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              <span>The Ultimate Street Food Experience</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tighter leading-[0.82] mb-8">
              {TAGLINE.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 0 ? 'text-khaugali-ink' : 'text-khaugali-red'}>
                  {word}{' '}
                  {i === 1 && <br className="hidden md:block" />}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-khaugali-muted max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
              Crispy, buttery, and packed with flavor. Experience the authentic taste of Gujarat's finest <span className="text-khaugali-ink font-bold italic">Chula Dosa</span>, made with love and tradition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-khaugali-green text-white rounded-2xl font-bold shadow-2xl shadow-khaugali-green/30 hover:scale-105 transition-transform flex items-center justify-center gap-3 group button-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <a 
                href={CALL_LINK}
                className="w-full sm:w-auto px-10 py-5 border-2 border-khaugali-ink/10 rounded-2xl font-bold hover:bg-khaugali-ink hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            <div className="mt-20 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 md:gap-12">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <motion.img 
                    key={i} 
                    whileHover={{ y: -5, zIndex: 10 }}
                    src={`https://i.pravatar.cc/100?img=${i+20}`} 
                    className="w-14 h-14 rounded-full border-4 border-khaugali-cream shadow-lg" 
                    alt="User" 
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-khaugali-yellow mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-sm font-bold text-khaugali-ink uppercase tracking-widest opacity-60">Loved by 10,000+ Locals</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden soft-shadow border-8 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000&q=80" 
                alt="Delicious Chula Dosa" 
                className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 bg-white p-5 rounded-3xl soft-shadow premium-blur border border-khaugali-saffron/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-khaugali-saffron rounded-2xl flex items-center justify-center">
                  <Flame className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">Chula Made</div>
                  <div className="text-[10px] text-khaugali-muted uppercase font-bold tracking-widest">Authentic Taste</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-5 rounded-3xl soft-shadow premium-blur border border-khaugali-green/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-khaugali-green rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">Fresh Ingredients</div>
                  <div className="text-[10px] text-khaugali-muted uppercase font-bold tracking-widest">Quality First</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-khaugali-cream to-transparent" />
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 bg-khaugali-red/5 text-khaugali-red rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              The Masterpieces
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-8">Signature <span className="text-khaugali-red italic font-serif">Highlights</span></h2>
            <p className="text-khaugali-muted font-medium text-xl leading-relaxed">The dishes that made us famous. Handcrafted on the traditional Chula for that smoky, authentic flavor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {SIGNATURE_HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative h-[550px] rounded-[50px] overflow-hidden soft-shadow border border-khaugali-ink/5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-khaugali-ink via-khaugali-ink/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-khaugali-yellow animate-pulse" />
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-90">Must Try</span>
                    </div>
                    <h3 className="text-4xl font-display tracking-tight mb-4 leading-tight">{item.name}</h3>
                    <p className="text-sm text-white/60 mb-8 line-clamp-2 font-medium leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-1">Starting at</span>
                        <span className="text-3xl font-display text-khaugali-yellow">{item.price}</span>
                      </div>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={WHATSAPP_LINK}
                        className="w-14 h-14 bg-white text-khaugali-red rounded-2xl flex items-center justify-center shadow-2xl shadow-black/20 hover:bg-khaugali-red hover:text-white transition-all duration-500"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section id="menu" className="section-padding bg-khaugali-cream relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-khaugali-red font-bold uppercase tracking-[0.3em] text-xs mb-4"
              >
                Explore Flavors
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-6">Our <span className="text-khaugali-red italic font-serif">Full Menu</span></h2>
              <p className="text-khaugali-muted font-medium text-xl leading-relaxed">From classic Chula Dosa to modern fusion delights, we have something for every craving.</p>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 whitespace-nowrap ${
                    activeCategory === cat.id 
                      ? 'bg-khaugali-ink text-white shadow-2xl shadow-khaugali-ink/20' 
                      : 'bg-white text-khaugali-muted hover:bg-khaugali-saffron/10 border border-khaugali-ink/5'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMenuItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-8 rounded-[40px] soft-shadow border border-khaugali-ink/5 hover:border-khaugali-saffron/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-khaugali-saffron/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  
                  {item.popular && (
                    <div className="absolute top-6 right-6 z-20">
                      <div className="px-3 py-1 bg-khaugali-red text-white text-[8px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-khaugali-red/20 flex items-center gap-1">
                        <Sparkles className="w-2 h-2" />
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-khaugali-green' : 'bg-khaugali-red'}`} />
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Authentic</span>
                        </div>
                        <h4 className="text-2xl font-display tracking-tight group-hover:text-khaugali-red transition-colors duration-300">{item.name}</h4>
                      </div>
                      <span className="text-2xl font-display text-khaugali-ink">{item.price}</span>
                    </div>
                    <p className="text-base text-khaugali-muted mb-8 line-clamp-2 font-medium leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-khaugali-ink/5">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-khaugali-yellow/10 rounded-full">
                        <Star className="w-3 h-3 text-khaugali-yellow fill-current" />
                        <span className="text-[10px] font-bold text-khaugali-ink">{item.rating}</span>
                      </div>
                      <motion.a 
                        whileHover={{ x: 5 }}
                        href={WHATSAPP_LINK}
                        className="text-xs font-bold text-khaugali-red flex items-center gap-2 group/btn"
                      >
                        Order Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="section-padding bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-khaugali-saffron/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-khaugali-saffron font-bold uppercase tracking-[0.3em] text-xs mb-6">Our Story</div>
              <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-10">Why <span className="text-khaugali-red italic font-serif">Khaugali?</span></h2>
              <p className="text-xl text-khaugali-muted mb-16 leading-relaxed font-medium">
                We bring the authentic street food vibe of Ahmedabad to your plate. Our secret? Traditional Chula cooking, fresh ingredients, and a passion for serving the best Dosa in town.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {USPs.map((usp, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="flex flex-col gap-6 p-10 bg-khaugali-cream rounded-[40px] transition-all border border-khaugali-ink/5"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 shadow-xl shadow-khaugali-ink/5">
                      {usp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display tracking-tight mb-3">{usp.title}</h4>
                      <p className="text-sm text-khaugali-muted font-medium leading-relaxed">{usp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-khaugali-cream soft-shadow">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80" className="w-full h-[600px] object-cover" alt="Our Kitchen" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-khaugali-red rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl rotate-6 animate-float z-20">
                <span className="font-display text-2xl leading-tight">100% <br /> Authentic <br /> Chula Style</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-khaugali-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-khaugali-red/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-khaugali-saffron font-bold uppercase tracking-[0.3em] text-xs mb-6">Wall of Love</div>
            <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-6">Foodie <span className="text-khaugali-saffron italic font-serif">Stories</span></h2>
            <p className="text-khaugali-muted font-medium text-xl">Real reviews from our amazing customers who love the Khaugali vibe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-12 bg-white rounded-[50px] relative border border-khaugali-saffron/5 soft-shadow group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-khaugali-yellow fill-current" />
                  ))}
                </div>
                <p className="text-xl font-serif italic mb-12 leading-relaxed text-khaugali-ink/80">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-khaugali-saffron/20" />
                    <div className="absolute -bottom-2 -right-2 bg-khaugali-red text-white p-1 rounded-lg">
                      <Heart className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t.name}</div>
                    <div className="text-[10px] text-khaugali-muted uppercase font-bold tracking-[0.2em]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <div className="text-khaugali-red font-bold uppercase tracking-[0.3em] text-xs mb-6">Visual Feast</div>
              <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-6">The <span className="text-khaugali-red italic font-serif">Vibe</span> Gallery</h2>
              <p className="text-khaugali-muted font-medium text-xl">A glimpse into our world of delicious Dosas and happy faces.</p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-khaugali-cream border border-khaugali-ink/5 rounded-2xl font-bold hover:bg-khaugali-red hover:text-white transition-all flex items-center gap-3 shadow-xl shadow-khaugali-ink/5"
            >
              Follow @Khaugali
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[32px] overflow-hidden group cursor-pointer relative h-64 md:h-80 ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-auto' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-khaugali-red/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order Strip */}
      <section className="py-12 bg-khaugali-red overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-white mb-2">Ready to taste the best Dosa in Ahmedabad?</h2>
              <p className="text-white/70 font-medium">Order now and get it fresh and hot!</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="px-8 py-4 bg-white text-khaugali-red rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-khaugali-green" />
                WhatsApp Order
              </a>
              <a 
                href={CALL_LINK}
                className="px-8 py-4 bg-khaugali-ink text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Visit */}
      <section id="contact" className="section-padding bg-khaugali-cream relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <div className="text-khaugali-red font-bold uppercase tracking-[0.3em] text-xs mb-6">Visit Us</div>
            <h2 className="text-5xl md:text-8xl font-display tracking-tight mb-16">Find <span className="text-khaugali-red italic font-serif">Us</span></h2>
            <div className="space-y-10">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-8 p-10 bg-white rounded-[50px] soft-shadow border border-khaugali-saffron/5"
              >
                <div className="w-20 h-20 bg-khaugali-red/5 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-khaugali-red w-10 h-10" />
                </div>
                <div>
                  <div className="text-2xl font-display tracking-tight mb-3">Our Location</div>
                  <p className="text-lg text-khaugali-muted font-medium leading-relaxed">{ADDRESS}</p>
                  <a 
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-khaugali-red font-bold hover:gap-4 transition-all"
                  >
                    Get Directions <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-8 p-10 bg-white rounded-[50px] soft-shadow border border-khaugali-saffron/5"
              >
                <div className="w-20 h-20 bg-khaugali-green/5 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-khaugali-green w-10 h-10" />
                </div>
                <div>
                  <div className="text-2xl font-display tracking-tight mb-3">Call or WhatsApp</div>
                  <p className="text-lg text-khaugali-muted font-medium leading-relaxed">Order: {PHONE}<br />Support: +91 90168 63765</p>
                  <div className="flex gap-6 mt-6">
                    <a href={CALL_LINK} className="text-khaugali-ink font-bold hover:text-khaugali-red transition-colors">Call Now</a>
                    <span className="text-khaugali-muted opacity-30">|</span>
                    <a href={WHATSAPP_LINK} className="text-khaugali-green font-bold hover:underline underline-offset-8">WhatsApp</a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex gap-8 p-10 bg-white rounded-[50px] soft-shadow border border-khaugali-saffron/5"
              >
                <div className="w-20 h-20 bg-khaugali-yellow/5 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-khaugali-yellow w-10 h-10" />
                </div>
                <div>
                  <div className="text-2xl font-display tracking-tight mb-3">Opening Hours</div>
                  <p className="text-lg text-khaugali-muted font-medium leading-relaxed">Monday - Sunday<br />05:00 PM - 11:30 PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative rounded-[60px] overflow-hidden soft-shadow h-[600px] border-8 border-white bg-white group">
            <div className="absolute inset-0 bg-khaugali-saffron/10 flex items-center justify-center z-10 group-hover:bg-transparent transition-colors duration-500">
              <div className="text-center p-8 bg-white/90 premium-blur rounded-[40px] soft-shadow border border-khaugali-saffron/20 max-w-xs">
                <MapPin className="w-12 h-12 text-khaugali-red mx-auto mb-4 animate-bounce" />
                <div className="font-display text-2xl mb-4">We are in South Bopal</div>
                <p className="text-sm text-khaugali-muted mb-6">Visit us for the best Chula Dosa experience in Ahmedabad.</p>
                <a 
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 bg-khaugali-ink text-white rounded-2xl font-bold text-sm hover:bg-khaugali-red transition-colors"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1000&q=80" 
              className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
              alt="Map View" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-khaugali-ink pt-24 pb-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-12 bg-khaugali-red rounded-full flex items-center justify-center">
                  <Flame className="text-white w-6 h-6" />
                </div>
                <span className="text-3xl font-display tracking-tighter">{BRAND_NAME}</span>
              </div>
              <p className="text-white/60 font-medium leading-relaxed mb-10">
                Authentic Chula Dosa. Modern Vibe. The best street food experience in South Bopal, Ahmedabad.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-khaugali-red transition-colors border border-white/10 group">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-display tracking-wider mb-8">Quick Links</h4>
              <ul className="space-y-4 text-white/50 font-medium">
                {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-khaugali-saffron transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display tracking-wider mb-8">Contact Info</h4>
              <ul className="space-y-4 text-white/50 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-khaugali-red flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-khaugali-red flex-shrink-0" />
                  <span>{PHONE}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-khaugali-green flex-shrink-0" />
                  <span>WhatsApp: {PHONE}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display tracking-wider mb-8">Newsletter</h4>
              <p className="text-white/50 font-medium mb-6">Stay updated with our latest offers and new menu additions.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-khaugali-saffron transition-colors font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-khaugali-red rounded-xl hover:scale-105 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30 font-medium">
            <p>© 2024 {BRAND_NAME}. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Made with ❤️ for Dosa Lovers</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-8 left-6 right-6 z-50">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-white/90 premium-blur rounded-[32px] px-8 py-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] flex items-center justify-between border border-khaugali-saffron/20"
        >
          <a href="#home" className="p-2 text-khaugali-red hover:scale-110 transition-transform"><Home className="w-7 h-7" /></a>
          <a href="#menu" className="p-2 text-khaugali-muted hover:scale-110 transition-transform"><UtensilsCrossed className="w-7 h-7" /></a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={WHATSAPP_LINK} 
            className="w-18 h-18 bg-khaugali-green rounded-3xl flex items-center justify-center -mt-16 shadow-2xl shadow-khaugali-green/40 border-4 border-khaugali-cream"
          >
            <MessageCircle className="text-white w-9 h-9" />
          </motion.a>
          <a href="#gallery" className="p-2 text-khaugali-muted hover:scale-110 transition-transform"><Sparkles className="w-7 h-7" /></a>
          <a href="#contact" className="p-2 text-khaugali-muted hover:scale-110 transition-transform"><MapPin className="w-7 h-7" /></a>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
