import styles from './FilterBar.module.css';

export default function FilterBar({ filters, activeFilters, onFilterChange, onReset }) {
  return (
    <div className={styles.bar}>
      <button
        className={`${styles.pill} ${activeFilters.length === 0 ? styles.active : ''}`}
        onClick={onReset}
      >
        Tous
      </button>
      {filters.map((f) => (
        <button
          key={f.value}
          className={`${styles.pill} ${activeFilters.includes(f.value) ? styles.active : ''}`}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
