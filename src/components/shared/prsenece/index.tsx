import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  className?: string;
}

const Presence = ({
  children,
  className,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Presence;
