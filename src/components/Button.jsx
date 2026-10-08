import { Link } from 'react-router-dom';

/**
 * Button — renders a router Link (`to`), an anchor (`href`) or a <button>.
 * variants: primary | secondary | outline | light | ghost
 */
export default function Button({ to, href, variant = 'primary', size, icon: IconCmp, className = '', children, ...rest }) {
  const classes = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ');
  const content = (
    <>
      <span>{children}</span>
      {IconCmp && <IconCmp size={18} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>;
  return <button className={classes} type="button" {...rest}>{content}</button>;
}
