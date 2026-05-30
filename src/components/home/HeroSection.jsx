import { motion } from 'framer-motion';
import { ArrowRight, HandHeart, Heart, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import { heroImage } from '../../data/siteData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Community gathering" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/82 via-maroon/58 to-saffron/28" />
        <div className="absolute inset-0 bg-cultural-pattern bg-[length:28px_28px] opacity-30" />
      </div>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute right-10 top-36 hidden h-28 w-28 rounded-full border border-primary/30 bg-dark/12 backdrop-blur lg:block"
      />
      <div className="container-pad relative grid min-h-[calc(100vh-7rem)] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="rounded-full border border-saffron/30 bg-dark/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron backdrop-blur">
            Heritage • Humanity • Hope
          </span>
          <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.04] text-light">
            Reconnecting Girmitiya roots with dignity, care, and community action.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-light/88">
            Girmitiya Foundation preserves cultural memory and strengthens families through root search, women empowerment, skill development, child welfare, and compassionate public service.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/membership" icon={Heart}>Join Membership</Button>
            <Button to="/contact" variant="secondary" icon={HandHeart}>Donate Now</Button>
            <Button to="/contact" variant="ghost" className="border border-dark/25 text-light hover:bg-white hover:text-maroon" icon={MessageCircle}>
              Contact Us
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="lg:justify-self-end">
          <div className="glass max-w-md rounded-[2rem] p-6 text-earth shadow-premium">
            <p className="font-display text-3xl font-bold text-primary">A living bridge to ancestry.</p>
            <p className="mt-3 leading-7 text-earth/80">
              From old family names to new learning opportunities, the foundation helps communities hold memory and progress together.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              {['Root Search', 'Women Led', 'Youth Skills', 'Child Care'].map((item) => (
                <div key={item} className="rounded-2xl bg-primary/10 p-4 font-semibold text-primary">{item}</div>
              ))}
            </div>
            <Button to="/root-search" variant="ghost" className="mt-6 w-full" icon={ArrowRight}>Explore Root Search</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
