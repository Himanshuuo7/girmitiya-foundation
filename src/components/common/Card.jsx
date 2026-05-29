import { motion } from 'framer-motion';

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className={`rounded-[1.6rem] border border-primary/20 bg-darker/78 p-6 shadow-premium backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
