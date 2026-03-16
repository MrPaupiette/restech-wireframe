import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Counter from '../components/ui/Counter';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './HubTerritoires.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
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

export default function HubTerritoires() {
  return (
    <div>

      {/* BLOC 1 — HERO INTERNE */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Vue aérienne côte bretonne — littoral du Morbihan ou du Finistère vu du ciel, paysage de landes et de côte découpée, villages en arrière-plan, lumière typique Bretagne"
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
              { label: 'Nos territoires' },
            ]}
          />
          <h1 className={styles.heroTitle}>Entreprise de travaux publics en Bretagne</h1>
          <p className={styles.heroSubtitle}>
            [Sous-titre — Restech intervient en Morbihan et Finistère depuis ses agences de Crac'h et Melgven. Réseaux électriques, éclairage public, fibre optique : une expertise de proximité au service des collectivités bretonnes.]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — CARTE & AGENCES */}
      <Section className={styles.agences}>
        <div className={`container ${styles.agencesGrid}`}>
          <motion.div
            className={styles.agencesMap}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Carte stylisée Bretagne — Morbihan et Finistère colorés en gris foncé sur fond clair, les 2 agences pointées avec des marqueurs (Crac'h et Melgven), villes principales annotées : Vannes, Lorient, Auray, Quimper, Concarneau, Pontivy"
              height="420px"
            />
          </motion.div>
          <motion.div
            className={styles.agencesInfo}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Nos 2 agences en Bretagne</h2>

            <div className={styles.agencyCard}>
              <h3 className={styles.agencyTitle}>Siège social — Crac'h (56)</h3>
              <p className={styles.agencyAddress}>ZA Le Moustoir, 14 bis Rue de Bretagne, 56950 Crac'h</p>
              <p className={styles.agencyZone}>
                [Zone d'intervention : Vannes, Lorient, Auray, Quiberon, Pontivy et l'ensemble du Morbihan]
              </p>
              <Button label="Interventions Morbihan" href="/territoires/morbihan" variant="secondary" size="small" />
            </div>

            <div className={styles.agencyCard}>
              <h3 className={styles.agencyTitle}>Agence Finistère — Melgven (29)</h3>
              <p className={styles.agencyAddress}>441 Rue de Saint Guénolé, ZA de Kerampaou 2, 29140 Melgven</p>
              <p className={styles.agencyZone}>
                [Zone d'intervention : Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden et le sud Finistère]
              </p>
              <Button label="Interventions Finistère" href="/territoires/finistere" variant="secondary" size="small" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 3 — NOS EXPERTISES SUR LE TERRAIN */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Ce que nous faisons en Bretagne" align="center" />
          </AnimDiv>
          <AnimDiv>
            <p className={styles.expertisesIntro}>
              [Texte ~60 mots — Partout où nous intervenons en Morbihan et Finistère, nos équipes mobilisent les mêmes compétences : réseaux électriques HTA/BT, éclairage public LED, maintenance fibre optique. Chaque chantier est piloté localement depuis l'agence la plus proche, avec notre propre parc matériel. — KW : éclairage public, réseaux électriques, maintenance fibre optique]
            </p>
          </AnimDiv>
          <motion.div className={styles.expertisesGrid} variants={stagger}>
            <AnimDiv>
              <Link to="/expertises/reseaux-electriques-eclairage" className={styles.cardLink}>
                <Card>
                  <Placeholder text="Icône ou photo compacte — luminaire LED + câble électrique" height="160px" />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Réseaux électriques & Éclairage public</h3>
                    <p className={styles.cardText}>[Branchement, raccordement, enfouissement, éclairage public LED, mise en lumière]</p>
                    <span className={styles.cardArrow}>En savoir plus →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
            <AnimDiv>
              <Link to="/expertises/fibre-optique-maintenance" className={styles.cardLink}>
                <Card>
                  <Placeholder text="Icône ou photo compacte — boîtier fibre optique, câbles colorés" height="160px" />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Fibre optique & Maintenance</h3>
                    <p className={styles.cardText}>[Maintenance préventive et curative, astreinte, réflectométrie sur réseaux FTTH]</p>
                    <span className={styles.cardArrow}>En savoir plus →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — PAGES DÉPARTEMENTALES */}
      <Section className={styles.sectionWhite}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Choisissez votre département" align="center" />
          </AnimDiv>
          <motion.div className={styles.deptGrid} variants={stagger}>
            <AnimDiv>
              <Link to="/territoires/morbihan" className={styles.cardLink}>
                <Card>
                  <Placeholder text="Photo paysage Morbihan — Golfe du Morbihan, alignements de Carnac ou port breton, lumière dorée" height="300px" />
                  <div className={styles.cardBodyLarge}>
                    <h2 className={styles.deptTitle}>Morbihan</h2>
                    <p className={styles.cardText}>
                      [~50 mots — Siège social à Crac'h. Interventions sur Vannes, Lorient, Auray, Quiberon, Pontivy et l'ensemble du département. Clients : Enedis, Morbihan Énergies, communes du Morbihan. Chantiers récents : Crac'h, Guérihouel, Boceno. — KW : entreprise tp morbihan (110/mois, KD 3), travaux publics lorient (20/mois), travaux publics vannes (20/mois)]
                    </p>
                  </div>
                </Card>
              </Link>
              <div className={styles.deptCta}>
                <Button label="Nos interventions dans le Morbihan" href="/territoires/morbihan" variant="primary" />
              </div>
            </AnimDiv>
            <AnimDiv>
              <Link to="/territoires/finistere" className={styles.cardLink}>
                <Card>
                  <Placeholder text="Photo paysage Finistère — Pointe du Raz, phare, falaises, mer bretonne, ciel dramatique" height="300px" />
                  <div className={styles.cardBodyLarge}>
                    <h2 className={styles.deptTitle}>Finistère</h2>
                    <p className={styles.cardText}>
                      [~50 mots — Agence à Melgven. Interventions sur Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden et le sud Finistère. Même palette d'expertises que le Morbihan, équipe locale dédiée. — KW : entreprise tp finistère (40/mois, KD 5), travaux publics quimper (20/mois), enedis finistère (40/mois)]
                    </p>
                  </div>
                </Card>
              </Link>
              <div className={styles.deptCta}>
                <Button label="Nos interventions dans le Finistère" href="/territoires/finistere" variant="primary" />
              </div>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 5 — CHIFFRES & COUVERTURE */}
      <Section className={styles.sectionAlt}>
        <div className={`container ${styles.countersInner}`}>
          <Counter number={2} label="agences en Bretagne" />
          <div className={styles.counterSep} />
          <Counter number={2} label="départements couverts" />
          <div className={styles.counterSep} />
          <Counter number={40} suffix="+" label="collaborateurs" />
          <div className={styles.counterSep} />
          <Counter number={20} suffix="+" label="ans d'ancrage local" />
        </div>
      </Section>

      {/* BLOC 6 — NOS RÉFÉRENCES LOCALES */}
      <Section className={styles.sectionWhite}>
        <div className={styles.referencesInner}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos partenaires de confiance en Bretagne</h2>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.referencesRow}>
              <div className={styles.refItem}>
                <Placeholder text="Logo Enedis" height="60px" width="160px" />
                <span className={styles.refName}>Enedis — Morbihan & Finistère</span>
                <Link to="/references/enedis" className={styles.linkArrow}>Voir →</Link>
              </div>
              <div className={styles.refItem}>
                <Placeholder text="Logo Morbihan Énergies" height="60px" width="160px" />
                <span className={styles.refName}>Morbihan Énergies</span>
                <Link to="/references/morbihan-energies" className={styles.linkArrow}>Voir →</Link>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — CTA CONTACT */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet de réseaux en Bretagne ?</h2>
            <p className={styles.ctaSubtitle}>
              [Que vous soyez dans le Morbihan ou le Finistère, contactez l'agence Restech la plus proche pour vos travaux de réseaux électriques, d'éclairage public ou de fibre optique.]
            </p>
            <Button label="Nous contacter" href="/contact" variant="primary" className={styles.ctaPrimary} />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 8 — BLOC SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Restech — Travaux publics en Bretagne</h2>
            <p className={styles.seoText}>
              [Texte SEO ~130 mots — Restech est une entreprise de travaux publics en Bretagne, filiale du Groupe Synelis, spécialisée dans les{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">réseaux électriques</Link>, l'{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">éclairage public</Link> et la{' '}
              <Link to="/expertises/fibre-optique-maintenance">maintenance fibre optique</Link>. Depuis notre siège social de Crac'h dans le{' '}
              <Link to="/territoires/morbihan">Morbihan</Link> et notre agence de Melgven dans le{' '}
              <Link to="/territoires/finistere">Finistère</Link>, nous intervenons sur les communes de Vannes, Lorient, Auray, Quiberon, Pontivy, Quimper, Concarneau, Fouesnant, Pont-Aven et Rosporden. Partenaire d'{' '}
              <Link to="/references/enedis">Enedis</Link> et de{' '}
              <Link to="/references/morbihan-energies">Morbihan Énergies</Link>, Restech réalise les travaux de branchement électrique, de raccordement réseau, d'enfouissement de lignes, d'éclairage public LED et de mise en lumière de patrimoine pour les collectivités bretonnes. Nos ~40 collaborateurs et notre parc matériel propre garantissent une intervention rapide et autonome sur chaque chantier.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>.{' '}
              <a href="https://synelis.fr" target="_blank" rel="noopener noreferrer">Découvrir le Groupe Synelis →</a>{' '}
              — KW : entreprise travaux publics bretagne (50/mois), entreprise tp morbihan (110/mois), entreprise tp finistère (40/mois), travaux publics lorient (20/mois), travaux publics vannes (20/mois), travaux publics quimper (20/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
