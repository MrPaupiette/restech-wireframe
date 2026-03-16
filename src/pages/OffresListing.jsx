import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import FilterBar from '../components/ui/FilterBar';
import JobCardExtended from '../components/ui/JobCardExtended';
import SectionTitle from '../components/ui/SectionTitle';
import offres from '../data/offres';
import styles from './OffresListing.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerFast = {
  visible: { transition: { staggerChildren: 0.08 } },
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

const metierFilters = [
  { label: 'Réseaux électriques', value: 'Réseaux électriques' },
  { label: 'Éclairage public', value: 'Éclairage public' },
  { label: 'Fibre optique', value: 'Fibre optique' },
  { label: 'Terrassement', value: 'Terrassement' },
  { label: 'Encadrement', value: 'Encadrement' },
];

const localisationFilters = [
  { label: 'Morbihan (56)', value: 'Morbihan' },
  { label: 'Finistère (29)', value: 'Finistère' },
];

const contratFilters = [
  { label: 'CDI', value: 'CDI' },
  { label: 'CDD', value: 'CDD' },
  { label: 'Alternance', value: 'Alternance' },
];

export default function OffresListing() {
  const [activeMetiers, setActiveMetiers] = useState([]);
  const [activeLocalisations, setActiveLocalisations] = useState([]);
  const [activeContrats, setActiveContrats] = useState([]);

  const handleMetierToggle = (value) => {
    setActiveMetiers((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleLocalisationToggle = (value) => {
    setActiveLocalisations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleContratToggle = (value) => {
    setActiveContrats((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setActiveMetiers([]);
    setActiveLocalisations([]);
    setActiveContrats([]);
  };

  const filtered = offres.filter((o) => {
    const matchMetier = activeMetiers.length === 0 || activeMetiers.includes(o.category);
    const matchLoc = activeLocalisations.length === 0 || activeLocalisations.some((loc) => o.location.includes(loc));
    const matchContrat = activeContrats.length === 0 || activeContrats.some((c) => o.contract.includes(c));
    return matchMetier && matchLoc && matchContrat;
  });

  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo recrutement terrain — poignée de main entre un conducteur de travaux et un nouveau collaborateur sur un chantier breton, équipe en arrière-plan"
            height="300px"
          />
        </div>
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Nous rejoindre', href: '/nous-rejoindre' },
                { label: 'Nos offres' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Nos offres d'emploi en Bretagne
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre — Restech recrute en Morbihan et Finistère. Trouvez votre poste dans les réseaux électriques, l'éclairage public ou la fibre optique.]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — FILTERS */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filterGroups}>
            <FilterBar
              filters={metierFilters}
              activeFilters={activeMetiers}
              onFilterChange={handleMetierToggle}
              onReset={resetFilters}
            />
            <div className={styles.filterDivider} />
            <FilterBar
              filters={localisationFilters}
              activeFilters={activeLocalisations}
              onFilterChange={handleLocalisationToggle}
              onReset={resetFilters}
            />
            <div className={styles.filterDivider} />
            <FilterBar
              filters={contratFilters}
              activeFilters={activeContrats}
              onFilterChange={handleContratToggle}
              onReset={resetFilters}
            />
          </div>
          <p className={styles.resultCount}>
            {filtered.length} offre{filtered.length !== 1 ? 's' : ''} disponible{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* BLOC 3 — OFFRES LIST */}
      <Section className={styles.offresList}>
        <div className={styles.offresInner}>
          {filtered.length > 0 ? (
            <motion.div variants={staggerFast}>
              {filtered.map((offre) => (
                <motion.div key={offre.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <JobCardExtended {...offre} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className={styles.noResults}>Aucune offre ne correspond à ces filtres.</p>
          )}
        </div>
      </Section>

      {/* BLOC 4 — CANDIDATURE SPONTANÉE */}
      <Section className={styles.candidature}>
        <div className={`container ${styles.candidatureGrid}`}>
          <AnimDiv className={styles.candidatureLeft}>
            <h2 className={styles.candidatureTitle}>Pas d'offre qui vous correspond ?</h2>
            <p className={styles.candidatureText}>
              [Intention — Restech recrute régulièrement au-delà des offres publiées. Monteurs réseau, terrassiers, conducteurs de travaux, techniciens fibre : envoyez-nous votre CV et nous vous recontacterons dès qu'un poste se libère en Morbihan ou Finistère.]
            </p>
            <div className={styles.candidatureSep} />
            <p className={styles.candidaturePhone}>
              [Téléphone agence Crac'h : 02 97 XX XX XX]<br />
              [Téléphone agence Melgven : 02 98 XX XX XX]
            </p>
          </AnimDiv>
          <AnimDiv className={styles.candidatureRight}>
            <div className={styles.candidatureCard}>
              <h3 className={styles.candidatureCardTitle}>Candidature spontanée</h3>
              <p className={styles.candidatureCardText}>
                [Envoyez-nous votre CV et quelques lignes sur votre parcours. Nous étudions chaque candidature.]
              </p>
              <Button label="Postuler spontanément" href="/contact" variant="primary" />
              <p className={styles.candidatureCardSmall}>
                [Réponse sous 5 jours ouvrés — entretien sur site ou en visio]
              </p>
              <a
                href="https://synelis.fr/nous-rejoindre"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.intersiteLink}
              >
                Voir les offres de toutes les filiales sur synelis.fr →
              </a>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — LIEN MÉTIERS */}
      <Section className={styles.liensMetiers}>
        <div className={styles.liensMetiersInner}>
          <AnimDiv>
            <p className={styles.liensMetiersText}>
              [Découvrez les fiches métiers détaillées de Restech : monteur réseau, conducteur de travaux, chef de chantier, technicien fibre, terrassier.]
            </p>
            <Button label="Voir nos fiches métiers" href="/nous-rejoindre/metiers" variant="secondary" />
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
