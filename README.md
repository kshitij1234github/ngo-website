# Green of Social Society — Website

Static website for **Green of Social Society** (Reg. No. 04001 · NGO Darpan UP/2018/0213496), built with React, Vite, React Router and Lucide icons. It has no backend, database or payment processing. All forms run in the browser only.

## Quick start

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:5173
npm run build      # build the production files into dist/
npm run preview    # preview the production build locally
```

You need Node.js 18 or newer.

**Packages**

- Dependencies: `react`, `react-dom`, `react-router-dom`, `lucide-react`, `lenis` (smooth scrolling)
- Dev dependencies: `vite`, `@vitejs/plugin-react`

## Folder structure

```
public/
  logo.png, favicon-48.png favicon / touch icon
src/
  assets/
    logo.png               logo used in the navbar and footer
    images/                all photos
  components/              reusable UI: Navbar, Footer, Hero, Button, SectionTitle,
                           ImpactStats, ProgramCard, StoryCard, CTASection, TrustBadges,
                           ComplianceTable, ValuesGrid, ProcessTimeline, MissionVision,
                           FeaturedInitiative, PageHeader, Icon, ScrollManager
  data/
    ngoData.js             ★ organisation details, registrations, stats, copy
    programs.js            ★ the six areas of work
    stories.js             ★ stories of change
    images.js              ★ image registry (swap photos here)
    heroSlides.js          ★ home page hero slider (images, headlines, buttons)
  hooks/useReveal.js       scroll-reveal animations (which elements animate)
  pages/                   Home, About, Programs, Impact, Stories, StoryDetail,
                           GetInvolved, Volunteer, Donate, Contact, Transparency,
                           Legal (Privacy and Terms), NotFound
  utils/payment.js         payment-gateway placeholder (Razorpay notes inside)
  utils/smoothScroll.js    Lenis smooth scrolling + scroll helpers
  App.jsx                  routes
  main.jsx                 entry point
  index.css                all styles; brand colours are in :root
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us: story, mission, vision, values, compliance |
| `/our-work` | Areas of work (anchors such as `#education`) |
| `/impact` | Impact statistics and future goals |
| `/stories`, `/stories/:slug` | Stories of change |
| `/get-involved` | Donate, Volunteer, Partner (`#partner`), CSR (`#csr`) |
| `/volunteer` | Volunteer registration form |
| `/donate` | Donation interface |
| `/contact` | Contact details and form (accepts `?subject=`) |
| `/transparency` | NGO Registration & Compliance |
| `/privacy-policy`, `/terms` | Legal pages (draft copy) |

## Editing content

Almost all content is in **`src/data/`**:

- **`ngoData.js`** holds:
  - `ngo`: the name and tagline
  - `contact`: address, email, phone and office hours (leave office hours empty to hide them)
  - `registrations`: the official numbers as provided, which drive the compliance tables, footer and contact page
  - `impactStats`, `impactAreas`, `impactBreakdown`, `futureGoals`: **sample numbers**. Replace them with verified figures, then set `statsAreSample = false` to remove the "indicative figures" notes.
  - `about`, `values`, `processSteps`, `featuredInitiative`: page copy, including the draft mission and vision
- **`programs.js`**: titles, descriptions, details and activities for the six areas of work.
- **`stories.js`**: these are **illustrative sample stories**. Replace them with real stories (with consent), then set `isSample: false` on each one to remove the "Illustrative" label.

## Animations & smooth scrolling

- **Hero slider** (`components/Hero.jsx`, content in `data/heroSlides.js`): auto-plays every 6.5 s with a slow Ken Burns zoom. It pauses on hover and has arrows, dots, a pause button, keyboard arrows and swipe on mobile. Change `SLIDE_MS` to adjust the speed.
- **Header**: on the home page it floats transparently over the hero and turns into a frosted white bar once you scroll.
- **Scroll reveals** (`hooks/useReveal.js`): headings, cards, images and stats fade and slide in as they enter the screen, with a stagger. Edit the `RULES` list to change what animates. The variants (`up`, `left`, `right`, `zoom`, `image`) are styled in `index.css` under "MOTION".
- **Marquees** (`components/Marquee.jsx`): the scrolling registration badges and the areas-of-work band (`FocusTicker.jsx`). Both pause on hover.
- **Smooth scrolling** (`utils/smoothScroll.js`) uses Lenis. Adjust `duration` there.
- **Extras**: page fade-in on route change, a reading-progress bar, a back-to-top button, and hover lift and shine on buttons.
- Visitors who have turned on "reduce motion" on their device get a static version: no smooth scrolling, no auto-play and no reveals.

## Replacing images

1. Put the new photo in `src/assets/images/`. Use a JPG about 1200–1920 px wide, ideally under 400 KB.
2. Open `src/data/images.js` and point the matching import at the new file, for example:
   `import hero from '../assets/images/my-new-hero.jpg';`
3. Every page picks up the change automatically.

**Logo:** replace `src/assets/logo.png` (navbar and footer) and `public/logo.png` / `public/favicon-48.png` (browser tab) with the updated logo.

The current photos are royalty-free stock images from Unsplash. Replace them with the NGO's own photos where possible.

## Connecting forms and payments later

- **Contact and Volunteer forms:** the `onSubmit` handlers in `pages/Contact.jsx` and `pages/Volunteer.jsx` have a marked spot where you can post to Formspree, EmailJS or Google Forms.
- **Donations:** implement `startDonation()` in `src/utils/payment.js`. Step-by-step Razorpay notes are in the file. Razorpay orders must be created on a server.

## Deployment

Run `npm run build` and upload the `dist/` folder to any static host, such as Netlify, Vercel, Hostinger or cPanel. Because the site uses client-side routing, set up a rewrite of all paths to `/index.html`:

- **Netlify:** add a `public/_redirects` file containing `/*  /index.html  200`
- **Apache:** add a `.htaccess` rule that sends unknown paths to `index.html`
