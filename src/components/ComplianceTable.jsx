import { useState } from 'react';
import { Copy, Check, ShieldCheck } from 'lucide-react';
import { registrations, ngo } from '../data/ngoData';

export default function ComplianceTable() {
  const [copied, setCopied] = useState(null);

  const copy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <div className="compliance">
      <div className="compliance__head">
        <ShieldCheck size={28} strokeWidth={1.75} aria-hidden="true" />
        <div>
          <h3>{ngo.nameUpper}</h3>
          <p>Registered non-profit organisation · Working Area: {ngo.workingArea}</p>
        </div>
      </div>
      <dl className="compliance__grid">
        {registrations.map((r) => (
          <div key={r.key} className="compliance__item">
            <dt>{r.label}</dt>
            <dd>
              <span className="mono">{r.value}</span>
              {r.key !== 'area' && (
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => copy(r.key, r.value)}
                  aria-label={`Copy ${r.label}`}
                  title="Copy"
                >
                  {copied === r.key ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                </button>
              )}
            </dd>
            <small>{r.note}</small>
          </div>
        ))}
      </dl>
    </div>
  );
}
