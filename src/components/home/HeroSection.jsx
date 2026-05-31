import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Star, Users } from 'lucide-react';
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
            Rooted in heritage, united by purpose.
          </span>
          <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(3.2rem,6vw,4.8rem)] font-bold leading-[1.02] text-light">
            Reconnect with your <span className="text-saffron">roots.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.8] text-light/88">
            Uniting Girmitiya descendants across generations through culture, genealogy, education, and community action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/root-search" className="bg-maroon hover:bg-earth" icon={ArrowRight}>Explore Our Heritage</Button>
            <Button to="/membership" variant="ghost" className="border border-light/40 text-light hover:bg-light hover:text-maroon">Become a Member</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="lg:justify-self-end">
          <div className="glass max-w-md rounded-[2rem] border border-white/20 bg-dark/60 p-6 text-light shadow-premium">
            <p className="font-display text-2xl font-bold text-light">A living bridge to ancestry.</p>
            <div className="mt-5 grid gap-4 text-sm">
              {[
                { label: 'Members Worldwide', value: '4200+', icon: Users },
                { label: 'Families Connected', value: '1850+', icon: MapPin },
                { label: 'Projects Completed', value: '180+', icon: Star },
                { label: 'Years of Impact', value: '12', icon: Calendar }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron/20 text-saffron">
                        <Icon size={18} />
                      </span>
                      <span className="text-light/80">{item.label}</span>
                    </div>
                    <span className="font-display text-lg font-bold text-light">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
