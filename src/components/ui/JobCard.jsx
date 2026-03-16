import { Link } from 'react-router-dom';
import styles from './JobCard.module.css';

export default function JobCard({ title, location, contract, href }) {
  return (
    <Link to={href} className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.meta}>
        <span className={styles.location}>{location}</span>
        <span className={styles.sep}>·</span>
        <span className={styles.contract}>{contract}</span>
      </span>
      <span className={styles.arrow}>Voir →</span>
    </Link>
  );
}
