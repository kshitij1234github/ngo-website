import {
  BadgeCheck, Landmark, FileCheck2, Receipt, Building2, MapPin, HeartHandshake, Home, Users,
  Sprout, Heart, ShieldCheck, Eye, Scale, Leaf, ClipboardCheck, GraduationCap, Stethoscope,
  HandHeart, Handshake, Briefcase, Lock, Target, Globe,
} from 'lucide-react';

/* Maps icon names used in the data files to Lucide components. */
const icons = {
  BadgeCheck, Landmark, FileCheck2, Receipt, Building2, MapPin, HeartHandshake, Home, Users,
  Sprout, Heart, ShieldCheck, Eye, Scale, Leaf, ClipboardCheck, GraduationCap, Stethoscope,
  HandHeart, Handshake, Briefcase, Lock, Target, Globe,
};

export default function Icon({ name, size = 24, strokeWidth = 1.75, ...rest }) {
  const Component = icons[name] || Heart;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
