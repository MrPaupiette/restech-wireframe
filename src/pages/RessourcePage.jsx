import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import DefinitionBox from '../components/ui/DefinitionBox';
import TableOfContents from '../components/ui/TableOfContents';
import styles from './RessourcePage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
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

export default function RessourcePage() {
  const { slug } = useParams();

  return (
    <div>

      {/* BLOC 1 — HEADER */}
      <section className={styles.header}>
        <motion.div
          className={styles.headerInner}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Breadcrumb
              light={false}
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Ressources', href: '/ressources' },
                { label: 'Maintenance fibre optique' },
              ]}
            />
          </motion.div>

          <motion.div className={styles.tags} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className={styles.tag}>Ressource technique</span>
            <span className={styles.tag}>Fibre optique</span>
          </motion.div>

          <motion.h1 className={styles.h1} variants={fadeUp} transition={{ duration: 0.6 }}>
            Maintenance fibre optique : interventions et astreinte en Bretagne
          </motion.h1>

          <motion.p className={styles.meta} variants={fadeUp} transition={{ duration: 0.6 }}>
            Temps de lecture : ~5 min • Mis à jour : mars 2026
          </motion.p>

          <motion.div className={styles.separator} variants={fadeUp} transition={{ duration: 0.6 }} />
        </motion.div>
      </section>

      {/* BLOC 2 — DEFINITION */}
      <section className={styles.definition}>
        <div className={styles.prose}>
          <DefinitionBox>
            <p>
              <strong>Définition —</strong> La maintenance fibre optique regroupe l'ensemble des interventions préventives et curatives réalisées sur un réseau FTTH après son déploiement. Elle comprend la surveillance, le diagnostic (réflectométrie OTDR), la réparation de câbles endommagés, le remplacement de composants (boîtiers PBO, SRO) et l'astreinte pour garantir la continuité de service.
            </p>
          </DefinitionBox>

          <p className={styles.introText}>
            [Texte intro — En Bretagne, les réseaux fibre optique FTTH déployés dans le Morbihan et le Finistère nécessitent une maintenance régulière pour garantir un débit optimal aux abonnés. Restech assure cette maintenance pour le compte des opérateurs d'infrastructure : astreinte 24/7, intervention rapide, parc de mesure complet. Cet article technique détaille les types de maintenance fibre, les interventions courantes et les équipements utilisés par nos techniciens.]
          </p>
        </div>
      </section>

      {/* BLOC 3 — TABLE OF CONTENTS */}
      <section className={styles.tocSection}>
        <div className={styles.prose}>
          <TableOfContents
            items={[
              { label: 'Les types de maintenance fibre optique', anchor: 'types-maintenance' },
              { label: 'Les interventions courantes', anchor: 'interventions-courantes' },
              { label: 'Les équipements de maintenance', anchor: 'equipements' },
              { label: 'Maintenance vs déploiement : deux métiers distincts', anchor: 'maintenance-vs-deploiement' },
              { label: 'La maintenance fibre par Restech en Bretagne', anchor: 'restech-bretagne' },
            ]}
          />
        </div>
      </section>

      {/* BLOC 4 — ARTICLE BODY */}
      <div className={styles.articleBody}>
        <div className={styles.prose}>

          {/* Section 1 */}
          <Section id="types-maintenance" className={styles.articleSection}>
            <AnimDiv>
              <h2 className={styles.h2}>Les types de maintenance fibre optique</h2>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                [La maintenance fibre optique se décline en trois grandes catégories. La maintenance préventive consiste à inspecter régulièrement le réseau pour anticiper les pannes : contrôle des niveaux de signal, inspection des connecteurs, vérification des armoires de rue (SRO/NRO). La maintenance curative intervient après un incident : coupure de câble, dégradation du signal, vandalisme. Enfin, l'astreinte garantit une capacité d'intervention 24h/24 pour les cas d'urgence, notamment les coupures affectant un grand nombre d'abonnés. Chaque type de maintenance répond à des protocoles précis et mobilise des compétences spécifiques.]
              </p>
            </AnimDiv>
            <AnimDiv>
              <Placeholder text="Infographie — Les 3 types de maintenance fibre : préventive, curative, astreinte" height="250px" />
            </AnimDiv>
          </Section>

          {/* Section 2 */}
          <Section id="interventions-courantes" className={styles.articleSection}>
            <AnimDiv>
              <h2 className={styles.h2}>Les interventions courantes</h2>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                [Les interventions les plus fréquentes sur un réseau FTTH concernent la réparation de câbles sectionnés (travaux de voirie, intempéries), le remplacement de boîtiers d'épissurage endommagés, le nettoyage et le remplacement de connecteurs optiques défaillants. Les techniciens réalisent également des mesures de réflectométrie (OTDR) pour localiser précisément les défauts sur la fibre. La soudure de fibre optique par fusion est l'opération centrale de toute intervention curative.]
              </p>
            </AnimDiv>
            <AnimDiv>
              <Placeholder text="Photo — Technicien Restech en intervention sur un boîtier PBO" height="300px" />
            </AnimDiv>
          </Section>

          {/* Section 3 */}
          <Section id="equipements" className={styles.articleSection}>
            <AnimDiv>
              <h2 className={styles.h2}>Les équipements de maintenance fibre</h2>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                [La maintenance fibre optique requiert un parc d'équipements spécialisés. Les techniciens Restech disposent de soudeuses à fusion pour la réparation des fibres, de réflectomètres OTDR pour le diagnostic et la localisation des défauts, et de microscopes d'inspection pour vérifier l'état des connecteurs optiques.]
              </p>
            </AnimDiv>
            <AnimDiv>
              <div className={styles.equipGrid}>
                <div className={styles.equipItem}>
                  <Placeholder text="Icône soudeuse" height="80px" width="80px" />
                  <span className={styles.equipLabel}>Soudeuses</span>
                </div>
                <div className={styles.equipItem}>
                  <Placeholder text="Icône OTDR" height="80px" width="80px" />
                  <span className={styles.equipLabel}>Réflectomètres OTDR</span>
                </div>
                <div className={styles.equipItem}>
                  <Placeholder text="Icône microscope" height="80px" width="80px" />
                  <span className={styles.equipLabel}>Microscopes d'inspection</span>
                </div>
              </div>
            </AnimDiv>
          </Section>

          {/* Section 4 */}
          <Section id="maintenance-vs-deploiement" className={styles.articleSection}>
            <AnimDiv>
              <h2 className={styles.h2}>Maintenance vs déploiement : deux métiers distincts</h2>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                [Si le déploiement fibre optique consiste à construire le réseau (tirage de câble, raccordement d'abonnés), la maintenance intervient une fois le réseau en service. Ce sont deux métiers distincts qui mobilisent des compétences différentes : le technicien maintenance doit maîtriser le diagnostic, la mesure et la réparation sous contrainte de temps, là où le technicien déploiement se concentre sur l'installation initiale.]
              </p>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                <a
                  href="https://caum.fr/expertises/fibre-optique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.intersiteLink}
                >
                  En savoir plus sur les métiers de la fibre optique →
                </a>
              </p>
            </AnimDiv>
          </Section>

          {/* Section 5 */}
          <Section id="restech-bretagne" className={styles.articleSection}>
            <AnimDiv>
              <h2 className={styles.h2}>La maintenance fibre par Restech en Bretagne</h2>
            </AnimDiv>
            <AnimDiv>
              <p className={styles.bodyText}>
                [Restech intervient sur l'ensemble du territoire breton pour la maintenance des réseaux fibre optique FTTH. Nos équipes assurent l'astreinte 24/7 et garantissent des délais d'intervention rapides dans le Morbihan et le Finistère. Nous travaillons pour les opérateurs d'infrastructure et les collectivités locales avec un parc de mesure complet et des techniciens habilités.]
              </p>
            </AnimDiv>
            <AnimDiv className={styles.sectionActions}>
              <Button label="Nous contacter" href="/contact" variant="primary" />
              <div className={styles.territoireLinks}>
                <Link to="/territoires/morbihan" className={styles.territoireLink}>
                  Nos interventions dans le Morbihan →
                </Link>
                <Link to="/territoires/finistere" className={styles.territoireLink}>
                  Nos interventions dans le Finistère →
                </Link>
              </div>
            </AnimDiv>
          </Section>

        </div>
      </div>

      {/* BLOC 5 — PARENT LINK */}
      <Section className={styles.parentLink}>
        <div className={styles.prose}>
          <AnimDiv>
            <Link to="/expertises/fibre-optique-maintenance" className={styles.parentCard}>
              <div className={styles.parentImage}>
                <Placeholder text="Fibre optique & Maintenance" height="100px" width="140px" />
              </div>
              <div className={styles.parentText}>
                <span className={styles.parentLabel}>Expertise associée</span>
                <h3 className={styles.parentTitle}>Fibre optique &amp; Maintenance</h3>
                <p className={styles.parentDesc}>
                  [Découvrez l'ensemble de notre savoir-faire en déploiement et maintenance de réseaux fibre optique FTTH en Bretagne.]
                </p>
                <span className={styles.parentCta}>Voir notre expertise fibre →</span>
              </div>
            </Link>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — OTHER RESOURCES */}
      <Section className={styles.otherResources}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Autres ressources techniques</h2>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.otherLinks}>
              <Link to="/expertises/reseaux-electriques-eclairage" className={styles.otherLink}>
                Réseaux électriques &amp; Éclairage public →
              </Link>
              <Link to="/expertises" className={styles.otherLink}>
                Toutes nos expertises →
              </Link>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — CTA */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>
              Besoin d'une intervention de maintenance fibre en Bretagne ?
            </h2>
            <Button
              label="Nous contacter"
              href="/contact"
              variant="primary"
              className={styles.ctaPrimary}
            />
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
