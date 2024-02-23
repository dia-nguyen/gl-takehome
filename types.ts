export interface NavigationLink {
  href: string;
  label: string;
}

export interface NavigationLinksProps {
  links: NavigationLink[];
}

export interface CTAButtonProps {
  href: string;
  label: string;
  variant: string;
}

export interface CTAButtonsProps {
  links: CTAButtonProps[];
}