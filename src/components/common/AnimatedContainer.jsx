import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export default function AnimatedContainer({ children, className = '', delay = 0, as = 'div' }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </Component>
  );
}
