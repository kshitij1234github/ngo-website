import { contact } from '../data/ngoData';

/**
 * Emails a form submission to `contact.formsEmail` via FormSubmit (formsubmit.co),
 * so the static site needs no server. The very first submission sends an
 * activation link to that inbox; nothing is delivered until it is clicked.
 */
export async function sendForm(subject, fields) {
  const res = await fetch(`https://formsubmit.co/ajax/${contact.formsEmail}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _replyto: fields.Email,
      _template: 'table',
      _captcha: 'false',
    }),
  });
  if (!res.ok) throw new Error(`Form service responded ${res.status}`);
  return res.json();
}
