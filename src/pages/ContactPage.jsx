import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import Placeholder from '../components/ui/Placeholder';
import ContactForm from '../components/ui/ContactForm';
import styles from './ContactPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
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

export default function ContactPage() {
  return (
    <div className={styles.contact}>

      {/* BLOC 1 — HEADER */}
      <Section className={styles.header}>
        <div className={styles.headerInner}>
          <AnimDiv>
            <Breadcrumb items={[
              { label: 'Accueil', href: '/' },
              { label: 'Contact' },
            ]} light={false} />
          </AnimDiv>
          <AnimDiv>
            <h1 className={styles.title}>Contactez-nous</h1>
          </AnimDiv>
          <AnimDiv>
            <p className={styles.subtitle}>
              [Sous-titre — Un projet de réseaux électriques, d'éclairage public ou de fibre optique en Bretagne ? Une candidature à nous transmettre ? Contactez l'agence Restech la plus proche.]
            </p>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 2 — 2 AGENCES */}
      <Section className={styles.agences}>
        <div className={styles.agencesInner}>
          <motion.div className={styles.agencesGrid} variants={stagger}>
            {/* Card Morbihan */}
            <AnimDiv className={styles.agenceCard}>
              <h2 className={styles.agenceTitle}>Siège social — Morbihan</h2>
              <address className={styles.agenceAddress}>
                Restech<br />
                ZA Le Moustoir<br />
                14 bis Rue de Bretagne<br />
                56950 Crac'h
              </address>
              <div className={styles.agenceInfo}>
                <p><strong>Tél. :</strong> [XX XX XX XX XX]</p>
                <p><strong>Email :</strong> [contact@restech.fr]</p>
                <p><strong>Horaires :</strong> [Lundi — Vendredi : 8h00 — 17h30]</p>
              </div>
              <Placeholder
                text="Carte Google Maps — position de l'agence Crac'h"
                height="200px"
              />
              <div className={styles.agenceActions}>
                <Button label="Itinéraire" href="#" variant="secondary" size="small" />
              </div>
              <Link to="/territoires/morbihan" className={styles.agenceLink}>
                Nos interventions dans le Morbihan →
              </Link>
            </AnimDiv>

            {/* Card Finistère */}
            <AnimDiv className={styles.agenceCard}>
              <h2 className={styles.agenceTitle}>Agence Finistère</h2>
              <address className={styles.agenceAddress}>
                Restech<br />
                441 Rue de Saint Guénolé<br />
                ZA de Kerampaou 2<br />
                29140 Melgven
              </address>
              <div className={styles.agenceInfo}>
                <p><strong>Tél. :</strong> [XX XX XX XX XX]</p>
                <p><strong>Email :</strong> [finistere@restech.fr]</p>
                <p><strong>Horaires :</strong> [Lundi — Vendredi : 8h00 — 17h30]</p>
              </div>
              <Placeholder
                text="Carte Google Maps — position de l'agence Melgven"
                height="200px"
              />
              <div className={styles.agenceActions}>
                <Button label="Itinéraire" href="#" variant="secondary" size="small" />
              </div>
              <Link to="/territoires/finistere" className={styles.agenceLink}>
                Nos interventions dans le Finistère →
              </Link>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 3 — FORMULAIRE */}
      <Section className={styles.formulaire}>
        <div className={styles.formulaireInner}>
          <motion.div className={styles.formulaireGrid} variants={stagger}>
            <AnimDiv className={styles.formulaireLeft}>
              <h2 className={styles.formulaireTitle}>Envoyez-nous un message</h2>
              <p className={styles.formulaireText}>
                [Texte d'intention — Que vous soyez un particulier, une collectivité ou un maître d'ouvrage, nous sommes à votre écoute pour étudier votre projet de réseaux ou d'éclairage public en Bretagne.]
              </p>
              <div className={styles.formulaireSeparator} />
              <div className={styles.formulairePhones}>
                <p><strong>Morbihan :</strong> [XX XX XX XX XX]</p>
                <p><strong>Finistère :</strong> [XX XX XX XX XX]</p>
              </div>
              <a
                href="https://synelis.fr/contact"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.formulaireIntersite}
              >
                Contact Groupe Synelis →
              </a>
            </AnimDiv>
            <AnimDiv className={styles.formulaireRight}>
              <ContactForm />
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — CARTE BRETAGNE */}
      <Section className={styles.carte}>
        <div className={styles.carteInner}>
          <AnimDiv>
            <Placeholder
              text="Carte de la Bretagne — positionnement des 2 agences Restech (Crac'h en Morbihan, Melgven en Finistère), zones d'intervention colorées par département"
              height="400px"
            />
          </AnimDiv>
          <AnimDiv>
            <p className={styles.carteLegend}>
              [Légende — Zones d'intervention Restech : Morbihan (56) et Finistère (29)]
            </p>
          </AnimDiv>
          <AnimDiv className={styles.carteButtons}>
            <Button label="Morbihan" href="/territoires/morbihan" variant="secondary" />
            <Button label="Finistère" href="/territoires/finistere" variant="secondary" />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — MAILLAGE RAPIDE */}
      <Section className={styles.maillage}>
        <div className={styles.maillageInner}>
          <AnimDiv>
            <h2 className={styles.maillageTitle}>Vous cherchez autre chose ?</h2>
          </AnimDiv>
          <motion.div className={styles.maillageGrid} variants={stagger}>
            <AnimDiv className={styles.maillageCol}>
              <h3 className={styles.maillageColTitle}>Nos expertises</h3>
              <ul className={styles.maillageList}>
                <li><Link to="/expertises/reseaux-electriques-eclairage">Réseaux électriques & Éclairage public</Link></li>
                <li><Link to="/expertises/fibre-optique-maintenance">Fibre optique & Maintenance</Link></li>
              </ul>
            </AnimDiv>
            <AnimDiv className={styles.maillageCol}>
              <h3 className={styles.maillageColTitle}>Nos références</h3>
              <ul className={styles.maillageList}>
                <li><Link to="/references/enedis">Enedis</Link></li>
                <li><Link to="/references/morbihan-energies">Morbihan Énergies</Link></li>
              </ul>
            </AnimDiv>
            <AnimDiv className={styles.maillageCol}>
              <h3 className={styles.maillageColTitle}>Nous rejoindre</h3>
              <ul className={styles.maillageList}>
                <li><Link to="/nous-rejoindre/metiers">Nos métiers</Link></li>
                <li><Link to="/nous-rejoindre/offres">Nos offres d'emploi</Link></li>
              </ul>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}
