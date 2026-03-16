import { Link } from 'react-router-dom';
import Card from './Card';
import Placeholder from './Placeholder';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  slug,
  type,
  territoire,
  title,
  client,
  year,
  image,
  description,
  tags = [],
  link_expertise,
  link_territoire,
}) {
  return (
    <Card className={styles.card}>
      <Placeholder text={image} height="220px" />
      <div className={styles.body}>
        <div className={styles.badges}>
          <span className={styles.badge}>{type}</span>
          <span className={styles.badge}>{territoire}</span>
        </div>
        <h3 className={styles.title}>
          {slug ? <Link to={`/realisations/${slug}`} className={styles.titleLink}>{title}</Link> : title}
        </h3>
        <p className={styles.meta}>{client} — {year}</p>
        <p className={styles.description}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className={styles.links}>
          <Link to={link_expertise} className={styles.link}>Expertise →</Link>
          <Link to={link_territoire} className={styles.link}>Territoire →</Link>
        </div>
      </div>
    </Card>
  );
}
