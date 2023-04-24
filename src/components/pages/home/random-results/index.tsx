import Item from '@components/item';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const RandomResults = (): JSX.Element => {
  const outputItems = [
    '/images/items/o1.svg',
    '/images/items/o2.svg',
    '/images/items/o3.svg',
  ];
  const otherItems = [
    '/images/items/other1.svg',
    '/images/items/other2.svg',
    '/images/items/other3.svg',
  ];

  const randomOutputItems = outputItems
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const randomOtherItem =
    otherItems[Math.floor(Math.random() * otherItems.length)];

  const result = [...randomOutputItems, randomOtherItem];

  return (
    <div className={styles.wrapper}>
      {result.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.5,
            filter: 'blur(10px)',
            y: -300,
            zIndex: -2,
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            zIndex: -1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.2,
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Item key={index} alt={'random item'} src={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default RandomResults;
