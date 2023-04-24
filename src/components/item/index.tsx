import Image from 'next/image';

import styles from './styles.module.scss';

interface Props {
  alt: string;
  src: string;
}

const Item = ({ alt, src }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageHolder}>
        <Image alt={alt} src={src} className={styles.image} fill={true} />
      </div>
    </div>
  );
};

export default Item;
