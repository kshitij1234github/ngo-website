import gallery from './gallery';

/* Gallery entries with their public URLs resolved. */
export const galleryPhotos = gallery.map((g, i) => ({
  thumb: `/gallery/thumb/${g.file}`,
  full: `/gallery/full/${g.file}`,
  w: g.w,
  h: g.h,
  alt: `Green of Social Society programme photo ${i + 1}`,
}));
