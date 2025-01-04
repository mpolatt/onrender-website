import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const CloudMigration = lazy(() => import('./pages/services/CloudMigration'));
const InfrastructureManagement = lazy(() => import('./pages/services/InfrastructureManagement'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const CloudSecurity = lazy(() => import('./pages/services/CloudSecurity'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Resources = lazy(() => import('./pages/Resources'));
const Partners = lazy(() => import('./pages/Partners'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/cloud-migration" element={<CloudMigration />} />
                <Route path="/services/infrastructure-management" element={<InfrastructureManagement />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/cloud-security" element={<CloudSecurity />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/products" element={<Products />} />
                <Route path="/documentation" element={<Resources />} />
                <Route path="/support" element={<Contact />} />
                <Route path="/faq" element={<Resources />} />
              </Route>
            </Routes>
          </Suspense>
          <ThemeToggle />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 