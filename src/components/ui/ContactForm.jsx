import { useState } from 'react';
import styles from './ApplicationForm.module.css';

export default function ContactForm() {
  const [objet, setObjet] = useState('');

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.field}>
        <label className={styles.label}>Objet *</label>
        <select className={styles.input} required value={objet} onChange={(e) => setObjet(e.target.value)}>
          <option value="">— Choisir —</option>
          <option value="devis">Demande de devis</option>
          <option value="technique">Renseignement technique</option>
          <option value="candidature">Candidature spontanée</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Nom complet *</label>
        <input type="text" className={styles.input} placeholder="Votre nom et prénom" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Entreprise / Organisme</label>
        <input type="text" className={styles.input} placeholder="Votre entreprise (optionnel)" />
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
        <label className={styles.label}>Département</label>
        <select className={styles.input}>
          <option value="">— Choisir —</option>
          <option value="56">Morbihan (56)</option>
          <option value="29">Finistère (29)</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message *</label>
        <textarea className={styles.textarea} rows={5} placeholder="Décrivez votre projet ou votre demande..." required />
      </div>
      {objet === 'candidature' && (
        <div className={styles.field}>
          <label className={styles.label}>CV</label>
          <input type="file" className={styles.fileInput} accept=".pdf,.doc,.docx" />
        </div>
      )}
      <div className={styles.checkbox}>
        <input type="checkbox" id="rgpd-contact" />
        <label htmlFor="rgpd-contact">J'accepte que mes données soient traitées conformément au RGPD</label>
      </div>
      <button type="submit" className={styles.submit}>Envoyer</button>
      <p className={styles.note}>Vos données sont traitées par Restech (Groupe Synelis) et conservées 12 mois. Vous disposez d'un droit d'accès, de rectification et de suppression.</p>
    </form>
  );
}
