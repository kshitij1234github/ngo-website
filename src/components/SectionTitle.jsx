export default function SectionTitle({ eyebrow, title, text, align = 'center', light = false, as: Tag = 'h2' }) {
  return (
    <div className={`section-title section-title--${align}${light ? ' section-title--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-title__heading">{title}</Tag>
      {text && <p className="section-title__text">{text}</p>}
    </div>
  );
}
