import styles from './TableOfContents.module.css';

export default function TableOfContents({ items }) {
  return (
    <nav className={styles.toc}>
      <h3 className={styles.title}>Sommaire</h3>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={i}>
            <a href={`#${item.anchor}`} className={styles.link}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
