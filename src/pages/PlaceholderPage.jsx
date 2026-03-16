import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function PlaceholderPage({ title }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>Page en cours de construction</p>
      <Link to="/" className={styles.back}>← Retour à l'accueil</Link>
    </div>
  );
}
