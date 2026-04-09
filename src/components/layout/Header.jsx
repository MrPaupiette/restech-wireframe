import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Nos expertises',
    href: '/expertises',
    submenu: [
      { label: 'VRD & Viabilisation', href: '/expertises/vrd-viabilisation' },
      { label: 'Éclairage public', href: '/expertises/eclairage-public' },
      { label: "Réseaux d'énergie", href: '/expertises/reseaux-energie' },
    ],
  },
  {
    label: 'Nos territoires',
    href: '/territoires',
    submenu: [
      { label: 'Morbihan', href: '/territoires/morbihan' },
      { label: 'Finistère', href: '/territoires/finistere' },
    ],
  },
  { label: 'Réalisations', href: '/realisations' },
  {
    label: 'Nous rejoindre',
    href: '/nous-rejoindre',
    submenu: [
      { label: 'Nos métiers', href: '/nous-rejoindre/metiers' },
      { label: 'Nos offres', href: '/nous-rejoindre/offres' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoName}>RESTECH</span>
          <span className={styles.logoSub}>Groupe Synelis</span>
        </Link>

        <button
          className={styles.burger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <div key={item.href} className={styles.navItem}>
              <Link to={item.href} className={styles.navLink} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
              {item.submenu && (
                <div className={styles.submenu}>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className={styles.submenuLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
