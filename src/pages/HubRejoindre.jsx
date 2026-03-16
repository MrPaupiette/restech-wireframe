import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Counter from '../components/ui/Counter';
import Breadcrumb from '../components/ui/Breadcrumb';
import JobCard from '../components/ui/JobCard';
import styles from './HubRejoindre.module.css';

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

const arguments_ = [
  {
    icon: 'Icône équipe / personnes',
    title: '~40 collaborateurs',
    text: '[On se connaît tous. Pas de couche hiérarchique inutile. Le directeur est sur le terrain, les conducteurs de travaux sont accessibles, les décisions sont rapides.]',
  },
  {
    icon: 'Icône localisation / pin map',
    title: '100% Bretagne',
    text: '[Pas de grands déplacements. Nos chantiers sont en Morbihan et Finistère. Vous rentrez chez vous le soir. 2 agences : Crac\'h et Melgven.]',
  },
  {
    icon: 'Icône outil / casque',
    title: 'Du terrain, du vrai',
    text: '[Réseaux électriques, éclairage public, fibre optique. Des chantiers variés, des techniques qui évoluent, un impact visible dans les communes bretonnes.]',
  },
  {
    icon: 'Icône réseau / groupe',
    title: 'La force d\'un groupe',
    text: '[Restech est une filiale du Groupe Synelis — 700 collaborateurs, 6 filiales, 25 agences en France. Stabilité, perspectives d\'évolution, mobilité inter-filiales si vous le souhaitez.]',
  },
];

const metiers = [
  {
    image: 'Icône ou photo — technicien sur poteau ou en nacelle',
    title: 'Monteur réseau électrique',
    text: '[Pose de câbles, raccordement, travaux sous tension et hors tension sur réseaux HTA/BT — KW : monteur réseau électrique (110/mois, KD 5)]',
  },
  {
    image: 'Icône ou photo — conducteur de travaux avec plan sur capot de véhicule',
    title: 'Conducteur de travaux',
    text: '[Pilotage des chantiers, relation client, coordination des équipes terrain en Morbihan et Finistère — KW : conducteur de travaux bretagne (30/mois, KD 7)]',
  },
  {
    image: 'Icône ou photo — chef de chantier dirigeant les opérations',
    title: 'Chef de chantier',
    text: '[Encadrement d\'une équipe de 3-6 personnes, sécurité, qualité, suivi d\'avancement sur les chantiers réseaux]',
  },
  {
    image: 'Icône ou photo — technicien avec soudeuse fibre',
    title: 'Technicien fibre optique',
    text: '[Maintenance, soudure, mesures réflectométriques sur réseaux FTTH déployés en Bretagne]',
  },
  {
    image: 'Icône ou photo — ouvrier dans une tranchée avec pelle',
    title: 'Terrassier — Canalisateur',
    text: '[Ouverture de tranchées, pose de canalisations et gaines, remblaiement, remise en état de voirie]',
  },
  {
    image: 'Icône ou photo — chauffeur dans un camion grue ou pelleteuse',
    title: 'Chauffeur PL — Conducteur d\'engins',
    text: '[Conduite de pelles, camions grue 6×4/8×4, nacelles. CACES requis. Parc matériel Restech propre.]',
  },
];

