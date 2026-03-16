import styles from './ProcessTimeline.module.css';

export default function ProcessTimeline({ steps }) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.indicator}>
            <div className={styles.circle} />
            {i < steps.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.content}>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
