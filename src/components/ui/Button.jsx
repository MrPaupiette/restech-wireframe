import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ label, href, variant = 'primary', size = 'default', onClick, className = '' }) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href?.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
