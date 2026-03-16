import styles from './ApplicationForm.module.css';

export default function ApplicationForm({ posteTitle = '' }) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.field}>
        <label className={styles.label}>Nom complet *</label>
        <input type="text" className={styles.input} placeholder="Votre nom et prénom" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email *</label>
        <input type="email" className={styles.input} placeholder="votre@email.com" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Téléphone *</label>
        <input type="tel" className={styles.input} placeholder="06 XX XX XX XX" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Poste visé</label>
        <input type="text" className={styles.input} value={posteTitle} disabled />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message / motivation</label>
        <textarea className={styles.textarea} rows={4} placeholder="Quelques mots sur votre parcours et votre motivation..." />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>CV *</label>
        <input type="file" className={styles.fileInput} accept=".pdf,.doc,.docx" required />
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" id="rgpd-app" />
        <label htmlFor="rgpd-app">J'accepte que mes données soient traitées dans le cadre de ma candidature</label>
      </div>
      <button type="submit" className={styles.submit}>Envoyer ma candidature</button>
      <p className={styles.note}>Vos données sont traitées conformément au RGPD et conservées 12 mois.</p>
    </form>
  );
}
