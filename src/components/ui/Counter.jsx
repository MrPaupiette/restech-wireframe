import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './Counter.module.css';

export default function Counter({ number, label, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className={styles.counter}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className={styles.number}>
        {count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}
