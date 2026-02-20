'use client';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

export function Breadcrumb({
  items,
  className = '',
  separator = '/',
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={['flex items-center gap-2 text-[14px] text-[var(--black60)]', className].join(' ')}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="select-none" aria-hidden>{separator}</span>}
          {item.href ? (
            <a href={item.href} className="text-[var(--black60)] hover:text-[var(--black100)] no-underline">
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--black100)] font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
