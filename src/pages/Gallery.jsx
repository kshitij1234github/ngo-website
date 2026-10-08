import { useState } from 'react';
import { Images } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import PhotoGrid from '../components/PhotoGrid';
import CTASection from '../components/CTASection';
import images from '../data/images';
import { galleryPhotos } from '../data/galleryPhotos';

const PAGE_SIZE = 30;

export default function Gallery() {
  const [count, setCount] = useState(PAGE_SIZE);
  const shown = galleryPhotos.slice(0, count);

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        text="Moments from our trainings, centre openings, certificate distributions and community programmes."
        image={images.together}
      />

      <section className="section" aria-label="Photos">
        <div className="container">
          <p className="gallery-meta">
            <Images size={18} aria-hidden="true" /> Showing {shown.length} of {galleryPhotos.length} photos — click any photo to view it full size.
          </p>
          <PhotoGrid photos={shown} />
          {count < galleryPhotos.length && (
            <div className="center-actions">
              <button type="button" className="btn btn--outline" onClick={() => setCount((c) => c + PAGE_SIZE)}>
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
