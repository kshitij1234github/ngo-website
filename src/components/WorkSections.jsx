import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { trainings, programmes, states } from '../data/activities';
import { contact } from '../data/ngoData';

/* Bilingual (English + Hindi) work sections, shared by the Home and Our Work pages. */

export function TrainingsSection({ tint = true }) {
  return (
    <section className={`section${tint ? ' section--tint' : ''}`} aria-labelledby="training-title">
      <div className="container">
        <SectionTitle
          eyebrow="Skill Training"
          title={<span id="training-title">Shows, Seminars, Competitions &amp; Training</span>}
          text={<span lang="hi">संस्था द्वारा संचालित शो, सेमिनार, प्रतियोगिता व प्रशिक्षण</span>}
        />
        <ul className="training-grid">
          {trainings.map(({ en, hi, icon: I, note }) => (
            <li key={en} className={`training-card${note ? ' training-card--wide' : ''}`}>
              <span className="training-card__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div>
                <strong>{en}</strong>
                <span lang="hi">{hi}</span>
                {note && (
                  <p>
                    {note.en}
                    <br />
                    <span lang="hi">{note.hi}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProgrammesSection({ tint = false }) {
  return (
    <section className={`section${tint ? ' section--tint' : ''}`} aria-labelledby="programmes-title">
      <div className="container">
        <SectionTitle
          eyebrow="Health, Sports & Awareness"
          title={<span id="programmes-title">Programmes &amp; Campaigns</span>}
          text={<span lang="hi">स्वास्थ्य, खेल एवं जागरूकता कार्यक्रम</span>}
        />
        <ul className="programme-list">
          {programmes.map(({ en, hi, icon: I }) => (
            <li key={en}>
              <span className="training-card__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div>
                <strong>{en}</strong>
                <span lang="hi">{hi}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WorkingAreaSection({ tint = true }) {
  return (
    <section className={`section${tint ? ' section--tint' : ''}`} aria-labelledby="area-title">
      <div className="container">
        <SectionTitle
          eyebrow="Working Area · कार्य क्षेत्र"
          title={<span id="area-title">Rural &amp; Urban Areas — All Uttar Pradesh &amp; All India</span>}
          text={
            <>
              <span lang="hi">ग्रामीण एवं शहरी क्षेत्र — सम्पूर्ण उत्तर प्रदेश एवं समस्त राज्य।</span> Head office: {contact.addressInline}
            </>
          }
        />
        <ul className="state-grid">
          {states.map((s) => (
            <li key={s.en}>
              <MapPin size={16} aria-hidden="true" />
              <div>
                <strong>{s.en}</strong>
                <span lang="hi">{s.hi}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="state-grid__note">28 States and 8 Union Territories · <span lang="hi">28 राज्य एवं 8 केंद्र शासित प्रदेश</span></p>
      </div>
    </section>
  );
}
