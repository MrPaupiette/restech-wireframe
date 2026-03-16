import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import JobCard from '../components/ui/JobCard';
import MetierCard from '../components/ui/MetierCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import metiers from '../data/metiers';
import styles from './FicheMetierPage.module.css';

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

export default function FicheMetierPage({ metier: metierSlug }) {
  const data = metiers.find((m) => m.slug === metierSlug);
  if (!data || !data.hasDetailPage) {
    return (
      <div style={{ padding: '200px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Fiche métier non disponible</h1>
        <Link to="/nous-rejoindre/metiers" style={{ marginTop: 24, display: 'inline-block' }}>← Retour aux métiers</Link>
      </div>
    );
  }

  const autresMetiers = metiers.filter((m) => m.slug !== metierSlug && m.hasDetailPage).slice(0, 3);

  return (
    <div>

      {/* BLOC A — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder text={data.heroImage} height="350px" />
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
                { label: 'Nos métiers', href: '/nous-rejoindre/metiers' },
                { label: data.title },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            {data.h1}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            {data.heroSubtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC B — RÉSUMÉ RAPIDE */}
      <Section className={styles.resume}>
        <div className="container">
          <motion.div className={styles.resumeGrid} variants={stagger}>
            <AnimDiv className={styles.resumeItem}>
              <span className={styles.resumeIcon}>📋</span>
              <span className={styles.resumeLabel}>Niveau d'études</span>
              <span className={styles.resumeValue}>{data.resume.niveau}</span>
            </AnimDiv>
            <AnimDiv className={styles.resumeItem}>
              <span className={styles.resumeIcon}>💰</span>
              <span className={styles.resumeLabel}>Salaire indicatif</span>
              <span className={styles.resumeValue}>{data.resume.salaire}</span>
            </AnimDiv>
            <AnimDiv className={styles.resumeItem}>
              <span className={styles.resumeIcon}>📍</span>
              <span className={styles.resumeLabel}>Localisation</span>
              <span className={styles.resumeValue}>{data.resume.localisation}</span>
            </AnimDiv>
            <AnimDiv className={styles.resumeItem}>
              <span className={styles.resumeIcon}>📄</span>
              <span className={styles.resumeLabel}>Contrat</span>
              <span className={styles.resumeValue}>{data.resume.contrat}</span>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC C — LES MISSIONS */}
      <Section className={styles.missions}>
        <div className={`container ${styles.missionsGrid}`}>
          <motion.div
            className={styles.missionsText}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Les missions au quotidien</h2>
            <p className={styles.bodyText}>{data.missionsText}</p>
            <ul className={styles.bulletList}>
              {data.missionsList.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder text={data.missionsImage} height="380px" />
          </motion.div>
        </div>
      </Section>

      {/* BLOC D — COMPÉTENCES & HABILITATIONS */}
      <Section className={styles.competences}>
        <div className={styles.competencesInner}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Compétences et habilitations requises</h2>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.compGrid}>
              <div>
                <h3 className={styles.h3}>Compétences techniques</h3>
                <ul className={styles.checkList}>
                  {data.competences.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.h3}>Habilitations</h3>
                <ul className={styles.checkList}>
                  {data.habilitations.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC E — SALAIRE & ÉVOLUTION */}
      <Section className={styles.salaireSection}>
        <div className={`container ${styles.salaireGrid}`}>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.h2}>Rémunération</h2>
            <div className={styles.salaireCards}>
              {data.salaires.map((s, i) => (
                <div key={i} className={styles.salaireCard}>
                  <span className={styles.salaireNiveau}>{s.niveau}</span>
                  <span className={styles.salaireFourchette}>{s.fourchette}</span>
                </div>
              ))}
            </div>
            <p className={styles.salaireNote}>{data.salaireNote}</p>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.h2}>Évolution de carrière</h2>
            <ProcessTimeline steps={data.evolution} />
            <p className={styles.evolutionNote}>{data.evolutionNote}</p>
          </motion.div>
        </div>
      </Section>

      {/* BLOC F — TÉMOIGNAGE */}
      <Section className={styles.temoignage}>
        <div className={styles.temoignageInner}>
          <AnimDiv>
            <span className={styles.guillemet}>"</span>
            <p className={styles.citation}>{data.temoignage.citation}</p>
            <p className={styles.citationAuthor}>{data.temoignage.nom}</p>
            <p className={styles.citationRole}>{data.temoignage.fonction}</p>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC G — OFFRES LIÉES */}
      <Section className={styles.offresLiees}>
        <div className="container">
          <AnimDiv>
            <h2 className={styles.h2Center}>Postes ouverts — {data.title}</h2>
          </AnimDiv>
          {data.offresLiees.length > 0 ? (
            <div className={styles.offresList}>
              {data.offresLiees.map((offre, i) => (
                <AnimDiv key={i}>
                  <JobCard
                    title={offre.title}
                    location={offre.location}
                    contract={offre.contract}
                    href="/nous-rejoindre/offres"
                  />
                </AnimDiv>
              ))}
            </div>
          ) : (
            <AnimDiv>
              <p className={styles.noOffres}>
                [Pas d'offre ouverte actuellement sur ce poste. Envoyez-nous votre candidature spontanée — nous recrutons régulièrement.]
              </p>
            </AnimDiv>
          )}
          <AnimDiv className={styles.offresCtaRow}>
            <Button label="Candidature spontanée" href="/contact" variant="secondary" />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC H — AUTRES MÉTIERS */}
      <Section className={styles.autresMetiers}>
        <div className="container">
          <AnimDiv>
            <h2 className={styles.h2Center}>Découvrez nos autres métiers</h2>
          </AnimDiv>
          <motion.div className={styles.autresGrid} variants={stagger}>
            {autresMetiers.map((m) => (
              <AnimDiv key={m.slug}>
                <MetierCard {...m} />
              </AnimDiv>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* BLOC I — CTA FINAL */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Ce métier vous intéresse ?</h2>
            <p className={styles.ctaSubtitle}>
              [Postulez directement ou contactez-nous pour en savoir plus. Nous formons aussi en interne — pas besoin d'avoir toutes les habilitations dès le départ.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Postuler" href="/nous-rejoindre/offres" variant="primary" className={styles.ctaPrimary} />
              <Button label="Nous contacter" href="/contact" variant="secondary" className={styles.ctaSecondary} />
            </div>
            <div className={styles.ctaIntersite}>
              <a
                href="https://synelis.fr/nous-rejoindre/metiers"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaIntersiteLink}
              >
                {data.intersiteLabel}
              </a>
            </div>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
