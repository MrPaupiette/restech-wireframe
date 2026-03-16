import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './FibreOptique.module.css';

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

export default function FibreOptique() {
  return (
    <div>

      {/* BLOC 1 — HERO INTERNE */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo maintenance fibre optique — technicien avec soudeuse fibre optique dans un boîtier de raccordement ouvert, câbles colorés visibles, arrière-plan route bretonne avec véhicule d'intervention"
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
                { label: 'Nos expertises', href: '/expertises' },
                { label: 'Fibre optique & Maintenance' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Maintenance fibre optique en Bretagne
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre positionnant Restech comme le partenaire local de maintenance des réseaux FTTH déployés en Morbihan et Finistère — intervention rapide, astreinte, équipe de terrain dédiée]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRODUCTION */}
      <Section className={styles.intro}>
        <div className={styles.introInner}>
          <AnimDiv>
            <p className={styles.introText}>
              [Texte de positionnement ~100 mots — Les réseaux fibre optique déployés en Bretagne nécessitent une maintenance régulière pour garantir la qualité de service. Restech assure la maintenance préventive et curative des infrastructures FTTH en Morbihan et Finistère : diagnostic, réparation de câbles sectionnés, remplacement de boîtiers PBO et SRO, réflectométrie, remise en conformité. Notre rôle est complémentaire à celui de notre filiale sœur CAUM, qui assure le déploiement FTTH à l'échelle nationale. Restech prend le relais une fois le réseau en service : nous maintenons ce que d'autres ont déployé. — KW : maintenance fibre optique (40/mois)]
            </p>
          </AnimDiv>
          <AnimDiv>
            <a
              href="https://caum.fr/expertises/fibre-optique"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.introLink}
            >
              Le déploiement FTTH est assuré par notre filiale CAUM →
            </a>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 3 — NOS INTERVENTIONS FIBRE */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Nos interventions fibre optique" align="center" />
          </AnimDiv>
          <motion.div className={styles.interventionsGrid} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo contrôle fibre — technicien avec OTDR (réflectomètre) testant un câble fibre dans une chambre télécom"
                  height="200px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Maintenance préventive</h3>
                  <p className={styles.cardText}>
                    [~50 mots — Inspections régulières des infrastructures fibre : contrôle des chambres de tirage, vérification des boîtiers d'épissure, test de continuité par réflectométrie (OTDR), nettoyage des connecteurs. Objectif : anticiper les pannes avant qu'elles n'impactent les abonnés.]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo réparation fibre — technicien soudant une fibre cassée dans un boîtier ouvert au bord d'une route, éclairage de chantier"
                  height="200px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Maintenance curative</h3>
                  <p className={styles.cardText}>
                    [~50 mots — Intervention sur panne : localisation du défaut par réflectométrie, réparation de câbles sectionnés (accident de chantier, intempéries), remplacement de boîtiers PBO/SRO endommagés, reprise d'épissures défectueuses. Nos équipes interviennent rapidement pour rétablir le service.]
                  </p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder
                  text="Photo intervention urgence — véhicule d'intervention Restech garé de nuit sur bord de route, gyrophare, technicien au travail"
                  height="200px"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Astreinte 24/7</h3>
                  <p className={styles.cardText}>
                    [~50 mots — Service d'astreinte pour les opérateurs et gestionnaires de réseau en Bretagne. Intervention rapide 24h/24, 7j/7 en cas de coupure fibre. Nos techniciens sont basés localement (Crac'h et Melgven), ce qui garantit des délais d'intervention courts sur l'ensemble du Morbihan et du Finistère.]
                  </p>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — COMPLÉMENTARITÉ CAUM / RESTECH */}
      <Section className={styles.sectionWhite}>
        <div className={styles.complementarite}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Déploiement et maintenance : deux métiers complémentaires</h2>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.compGrid}>
              <div className={styles.compCol}>
                <Placeholder text="Logo CAUM — Groupe Synelis" height="50px" width="120px" />
                <h3 className={styles.compTitle}>CAUM — Déploiement FTTH</h3>
                <p className={styles.compText}>
                  [~40 mots — Construction des réseaux fibre optique : génie civil, tirage de câbles, raccordement d'abonnés, mise en service. CAUM intervient à l'échelle nationale sur les projets de RIP (réseaux d'initiative publique) et les déploiements opérateurs.]
                </p>
                <Button label="Découvrir CAUM" href="https://caum.fr" variant="secondary" size="small" />
              </div>
              <div className={styles.compSep} />
              <div className={styles.compCol}>
                <Placeholder text="Logo RESTECH — Groupe Synelis" height="50px" width="120px" />
                <h3 className={styles.compTitle}>Restech — Maintenance Bretagne</h3>
                <p className={styles.compText}>
                  [~40 mots — Entretien des réseaux en service : inspections, réparations, astreinte. Restech prend le relais une fois le réseau fibre déployé, avec une couverture locale Morbihan et Finistère et des délais d'intervention rapides.]
                </p>
                <Button label="Nous contacter" href="/contact" variant="primary" size="small" />
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — ZONE D'INTERVENTION FIBRE */}
      <Section className={styles.sectionAlt}>
        <div className={styles.zoneInner}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Maintenance fibre en Morbihan et Finistère</h2>
            <p className={styles.zoneText}>
              [Texte ~60 mots — Nos techniciens fibre sont basés à Crac'h (Morbihan) et Melgven (Finistère). Nous couvrons les zones de déploiement FTTH des deux départements : agglomérations de Vannes, Lorient, Quimper et communes rurales connectées. Le déploiement fibre dans le Finistère progresse — Restech accompagne cette montée en charge par un service de maintenance de proximité. — KW : déploiement fibre finistère (20/mois, mention contextuelle)]
            </p>
            <div className={styles.zoneCtas}>
              <Button label="Morbihan" href="/territoires/morbihan" variant="secondary" />
              <Button label="Finistère" href="/territoires/finistere" variant="secondary" />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — CTA FINAL */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un besoin de maintenance fibre en Bretagne ?</h2>
            <p className={styles.ctaSubtitle}>
              [Opérateur, gestionnaire de réseau, collectivité : contactez Restech pour un contrat de maintenance ou une intervention d'urgence sur votre réseau fibre optique.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Nous contacter" href="/contact" variant="primary" className={styles.ctaPrimary} />
              <Button label="Nos autres expertises" href="/expertises" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — BLOC SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Maintenance fibre optique — Restech Bretagne</h2>
            <p className={styles.seoText}>
              [Texte SEO ~100 mots — Restech, filiale du Groupe Synelis implantée en Bretagne, assure la maintenance préventive et curative des réseaux fibre optique FTTH en{' '}
              <Link to="/territoires/morbihan">Morbihan</Link> et{' '}
              <Link to="/territoires/finistere">Finistère</Link>. Nos interventions comprennent la réflectométrie, la réparation de câbles sectionnés, le remplacement de boîtiers PBO et SRO, le nettoyage de connecteurs et l'astreinte 24/7. Nos techniciens basés à Crac'h et Melgven garantissent des délais d'intervention rapides sur les communes de Vannes, Lorient, Quimper et environs. Le déploiement fibre est assuré par notre filiale sœur{' '}
              <a href="https://caum.fr" target="_blank" rel="noopener noreferrer">CAUM</a> à l'échelle nationale. Restech intervient aussi sur les{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">réseaux électriques et l'éclairage public</Link> en Bretagne. Découvrez le{' '}
              <a href="https://synelis.fr" target="_blank" rel="noopener noreferrer">Groupe Synelis</a>.{' '}
              — KW : maintenance fibre optique (40/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
