import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/* Banner used at the top of inner pages. */
export default function PageHeader({ title, text, image, crumb }) {
  return (
    <header className="page-header" style={image ? { '--page-header-image': `url(${image})` } : undefined}>
      <div className="container page-header__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </header>
  );
}
