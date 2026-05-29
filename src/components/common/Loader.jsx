import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 0.9, duration: 0.45 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-dark"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
          className="mx-auto h-14 w-14 rounded-full border-4 border-primary/30 border-t-primary"
        />
        <p className="mt-5 font-display text-2xl font-bold text-primary">Girmitiya Foundation</p>
      </div>
    </motion.div>
  );
}
