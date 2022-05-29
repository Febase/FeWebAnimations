import { Variants } from 'framer-motion';

export const opacityYVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, staggerChildren: 0.5 },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
