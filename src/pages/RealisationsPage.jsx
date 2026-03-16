import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import FilterBar from '../components/ui/FilterBar';
import ProjectCard from '../components/ui/ProjectCard';
import Counter from '../components/ui/Counter';
import projets from '../data/projets';
import styles from './RealisationsPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function AnimDiv({ children, className = '' }) {
  return (
    <motion.div className={className} variants={fadeUp} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}

const typeFilters = [
  { group: 'type', label: 'Réseaux électriques', value: 'Réseaux électriques' },
  { group: 'type', label: 'Éclairage public', value: 'Éclairage public' },
  { group: 'type', label: 'Fibre optique', value: 'Fibre optique' },
];

const territoireFilters = [
  { group: 'territoire', label: 'Morbihan', value: 'Morbihan' },
  { group: 'territoire', label: 'Finistère', value: 'Finistère' },
];

export default function RealisationsPage() {
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeTerritoires, setActiveTerritoires] = useState([]);

  const handleTypeToggle = (value) => {
    setActiveTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleTerritoireToggle = (value) => {
    setActiveTerritoires((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setActiveTypes([]);
    setActiveTerritoires([]);
  };

  const filtered = projets.filter((p) => {
    const matchType = activeTypes.length === 0 || activeTypes.includes(p.type);
    const matchTerr = activeTerritoires.length === 0 || activeTerritoires.includes(p.territoire);
    return matchType && matchTerr;
  });

  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Mosaïque ou photo panoramique chantier terminé — rue bretonne rénovée, éclairage public neuf, voirie refaite, résultat final propre et abouti"
            height="350px"
          />
        </div>
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Nos réalisations' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos réalisations en Bretagne</h1>
          <p className={styles.heroSubtitle}>
            [Sous-titre — Réseaux électriques, éclairage public, fibre optique : découvrez nos chantiers réalisés en Morbihan et Finistère pour Enedis, Morbihan Énergies et les collectivités locales.]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO + CHIFFRES */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte ~60 mots — Depuis plus de 20 ans, Restech réalise des chantiers de réseaux électriques, d'éclairage public et de fibre optique pour les collectivités et gestionnaires de réseau bretons. Chaque projet ci-dessous illustre notre savoir-faire terrain, notre parc matériel propre et notre ancrage local en Morbihan et Finistère.]
            </p>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.miniCounters}>
              <div className={styles.miniCounter}>
                <span className={styles.miniNumber}>20+</span>
                <span className={styles.miniLabel}>ans d'expérience</span>
              </div>
              <div className={styles.miniCounter}>
                <span className={styles.miniNumber}>2</span>
                <span className={styles.miniLabel}>départements</span>
              </div>
              <div className={styles.miniCounter}>
                <span className={styles.miniNumber}>40+</span>
                <span className={styles.miniLabel}>collaborateurs terrain</span>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — FILTRES */}
      <div className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filterGroups}>
            <FilterBar
              filters={typeFilters}
              activeFilters={activeTypes}
              onFilterChange={handleTypeToggle}
              onReset={resetFilters}
            />
            <div className={styles.filterDivider} />
            <FilterBar
              filters={territoireFilters}
              activeFilters={activeTerritoires}
              onFilterChange={handleTerritoireToggle}
              onReset={resetFilters}
            />
          </div>
        </div>
      </div>

      {/* BLOC 4 — GRILLE DE PROJETS */}
      <Section className={styles.projets}>
        <div className="container">
          <motion.div className={styles.projetsGrid} variants={stagger}>
            {filtered.map((projet) => (
              <AnimDiv key={projet.slug}>
                <ProjectCard {...projet} />
              </AnimDiv>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <p className={styles.noResults}>Aucun projet ne correspond à ces filtres.</p>
          )}
        </div>
      </Section>

      {/* BLOC 5 — CTA DOUBLE */}
      <Section className={styles.ctaDouble}>
        <div className={`container ${styles.ctaGrid}`}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet similaire ?</h2>
            <p className={styles.ctaText}>
              [Collectivité, syndicat d'énergie ou entreprise : décrivez-nous votre besoin et recevez une étude personnalisée.]
            </p>
            <Button label="Nous contacter" href="/contact" variant="primary" className={styles.ctaPrimary} />
          </AnimDiv>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Envie de rejoindre ces chantiers ?</h2>
            <p className={styles.ctaText}>
              [Restech recrute des monteurs réseaux, conducteurs de travaux et techniciens fibre en Bretagne.]
            </p>
            <Button label="Voir nos offres" href="/nous-rejoindre/offres" variant="secondary" className={styles.ctaSecondary} />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — MAILLAGE INTER-SITES */}
      <Section className={styles.intersite}>
        <div className={styles.intersiteInner}>
          <AnimDiv>
            <p className={styles.intersiteText}>
              [Les réalisations de toutes les filiales du Groupe Synelis sont regroupées sur le site groupe.]
            </p>
            <a
              href="https://synelis.fr/nos-activites/realisations"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.intersiteLink}
            >
              Voir toutes les réalisations du Groupe Synelis →
            </a>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
