import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import SingleProject from './components/projects/SingleProject';
const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function AppContent() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname.startsWith('/projects/single-project/');

    return (
        <>
            <ScrollToTop />
            {!hideHeaderFooter && <AppHeader />}
            <Suspense fallback={""}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="/projects/single-project/:id" element={<SingleProject />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Suspense>
            {!hideHeaderFooter && <AppFooter />}
            <UseScrollToTop />
        </>
    );
}

function App() {
    return (
        <AnimatePresence>
            <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
                <Router>
                    <AppContent />
                </Router>
            </div>
        </AnimatePresence>
    );
}

export default App;