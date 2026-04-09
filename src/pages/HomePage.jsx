import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Counter from '../components/ui/Counter';
import styles from './HomePage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

function Section({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
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

export default function HomePage() {
  return (
    <div className={styles.home}>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo aérienne chantier breton — tranchée ouverte dans un paysage côtier breton, pelleteuse et équipe en gilets haute visibilité, ciel couvert typique Bretagne"
            height="100vh"
          />
        </div>
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span className={styles.heroLabel} variants={fadeUp} transition={{ duration: 0.6 }}>
            Filiale du Groupe Synelis
          </motion.span>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            VRD, éclairage public et réseaux d'énergie en Bretagne
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Phrase d'accroche positionnant Restech comme l'entreprise multi-réseaux de proximité en Morbihan & Finistère — ~40 collaborateurs, 2 agences, parc matériel propre]
          </motion.p>
          <motion.div className={styles.heroCtas} variants={fadeUp} transition={{ duration: 0.6 }}>
            <Button label="Nos expertises" href="/expertises" variant="primary" className={styles.heroCtaPrimary} />
            <Button label="Nous rejoindre" href="/nous-rejoindre" variant="secondary" className={styles.heroCtaSecondary} />
          </motion.div>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRODUCTION */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <SectionTitle title="Votre partenaire réseaux en Bretagne" align="center" />
          </AnimDiv>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte de présentation ~80 mots — Restech, filiale du Groupe Synelis, intervient depuis plus de 20 ans sur le VRD, l'éclairage public et les réseaux d'énergie en Morbihan et Finistère. Mention des 2 agences (Crac'h, Melgven), du parc matériel propre (nacelles, pelles, camions grue), et du positionnement terrain de proximité. KW : entreprise travaux publics bretagne (50/mois), réseaux électriques, éclairage public, Morbihan, Finistère]
            </p>
          </AnimDiv>
          <AnimDiv>
            <a
              href="https://synelis.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              Découvrir le Groupe Synelis →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — NOS EXPERTISES */}
      <Section className={styles.expertises}>
        <div className="container">
          <AnimDiv>
            <SectionTitle
              title="Nos expertises"
              subtitle="De la conception à la maintenance, nos équipes interviennent sur vos infrastructures de VRD, d'éclairage public et d'énergie."
              align="center"
            />
          </AnimDiv>
          <motion.div className={styles.expertisesGrid} variants={stagger}>
            <AnimDiv>
              <Link to="/expertises/vrd-viabilisation" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier VRD — tranchée, pose de canalisations et bordures, engins de terrassement, équipe Restech sur un chantier de viabilisation breton"
                    height="280px"
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>VRD & Viabilisation</h3>
                    <p className={styles.cardText}>
                      [Voirie et réseaux divers, viabilisation de terrains et lotissements en Morbihan & Finistère. Terrassement, pose de canalisations, bordures, voirie, raccordement aux réseaux humides et secs.]
                    </p>
                    <span className={styles.cardArrow}>Découvrir cette expertise →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
            <AnimDiv>
              <Link to="/expertises/eclairage-public" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier éclairage public — technicien en nacelle travaillant sur un luminaire LED, rue d'un bourg breton en arrière-plan"
                    height="280px"
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Éclairage public</h3>
                    <p className={styles.cardText}>
                      [Installation et rénovation d'éclairage public LED, mise en lumière de patrimoine pour les communes du Morbihan et du Finistère. — KW : éclairage public (4 400/mois), éclairage public led (210/mois)]
                    </p>
                    <span className={styles.cardArrow}>Découvrir cette expertise →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
            <AnimDiv>
              <Link to="/expertises/reseaux-energie" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier réseau électrique — pose de câble HTA en tranchée, technicien Restech, environnement rural breton"
                    height="280px"
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Réseaux d'énergie</h3>
                    <p className={styles.cardText}>
                      [Branchement, raccordement, enfouissement de réseaux HTA/BT, postes de transformation HTA-BT. Interventions pour Enedis, Morbihan Énergies et collectivités. — KW : branchement électrique (1 900/mois), raccordement réseau électrique (110/mois)]
                    </p>
                    <span className={styles.cardArrow}>Découvrir cette expertise →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — CHIFFRES CLÉS */}
      <Section className={styles.counters}>
        <div className={`container ${styles.countersInner}`}>
          <Counter number={40} suffix="+" label="collaborateurs" />
          <div className={styles.counterSep} />
          <Counter number={2} label="agences en Bretagne" />
          <div className={styles.counterSep} />
          <Counter number={20} suffix="+" label="ans d'expérience" />
          <div className={styles.counterSep} />
          <Counter number={1} label="groupe, 6 filiales" />
        </div>
      </Section>

      {/* BLOC 5 — NOS TERRITOIRES */}
      <Section className={styles.territoires}>
        <div className="container">
          <AnimDiv>
            <SectionTitle
              title="Nos territoires"
              subtitle="Deux agences, deux départements, une même exigence de proximité."
              align="center"
            />
          </AnimDiv>
          <motion.div className={styles.territoiresGrid} variants={stagger}>
            <AnimDiv>
              <Link to="/territoires/morbihan" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Carte ou photo paysage Morbihan — Golfe du Morbihan, côte bretonne, ambiance maritime"
                    height="240px"
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Morbihan</h3>
                    <p className={styles.cardText}>
                      [Siège social à Crac'h (ZA Le Moustoir). Interventions sur Vannes, Lorient, Auray, Quiberon, Pontivy et l'ensemble du département. — KW : entreprise tp morbihan (110/mois, KD 3), travaux publics lorient (20/mois), travaux publics vannes (20/mois)]
                    </p>
                    <span className={styles.cardArrow}>Nos interventions dans le Morbihan →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
            <AnimDiv>
              <Link to="/territoires/finistere" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Carte ou photo paysage Finistère — Pointe du Raz ou côte finistérienne, phare, falaises"
                    height="240px"
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>Finistère</h3>
                    <p className={styles.cardText}>
                      [Agence à Melgven (ZA de Kerampaou). Interventions sur Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden. — KW : entreprise tp finistère (40/mois, KD 5), travaux publics quimper (20/mois)]
                    </p>
                    <span className={styles.cardArrow}>Nos interventions dans le Finistère →</span>
                  </div>
                </Card>
              </Link>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 6 — DERNIÈRES RÉALISATIONS */}
      <Section className={styles.realisations}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Nos dernières réalisations" align="center" />
          </AnimDiv>
          <motion.div className={styles.realisationsGrid} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo chantier Crac'h — réaménagement rue du Stade, tranchée, engins"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Réseaux électriques</span>
                  <h4 className={styles.cardTitleSmall}>Réaménagement rue du Stade — Crac'h</h4>
                  <p className={styles.cardText}>
                    [Enfouissement réseaux et reprise éclairage public pour la commune de Crac'h — client : commune]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo éclairage public — luminaires LED installés sur un chemin communal breton"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Éclairage public</span>
                  <h4 className={styles.cardTitleSmall}>Éclairage chemin de Guérihouel</h4>
                  <p className={styles.cardText}>
                    [Rénovation éclairage public LED sur chemin communal — client : collectivité locale]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo chantier Enedis — travaux réseau électrique, câbles, poteau, techniciens"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Enedis</span>
                  <h4 className={styles.cardTitleSmall}>Travaux réseau Enedis — Boceno</h4>
                  <p className={styles.cardText}>
                    [Extension et renforcement du réseau électrique HTA pour Enedis — client : Enedis Morbihan]
                  </p>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
          <AnimDiv className={styles.realisationsCta}>
            <Link to="/realisations" className={styles.linkArrow}>
              Toutes nos réalisations →
            </Link>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — NOS RÉFÉRENCES CLIENTS */}
      <Section className={styles.references}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Ils nous font confiance" align="center" />
          </AnimDiv>
          <AnimDiv>
            <div className={styles.referencesRow}>
              <div className={styles.referenceItem}>
                <Placeholder text="Logo Enedis — fond blanc, logo officiel Enedis vert/bleu" height="80px" width="200px" />
                <h4 className={styles.referenceName}>Enedis</h4>
                <p className={styles.referenceText}>
                  [Partenaire historique pour la distribution électrique en Morbihan et Finistère — KW : enedis morbihan (90/mois), enedis finistère (40/mois)]
                </p>
                <Link to="/references/enedis" className={styles.linkArrow}>
                  Voir notre partenariat →
                </Link>
              </div>
              <div className={styles.referenceItem}>
                <Placeholder text="Logo Morbihan Énergies — logo institutionnel syndicat départemental" height="80px" width="200px" />
                <h4 className={styles.referenceName}>Morbihan Énergies</h4>
                <p className={styles.referenceText}>
                  [Syndicat d'énergie départemental, partenaire sur les projets d'éclairage public et de modernisation des réseaux — KW : morbihan énergies (10/mois)]
                </p>
                <Link to="/references/morbihan-energies" className={styles.linkArrow}>
                  Voir notre partenariat →
                </Link>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 8 — NOUS REJOINDRE */}
      <Section className={styles.rejoindre}>
        <div className={`container ${styles.rejoindreGrid}`}>
          <motion.div
            className={styles.rejoindreText}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle title="Rejoignez une équipe de terrain en Bretagne" />
            <p className={styles.rejoindreP}>
              [Accroche marque-employeur — Restech recrute des monteurs réseaux électriques, conducteurs de travaux, terrassiers. Travail en extérieur, équipe à taille humaine (~40 personnes), ancrage local Morbihan/Finistère. Évolution de carrière au sein du Groupe Synelis. — KW : monteur réseau électrique (110/mois, KD 5), conducteur de travaux bretagne (30/mois, KD 7)]
            </p>
            <div className={styles.rejoindreCtas}>
              <Button label="Voir nos offres" href="/nous-rejoindre/offres" variant="primary" className={styles.rejoindreCtaPrimary} />
              <Button label="Nos métiers" href="/nous-rejoindre/metiers" variant="secondary" className={styles.rejoindreCtaSecondary} />
            </div>
            <a
              href="https://synelis.fr/nous-rejoindre"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rejoindreIntersite}
            >
              Toutes les offres du Groupe Synelis →
            </a>
          </motion.div>
          <motion.div
            className={styles.rejoindreImage}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Photo équipe Restech — groupe de collaborateurs sur un chantier, gilets et casques, ambiance conviviale et terrain"
              height="400px"
            />
          </motion.div>
        </div>
      </Section>

      {/* BLOC 9 — BLOC SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Restech en bref</h2>
            <p className={styles.seoText}>
              [Texte SEO 150-200 mots — Restech, entreprise de travaux publics en Bretagne et filiale du Groupe Synelis, intervient en Morbihan et Finistère sur les{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">réseaux électriques</Link> aériens et souterrains (branchement électrique, raccordement réseau électrique, réseau électrique souterrain), l'{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">éclairage public</Link> (installation, rénovation éclairage public, éclairage public LED, mise en lumière patrimoine) et les réseaux d'énergie (HTA/BT, postes de transformation HTA-BT). Nos clients —{' '}
              <Link to="/references/enedis">Enedis</Link>,{' '}
              <Link to="/references/morbihan-energies">Morbihan Énergies</Link>, collectivités locales — font appel à notre expertise et à notre parc matériel propre pour leurs projets d'infrastructure dans les communes de Vannes, Lorient, Quimper, Auray, Concarneau. Interventions en{' '}
              <Link to="/territoires/morbihan">Morbihan</Link> et{' '}
              <Link to="/territoires/finistere">Finistère</Link>.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>. — KW longue traîne : éclairage public led (210/mois), branchement électrique (1 900/mois), raccordement réseau électrique (110/mois), réseau électrique souterrain (20/mois), rénovation éclairage public (30/mois), mise en lumière patrimoine (10/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
