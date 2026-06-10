// components/footer/FooterLinkColumn.tsx
import Link from "next/link";

// 1. Define what information the click handler will receive
interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
  // 2. Add the optional onClick prop rule
  onClick?: (link: FooterLink) => void;
}

export function FooterLinkColumn({
  title,
  links,
  onClick,
}: FooterLinkColumnProps) {
  return (
    <div>
      <h5 className="text-sm font-medium tracking-widest text-white mb-6 uppercase">
        {title}
      </h5>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                if (onClick) {
                  onClick(link);
                }
              }}
              className="text-white/70 hover:text-white text-base transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
