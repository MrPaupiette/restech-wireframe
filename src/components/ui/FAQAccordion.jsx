import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <div className={styles.accordion}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>{openIndex === i ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className={styles.answerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.answer}>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
