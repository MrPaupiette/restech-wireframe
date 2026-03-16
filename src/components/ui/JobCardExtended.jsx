import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './JobCardExtended.module.css';

export default function JobCardExtended({ slug, title, location, contract, category, salary, published, urgent, description_courte, metier_link }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.tags}>
          <span className={styles.tag}>{contract}</span>
          <span className={styles.tag}>{category}</span>
          {urgent && <span className={`${styles.tag} ${styles.urgentTag}`}>Urgent</span>}
        </div>
        <Link to={`/nous-rejoindre/offres/${slug}`} className={styles.title}>{title}</Link>
        <div className={styles.meta}>
          <span>📍 {location}</span>
          <span className={styles.sep}>•</span>
          <span>💰 {salary}</span>
          <span className={styles.sep}>•</span>
          <span>📅 {published}</span>
        </div>
        <p className={styles.description}>{description_courte}</p>
        {metier_link && (
          <Link to={metier_link} className={styles.metierLink}>Voir la fiche métier →</Link>
        )}
      </div>
      <div className={styles.right}>
        <Button label="Voir l'offre" href={`/nous-rejoindre/offres/${slug}`} variant="primary" size="small" />
      </div>
    </div>
  );
}
