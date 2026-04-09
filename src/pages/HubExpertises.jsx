import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Counter from '../components/ui/Counter';
import styles from './HubExpertises.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
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

export default function HubExpertises() {
  return (
    <div>

      {/* BLOC 1 — HERO INTERNE */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Vue panoramique chantier multi-réseaux — tranchée ouverte avec câbles électriques et gaines, techniciens au travail, paysage breton en arrière-plan (champs, ciel nuageux)"
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
          <div className={styles.breadcrumb}>
            <Link to="/">Accueil</Link> <span>→</span> <span>Nos expertises</span>
          </div>
          <h1 className={styles.heroTitle}>Nos expertises en réseaux et éclairage en Bretagne</h1>
          <p className={styles.heroSubtitle}>
            [Sous-titre résumant le périmètre : de la conception à la maintenance, Restech intervient sur le VRD, l'éclairage public et les réseaux d'énergie en Morbihan & Finistère]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRODUCTION */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte de positionnement ~100 mots — Restech, entreprise de travaux publics en Bretagne et filiale du Groupe Synelis, met à disposition de ses clients (Enedis, Morbihan Énergies, collectivités locales) une double compétence : les réseaux électriques de distribution (branchement électrique, raccordement, enfouissement HTA/BT) et l'éclairage public (installation, rénovation, éclairage public LED, mise en lumière de patrimoine). Deux agences à Crac'h (Morbihan) et Melgven (Finistère), un parc matériel propre, et l'appui du Groupe Synelis. — KW : entreprise travaux publics bretagne (50/mois), branchement électrique (1 900/mois), éclairage public (4 400/mois), maintenance fibre optique (40/mois)]
            </p>
          </AnimDiv>
          <AnimDiv>
            <a
              href="https://synelis.fr/nos-activites"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              Découvrir toutes les activités du Groupe Synelis →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — CARTES EXPERTISES */}
      <Section className={styles.cards}>
        <div className="container">
          <motion.div className={styles.cardsGrid} variants={stagger}>
            <AnimDiv>
              <Link to="/expertises/vrd-viabilisation" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier VRD — terrassement, pose de canalisations et bordures, engins, équipe Restech sur un chantier de viabilisation breton"
                    height="320px"
                  />
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>Expertise</span>
                    <h2 className={styles.cardTitle}>VRD & Viabilisation</h2>
                    <p className={styles.cardText}>
                      [Description ~60 mots — Voirie et réseaux divers, viabilisation de terrains et lotissements en Morbihan et Finistère. Terrassement, pose de canalisations (eau potable, eaux usées, eaux pluviales), bordures, voirie, raccordement aux réseaux humides et secs. Une expertise terrain au service des collectivités, aménageurs et promoteurs bretons.]
                    </p>
                    <ul className={styles.bulletList}>
                      <li>Terrassement & viabilisation de lotissements</li>
                      <li>Canalisations eau potable & assainissement</li>
                      <li>Voirie, bordures & remise en état</li>
                    </ul>
                  </div>
                </Card>
              </Link>
              <div className={styles.cardCta}>
                <Button label="Découvrir cette expertise" href="/expertises/vrd-viabilisation" variant="primary" />
              </div>
            </AnimDiv>

            <AnimDiv>
              <Link to="/expertises/eclairage-public" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier éclairage public — nacelle élévatrice déployée de nuit, technicien installant un luminaire LED sur un mât dans une rue de bourg breton éclairée"
                    height="320px"
                  />
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>Expertise</span>
                    <h2 className={styles.cardTitle}>Éclairage public</h2>
                    <p className={styles.cardText}>
                      [Description ~60 mots — Installation et rénovation d'éclairage public LED, mise en lumière de patrimoine communal pour les communes du Morbihan et du Finistère. Diagnostic du parc, plans pluriannuels, marchés publics, télégestion. Restech accompagne les collectivités bretonnes dans leur transition énergétique. — KW : éclairage public (4 400/mois), éclairage public led (210/mois), rénovation éclairage public (30/mois)]
                    </p>
                    <ul className={styles.bulletList}>
                      <li>Éclairage public LED neuf & rénovation</li>
                      <li>Mise en lumière de patrimoine</li>
                      <li>Marchés publics communaux & intercommunaux</li>
                    </ul>
                  </div>
                </Card>
              </Link>
              <div className={styles.cardCta}>
                <Button label="Découvrir cette expertise" href="/expertises/eclairage-public" variant="primary" />
              </div>
            </AnimDiv>

            <AnimDiv>
              <Link to="/expertises/reseaux-energie" className={styles.cardLink}>
                <Card>
                  <Placeholder
                    text="Photo chantier réseau électrique — pose de câble HTA en tranchée, poste de transformation HTA-BT, technicien Restech, environnement rural breton"
                    height="320px"
                  />
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>Expertise</span>
                    <h2 className={styles.cardTitle}>Réseaux d'énergie</h2>
                    <p className={styles.cardText}>
                      [Description ~60 mots — Branchement électrique, raccordement et extension de réseaux HTA/BT, enfouissement de lignes aériennes, installation de postes de transformation HTA-BT pour Enedis, Morbihan Énergies et les collectivités. Une expertise réseau historique avec notre propre parc matériel (nacelles 18m, pelles, camions grue). — KW : branchement électrique (1 900/mois), raccordement réseau électrique (110/mois)]
                    </p>
                    <ul className={styles.bulletList}>
                      <li>Réseau HTA aérien & souterrain</li>
                      <li>Poste de transformation HTA-BT</li>
                      <li>Branchement & raccordement Enedis</li>
                    </ul>
                  </div>
                </Card>
              </Link>
              <div className={styles.cardCta}>
                <Button label="Découvrir cette expertise" href="/expertises/reseaux-energie" variant="primary" />
              </div>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — CHIFFRES CLÉS COMPACT */}
      <Section className={styles.counters}>
        <div className={`container ${styles.countersInner}`}>
          <Counter number={40} suffix="+" label="techniciens sur le terrain" />
          <div className={styles.counterSep} />
          <Counter number={2} label="départements couverts" />
          <div className={styles.counterSep} />
          <Counter number={6} label="filiales sœurs" />
        </div>
      </Section>

      {/* BLOC 5 — MAILLAGE TERRITORIAL */}
      <Section className={styles.territorial}>
        <div className={styles.territorialInner}>
          <AnimDiv>
            <h2 className={styles.territorialTitle}>Nos zones d'intervention</h2>
            <p className={styles.territorialText}>
              [Texte ~40 mots — Restech intervient exclusivement en Bretagne, depuis ses deux agences de Crac'h (Morbihan) et Melgven (Finistère). Nos équipes couvrent les communes de Vannes, Lorient, Auray, Quimper, Concarneau et leurs environs. — KW : entreprise tp morbihan (110/mois), entreprise tp finistère (40/mois)]
            </p>
            <div className={styles.territorialCtas}>
              <Button label="Morbihan →" href="/territoires/morbihan" variant="secondary" />
              <Button label="Finistère →" href="/territoires/finistere" variant="secondary" />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — CTA CONTACT */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet de réseaux en Bretagne ?</h2>
            <p className={styles.ctaSubtitle}>
              [Texte CTA ~30 mots — Collectivité, syndicat d'énergie, opérateur ou entreprise : contactez Restech pour vos travaux de VRD, d'éclairage public ou de réseaux d'énergie en Morbihan et Finistère.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Nous contacter" href="/contact" variant="primary" className={styles.ctaPrimary} />
              <Button label="Voir nos réalisations" href="/realisations" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — BLOC SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Restech — Expertises réseaux en Bretagne</h2>
            <p className={styles.seoText}>
              [Texte SEO ~120 mots — Filiale du Groupe Synelis spécialisée dans les travaux de réseaux en Bretagne, Restech assure la conception, la réalisation et la maintenance des{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">réseaux électriques</Link> (branchement électrique, raccordement réseau électrique, réseau électrique souterrain) et de l'{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">éclairage public</Link> (éclairage public LED, rénovation éclairage public, mise en lumière patrimoine) pour les collectivités,{' '}
              <Link to="/references/enedis">Enedis</Link> et{' '}
              <Link to="/references/morbihan-energies">Morbihan Énergies</Link> en{' '}
              <Link to="/territoires/morbihan">Morbihan</Link> et{' '}
              <Link to="/territoires/finistere">Finistère</Link>. Avec ~40 collaborateurs et un parc matériel propre (nacelles, pelles, camions grue), Restech est l'interlocuteur local des communes de Vannes, Lorient, Quimper, Auray, Concarneau.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>. — KW longue traîne : branchement électrique (1 900/mois), éclairage public led (210/mois), raccordement réseau électrique (110/mois), réseau électrique souterrain (20/mois), rénovation éclairage public (30/mois), mise en lumière patrimoine (10/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
