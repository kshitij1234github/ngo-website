import { FileText, Mail, Award, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ComplianceTable from '../components/ComplianceTable';
import Button from '../components/Button';
import images from '../data/images';
import { contact, ngo, certifications } from '../data/ngoData';

export default function Transparency() {
  return (
    <>
      <PageHeader
        title="NGO Registration & Compliance"
        text="Transparency and accountability are central to how we work."
        image={images.fields}
        crumb="Transparency"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Statutory Details"
            title="Our Registrations"
            text={`${ngo.name} is a registered non-profit organisation. The details below are provided for donors, partners and authorities.`}
          />
          <ComplianceTable />

          <div className="transparency-notes">
            <article>
              <FileText size={24} aria-hidden="true" />
              <h3>Request documents</h3>
              <p>
                Copies of registration certificates and other compliance documents can be requested by donors, CSR
                partners and authorities for verification.
              </p>
              <Button href={`mailto:${contact.email}?subject=Request%20for%20Compliance%20Documents`} variant="outline" icon={Mail}>
                Request by Email
              </Button>
            </article>
            <article>
              <FileText size={24} aria-hidden="true" />
              <h3>Tax benefits for donors</h3>
              <p>
                With 12A and 80G registration, eligible donations made to {ngo.name} may qualify for tax deduction
                under Section 80G of the Income Tax Act, 1961, subject to applicable rules.
              </p>
              <Button to="/donate" variant="primary">Donate Now</Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="cert-title">
        <div className="container">
          <SectionTitle
            eyebrow="Certificates"
            title={<span id="cert-title">Certifications &amp; Government Registrations</span>}
            text="Key details from our certificates, for donors and partners who wish to verify them."
          />
          <div className="cert-grid">
            {certifications.map((c) => (
              <article key={c.key} className="cert-card">
                <div className="cert-card__head">
                  <span className="training-card__icon"><Award size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.issuer}</p>
                  </div>
                </div>
                <dl>
                  {c.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                {c.scope && <p className="cert-card__scope"><strong>Scope:</strong> {c.scope}</p>}
                {c.note && <p className="cert-card__scope">{c.note}</p>}
                {c.verifyUrl && (
                  <a className="cert-card__link" href={c.verifyUrl} target="_blank" rel="noopener noreferrer">
                    Verify online <ExternalLink size={15} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
