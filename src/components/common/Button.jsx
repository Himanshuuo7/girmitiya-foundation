import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ children, to, variant = 'primary', className = '', icon: Icon, loading = false, ...props }) {
  const styles = {
    primary: 'bg-primary text-light shadow-glow hover:bg-earth',
    secondary: 'bg-darker/85 text-primary ring-1 ring-primary/30 hover:bg-cream',
    ghost: 'bg-transparent text-primary ring-1 ring-primary/20 hover:bg-maroon hover:text-white'
  };
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-70 ${styles[variant]} ${className}`;
  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-darker/15 transition duration-500 group-hover:translate-x-0" />
      <span className="relative inline-flex items-center gap-2">
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />
        ) : Icon ? (
          <Icon size={18} aria-hidden="true" />
        ) : null}
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} to={to} aria-disabled={loading || props.disabled} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className={classes} disabled={loading || props.disabled} aria-busy={loading || undefined} {...props}>
      {content}
    </motion.button>
  );
}
