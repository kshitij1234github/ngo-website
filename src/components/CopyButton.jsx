import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={`Copy ${label}`} title="Copy">
      {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
    </button>
  );
}
