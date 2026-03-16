import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Counter from '../components/ui/Counter';
import Breadcrumb from '../components/ui/Breadcrumb';
import FAQAccordion from '../components/ui/FAQAccordion';
import styles from './ReseauxElectriques.module.css';

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

const faqItems = [
  {
    question: 'Qui réalise les travaux de branchement électrique en Bretagne ?',
    answer: '[Réponse ~60 mots — Les travaux de branchement électrique sont confiés par Enedis à des entreprises de travaux publics agréées. En Morbihan et Finistère, Restech est l\'un des prestataires qui réalise physiquement les ouvertures de tranchées, la pose de câbles et l\'installation des coffrets de branchement. La démarche administrative, elle, se fait directement auprès d\'Enedis.]',
  },
  {
    question: 'Combien coûte une rénovation d\'éclairage public LED ?',
    answer: '[Réponse ~60 mots — Le coût dépend du nombre de points lumineux, du type de luminaires et de l\'état du réseau existant. En moyenne, le remplacement d\'un luminaire sodium par un LED représente un investissement de 800 à 2 500€ par point, amorti en 3 à 5 ans grâce aux économies d\'énergie (50 à 70% de réduction). Restech établit un diagnostic gratuit de votre parc.]',
  },
  {
    question: 'Quelle est la différence entre réseau HTA et basse tension ?',
    answer: '[Réponse ~50 mots — Le réseau HTA (haute tension A) transporte l\'électricité à 20 000V entre les postes sources et les postes de transformation. Le réseau basse tension (230/400V) distribue ensuite l\'électricité jusqu\'aux habitations et entreprises. Restech intervient sur les deux niveaux de tension en Morbihan et Finistère.]',
  },
  {
    question: 'Restech intervient-il sur la fibre optique en plus de l\'électricité ?',
    answer: '[Réponse ~50 mots — Oui, Restech assure aussi la maintenance des réseaux fibre optique déployés en Bretagne (maintenance préventive, curative, astreinte). Pour le déploiement FTTH à grande échelle, c\'est notre filiale sœur CAUM qui intervient. Les deux expertises sont complémentaires au sein du Groupe Synelis.]',
  },
];

