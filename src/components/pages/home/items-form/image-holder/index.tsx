import Presence from '@components/shared/prsenece';
import Image from 'next/image';

import styles from './style.module.scss';

const ImageHolder = (): JSX.Element => {
  return (
    <Presence className="grid grid-cols-2 gap-4 max-w-screen-lg mx-auto cursor-pointer">
      {[...Array(2)].map((num) => (
        <div className={styles.wrapper} key={num}>
          <div className={styles.imageHolder}>
            <Image
              alt="Image Holder"
              src="/images/image-01-svgrepo-com.svg"
              className={styles.image}
              fill={true}
            />
          </div>
        </div>
      ))}
    </Presence>
  );
};

export default ImageHolder;
