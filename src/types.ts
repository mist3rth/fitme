export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
