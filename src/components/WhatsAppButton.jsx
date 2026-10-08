import { contact } from '../data/ngoData';

const message = encodeURIComponent('Hello Green of Social Society, I would like to know more about your work.');

/* Floating WhatsApp chat button, shown on every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={`${contact.whatsappHref}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp (${contact.whatsappDisplay})`}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" fill="currentColor">
        <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.7A12.96 12.96 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3Zm0 23.8c-2 0-3.96-.54-5.67-1.56l-.4-.24-3.96 1.01 1.06-3.86-.26-.4A10.76 10.76 0 0 1 5.2 16c0-5.96 4.85-10.8 10.8-10.8 5.96 0 10.8 4.84 10.8 10.8 0 5.95-4.84 10.8-10.8 10.8Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.83 1.06-1.02 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.18-.32-.02-.5.14-.66.15-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
