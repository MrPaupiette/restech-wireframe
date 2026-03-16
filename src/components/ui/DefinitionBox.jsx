import styles from './DefinitionBox.module.css';

export default function DefinitionBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}
