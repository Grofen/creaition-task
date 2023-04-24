import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { motion, useAnimate } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const HomeHeader = (): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: 1 }, { duration: 1, delay: 2 });

    const timeout = setTimeout(() => {
      gsap.to(heroRef.current, {
        height: `${56 * 1.5}px`,
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [animate, scope]);

  return (
    <div className={cx(styles.wrapper)} ref={heroRef}>
      <motion.div ref={scope} initial={{ opacity: 0, scale: 1 }}>
        <Link href="https://www.creaition.io/">
          <Image
            src="/images/creaition_logo_black.svg"
            alt="Creaition Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeHeader;
