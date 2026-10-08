import gallery from './gallery';

/* Gallery entries with their public URLs resolved. */
export const galleryPhotos = gallery.map((g, i) => ({
  thumb: `${import.meta.env.BASE_URL}gallery/thumb/${g.file}`,
  full: `${import.meta.env.BASE_URL}gallery/full/${g.file}`,
  w: g.w,
  h: g.h,
  alt: `Green of Social Society programme photo ${i + 1}`,
}));
