import { motion } from 'framer-motion';

const RandomLines = (): JSX.Element => {
  const lines = Array.from(Array(5).keys());

  return (
    <div className="absolute top-0 left-0 h-screen w-full">
      <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {lines.map((line, index) => (
          <motion.path
            key={index}
            d="M 0 0 L 100 100"
            stroke="black"
            strokeWidth="0.5"
            initial={{ pathLength: 0, x: 0, y: 0 }}
            animate={{
              pathLength: 1,
              x: Math.random() * 100 - 100,
              y: Math.random() * 100 - 100,
            }}
            transition={{ duration: 1, delay: 2 + index * 0.2, infinite: 1 }}
            custom={index}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default RandomLines;
