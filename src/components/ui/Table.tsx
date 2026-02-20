'use client';

import { type HTMLAttributes } from 'react';

export function Table({
  className = '',
  ...props
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={[
          'w-full border-collapse text-[16px] text-[var(--black100)]',
          className,
        ].join(' ')}
        {...props}
      />
    </div>
  );
}

export function TableHead({
  className = '',
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={['bg-[var(--black10)] border-b border-[var(--black25)]', className].join(' ')}
      {...props}
    />
  );
}

export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

export function TableRow({
  className = '',
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={['border-b border-[var(--black20)] hover:bg-[var(--black5)]', className].join(' ')}
      {...props}
    />
  );
}

export function TableCell({
  className = '',
  header,
  ...props
}: HTMLAttributes<HTMLTableCellElement> & { header?: boolean }) {
  const Component = header ? 'th' : 'td';
  return (
    <Component
      className={[
        'px-4 py-3 text-left',
        header ? 'font-semibold text-[var(--black90)]' : '',
        className,
      ].join(' ')}
      {...props}
    />
  );
}
