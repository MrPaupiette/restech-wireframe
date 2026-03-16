import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './Territoire.module.css';

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

const villes = [
  { name: 'Vannes', bold: true },
  { name: 'Lorient', bold: true },
  { name: 'Auray' },
  { name: 'Quiberon' },
  { name: 'Pontivy' },
  { name: 'Carnac' },
  { name: 'La Trinité-sur-Mer' },
  { name: 'Ploemeur' },
  { name: 'Hennebont' },
  { name: 'Ploërmel' },
  { name: 'Muzillac' },
  { name: 'Sarzeau' },
  { name: 'Arradon' },
  { name: 'Séné' },
  { name: 'Baden' },
];

export default function TerritoireMorbihan() {
  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo paysage Morbihan — Golfe du Morbihan vu du ciel ou depuis la côte, mer calme, îles, lumière dorée bretonne, éventuellement un chantier en premier plan"
            height="380px"
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
                { label: 'Nos territoires', href: '/territoires' },
                { label: 'Morbihan' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Restech dans le Morbihan : travaux de réseaux électriques et éclairage public
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre — Depuis notre siège social de Crac'h, nos équipes interviennent sur l'ensemble du Morbihan pour les collectivités, Enedis et Morbihan Énergies.]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — NOTRE AGENCE */}
      <Section className={styles.sectionWhite}>
        <div className={`container ${styles.gridTextImg}`}>
          <motion.div
            className={styles.gridText}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Notre siège social à Crac'h</h2>
            <p className={styles.bodyText}>
              [Texte ~80 mots — Restech a son siège social à Crac'h, au cœur du Morbihan, dans la ZA Le Moustoir. C'est depuis cette base que nos conducteurs de travaux, monteurs réseaux et techniciens interviennent quotidiennement sur les communes du département. Bureau d'études intégré pour la conception des projets, parc matériel propre (nacelles 18m, pelles hydrauliques, camions grue 6×4/8×4, lève-poteaux), et équipes de terrassement dédiées. Une entreprise de travaux publics dans le Morbihan enracinée localement depuis plus de 20 ans. — KW : entreprise tp morbihan (110/mois, KD 3)]
            </p>
            <div className={styles.addressBlock}>
              <strong>Restech — Siège social</strong><br />
              ZA Le Moustoir, 14 bis Rue de Bretagne<br />
              56950 Crac'h
            </div>
          </motion.div>
          <motion.div
            className={styles.gridImg}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Photo agence Restech Crac'h — bâtiment ou cour avec véhicules et engins Restech garés, ambiance parc matériel opérationnel, ciel breton"
              height="350px"
            />
          </motion.div>
        </div>
      </Section>

      {/* BLOC 3 — NOS INTERVENTIONS */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Nos interventions dans le Morbihan" align="center" />
          </AnimDiv>
          <motion.div className={styles.grid3} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier Enedis Morbihan — tranchée, câbles, technicien, environnement rural breton" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Réseaux électriques pour Enedis</h3>
                  <p className={styles.cardText}>
                    [~40 mots — Branchement électrique, raccordement réseau HTA/BT, enfouissement de lignes aériennes. Restech est prestataire Enedis dans le Morbihan pour les travaux de terrassement, pose et raccordement sur le réseau de distribution électrique. — KW : enedis morbihan (90/mois), branchement électrique]
                  </p>
                  <Link to="/expertises/reseaux-electriques-eclairage" className={styles.cardArrow}>Notre expertise réseaux →</Link>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo éclairage public Morbihan — rue de bourg éclairée LED, luminaires modernes, ambiance nocturne commune bretonne" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Éclairage public & mise en lumière</h3>
                  <p className={styles.cardText}>
                    [~40 mots — Installation, rénovation LED et mise en lumière de patrimoine pour les communes du Morbihan. Programmes de modernisation avec Morbihan Énergies. Réduction de la consommation énergétique de 50 à 70%. — KW : éclairage public, morbihan énergies (10/mois)]
                  </p>
                  <Link to="/expertises/reseaux-electriques-eclairage" className={styles.cardArrow}>Notre expertise éclairage →</Link>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo maintenance fibre Morbihan — technicien avec soudeuse, boîtier ouvert, route de campagne bretonne" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Maintenance fibre optique</h3>
                  <p className={styles.cardText}>
                    [~30 mots — Maintenance préventive et curative des réseaux fibre optique FTTH déployés dans le Morbihan. Astreinte, dépannage, mesures réflectométriques. — KW : maintenance fibre optique]
                  </p>
                  <Link to="/expertises/fibre-optique-maintenance" className={styles.cardArrow}>Notre expertise fibre →</Link>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — NOS CLIENTS */}
      <Section className={styles.sectionWhite}>
        <div className={styles.clientsContainer}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos clients dans le Morbihan</h2>
            <p className={styles.clientsIntro}>
              [Texte ~50 mots — Restech est partenaire des principaux donneurs d'ordre du Morbihan. Gestionnaires de réseau, syndicats d'énergie, collectivités locales : nos équipes interviennent sous mandat avec les habilitations et protocoles requis.]
            </p>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.clientsGrid}>
              <div className={styles.clientItem}>
                <Placeholder text="Logo Enedis" height="50px" width="140px" />
                <h4 className={styles.clientName}>Enedis — Distribution électrique</h4>
                <p className={styles.clientDesc}>[Partenaire pour le branchement, le raccordement et l'enfouissement des réseaux dans le Morbihan]</p>
                <Link to="/references/enedis" className={styles.linkArrow}>Voir →</Link>
              </div>
              <div className={styles.clientItem}>
                <Placeholder text="Logo Morbihan Énergies" height="50px" width="140px" />
                <h4 className={styles.clientName}>Morbihan Énergies — Syndicat d'énergie</h4>
                <p className={styles.clientDesc}>[Programmes d'enfouissement, modernisation de l'éclairage public, coordination départementale]</p>
                <Link to="/references/morbihan-energies" className={styles.linkArrow}>Voir →</Link>
              </div>
              <div className={styles.clientItem}>
                <Placeholder text="Icône mairie / collectivité" height="50px" width="140px" />
                <h4 className={styles.clientName}>Communes du Morbihan</h4>
                <p className={styles.clientDesc}>[Marchés publics d'éclairage, voirie, réseaux. Crac'h, Vannes, Lorient, Auray, Quiberon, Pontivy…]</p>
                <Link to="/contact" className={styles.linkArrow}>Nous contacter →</Link>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — CHANTIERS RÉCENTS */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos chantiers récents dans le Morbihan</h2>
          </AnimDiv>
          <motion.div className={styles.grid3} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier Crac'h — réaménagement rue du Stade, tranchée, engins, village breton" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Réseaux électriques</span>
                  <h4 className={styles.cardTitleSmall}>Réaménagement rue du Stade — Crac'h</h4>
                  <p className={styles.cardText}>[Enfouissement réseaux et reprise éclairage public — commune de Crac'h]</p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo éclairage Guérihouel — luminaires installés sur chemin communal, verdure bretonne" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Éclairage public</span>
                  <h4 className={styles.cardTitleSmall}>Éclairage chemin de Guérihouel</h4>
                  <p className={styles.cardText}>[Rénovation éclairage public LED sur chemin communal — collectivité locale]</p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier Boceno — travaux réseau RD28, route départementale, engins" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Enedis</span>
                  <h4 className={styles.cardTitleSmall}>Travaux réseau RD28 — Boceno</h4>
                  <p className={styles.cardText}>[Extension et renforcement réseau électrique HTA — Enedis Morbihan]</p>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
          <AnimDiv className={styles.chantiersLink}>
            <Link to="/realisations" className={styles.linkArrow}>Toutes nos réalisations →</Link>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — VILLES D'INTERVENTION */}
      <Section className={styles.sectionWhite}>
        <div className={styles.villesContainer}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos villes d'intervention dans le Morbihan</h2>
            <p className={styles.villesIntro}>
              [Texte ~60 mots — Nos équipes basées à Crac'h interviennent sur l'ensemble du département du Morbihan. Voici nos principales zones d'intervention, sans que cette liste soit exhaustive — nous intervenons aussi sur les communes rurales et littorales du département.]
            </p>
            <div className={styles.villesTags}>
              {villes.map((v) => (
                <span key={v.name} className={`${styles.villeTag} ${v.bold ? styles.villeTagBold : ''}`}>
                  {v.name}
                </span>
              ))}
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — CTA */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet de réseaux dans le Morbihan ?</h2>
            <p className={styles.ctaSubtitle}>
              [Collectivité, syndicat d'énergie ou entreprise : contactez notre agence de Crac'h pour vos travaux de réseaux électriques, d'éclairage public ou de maintenance fibre dans le Morbihan.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Demander un devis" href="/contact" variant="primary" className={styles.ctaPrimary} />
              <Button label="Voir nos expertises" href="/expertises" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 8 — SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Restech dans le Morbihan</h2>
            <p className={styles.seoText}>
              [Texte SEO ~120 mots — Restech est une entreprise de travaux publics dans le Morbihan, filiale du Groupe Synelis, implantée à Crac'h (ZA Le Moustoir). Nos équipes réalisent les travaux de branchement électrique, de raccordement réseau HTA/BT et d'enfouissement de lignes pour{' '}
              <Link to="/references/enedis">Enedis Morbihan</Link> et les collectivités. Nous assurons l'installation et la rénovation d'{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">éclairage public LED</Link> pour les communes de Vannes, Lorient, Auray, Quiberon, Pontivy, en partenariat avec{' '}
              <Link to="/references/morbihan-energies">Morbihan Énergies</Link>. Nos techniciens interviennent aussi en maintenance fibre optique sur les réseaux FTTH du département. Avec ~40 collaborateurs et un parc matériel propre, Restech est l'interlocuteur TP de proximité du Morbihan. Nous intervenons aussi dans le{' '}
              <Link to="/territoires/finistere">Finistère</Link>.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>. — KW : entreprise tp morbihan (110/mois), enedis morbihan (90/mois), travaux publics lorient (20/mois), travaux publics vannes (20/mois), morbihan énergies (10/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
