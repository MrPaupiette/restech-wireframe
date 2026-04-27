import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'NOS EXPERTISES',
    links: [
      { label: 'VRD & Viabilisation', href: '/expertises/vrd-viabilisation' },
      { label: 'Éclairage public', href: '/expertises/eclairage-public' },
      { label: "Réseaux d'énergie", href: '/expertises/reseaux-energie' },
    ],
  },
  {
    title: 'NOS TERRITOIRES',
    links: [
      { label: 'Morbihan', href: '/territoires/morbihan' },
      { label: 'Finistère', href: '/territoires/finistere' },
    ],
  },
  {
    title: 'NOUS REJOINDRE',
    links: [
      { label: 'Nos métiers', href: '/nous-rejoindre/metiers' },
      { label: 'Nos offres', href: '/nous-rejoindre/offres' },
      { label: 'Candidature spontanée', href: '/contact' },
    ],
  },
  {
    title: 'RÉSEAUX TECHNIQUES',
    links: [
      { label: 'Réseau HTA', href: '/ressources/reseau-hta' },
      { label: 'Réseau BT', href: '/ressources/reseau-bt' },
      { label: 'Poste HTA-BT', href: '/ressources/poste-hta-bt' },
      { label: 'Éclairage public', href: '/ressources/eclairage-public' },
      { label: 'Branchements particuliers et pro', href: '/ressources/branchements' },
    ],
  },
];

const groupeSites = [
  { label: 'synelis.fr', href: 'https://synelis.fr' },
  { label: 'etpm.fr', href: 'https://etpm.fr' },
  { label: 'caum.fr', href: 'https://caum.fr' },
  { label: 'hpelec.fr', href: 'https://hpelec.fr' },
  { label: 'fctp.fr', href: 'https://fctp.fr' },
  { label: 'e2r.re', href: 'https://e2r.re' },
];

const references = [
  { label: 'Enedis', href: '/references/enedis' },
  { label: 'Morbihan Énergies', href: '/references/morbihan-energies' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.references}>
          <span className={styles.refTitle}>NOS RÉFÉRENCES :</span>
          {references.map((ref, i) => (
            <span key={ref.href}>
              <Link to={ref.href} className={styles.link}>{ref.label}</Link>
              {i < references.length - 1 && <span className={styles.separator}> | </span>}
            </span>
          ))}
        </div>

        <div className={styles.groupe}>
          <span className={styles.refTitle}>GROUPE SYNELIS :</span>
          {groupeSites.map((site, i) => (
            <span key={site.href}>
              <a href={site.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {site.label}
              </a>
              {i < groupeSites.length - 1 && <span className={styles.separator}> | </span>}
            </span>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © Restech 2026 — Filiale du Groupe Synelis
            <span className={styles.separator}> | </span>
            <Link to="/mentions-legales" className={styles.link}>Mentions légales</Link>
            <span className={styles.separator}> | </span>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </p>
          <p className={styles.seo}>
            VRD, éclairage public, réseaux d'énergie — Morbihan & Finistère
          </p>
        </div>
      </div>
    </footer>
  );
}
