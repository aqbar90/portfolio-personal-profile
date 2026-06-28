import type { LucideIcon } from 'lucide-react';

export interface ContactProfile {
  name: string;
  email: string;
  tagline: string;
}

export interface SocialLink {
  id: number;
  icon: LucideIcon;
  href: string;
  label: string;
}
