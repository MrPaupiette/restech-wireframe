import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import ApplicationForm from '../components/ui/ApplicationForm';
import JobCardExtended from '../components/ui/JobCardExtended';
import offres from '../data/offres';
import styles from './FicheOffrePage.module.css';

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

function JsonLdJobPosting({ offre }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: offre.title,
    description: offre.poste,
    datePosted: offre.published,
    employmentType: offre.contract === 'CDI' ? 'FULL_TIME' : 'TEMPORARY',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Restech — Groupe Synelis',
      sameAs: 'https://synelis.fr',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: offre.location,
        addressCountry: 'FR',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'EUR',
      value: offre.salary,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FicheOffrePage() {
  const { slug } = useParams();
  const data = offres.find((o) => o.slug === slug);

  useEffect(() => {
    if (data) {
      document.title = `${data.title} — Restech`;
    }
  }, [data]);

  if (!data) {
    return (
      <div className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>Offre non trouvée</h1>
        <p className={styles.notFoundText}>
          Cette offre n'existe pas ou n'est plus disponible.
        </p>
        <Link to="/nous-rejoindre/offres" className={styles.notFoundLink}>
          ← Voir toutes nos offres
        </Link>
      </div>
    );
  }

  const similarOffres = offres
    .filter(
      (o) =>
        o.slug !== slug &&
        (o.category === data.category || o.location === data.location)
    )
    .slice(0, 3);

  return (
    <div>
      <JsonLdJobPosting offre={data} />

      {/* BLOC A — HEADER */}
      <motion.section
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className={styles.headerInner}>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Nous rejoindre', href: '/nous-rejoindre' },
                { label: 'Nos offres', href: '/nous-rejoindre/offres' },
                { label: data.title },
              ]}
              light={false}
            />
          </motion.div>
          <motion.div className={styles.tagsRow} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className={styles.tag}>{data.contract}</span>
            <span className={styles.tag}>{data.category}</span>
            {data.urgent && <span className={`${styles.tag} ${styles.urgentTag}`}>Urgent</span>}
          </motion.div>
          <motion.h1 className={styles.h1} variants={fadeUp} transition={{ duration: 0.6 }}>
            {data.title}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            {data.contract} — {data.location}
          </motion.p>
          <motion.p className={styles.metaLine} variants={fadeUp} transition={{ duration: 0.6 }}>
            Publiée en {data.published} • Salaire : {data.salary}
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Button label="Postuler" href="#postuler" variant="primary" />
          </motion.div>
        </div>
      </motion.section>

      {/* BLOC B — CONTENT */}
      <Section className={styles.content}>
        <div className={styles.contentGrid}>
          <motion.div className={styles.contentLeft} variants={stagger}>
            <AnimDiv>
              <h2 className={styles.sectionH2}>L'ENTREPRISE</h2>
              <p className={styles.bodyText}>{data.entreprise}</p>
            </AnimDiv>
            <AnimDiv>
              <h2 className={styles.sectionH2}>LE POSTE</h2>
              <p className={styles.bodyText}>{data.poste}</p>
            </AnimDiv>
            <AnimDiv>
              <h2 className={styles.sectionH2}>PROFIL RECHERCHÉ</h2>
              <ul className={styles.bulletList}>
                {data.profil.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </AnimDiv>
            <AnimDiv>
              <h2 className={styles.sectionH2}>CE QUE NOUS OFFRONS</h2>
              <ul className={styles.bulletList}>
                {data.avantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </AnimDiv>
          </motion.div>

          <motion.div className={styles.contentRight} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className={styles.sidebarCard}>
              <ul className={styles.sidebarList}>
                <li>
                  <span className={styles.sidebarLabel}>Poste</span>
                  <span className={styles.sidebarValue}>{data.sidebar.poste}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Contrat</span>
                  <span className={styles.sidebarValue}>{data.sidebar.contrat}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Localisation</span>
                  <span className={styles.sidebarValue}>{data.sidebar.localisation}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Salaire</span>
                  <span className={styles.sidebarValue}>{data.sidebar.salaire}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Début</span>
                  <span className={styles.sidebarValue}>{data.sidebar.debut}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Expérience</span>
                  <span className={styles.sidebarValue}>{data.sidebar.experience}</span>
                </li>
                <li>
                  <span className={styles.sidebarLabel}>Publié</span>
                  <span className={styles.sidebarValue}>{data.sidebar.publie}</span>
                </li>
              </ul>
              <Button label="Postuler" href="#postuler" variant="primary" className={styles.sidebarBtn} />
              <div className={styles.sidebarSep} />
              {data.metier_link && (
                <Link to={data.metier_link} className={styles.sidebarLink}>
                  Voir la fiche métier →
                </Link>
              )}
              <Link to="/nous-rejoindre/offres" className={styles.sidebarLink}>
                Toutes nos offres →
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* BLOC C — APPLICATION FORM */}
      <Section className={styles.applicationSection} id="postuler">
        <div className={styles.applicationInner}>
          <AnimDiv>
            <h2 className={styles.applicationTitle}>Postuler à cette offre</h2>
          </AnimDiv>
          <AnimDiv>
            <ApplicationForm posteTitle={data.title} />
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC D — SIMILAR OFFERS */}
      {similarOffres.length > 0 && (
        <Section className={styles.similar}>
          <div className={styles.similarInner}>
            <AnimDiv>
              <h2 className={styles.similarTitle}>Offres similaires</h2>
            </AnimDiv>
            <motion.div className={styles.similarList} variants={stagger}>
              {similarOffres.map((offre) => (
                <AnimDiv key={offre.slug}>
                  <JobCardExtended {...offre} />
                </AnimDiv>
              ))}
            </motion.div>
            <AnimDiv className={styles.similarCta}>
              <Link to="/nous-rejoindre/offres" className={styles.allOffresLink}>
                Toutes nos offres →
              </Link>
            </AnimDiv>
          </div>
        </Section>
      )}

      {/* BLOC E — CTA */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Ce poste n'est pas pour vous ?</h2>
            <p className={styles.ctaSubtitle}>
              [Consultez nos autres offres ou envoyez une candidature spontanée. Restech recrute régulièrement en Morbihan et Finistère — monteurs réseau, terrassiers, techniciens fibre, conducteurs de travaux.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Toutes nos offres" href="/nous-rejoindre/offres" variant="primary" className={styles.ctaPrimary} />
              <Button label="Candidature spontanée" href="/contact" variant="secondary" className={styles.ctaSecondary} />
            </div>
            <div className={styles.ctaIntersite}>
              <a
                href="https://synelis.fr/nous-rejoindre"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaIntersiteLink}
              >
                Voir les offres de toutes les filiales sur synelis.fr →
              </a>
            </div>
          </AnimDiv>
        </div>
      </Section>
    </div>
  );
}
