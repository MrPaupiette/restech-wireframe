import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
