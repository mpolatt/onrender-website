import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import CloudMigration from './pages/services/CloudMigration';
import InfrastructureManagement from './pages/services/InfrastructureManagement';
import DataAnalytics from './pages/services/DataAnalytics';
import ErrorBoundary from './components/ErrorBoundary';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/cloud-migration" element={<CloudMigration />} />
                <Route path="/services/infrastructure-management" element={<InfrastructureManagement />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/products" element={<Products />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/partners" element={<Partners />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App; 