export default function ReseauxElectriques() {
  return (
    <div>

      {/* BLOC 1 — HERO INTERNE */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo chantier réseaux électriques en Bretagne — nacelle élévatrice déployée le long d'une route bretonne bordée de talus, technicien intervenant sur une ligne, ciel breton caractéristique"
            height="400px"
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
                { label: 'Nos expertises', href: '/expertises' },
                { label: 'Réseaux électriques & Éclairage' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Réseaux électriques et éclairage public en Bretagne
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre positionnant Restech comme l'entreprise de terrain pour les travaux de branchement électrique, raccordement, éclairage public LED et enfouissement de réseaux en Morbihan et Finistère — partenaire d'Enedis et des collectivités locales]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRODUCTION */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte de positionnement ~120 mots — Restech intervient depuis ses agences de Crac'h (Morbihan) et Melgven (Finistère) sur deux familles de métiers complémentaires : les réseaux électriques de distribution et l'éclairage public communal. Pour Enedis, Morbihan Énergies et les collectivités bretonnes, nos équipes réalisent le branchement électrique des habitations et entreprises, le raccordement et l'extension des réseaux HTA/BT, l'enfouissement des lignes aériennes, et l'installation ou la rénovation de l'éclairage public LED. Chaque chantier est piloté localement avec notre propre parc matériel : nacelles 18m, pelles hydrauliques, camions grue 6×4. Notre filiale sœur ETPM assure ces mêmes expertises à l'échelle nationale dans le Grand Sud-Ouest. — KW : branchement électrique (1 900/mois), éclairage public (4 400/mois), raccordement réseau électrique (110/mois), Morbihan, Finistère]
            </p>
          </AnimDiv>
          <AnimDiv>
            <a
              href="https://etpm.fr/expertises/reseaux-energie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              Découvrir l'expertise nationale ETPM →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — BRANCHEMENT ÉLECTRIQUE */}
      <Section className={styles.sectionAlt}>
        <div className={`container ${styles.gridTextImg}`}>
          <motion.div
            className={styles.gridText}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Branchement électrique en Morbihan et Finistère</h2>
            <p className={styles.bodyText}>
              [Texte ~150 mots — Le branchement électrique est le raccordement physique entre le réseau de distribution publique et une propriété. Restech réalise ces travaux pour le compte d'Enedis en Morbihan et Finistère : ouverture de tranchée, pose du câble, installation du coffret de branchement en limite de parcelle, raccordement au réseau existant, remise en état de la voirie. Types d'interventions : branchement souterrain (90% de l'activité), branchement aérien (en voie de disparition), branchement provisoire chantier. L'angle Restech : nous ne sommes pas l'interlocuteur pour la démarche administrative (c'est Enedis). Nous sommes l'entreprise qui réalise physiquement les travaux. Quand Enedis attribue un chantier de branchement dans le Morbihan, c'est souvent Restech qui creuse. — KW : branchement électrique (1 900/mois, KD 34)]
            </p>
            <ul className={styles.bulletList}>
              <li>Branchement souterrain — 90% de notre activité</li>
              <li>Branchement aérien — dépose et remplacement</li>
              <li>Branchement provisoire — chantiers de construction</li>
            </ul>
          </motion.div>
          <motion.div
            className={styles.gridImg}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Photo branchement électrique — coffret Enedis neuf posé en limite de propriété, câble enterré visible dans la tranchée, technicien Restech au travail"
              height="380px"
            />
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — RACCORDEMENT RÉSEAU */}
      <Section className={styles.sectionWhite}>
        <div className={`container ${styles.gridImgText}`}>
          <motion.div
            className={styles.gridImg}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Photo raccordement réseau — tranchée avec câble HTA rouge, sable de pose, grillage avertisseur rouge, engin en arrière-plan, environnement rural breton"
              height="380px"
            />
          </motion.div>
          <motion.div
            className={styles.gridText}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Raccordement et extension de réseau électrique</h2>
            <p className={styles.bodyText}>
              [Texte ~120 mots — Le raccordement réseau électrique désigne les travaux de connexion, d'extension ou de renforcement du réseau de distribution publique. Restech intervient sur les réseaux HTA (20 000V) et basse tension (230/400V) pour Enedis et les collectivités en Bretagne. Ce que nous réalisons : extension de réseau pour desservir de nouveaux quartiers ou zones d'activité, renforcement de lignes existantes (remplacement de câbles vétustes), raccordement de postes de transformation HTA/BT, travaux sous tension et hors tension. Tous nos travaux respectent les prescriptions Enedis (normes NF C 11-201 et NF C 14-100). — KW : raccordement réseau électrique (110/mois, KD 18)]
            </p>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 5 — ENFOUISSEMENT */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <Placeholder
              text="Photo panoramique enfouissement lignes — vue large tranchée longue le long d'une route bretonne, lignes aériennes encore visibles en arrière-plan, poteaux en cours de dépose, engins au travail"
              height="300px"
            />
          </AnimDiv>
          <div className={styles.enfouissementText}>
            <AnimDiv>
              <h2 className={styles.h2}>Enfouissement de réseau électrique souterrain en Bretagne</h2>
              <p className={styles.bodyText}>
                [Texte ~100 mots — L'enfouissement des lignes aériennes est un enjeu pour les communes bretonnes : sécurité face aux intempéries, esthétique du paysage, fiabilité du réseau. Restech réalise les travaux d'enfouissement de réseau électrique souterrain en Morbihan et Finistère — de la dépose des lignes aériennes à la pose des câbles en tranchée, en passant par le raccordement. Nous intervenons sur les programmes pluriannuels d'enfouissement portés par Morbihan Énergies et les syndicats d'énergie. — KW : réseau électrique souterrain (20/mois, KD 5)]
              </p>
              <Link to="/references/morbihan-energies" className={styles.linkArrow}>
                Voir notre partenariat avec Morbihan Énergies →
              </Link>
            </AnimDiv>
          </div>
        </div>
      </Section>

      {/* BLOC 6 — ÉCLAIRAGE PUBLIC */}
      <Section className={styles.sectionWhite}>
        <div className="container">
          <AnimDiv>
            <SectionTitle
              title="Éclairage public en Bretagne"
              subtitle="Installation, rénovation LED et mise en lumière de patrimoine"
              align="center"
            />
          </AnimDiv>
          <motion.div className={styles.eclairageGrid} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo éclairage public LED — luminaire LED moderne installé sur mât, éclairage blanc chaud, rue de bourg breton de nuit"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Éclairage public LED</h3>
                  <p className={styles.cardText}>
                    [~60 mots — Installation de luminaires LED neufs et rénovation de parcs d'éclairage public existants (remplacement sodium par LED). Réduction de la consommation énergétique de 50 à 70%. Programmation horaire, détection de présence, télégestion. Restech accompagne les communes du Morbihan et du Finistère dans leur transition vers l'éclairage public LED. — KW : éclairage public led (210/mois, KD 3)]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo rénovation éclairage — technicien en nacelle remplaçant un ancien luminaire boule par un luminaire LED directionnel, commune bretonne"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Rénovation d'éclairage public</h3>
                  <p className={styles.cardText}>
                    [~60 mots — Remplacement de mâts vétustes, dépose de luminaires boule polluants, mise aux normes électriques des réseaux d'éclairage. Diagnostic du parc existant, plan de rénovation pluriannuel, travaux et mise en service. Nous intervenons sur les marchés publics communaux et intercommunaux en Bretagne. — KW : rénovation éclairage public (30/mois, KD 7)]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo mise en lumière patrimoine — église bretonne ou chapelle illuminée de nuit, éclairage architectural chaud, ambiance festive"
                  height="220px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Mise en lumière de patrimoine</h3>
                  <p className={styles.cardText}>
                    [~60 mots — Éclairage architectural de monuments, églises, chapelles et sites patrimoniaux bretons. Illuminations festives (Noël, événements communaux). Conception lumière, installation, maintenance. Un savoir-faire distinctif qui valorise l'identité des communes et attire les visiteurs. — KW : mise en lumière patrimoine (10/mois, KD 4)]
                  </p>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 7 — NOS CLIENTS ÉNERGIE */}
      <Section className={styles.clients}>
        <div className={`container ${styles.clientsGrid}`}>
          <motion.div
            className={styles.clientsText}
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.h2White}>Nos clients énergie en Bretagne</h2>
            <p className={styles.clientsP}>
              [Texte ~80 mots — Restech est partenaire des principaux gestionnaires de réseau en Bretagne. Nos équipes interviennent quotidiennement sous mandat de ces donneurs d'ordre, avec les habilitations et protocoles de sécurité requis. Enedis : gestionnaire du réseau de distribution d'électricité, partenaire historique en Morbihan et Finistère. Morbihan Énergies : syndicat d'énergie départemental, programmes d'enfouissement et de modernisation. Collectivités locales : communes, communautés de communes, marchés publics d'éclairage et de voirie. — KW : enedis morbihan (90/mois), morbihan énergies (10/mois)]
            </p>
            <div className={styles.clientsLinks}>
              <Link to="/references/enedis" className={styles.linkArrowWhite}>Notre partenariat Enedis →</Link>
              <Link to="/references/morbihan-energies" className={styles.linkArrowWhite}>Notre partenariat Morbihan Énergies →</Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.clientsLogos}
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Placeholder text="Logo Enedis" height="60px" width="160px" />
            <Placeholder text="Logo Morbihan Énergies" height="60px" width="160px" />
            <Placeholder text="Icône collectivités locales (mairie)" height="60px" width="160px" />
          </motion.div>
        </div>
      </Section>

      {/* BLOC 8 — MOYENS TECHNIQUES */}
      <Section className={styles.sectionWhite}>
        <div className="container">
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos moyens techniques</h2>
            <p className={styles.moyensIntro}>
              [Texte ~50 mots — Restech dispose de son propre parc matériel, ce qui nous distingue des sous-traitants légers. Nos équipes sont autonomes sur chaque chantier, de la signalisation à la remise en état, sans dépendre de la location externe.]
            </p>
          </AnimDiv>
          <motion.div className={styles.moyensGrid} variants={stagger}>
            <AnimDiv className={styles.moyensItem}>
              <Placeholder text="Icône nacelle" height="80px" width="80px" />
              <span className={styles.moyensLabel}>Nacelles 18m</span>
            </AnimDiv>
            <AnimDiv className={styles.moyensItem}>
              <Placeholder text="Icône pelle" height="80px" width="80px" />
              <span className={styles.moyensLabel}>Pelles hydrauliques</span>
            </AnimDiv>
            <AnimDiv className={styles.moyensItem}>
              <Placeholder text="Icône camion" height="80px" width="80px" />
              <span className={styles.moyensLabel}>Camions grue 6×4</span>
            </AnimDiv>
            <AnimDiv className={styles.moyensItem}>
              <Placeholder text="Icône lève-poteau" height="80px" width="80px" />
              <span className={styles.moyensLabel}>Lève-poteaux & dérouleuses</span>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 9 — ZONES D'INTERVENTION */}
      <Section className={styles.sectionAlt}>
        <div className={`container ${styles.gridImgText}`}>
          <motion.div
            className={styles.gridImg}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Carte stylisée Bretagne — Morbihan et Finistère mis en évidence, avec les villes principales pointées : Vannes, Lorient, Auray, Quimper, Concarneau, Crac'h, Melgven"
              height="350px"
            />
          </motion.div>
          <motion.div
            className={styles.gridText}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Nos zones d'intervention en Bretagne</h2>
            <p className={styles.bodyText}>
              [Texte ~80 mots — Restech intervient dans l'ensemble du Morbihan et du Finistère depuis ses deux agences. Nos principales zones d'intervention : Vannes, Lorient, Auray, Quiberon, Pontivy (Morbihan) et Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden (Finistère). Nous couvrons aussi les communes rurales et littorales de ces deux départements. — KW : entreprise tp morbihan (110/mois), entreprise tp finistère (40/mois), travaux publics lorient (20/mois), travaux publics vannes (20/mois), travaux publics quimper (20/mois)]
            </p>
            <div className={styles.zoneCtas}>
              <Button label="Morbihan" href="/territoires/morbihan" variant="secondary" />
              <Button label="Finistère" href="/territoires/finistere" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 10 — FAQ */}
      <Section className={styles.sectionWhite}>
        <div className={styles.faqContainer}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Questions fréquentes</h2>
          </AnimDiv>
          <AnimDiv>
            <FAQAccordion items={faqItems} />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 11 — CTA FINAL */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet de réseaux électriques ou d'éclairage en Bretagne ?</h2>
            <p className={styles.ctaSubtitle}>
              [Collectivité, syndicat d'énergie, opérateur : contactez Restech pour un devis ou un diagnostic de votre parc d'éclairage public.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Demander un devis" href="/contact" variant="primary" className={styles.ctaPrimary} />
              <Button label="Voir nos réalisations" href="/realisations" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 12 — BLOC SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Réseaux électriques et éclairage public — Restech Bretagne</h2>
            <p className={styles.seoText}>
              [Texte SEO ~150 mots — Restech, entreprise de travaux publics en Bretagne et filiale du Groupe Synelis, est spécialisée dans les travaux de réseaux électriques et d'éclairage public en{' '}
              <Link to="/territoires/morbihan">Morbihan</Link> et{' '}
              <Link to="/territoires/finistere">Finistère</Link>. Nos interventions couvrent le branchement électrique pour{' '}
              <Link to="/references/enedis">Enedis</Link>, le raccordement réseau électrique HTA et basse tension, l'enfouissement de réseau électrique souterrain, l'installation et la rénovation d'éclairage public LED, et la mise en lumière de patrimoine communal. Partenaire d'Enedis et de{' '}
              <Link to="/references/morbihan-energies">Morbihan Énergies</Link>, Restech intervient avec son propre parc matériel (nacelles 18m, pelles hydrauliques, camions grue) sur les communes de Vannes, Lorient, Auray, Quimper, Concarneau et l'ensemble de la côte bretonne. Pour le déploiement de fibre optique, consultez notre filiale{' '}
              <a href="https://caum.fr" target="_blank" rel="noopener noreferrer">CAUM</a>. Pour l'expertise nationale, voir{' '}
              <a href="https://etpm.fr" target="_blank" rel="noopener noreferrer">ETPM</a>.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>. — Tous les KW longue traîne : éclairage public (4 400), branchement électrique (1 900), éclairage public led (210), raccordement réseau électrique (110), rénovation éclairage public (30), réseau électrique souterrain (20), mise en lumière patrimoine (10)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
