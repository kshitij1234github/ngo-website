import { Home, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="not-found__code">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <div className="center-actions">
          <Button to="/" variant="primary" icon={Home}>Back to Home</Button>
          <Button to="/contact" variant="outline" icon={ArrowRight}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
