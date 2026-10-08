import { Landmark } from 'lucide-react';
import CopyButton from './CopyButton';
import { bank } from '../data/ngoData';

/* Bank transfer details for donations (बैंक विवरण). */
export default function BankDetails() {
  const rows = [
    ['Bank', 'बैंक', bank.bankName, false],
    ['Account Holder', 'खाताधारक', bank.accountName, false],
    ['Account No.', 'खाता संख्या', bank.accountNumber, true],
    ['IFSC Code', 'IFSC कोड', bank.ifsc, true],
    ['MICR Code', 'MICR कोड', bank.micr, true],
  ];
  return (
    <div className="bank-card">
      <div className="bank-card__head">
        <Landmark size={24} strokeWidth={1.75} aria-hidden="true" />
        <div>
          <h3>Donate by Bank Transfer</h3>
          <p lang="hi">बैंक ट्रांसफ़र द्वारा दान करें</p>
        </div>
      </div>
      <dl className="bank-card__list">
        {rows.map(([en, hi, value, copyable]) => (
          <div key={en}>
            <dt>{en} <span lang="hi">/ {hi}</span></dt>
            <dd>
              <span className={copyable ? 'mono' : undefined}>{value}</span>
              {copyable && <CopyButton value={value} label={en} />}
            </dd>
          </div>
        ))}
      </dl>
      <p className="bank-card__note">
        Regd. Office: {bank.regdOffice}
        <br />
        <span lang="hi">पंजीकृत कार्यालय: {bank.regdOfficeHi}</span>
      </p>
    </div>
  );
}
