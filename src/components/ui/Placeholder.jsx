import styles from './Placeholder.module.css';

export default function Placeholder({ text, height = '300px', aspectRatio, width }) {
  const style = {};
  if (aspectRatio) {
    style.aspectRatio = aspectRatio;
  } else {
    style.height = height;
  }
  if (width) {
    style.width = width;
  }

  return (
    <div className={styles.placeholder} style={style}>
      <span className={styles.icon}>📸</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
