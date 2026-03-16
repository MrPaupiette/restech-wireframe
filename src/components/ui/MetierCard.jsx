import { Link } from 'react-router-dom';
import Card from './Card';
import Placeholder from './Placeholder';
import styles from './MetierCard.module.css';

export default function MetierCard({ slug, title, image, shortDescription, tags = [], hasDetailPage, kw }) {
  return (
    <Card>
      <Placeholder text={image} height="200px" />
      <div className={styles.body}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{shortDescription}</p>
        {hasDetailPage ? (
          <Link to={`/nous-rejoindre/metiers/${slug}`} className={styles.link}>
            Voir la fiche métier →
          </Link>
        ) : (
          <Link to="/nous-rejoindre/offres" className={styles.link}>
            Postuler →
          </Link>
        )}
        {kw && <span className={styles.kw}>KW : {kw}</span>}
      </div>
    </Card>
  );
}
