import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ children, to, variant = 'primary', className = '', icon: Icon, ...props }) {
  const styles = {
    primary: 'bg-primary text-light shadow-glow hover:bg-earth',
    secondary: 'bg-darker/85 text-primary ring-1 ring-primary/30 hover:bg-cream',
    ghost: 'bg-transparent text-primary ring-1 ring-primary/20 hover:bg-maroon hover:text-white'
  };
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;
  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-darker/20 transition duration-500 group-hover:translate-x-0" />
      <span className="relative inline-flex items-center gap-2">
        {Icon && <Icon size={18} aria-hidden="true" />}
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} to={to} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {content}
    </motion.button>
  );
}
