import { Link, useParams, Navigate } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

/*
  FicheProjetPage — Template pour futur usage.
  Pour l'instant, affiche un placeholder.

  Quand activé, la structure prévue est :

  BLOC 1 — Hero projet
    - Image pleine largeur (photo principale du chantier)
    - Breadcrumb : Accueil → Nos réalisations → {title}
    - H1 serif : {title}
    - Méta : {client} | {territoire} | {year}

  BLOC 2 — Description du projet
    - Layout 2 colonnes : texte principal 60% + sidebar infos 40%
    - Texte : [Description détaillée ~200 mots]
    - Sidebar : Client, Localisation, Année, Type, Durée, Montant

  BLOC 3 — Galerie photos
    - Grid de 4-6 Placeholder (photos avant/pendant/après)
    - Lightbox au clic

  BLOC 4 — Chiffres du projet
    - 3-4 compteurs (mètres de tranchée, luminaires, km câble…)

  BLOC 5 — Témoignage client
    - Citation du client ou conducteur de travaux

  BLOC 6 — Projets similaires
    - Grid 3 colonnes, 3 ProjectCard filtrés par type/territoire

  BLOC 7 — CTA contact
    - "Un projet similaire ? Contactez-nous" → /contact
*/

export default function FicheProjetPage() {
  const { slug } = useParams();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Fiche projet — bientôt disponible</h1>
      <p className={styles.text}>Le détail du projet « {slug} » sera disponible prochainement.</p>
      <Link to="/realisations" className={styles.back}>← Retour aux réalisations</Link>
    </div>
  );
}
