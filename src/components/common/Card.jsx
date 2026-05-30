import { motion } from 'framer-motion';

export default function Card({ children, className = '', id }) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className={`rounded-[1.6rem] border border-primary/12 bg-white/70 p-6 shadow-premium backdrop-blur transition-all duration-300 hover:border-primary/24 hover:bg-white/85 hover:shadow-[0_28px_70px_rgba(95,59,36,0.12)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
