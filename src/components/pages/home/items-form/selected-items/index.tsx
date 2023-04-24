import Item from '@components/item';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

interface Props {
  acceptedFiles: File[];
}

const SelectedItems = ({ acceptedFiles }: Props): JSX.Element => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{
        opacity: 0,
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.5,
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
      {acceptedFiles.map((file: File) => {
        return (
          <Item
            key={file.name}
            alt={file.name}
            src={URL.createObjectURL(file)}
          />
        );
      })}
    </motion.div>
  );
};

export default SelectedItems;
