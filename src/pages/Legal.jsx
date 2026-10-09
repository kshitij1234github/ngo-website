import PageHeader from '../components/PageHeader';
import { ngo, contact } from '../data/ngoData';

/* DRAFT legal copy — have it reviewed before launch. */
const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', 'When you contact us, register as a volunteer or pledge a donation, we may collect your name, email address, phone number and any details you choose to share.'],
      ['How we use it', 'We use your information only to respond to you, process donations and receipts, coordinate volunteering and share updates about our work if you agree to receive them.'],
      ['Sharing', `${ngo.name} does not sell or rent personal information. Information may be shared only where required by law or with service providers who help us operate (such as a payment gateway).`],
      ['Your choices', `You may ask us to update or delete your information at any time by writing to ${contact.email}.`],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Use of this website', 'This website provides information about the work of the organisation. By using it, you agree to use it lawfully and not to misuse its content.'],
      ['Donations', 'Donations are voluntary. Receipts and 80G certificates are issued as per applicable law. Please contact us for any donation-related queries or refund requests.'],
      ['Content', 'Some images and stories on this website are illustrative. Statistics marked as indicative are for illustration and will be updated with verified figures.'],
      ['Contact', `For questions about these terms, write to ${contact.email} or call ${contact.phone}.`],
    ],
  },
};

export default function Legal({ type }) {
  const page = content[type];
  return (
    <>
      <PageHeader title={page.title} />
      <section className="section">
        <div className="container article">
          {page.sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="subhead">{h}</h2>
              <p>{p}</p>
            </div>
          ))}
          <p className="muted">Last updated: {ngo.copyrightYear}</p>
        </div>
      </section>
    </>
  );
}
