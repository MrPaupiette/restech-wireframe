import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import MetierCard from '../components/ui/MetierCard';
import metiers from '../data/metiers';
import styles from './MetiersIndex.module.css';

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

export default function MetiersIndex() {
  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo multi-métiers — collage ou plan large montrant un chantier avec différents métiers en action : un technicien en nacelle, un terrassier dans la tranchée, un conducteur de travaux avec des plans, paysage breton"
            height="350px"
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
                { label: 'Nos métiers' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Nos métiers chez Restech
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre — Du terrain au bureau d'études, découvrez les métiers qui font vivre les réseaux de Bretagne. Restech recrute en Morbihan et Finistère.]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRODUCTION */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte ~80 mots — Chez Restech, nos ~40 collaborateurs exercent des métiers variés autour des réseaux électriques, de l'éclairage public et de la fibre optique. Monteurs réseau, conducteurs de travaux, techniciens fibre, terrassiers, chauffeurs PL : chacun contribue à construire et maintenir les infrastructures du Morbihan et du Finistère. Nous recrutons régulièrement sur ces postes — que vous soyez expérimenté ou en reconversion, il y a une place pour vous. — KW : monteur réseau électrique (110/mois), conducteur de travaux bretagne (30/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — GRILLE DES MÉTIERS */}
      <Section className={styles.grille}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Découvrez nos métiers" align="center" />
          </AnimDiv>
          <motion.div className={styles.metiersGrid} variants={stagger}>
            {metiers.map((m) => (
              <AnimDiv key={m.slug}>
                <MetierCard {...m} />
              </AnimDiv>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — LIEN GROUPE */}
      <Section className={styles.groupe}>
        <div className={styles.groupeInner}>
          <AnimDiv>
            <p className={styles.groupeText}>
              [Restech fait partie du Groupe Synelis — 700 collaborateurs, 6 filiales. Les métiers des réseaux offrent des passerelles entre la fibre (CAUM), la caténaire (HP Elec), le VRD (ETPM) et le génie civil (FCTP).]
            </p>
            <a
              href="https://synelis.fr/nous-rejoindre/metiers"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.groupeLink}
            >
              Voir tous les métiers du Groupe Synelis →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — CTA */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Prêt à nous rejoindre ?</h2>
            <p className={styles.ctaSubtitle}>
              [Consultez nos offres en cours ou envoyez votre candidature spontanée. Nous recrutons en permanence en Morbihan et Finistère.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Voir nos offres" href="/nous-rejoindre/offres" variant="primary" className={styles.ctaPrimary} />
              <Button label="Candidature spontanée" href="/contact" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
