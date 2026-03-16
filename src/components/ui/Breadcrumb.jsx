import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items, light = true }) {
  return (
    <nav className={`${styles.breadcrumb} ${light ? styles.light : styles.dark}`}>
      {items.map((item, i) => (
        <span key={i}>
          {i < items.length - 1 ? (
            <>
              <Link to={item.href} className={styles.link}>{item.label}</Link>
              <span className={styles.sep}>→</span>
            </>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
