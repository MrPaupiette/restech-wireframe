import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Placeholder from '../components/ui/Placeholder';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './Territoire.module.css';

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

const villes = [
  { name: 'Quimper', bold: true },
  { name: 'Concarneau' },
  { name: 'Fouesnant' },
  { name: 'Pont-Aven' },
  { name: 'Rosporden' },
  { name: 'Trégunc' },
  { name: 'Melgven' },
  { name: 'Bannalec' },
  { name: 'Elliant' },
  { name: 'Briec' },
];

export default function TerritoireFinistere() {
  return (
    <div>

      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Placeholder
            text="Photo paysage Finistère — Pointe du Raz, falaises, mer bretonne, ciel dramatique, côte sauvage finistérienne"
            height="380px"
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
                { label: 'Nos territoires', href: '/territoires' },
                { label: 'Finistère' },
              ]}
            />
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            Restech dans le Finistère : travaux de réseaux à Melgven et au-delà
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp} transition={{ duration: 0.6 }}>
            [Sous-titre — Depuis notre agence de Melgven, nos équipes interviennent sur le sud Finistère pour les collectivités et Enedis.]
          </motion.p>
        </motion.div>
      </section>

      {/* BLOC 2 — NOTRE AGENCE */}
      <Section className={styles.sectionWhite}>
        <div className={`container ${styles.gridTextImg}`}>
          <motion.div
            className={styles.gridText}
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.h2}>Notre agence à Melgven</h2>
            <p className={styles.bodyText}>
              [Texte ~80 mots — Restech dispose d'une agence à Melgven, dans le Finistère, au sein de la ZA de Kerampaou. Nos conducteurs de travaux et techniciens basés ici interviennent sur le sud Finistère : Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden. Même parc matériel, mêmes compétences et mêmes exigences que notre siège morbihannais. L'agence de Melgven permet à Restech de garantir des délais d'intervention courts sur tout le Finistère, sans dépendre d'un déplacement depuis le Morbihan. — KW : entreprise tp finistère (40/mois, KD 5)]
            </p>
            <div className={styles.addressBlock}>
              <strong>Restech — Agence Finistère</strong><br />
              441 Rue de Saint Guénolé, ZA de Kerampaou 2<br />
              29140 Melgven
            </div>
          </motion.div>
          <motion.div
            className={styles.gridImg}
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <Placeholder
              text="Photo agence Restech Melgven — bâtiment ou cour avec véhicules Restech, parc matériel, ambiance opérationnelle Finistère"
              height="350px"
            />
          </motion.div>
        </div>
      </Section>

      {/* BLOC 3 — NOS INTERVENTIONS */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <SectionTitle title="Nos interventions dans le Finistère" align="center" />
          </AnimDiv>
          <motion.div className={styles.grid3} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier Enedis Finistère — tranchée, câbles, technicien, paysage finistérien" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Réseaux électriques pour Enedis</h3>
                  <p className={styles.cardText}>
                    [~40 mots — Branchement électrique, raccordement réseau HTA/BT, enfouissement de lignes aériennes. Restech est prestataire Enedis dans le Finistère pour les travaux de terrassement, pose et raccordement sur le réseau de distribution électrique. — KW : enedis finistère (40/mois), branchement électrique]
                  </p>
                  <Link to="/expertises/reseaux-electriques-eclairage" className={styles.cardArrow}>Notre expertise réseaux →</Link>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo éclairage public Finistère — rue éclairée LED, luminaires modernes, commune finistérienne de nuit" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Éclairage public & mise en lumière</h3>
                  <p className={styles.cardText}>
                    [~40 mots — Installation, rénovation LED et mise en lumière de patrimoine pour les communes du Finistère. Modernisation des parcs d'éclairage, réduction de la consommation énergétique de 50 à 70%. — KW : éclairage public]
                  </p>
                  <Link to="/expertises/reseaux-electriques-eclairage" className={styles.cardArrow}>Notre expertise éclairage →</Link>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo maintenance fibre Finistère — technicien avec soudeuse, boîtier ouvert, route finistérienne" height="200px" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>Maintenance fibre optique</h3>
                  <p className={styles.cardText}>
                    [~30 mots — Maintenance préventive et curative des réseaux fibre optique FTTH déployés dans le Finistère. Astreinte, dépannage, mesures réflectométriques. — KW : maintenance fibre optique]
                  </p>
                  <Link to="/expertises/fibre-optique-maintenance" className={styles.cardArrow}>Notre expertise fibre →</Link>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
        </div>
      </Section>

      {/* BLOC 4 — NOS CLIENTS */}
      <Section className={styles.sectionWhite}>
        <div className={styles.clientsContainer}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos clients dans le Finistère</h2>
            <p className={styles.clientsIntro}>
              [Texte ~50 mots — Restech est partenaire des principaux donneurs d'ordre du Finistère. Gestionnaires de réseau, syndicats d'énergie, collectivités locales : nos équipes interviennent sous mandat avec les habilitations et protocoles requis.]
            </p>
          </AnimDiv>
          <AnimDiv>
            <div className={styles.clientsGrid}>
              <div className={styles.clientItem}>
                <Placeholder text="Logo Enedis" height="50px" width="140px" />
                <h4 className={styles.clientName}>Enedis — Distribution électrique</h4>
                <p className={styles.clientDesc}>[Partenaire pour le branchement, le raccordement et l'enfouissement des réseaux dans le Finistère]</p>
                <Link to="/references/enedis" className={styles.linkArrow}>Voir →</Link>
              </div>
              <div className={styles.clientItem}>
                <Placeholder text="Logo syndicat d'énergie Finistère" height="50px" width="140px" />
                <h4 className={styles.clientName}>Syndicat d'énergie du Finistère</h4>
                <p className={styles.clientDesc}>[Programmes d'enfouissement et de modernisation de l'éclairage public dans le département]</p>
                <Link to="/contact" className={styles.linkArrow}>Nous contacter →</Link>
              </div>
              <div className={styles.clientItem}>
                <Placeholder text="Icône mairie / collectivité" height="50px" width="140px" />
                <h4 className={styles.clientName}>Communes du Finistère</h4>
                <p className={styles.clientDesc}>[Marchés publics d'éclairage, voirie, réseaux. Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden…]</p>
                <Link to="/contact" className={styles.linkArrow}>Nous contacter →</Link>
              </div>
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 5 — CHANTIERS RÉCENTS */}
      <Section className={styles.sectionAlt}>
        <div className="container">
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos chantiers récents dans le Finistère</h2>
          </AnimDiv>
          <motion.div className={styles.grid3} variants={stagger}>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier Quimper — travaux de réseau électrique en centre-ville, tranchée, engins" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Réseaux électriques</span>
                  <h4 className={styles.cardTitleSmall}>Travaux réseau — Quimper</h4>
                  <p className={styles.cardText}>[Chantier réseau Quimper — raccordement et enfouissement pour Enedis Finistère]</p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo éclairage Concarneau — luminaires LED installés sur le front de mer, ambiance maritime nocturne" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Éclairage public</span>
                  <h4 className={styles.cardTitleSmall}>Éclairage public — Concarneau</h4>
                  <p className={styles.cardText}>[Éclairage public Concarneau — rénovation LED, commune littorale du Finistère]</p>
                </div>
              </Card>
            </AnimDiv>
            <AnimDiv>
              <Card>
                <Placeholder text="Photo chantier sud Finistère — travaux Enedis route départementale, engins, campagne finistérienne" height="200px" />
                <div className={styles.cardBody}>
                  <span className={styles.tag}>Enedis</span>
                  <h4 className={styles.cardTitleSmall}>Travaux Enedis — Sud Finistère</h4>
                  <p className={styles.cardText}>[Travaux Enedis sud Finistère — extension réseau électrique HTA]</p>
                </div>
              </Card>
            </AnimDiv>
          </motion.div>
          <AnimDiv className={styles.chantiersLink}>
            <Link to="/realisations" className={styles.linkArrow}>Toutes nos réalisations →</Link>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 6 — VILLES D'INTERVENTION */}
      <Section className={styles.sectionWhite}>
        <div className={styles.villesContainer}>
          <AnimDiv>
            <h2 className={styles.h2Center}>Nos villes d'intervention dans le Finistère</h2>
            <p className={styles.villesIntro}>
              [Texte ~60 mots — Nos équipes basées à Melgven interviennent sur le sud du département du Finistère. Voici nos principales zones d'intervention, sans que cette liste soit exhaustive — nous intervenons aussi sur les communes rurales et littorales du département.]
            </p>
            <div className={styles.villesTags}>
              {villes.map((v) => (
                <span key={v.name} className={`${styles.villeTag} ${v.bold ? styles.villeTagBold : ''}`}>
                  {v.name}
                </span>
              ))}
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 7 — CTA */}
      <Section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimDiv>
            <h2 className={styles.ctaTitle}>Un projet de réseaux dans le Finistère ?</h2>
            <p className={styles.ctaSubtitle}>
              [Collectivité, syndicat d'énergie ou entreprise : contactez notre agence de Melgven pour vos travaux de réseaux électriques, d'éclairage public ou de maintenance fibre dans le Finistère.]
            </p>
            <div className={styles.ctaButtons}>
              <Button label="Demander un devis" href="/contact" variant="primary" className={styles.ctaPrimary} />
              <Button label="Voir nos expertises" href="/expertises" variant="secondary" className={styles.ctaSecondary} />
            </div>
          </AnimDiv>
        </div>
      </Section>

      {/* BLOC 8 — SEO PRÉ-FOOTER */}
      <Section className={styles.seoBlock}>
        <div className={styles.seoInner}>
          <AnimDiv>
            <h2 className={styles.seoTitle}>Restech dans le Finistère</h2>
            <p className={styles.seoText}>
              [Texte SEO ~120 mots — Restech est une entreprise de travaux publics dans le Finistère, filiale du Groupe Synelis, implantée à Melgven (ZA de Kerampaou). Nos équipes réalisent les travaux de branchement électrique, de raccordement réseau HTA/BT et d'enfouissement de lignes pour{' '}
              <Link to="/references/enedis">Enedis Finistère</Link> et les collectivités. Nous assurons l'installation et la rénovation d'{' '}
              <Link to="/expertises/reseaux-electriques-eclairage">éclairage public LED</Link> pour les communes de Quimper, Concarneau, Fouesnant, Pont-Aven, Rosporden. Nos techniciens interviennent aussi en maintenance fibre optique sur les réseaux FTTH du département. Avec une équipe locale dédiée et le même parc matériel que notre siège, Restech est l'interlocuteur TP de proximité du Finistère. Nous intervenons aussi dans le{' '}
              <Link to="/territoires/morbihan">Morbihan</Link>.{' '}
              <Link to="/nous-rejoindre">Rejoignez nos équipes</Link>. — KW : entreprise tp finistère (40/mois), enedis finistère (40/mois), travaux publics quimper (20/mois)]
            </p>
          </AnimDiv>
        </div>
      </Section>

    </div>
  );
}
