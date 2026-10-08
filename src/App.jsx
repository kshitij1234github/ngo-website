import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import ScrollExtras from './components/ScrollExtras';
import WhatsAppButton from './components/WhatsAppButton';
import useReveal from './hooks/useReveal';
import { initSmoothScroll, destroySmoothScroll } from './utils/smoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import StoryDetail from './pages/StoryDetail';
import GetInvolved from './pages/GetInvolved';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    initSmoothScroll();
    return destroySmoothScroll;
  }, []);

  useReveal(pathname);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <ScrollExtras />
      <WhatsAppButton />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <div key={pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/privacy-policy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