export default function HubRejoindre() {
  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo d'équipe Restech — groupe de 5-6 collaborateurs sur un chantier breton, gilets haute visibilité, casques, sourires, ambiance conviviale et terrain, pelleteuse ou nacelle en arrière-plan"
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
                { label: 'Nous rejoindre' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Rejoignez Restech en Bretagne
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre — Une équipe de terrain à taille humaine, un ancrage local fort, des métiers qui ont du sens. Restech recrute en Morbihan et Finistère.]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — POURQUOI NOUS REJOINDRE */}
      <Section className={styles.pourquoi}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Pourquoi travailler chez Restech ?" align="center" />
          </AnimDiv>
          <motion.div className={styles.argsGrid} variants={stagger}>
            {arguments_.map((arg) => (
              <AnimDiv key={arg.title} className={styles.argItem}>
                <Placeholder text={arg.icon} height="64px" width="64px" />
                <h3 className={styles.argTitle}>{arg.title}</h3>
                <p className={styles.argText}>{arg.text}</p>
              </AnimDiv>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* BLOC 3 — TÉMOIGNAGE */}
      <Section className={styles.temoignage}>
        <div className={`container ${styles.temoignageGrid}`}>
          <motion.div
            className={styles.temoignageImg}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Portrait collaborateur Restech — photo d'un conducteur de travaux ou monteur réseau sur un chantier, sourire, casque, gilet, ambiance bretonne"
              height="400px"
            />
          </motion.div>
          <motion.div
            className={styles.temoignageText}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.guillemet}>"</span>
            <p className={styles.citation}>
              [Témoignage ~60 mots — Un collaborateur parle de son quotidien chez Restech : les chantiers variés en Bretagne, l'ambiance d'équipe, l'autonomie sur le terrain, la fierté du travail accompli. Mention du parc matériel qui facilite le travail, et de l'esprit familial malgré l'appartenance à un groupe national.]
            </p>
            <p className={styles.citationAuthor}>[Prénom Nom]</p>
            <p className={styles.citationRole}>[Conducteur de travaux / Monteur réseau électrique — depuis X ans chez Restech]</p>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — NOS MÉTIERS */}
      <Section className={styles.metiers}>
        <div className="container">
          <AnimDiv>
            <SectionTitle
              title="Nos métiers"
              subtitle="Les profils que nous recherchons en Bretagne"
              align="center"
            />
          </AnimDiv>
          <motion.div className={styles.metiersGrid} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            {metiers.map((m) => (
              <AnimDiv key={m.title}>
                <Card>
                  <Placeholder text={m.image} height="140px" />
                  <div className={styles.metierBody}>
                    <h3 className={styles.metierTitle}>{m.title}</h3>
                    <p className={styles.metierText}>{m.text}</p>
                  </div>
                </Card>
              </AnimDiv>
            ))}
          </motion.div>
          <AnimDiv className={styles.metiersLinks}>
            <Link to="/nous-rejoindre/metiers" className={styles.linkArrow}>Voir nos métiers →</Link>
            <a
              href="https://synelis.fr/nous-rejoindre/metiers"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.intersiteLink}
            >
              Découvrir les fiches métiers détaillées sur le site Groupe →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — CHIFFRES EMPLOI */}
      <Section className={styles.chiffres}>
        <div className={`container ${styles.countersInner}`}>
          <Counter number={40} suffix="+" label="collaborateurs" />
          <div className={styles.counterSep} />
          <Counter number={2} label="agences en Bretagne" />
          <div className={styles.counterSep} />
          <Counter number={700} suffix="+" label="salariés dans le Groupe" />
          <div className={styles.counterSep} />
          <Counter number={6} label="filiales pour évoluer" />
        </div>
      </Section>

      {/* BLOC 6 — OFFRES EN COURS */}
      <Section className={styles.offres}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Nos offres en cours" align="center" />
          </AnimDiv>
          <motion.div className={styles.offresList} variants={stagger}>
            <AnimDiv>
              <JobCard title="Monteur réseau électrique H/F" location="Crac'h (56)" contract="CDI" href="/nous-rejoindre/offres" />
            </AnimDiv>
            <AnimDiv>
              <JobCard title="Conducteur de travaux réseaux H/F" location="Crac'h (56) / Melgven (29)" contract="CDI" href="/nous-rejoindre/offres" />
            </AnimDiv>
            <AnimDiv>
              <JobCard title="Terrassier VRD H/F" location="Melgven (29)" contract="CDI" href="/nous-rejoindre/offres" />
            </AnimDiv>
          </motion.div>
          <AnimDiv className={styles.offresLinks}>
            <Link to="/nous-rejoindre/offres" className={styles.linkArrow}>Toutes nos offres →</Link>
            <Link to="/contact" className={styles.intersiteLink}>Candidature spontanée →</Link>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — CTA CANDIDATURE */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Pas d'offre qui vous correspond ?</h2>
            <p className={styles.ctaSubtitle}>
              [Envoyez-nous votre candidature spontanée. Nous recrutons régulièrement des profils terrain en Morbihan et Finistère — monteurs, conducteurs de travaux, techniciens, terrassiers.]
            </p>
            <Button label="Candidature spontanée" href="/contact" variant="primary" className={styles.ctaPrimary} />
            <div className={styles.ctaIntersite}>
              <a
                href="https://synelis.fr/nous-rejoindre"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaIntersiteLink}
              >
                Voir toutes les offres du Groupe Synelis →
              </a>
            </div>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
