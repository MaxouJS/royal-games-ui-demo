import type { ReactNode } from "react";

export function ExportPage({
  group,
  title,
  lede,
  children,
}: {
  group: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <article>
      <span className="eyebrow">{group}</span>
      <h1 className="page-title">{title}</h1>
      <p className="lede">{lede}</p>
      {children}
    </article>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <h2 className="section">{children}</h2>;
}

export function Notes({ children }: { children: ReactNode }) {
  return <div className="notes">{children}</div>;
}
