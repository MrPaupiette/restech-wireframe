import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HubExpertises from './pages/HubExpertises';
import ReseauxElectriques from './pages/ReseauxElectriques';
import FibreOptique from './pages/FibreOptique';
import HubTerritoires from './pages/HubTerritoires';
import TerritoireMorbihan from './pages/TerritoireMorbihan';
import TerritoireFinistere from './pages/TerritoireFinistere';
import RealisationsPage from './pages/RealisationsPage';
import FicheProjetPage from './pages/FicheProjetPage';
import HubRejoindre from './pages/HubRejoindre';
import MetiersIndex from './pages/MetiersIndex';
import FicheMetierPage from './pages/FicheMetierPage';
import OffresListing from './pages/OffresListing';
import FicheOffrePage from './pages/FicheOffrePage';
import ContactPage from './pages/ContactPage';
import RessourcePage from './pages/RessourcePage';
import PlaceholderPage from './pages/PlaceholderPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expertises" element={<HubExpertises />} />
          <Route path="/expertises/reseaux-electriques-eclairage" element={<ReseauxElectriques />} />
          <Route path="/expertises/fibre-optique-maintenance" element={<FibreOptique />} />
          <Route path="/territoires" element={<HubTerritoires />} />
          <Route path="/territoires/morbihan" element={<TerritoireMorbihan />} />
          <Route path="/territoires/finistere" element={<TerritoireFinistere />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/realisations/:slug" element={<FicheProjetPage />} />
          <Route path="/references/enedis" element={<PlaceholderPage title="Enedis" />} />
          <Route path="/references/morbihan-energies" element={<PlaceholderPage title="Morbihan Énergies" />} />
          <Route path="/nous-rejoindre" element={<HubRejoindre />} />
          <Route path="/nous-rejoindre/metiers" element={<MetiersIndex />} />
          <Route path="/nous-rejoindre/metiers/monteur-reseau-electrique" element={<FicheMetierPage metier="monteur-reseau-electrique" />} />
          <Route path="/nous-rejoindre/metiers/conducteur-de-travaux" element={<FicheMetierPage metier="conducteur-de-travaux" />} />
          <Route path="/nous-rejoindre/metiers/chef-de-chantier" element={<FicheMetierPage metier="chef-de-chantier" />} />
          <Route path="/nous-rejoindre/metiers/technicien-fibre-optique" element={<FicheMetierPage metier="technicien-fibre-optique" />} />
          <Route path="/nous-rejoindre/offres" element={<OffresListing />} />
          <Route path="/nous-rejoindre/offres/:slug" element={<FicheOffrePage />} />
          <Route path="/actualites" element={<PlaceholderPage title="Actualités" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<PlaceholderPage title="Mentions légales" />} />
          <Route path="/ressources/:slug" element={<RessourcePage />} />
        </Routes>
      </Layout>
    </>
  );
}
