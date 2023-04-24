import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.scss';

const Landing = (): JSX.Element => {
  return (
    <motion.div
      animate={{ opacity: 0, zIndex: -1 }}
      transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
      exit={{ opacity: 0, zIndex: -1 }}
      className={styles.wrapper}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <motion.div
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            className="relative"
            src="/images/creaition_logo_white.svg"
            alt="Creaition Logo"
            width={180}
            height={37}
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
